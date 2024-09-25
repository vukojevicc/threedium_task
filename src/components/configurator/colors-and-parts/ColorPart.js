import { useEffect, useRef, useState } from "react"

export default function ColorPart({ colors, onColorChange, part }) {

    // Track the active color index to give it the active class
    const [activeIndex, setActiveIndex] = useState(null)
    const colorOptions = useRef()

    // Remove active color outline on arrow click/part change
    useEffect(() => {
        setActiveIndex(null)
    }, [part])

    // Slider
    const rightArrowHandler = () => {
        colorOptions.current.scrollBy({ left: 200, behavior: 'smooth' })
    }

    const leftArrowHandler = () => {
        colorOptions.current.scrollBy({ left: -200, behavior: 'smooth' })
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