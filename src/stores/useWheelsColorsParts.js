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
            partName: 'Wheels_base',
            shortPartName: 'base'
        },
        {
            partName: 'Wheels_base_cover',
            shortPartName: 'base cover'
        },
        {
            partName: 'Wheels_front_right_base',
            shortPartName: 'front right base'
        },
        {
            partName: 'Wheels_front_left_base',
            shortPartName: 'front left base'
        },
        {
            partName: 'Wheels_back_right_base',
            shortPartName: 'back right base'
        },
        {
            partName: 'Wheels_back_left_base',
            shortPartName: 'back left base'
        },
        {
            partName: 'Wheels_front_right_center',
            shortPartName: 'front right center'
        },
        {
            partName: 'Wheels_front_left_center',
            shortPartName: 'front left center'
        },
        {
            partName: 'Wheels_back_right_center',
            shortPartName: 'back right center'
        },
        {
            partName: 'Wheels_back_left_centar',
            shortPartName: 'back left centar'
        }
    ]
}))