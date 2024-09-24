import { useEffect } from "react"
import ColorPart from "./ColorPart"

export default function BodyColorPart({onColorChange, getAllParts, part}) {

    const colors = [
        {
            colorName: 'Chrome ALUMINIUM',
            shortColorName: 'aluminum',
            backgroundColor: '#bfbfc2'
        },
        {
            colorName: 'Chrome MIDNIGHT BLACK',
            shortColorName: 'black',
            backgroundColor: '#494949'
        },
        {
            colorName: 'Chrome CHERRY RED',
            shortColorName: 'red',
            backgroundColor: '#c2193c'
        },
        {
            colorName: 'Chrome ROYAL BLUE',
            shortColorName: 'blue',
            backgroundColor: '#096fbc'
        },
        {
            colorName: 'Chrome SATIN BURNT ORANGE',
            shortColorName: 'orange',
            backgroundColor: '#d66121'
        },
        {
            colorName: 'Chrome SATIN OLIVE GREEN',
            shortColorName: 'green',
            backgroundColor: '#727f67'
        }
    ]

    const parts = [
        {
            partName: 'Handle_base1',
            shortPartName: 'base'
        },
        {
            partName: 'Handle_metal-1',
            shortPartName: 'metal'
        },
        {
            partName: 'Handle_telescope-1',
            shortPartName: 'telescope'
        }
    ]

    // Retrieve the initial part and reset the color
    useEffect(() => {
        getAllParts(parts)
        onColorChange(null)
    }, [])

    return (
        <>
            <ColorPart 
                colors={colors} 
                onColorChange={onColorChange} 
                part={part} 
            />
        </>
    )
}