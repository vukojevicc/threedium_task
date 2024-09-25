import useScreenWidthBreakpoint from "../../stores/useScreenWidthBreakpoint"

export default function ConfiguratorOptions({setActiveOption, activeOption}) {

    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    // Uncheck radio button on pressing 'X'
    if (!activeOption) {
        const radioButtons = document.querySelectorAll('input[name="suitcase-part"]')
        radioButtons.forEach(radio => {
            radio.checked = false
        })
    }

    // Utility function to animate the camera
    const animateCameraHandler = (camera) => {
        if (window.innerWidth < screenWidthBreakpoint) {
            Unlimited3D.activateModifier({ modifier: `camera_${camera}_mobile` })
        }
        else {
            Unlimited3D.activateModifier({ modifier: `camera_${camera}` })
        }
    }

    // Move the main element up a bit when the configurator pop-up is opened on mobile devices. Resetting the margin is done in the ConfiguratorPopup.js component on line 23, and in
    // Experience.js on line 48.
    const moveRootHandler = () => {
        if (window.innerWidth < 701) {
            const root = document.querySelector('#root')
            root.style.marginTop = '-90px'
        }
    }

    return (
        <div className="configurator-options" onClick={moveRootHandler}>
            <label onClick={() => {
                setActiveOption('body')
                animateCameraHandler('body')
            }}>
                <input type="radio" name="suitcase-part" value="body" /> Body
            </label>
            <label onClick={() => {
                setActiveOption('handles')
                animateCameraHandler('handle')
            }}>
                <input type="radio" name="suitcase-part" value="handles" /> Handles
            </label>
            <label onClick={() => {
                setActiveOption('corners')
                animateCameraHandler('corners')
            }}>
                <input type="radio" name="suitcase-part" value="corners" /> Corners
            </label>
            <label onClick={() => {
                setActiveOption('wheels')
                animateCameraHandler('wheels')
            }}>
                <input type="radio" name="suitcase-part" value="wheels" /> Wheels
            </label>
        </div>
    )
}