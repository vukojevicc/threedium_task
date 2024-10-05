import { create } from "zustand"

export default create(() => ({
    colors: [
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
    ],
    parts: [
        {
            partName: 'Corners_base',
            shortPartName: 'base'
        },
        {
            partName: 'Corners_cover',
            shortPartName: 'cover'
        }
    ]
}))