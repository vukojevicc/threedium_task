import { create } from "zustand"

export default create(() => ({
    colors: [
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
    ],
    parts: [
        {
            partName: 'Body_metal_base',
            shortPartName: 'base'
        },
        {
            partName: 'Body_metal_cover',
            shortPartName: 'cover'
        }
    ]
}))