import { useEffect } from "react"
import ColorPart from "./ColorPart"

export default function BodyColorPart({onColorChange, getAllParts, part}) {

    const colors = [
        {
            colorName: '01 CHROME SATIN ROYAL BLUE',
            shortColorName: 'blue',
            backgroundColor: '#2a73bf'
        },
        {
            colorName: '02 CHROME SATIN OLIVE GREEN',
            shortColorName: 'green',
            backgroundColor: '#707c66'
        },
        {
            colorName: '03 CHROME SATIN BURNT ORANGE',
            shortColorName: 'orange',
            backgroundColor: '#ec6c35'
        },
        {
            colorName: '04 CHROME SATIN CHERRY RED',
            shortColorName: 'red',
            backgroundColor: '#b51c37'
        },
        {
            colorName: '05 CHROME SATIN MIDNIGHT BLACK',
            shortColorName: 'black',
            backgroundColor: '#4e4e4f'
        },
        {
            colorName: '06 CHROME SATIN ALUMINUM',
            shortColorName: 'aluminum',
            backgroundColor: '#b5b5b7'
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

    // Retrieve the initial part
    useEffect(() => {
        getAllParts(parts)
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