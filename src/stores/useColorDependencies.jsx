import { create } from "zustand"

export default create((set) => {
    const colorDependencies = {
        blue: ['blue', 'black', 'aluminum'],
        green: ['green', 'black', 'aluminum'],
        orange: ['orange', 'black', 'aluminum'],
        red: ['red', 'black', 'aluminum'],
        black: ['black', 'aluminum'],
        aluminum: ['black', 'aluminum']
    }

    return {
        colorDependencies,
        initialPart: null,
        initialColor: null,
        setInitialPart: (part) => {
            set(
                () => {
                    return { initialPart: part }
                }
            )
        },
        setInitialColor: (color) => {
            set(
                () => {
                    return { initialColor: color }
                }
            )
        }
    }
})