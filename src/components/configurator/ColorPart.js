import { useEffect, useRef, useState } from "react"
import useBodyColorsParts from "../../stores/useBodyColorsParts"
import useCornersColorsParts from "../../stores/useCornersColorsParts"
import useHandlesColorsParts from "../../stores/useHandlesColorsParts"
import useWheelsColorsParts from "../../stores/useWheelsColorsParts"
import useColorDependencies from "../../stores/useColorDependencies"

export default function ColorPart({ onColorChange, part, getAllParts, activeOption }) {

    // Retrieve colors and parts from the Zustand store based on the active configuration option
    let colors, parts

    const bodyColors = useBodyColorsParts(state => state.colors)
    const bodyParts = useBodyColorsParts(state => state.parts)

    const cornersColors = useCornersColorsParts(state => state.colors)
    const cornersParts = useCornersColorsParts(state => state.parts)

    const handlesColors = useHandlesColorsParts(state => state.colors)
    const handlesParts = useHandlesColorsParts(state => state.parts)

    const wheelsColors = useWheelsColorsParts(state => state.colors)
    const wheelsParts = useWheelsColorsParts(state => state.parts)

    if (activeOption === 'body') {
        colors = bodyColors
        parts = bodyParts
    }
    else if (activeOption === 'corners') {
        colors = cornersColors
        parts = cornersParts
    }
    else if (activeOption === 'handles') {
        colors = handlesColors
        parts = handlesParts
    }
    else if (activeOption === 'wheels') {
        colors = wheelsColors
        parts = wheelsParts
    }

    // Track the active color index to give it the active class
    const [activeIndex, setActiveIndex] = useState(null)

    // Retrieve the initial part and reset the color
    useEffect(() => {
        getAllParts(parts)
        onColorChange(null)
    }, [parts])

    // Remove active color outline on arrow click/part change
    useEffect(() => {
        setActiveIndex(null)
    }, [part])

    // Slider for mobile devices
    const colorOptions = useRef()

    const rightArrowHandler = () => {
        colorOptions.current.scrollBy({ left: 200, behavior: 'smooth' })
    }

    const leftArrowHandler = () => {
        colorOptions.current.scrollBy({ left: -200, behavior: 'smooth' })
    }

    // Filter colors based on dependencies
    const setInitialColor = useColorDependencies(state => state.setInitialColor)
    const initialColor = useColorDependencies(state => state.initialColor)
    const setInitialPart = useColorDependencies(state => state.setInitialPart)
    const initialPart = useColorDependencies(state => state.initialPart)
    const colorDependencies = useColorDependencies(state => state.colorDependencies)

    const initialColorHandler = (color) => {
        if (initialColor === null || initialPart === part.partName) {
            setInitialColor(color)
        }
        // Reset the materials back to aluminum
        if (initialPart === part.partName) {
            Unlimited3D.changeMaterials({ partObjects: [ {parts: ['Corners_base','Corners_cover', 'Handle_base1', 'Handle_metal-1', 'Handle_telescope-1', 'Wheels_base', 'Wheels_base_cover', 'Wheels_front_right_base', 'Wheels_front_left_base', 'Wheels_back_right_base', 'Wheels_back_left_base', 'Wheels_front_right_center', 'Wheels_front_left_center', 'Wheels_back_right_center', 'Wheels_back_left_centar'], material: 'Chrome ALUMINIUM'} ] })
            Unlimited3D.changeMaterials({ partObjects: [ {parts: ['Body_metal_base','Body_metal_cover'], material: '06 CHROME SATIN ALUMINUM'} ] })
        }
    }

    const initialPartHandler = (part) => {
        if (initialPart === null) {
            setInitialPart(part)
        }
    }

    let newColors = []

    // Actual color filter
    if (initialPart && initialColor && part) {
        if (initialPart !== part.partName) {
            colorDependencies[initialColor].forEach(color => {
                newColors.push(colors.find(object => object.shortColorName === color))
            })
            colors = newColors
        }
    }

    return (
        <div className="color-options-arrows">
            <div className="color-options" ref={colorOptions}>
                {colors.map((color, index) => {
                    return (
                    <div 
                        key={index}
                        className={`option ${activeIndex === index ? 'active' : ''}`}
                        style={{backgroundColor: color.backgroundColor}}
                        onClick={() => {
                            setActiveIndex(index)
                            onColorChange(color.shortColorName)
                            initialColorHandler(color.shortColorName)
                            initialPartHandler(part.partName)
                            Unlimited3D.changeMaterial({ parts: [`${part.partName}`], material: `${color.colorName}` }) // Change the color
                        }}
                    >
                    </div>
                    )
                })}
            </div>
            <img src="./svgs/simple-arrow.svg" alt="arrow" className="carousel-arrow right" onClick={rightArrowHandler} />
            <img src="./svgs/simple-arrow.svg" alt="arrow" className="carousel-arrow left" onClick={leftArrowHandler} />
        </div>
    )
}