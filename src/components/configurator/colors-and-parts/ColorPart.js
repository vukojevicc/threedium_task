import { useEffect, useState } from "react"

export default function ColorPart({ colors, onColorChange, part }) {

    // Track the active color index to give it the active class
    const [activeIndex, setActiveIndex] = useState(null)

    // Remove active color outline on arrow click/part change
    useEffect(() => {
        setActiveIndex(null)
    }, [part])

    return (
        <div className="color-options">
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
    )
}