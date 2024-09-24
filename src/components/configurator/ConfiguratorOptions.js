export default function ConfiguratorOptions({setActiveOption, activeOption}) {

    // Uncheck radio button on pressing 'X'
    if (!activeOption) {
        const radioButtons = document.querySelectorAll('input[name="suitcase-part"]')
        radioButtons.forEach(radio => {
            radio.checked = false
        })
    }

    // Utility function to change the camera
    const changeTheCamera = (camera) => {
        Unlimited3D.activateModifier({ modifier: `${camera}` }) // Change the camera
    }

    return (
        <div className="configurator-options">
            <label onClick={() => {
                setActiveOption('body')
                changeTheCamera('camera_body')
            }}>
                <input type="radio" name="suitcase-part" value="body" /> Body
            </label>
            <label onClick={() => {
                setActiveOption('handles')
                changeTheCamera('camera_handle')
            }}>
                <input type="radio" name="suitcase-part" value="handles" /> Handles
            </label>
            <label onClick={() => {
                setActiveOption('corners')
                changeTheCamera('camera_corners')
            }}>
                <input type="radio" name="suitcase-part" value="corners" /> Corners
            </label>
            <label onClick={() => {
                setActiveOption('wheels')
                changeTheCamera('camera_wheels')
            }}>
                <input type="radio" name="suitcase-part" value="wheels" /> Wheels
            </label>
        </div>
    )
}