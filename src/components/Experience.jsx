import { useEffect, useState } from "react";
import ConfiguratorElements from "./configurator/ConfiguratorElements";
import useScreenWidthBreakpoint from "../stores/useScreenWidthBreakpoint";
import ResponsiveCamera from "./ResponsiveCamera";
import Unlimited3DConfiguration from "./Unlimited3DConfiguration";

export default function Experience() {

    // State used to toggle between configurator and animations modes
    const [configurator, setConfigurator] = useState(true)
    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    // Toggle annotations
    useEffect(() => {
        if (!configurator) {
            Unlimited3D.showAnnotations({
                annotationObjects: [
                  {
                    annotations: ['Open', 'Extend handle', 'Wheel spinner on']
                  }
                ]
              })
        }
        else {
            Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on', 'Close', 'Retract handle', 'Wheel spinner off'] }, () => {
                Unlimited3D.activateModifier({ modifier: "retract_handle" })
                Unlimited3D.activateModifier({ modifier: "wheel_spinner_off" })
                Unlimited3D.activateModifier({ modifier: "close" })
            })
        }

        if (window.innerWidth < screenWidthBreakpoint) {
            // Using this workaround because the modifier doesn't apply in this case for some reason.
            setTimeout(() => {
                Unlimited3D.activateModifier({ modifier: "default_camera_mobile" })
            }, 10)
        }
        else {
            // Using this workaround because the modifier doesn't apply in this case for some reason.
            setTimeout(() => {
                Unlimited3D.activateModifier({ modifier: "default_camera_desktop" })
            }, 10)
        }

        // Reset the margin of the root element for mobile devices. This margin is also moved in the ConfiguratorOptions.js on line 29, and in ConfiguratorPopup.js on line 23.
        const root = document.querySelector('#root')
        root.style.marginTop = '0'

    }, [configurator])

    return (
        <>
            <Unlimited3DConfiguration/>
            <div className="main-tab">
                <button 
                className={`${configurator ? 'active' : ''}`}
                onClick={() => {
                    setConfigurator(true)
                }}
                >Configurator</button>

                <button 
                className={`${!configurator ? 'active' : ''}`}
                onClick={() => {setConfigurator(false)}}
                >Animations</button>
            </div>

            {configurator && <ConfiguratorElements/>}
            <ResponsiveCamera/>
        </>
    )
}