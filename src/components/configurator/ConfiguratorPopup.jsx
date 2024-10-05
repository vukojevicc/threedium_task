import { useEffect, useState } from "react"
import useScreenWidthBreakpoint from "../../stores/useScreenWidthBreakpoint"
import ColorPart from "./ColorPart"
import useBodyColorsParts from "../../stores/useBodyColorsParts"
import useCornersColorsParts from "../../stores/useCornersColorsParts"
import useHandlesColorsParts from "../../stores/useHandlesColorsParts"
import useWheelsColorsParts from "../../stores/useWheelsColorsParts"

export default function ConfiguratorPopup({activeOption, setActiveOption}) {

    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    const bodyColors = useBodyColorsParts(state => state.colors)
    const cornersColors = useCornersColorsParts(state => state.colors)
    const handlesColors = useHandlesColorsParts(state => state.colors)
    const wheelsColors = useWheelsColorsParts(state => state.colors)

    // Animate the camera to a default position by pressing 'X' and reset the root margin for mobile devices. This margin is moved in the ConfiguratorOptions.js component on line 29,
    // and in Experience.js on line 48.
    const clickXHandler = () => {
        if (window.innerWidth < screenWidthBreakpoint) {
            Unlimited3D.activateModifier({ modifier: "default_camera_mobile" })
        }
        else {
            Unlimited3D.activateModifier({ modifier: "default_camera_desktop" })
        }

        const root = document.querySelector('#root')
        root.style.marginTop = '0'
    }

    // Get the color name
    const [colorName, setColorName] = useState(null)

    const colorNameHandler = (value) => {
        setColorName(value)
    }

    // Get all parts
    const [parts, setParts] = useState(null)

    const partsHandler = (value) => {
        setParts(value)
    }

    // Set the initial part
    const [partIndex, setPartIndex] = useState(0)

    // Get initial color
    const initialColorHandler = () => {
        if (parts) {
            Unlimited3D.getMaterial({ part: `${parts[partIndex].partName}` }, (error, result) => {

                const getColor = (colorSet) => {
                    colorSet.forEach(color => {
                        if (color.colorName === result) {
                            setColorName(color.shortColorName)
                            return
                        }
                    })
                }

                if (parts[partIndex].partName.includes('Body')) {
                    getColor(bodyColors)
                }
                else if (parts[partIndex].partName.includes('Corners')) {
                    getColor(cornersColors)
                }
                else if (parts[partIndex].partName.includes('Handle')) {
                    getColor(handlesColors)
                }
                else if (parts[partIndex].partName.includes('Wheels')) {
                    getColor(wheelsColors)
                }
            })
        }
    }

    useEffect(() => {
        initialColorHandler()
    }, [partIndex, parts, activeOption])

    // loop through parts
    const nextPartHandler = () => {
        setPartIndex(previousPartIndex => {

            if (previousPartIndex > parts.length - 2) {
                return 0
            }

            return previousPartIndex + 1 
        })

        initialColorHandler()
    }

    const previousPartHandler = () => {
        setPartIndex(previousPartIndex => {

            if (previousPartIndex === 0) {
                return parts.length - 1
            }

            return previousPartIndex - 1 
        })

        initialColorHandler()
    }

    // Reset part index when the active option is changed
    useEffect(() => {
        setPartIndex(0)
    }, [activeOption])
    
    return (
        <>
            {
            activeOption
            &&
            <div className="configurator-popup">
                <div className="upper-section">
                    <div className="title-and-close-button">
                        <div className="title">
                            {activeOption}    
                        </div>
                        <div className="close-button" onClick={() => {
                                setActiveOption('')
                                clickXHandler()
                            }}>
                            <img src="./svgs/x-icon.svg" alt="close button"/>
                        </div>
                    </div>
                    <div className="part-title">{parts && parts[partIndex].shortPartName}</div>
                    <div className="color-name-select">
                        <div className="select-color">select color</div>
                        <div className="color-name">{colorName}</div>
                    </div>
                    <div className="color">
                        <ColorPart 
                            activeOption={activeOption} 
                            onColorChange={colorNameHandler} 
                            getAllParts={partsHandler} 
                            part={parts && parts[partIndex]}
                            colorName={colorName}
                        />
                    </div>
                </div>
                <div className="arrows">
                    <img className="left" src="./svgs/arrow.svg" alt="left arrow" onClick={previousPartHandler}/>
                    <div className="right-arrow-parent" onClick={nextPartHandler}>
                        <div>Next</div>
                        <img className="right" src="./svgs/arrow.svg" alt="right arrow"/>
                    </div>
                </div>
            </div>
            }
        </>
    )
}