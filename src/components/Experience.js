import { useEffect, useState } from "react";
import ConfiguratorElements from "./configurator/ConfiguratorElements";

export default function Experience() {

    // State used to toggle between configurator and animations modes
    const [configurator, setConfigurator] = useState(true)

    // Toggle annotations
    useEffect(() => {
        if (!configurator) {
            Unlimited3D.showAnnotations({
                annotationObjects: [
                  {
                    annotations: ['Open', 'Extend handle', 'Wheel spinner on']
                  }
                ]
              });
        }
        else {
            Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on'] })
        }
    }, [configurator])

    return (
        <>
            <div className="main-tab">
                <button 
                className={`${configurator ? 'active' : ''}`}
                onClick={() => {setConfigurator(true)}}
                >Configurator</button>

                <button 
                className={`${!configurator ? 'active' : ''}`}
                onClick={() => {setConfigurator(false)}}
                >Animations</button>
            </div>

            {configurator && <ConfiguratorElements/>}
        </>
    )
}