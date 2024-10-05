import useScreenWidthBreakpoint from "../stores/useScreenWidthBreakpoint"
import React from "react"

const Unlimited3DConfiguration = () => {

    // Retrieving screen width to set the camera on the initial load
    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    // Utility functions for toggling annotiations
    const showDefaultAnnotations = (annotationToHide) => {
        Unlimited3D.hideAnnotations({ annotations: [annotationToHide] }, () => {
            Unlimited3D.showAnnotations({
                annotationObjects: [
                {
                    annotations: ['Open', 'Extend handle', 'Wheel spinner on']
                }
                ]
            })
        })
    }

    const hideDefaultAnnotations = (annotationToShow) => {
        Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on'] }, () => {
            Unlimited3D.showAnnotations({
                annotationObjects: [
                {
                    annotations: [annotationToShow]
                }
                ]
            })
        })
    }

    // Reset camera to default
    const defaultCameraHandler = () => {
        if (window.innerWidth < screenWidthBreakpoint) {
            Unlimited3D.activateModifier({ modifier: "default_camera_mobile" })
        }
        else {
            Unlimited3D.activateModifier({ modifier: "default_camera_desktop" })
        }
    }

    // Configurator options
    var options = { 
        distID: 'latest', 
        solution3DName: 'suitcase-color', 
        projectName: 'resources-for-videos-and-marketing-purposes', 
        solution3DID: '62766', containerID: 'root',

        // Animations
        onPointerClick: (clickedObjects) => {
            if (clickedObjects.length > 0) {
                // Open-close suitcase
                if (clickedObjects[0].name === 'Open') {
                    Unlimited3D.activateModifier({ modifier: "open" }, () => {
                        hideDefaultAnnotations('Close')
                    })
                }
                else if (clickedObjects[0].name === 'Close') {
                    Unlimited3D.activateModifier({ modifier: "close" }, () => {
                        showDefaultAnnotations('Close')
                        defaultCameraHandler()
                    })
                }
                // Handle
                else if (clickedObjects[0].name === 'Extend handle') {
                    Unlimited3D.activateModifier({ modifier: "extend_handle" }, () => {
                        hideDefaultAnnotations('Retract handle')
                    })
                }
                // The label Retract handle can't be displayed for some reason. It works well, only the label is missing.
                // All other anotations work fine so I guess this is a bug. 
                else if (clickedObjects[0].name === 'Retract handle') {
                    Unlimited3D.activateModifier({ modifier: "retract_handle" }, () => {
                        showDefaultAnnotations('Retract handle')
                        defaultCameraHandler()
                    })
                }
                // Wheel spinner
                else if (clickedObjects[0].name === 'Wheel spinner on') {
                    Unlimited3D.activateModifier({ modifier: "wheel_spinner_on" }, () => {
                        hideDefaultAnnotations('Wheel spinner off')
                    })
                }
                else if (clickedObjects[0].name === 'Wheel spinner off') {
                    Unlimited3D.activateModifier({ modifier: "wheel_spinner_off" }, () => {
                        showDefaultAnnotations('Wheel spinner off')
                        defaultCameraHandler()
                    })
                }
            }
        }
    };

    // Hide annotations and set the camera on the initial load
    Unlimited3D.init(options, {}, () => {
        
        Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on'] })
        
        if (window.innerWidth < screenWidthBreakpoint) {
            // Using setTimeout as a workaround because there is a bug where drag is disabled for some reason.
            setTimeout(() => {
                Unlimited3D.activateCamera({ name: 'Camera Mobile' })
            }, 10)
        }
        else {
            setTimeout(() => {
                Unlimited3D.activateCamera({ name: 'Camera Desktop' })
            }, 10)
        }
    })

    return null
}

export default React.memo(Unlimited3DConfiguration)