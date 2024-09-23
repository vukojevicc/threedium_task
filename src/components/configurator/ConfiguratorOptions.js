export default function ConfiguratorOptions({setActiveOption, activeOption}) {

    // Uncheck radio button on pressing 'X'
    if (!activeOption) {
        const radioButtons = document.querySelectorAll('input[name="suitcase-part"]')
        radioButtons.forEach(radio => {
            radio.checked = false
        })
    }

    return (
        <div className="configurator-options">
            <label onClick={() => {setActiveOption('body')}}>
                <input type="radio" name="suitcase-part" value="body" /> Body
            </label>
            <label onClick={() => {setActiveOption('handles')}}>
                <input type="radio" name="suitcase-part" value="handles" /> Handles
            </label>
            <label onClick={() => {setActiveOption('corners')}}>
                <input type="radio" name="suitcase-part" value="corners" /> Corners
            </label>
            <label onClick={() => {setActiveOption('wheels')}}>
                <input type="radio" name="suitcase-part" value="wheels" /> Wheels
            </label>
        </div>
    )
}