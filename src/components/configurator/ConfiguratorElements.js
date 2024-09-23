import ConfiguratorOptions from "./ConfiguratorOptions";
import ConfiguratorPopup from "./ConfiguratorPopup";
import { useState } from "react"

export default function ConfiguratorElements() {

    const [activeOption, setActiveOption] = useState('')

    return (
        <>
            <ConfiguratorOptions activeOption={activeOption} setActiveOption={setActiveOption}/>
            <ConfiguratorPopup activeOption={activeOption} setActiveOption={setActiveOption}/>
        </>
    )
}