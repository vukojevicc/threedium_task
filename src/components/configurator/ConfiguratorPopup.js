import { useEffect, useState } from "react"
import BodyColorPart from "./colors-and-parts/BodyColorPart"
import HandlesColorPart from "./colors-and-parts/HandlesColorPart"
import CornersColorPart from './colors-and-parts/CornersColorPart'
import WheelsColorPart from './colors-and-parts/WheelsColorPart'
import useScreenWidthBreakpoint from "../../stores/useScreenWidthBreakpoint"

export default function ConfiguratorPopup({activeOption, setActiveOption}) {

    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    // Animate the camera to a default position on pressing 'X'
    const clickXHandler = () => {
        if (window.innerWidth < screenWidthBreakpoint) {
            Unlimited3D.activateModifier({ modifier: "default_camera_mobile" })
        }
        else {
            Unlimited3D.activateModifier({ modifier: "default_camera_desktop" })
        }
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

    // loop through parts
    const nextPartHandler = () => {
        setPartIndex(previousPartIndex => {

            if (previousPartIndex > parts.length - 2) {
                return 0
            }

            return previousPartIndex + 1 
        })

        // Reset color name
        setColorName(null)
    }

    const previousPartHandler = () => {
        setPartIndex(previousPartIndex => {

            if (previousPartIndex === 0) {
                return parts.length - 1
            }

            return previousPartIndex - 1 
        })

        // Reset color name
        setColorName(null)
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
                        {activeOption === 'body' && <BodyColorPart onColorChange={colorNameHandler} getAllParts={partsHandler} part={parts && parts[partIndex]}/>}
                        {activeOption === 'handles' && <HandlesColorPart onColorChange={colorNameHandler} getAllParts={partsHandler} part={parts && parts[partIndex]}/>}
                        {activeOption === 'corners' && <CornersColorPart onColorChange={colorNameHandler} getAllParts={partsHandler} part={parts && parts[partIndex]}/>}
                        {activeOption === 'wheels' && <WheelsColorPart onColorChange={colorNameHandler} getAllParts={partsHandler} part={parts && parts[partIndex]}/>}
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