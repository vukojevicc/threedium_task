import Experience from './components/Experience'
import './styles/main.scss'
import ReactDOM from 'react-dom/client'

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
                Unlimited3D.activateModifier({ modifier: "open" })
                hideDefaultAnnotations('Close')
            }
            else if (clickedObjects[0].name === 'Close') {
                Unlimited3D.activateModifier({ modifier: "close" })
                showDefaultAnnotations('Close')
            }
            // Handle
            else if (clickedObjects[0].name === 'Extend handle') {
                Unlimited3D.activateModifier({ modifier: "extend_handle" })
                hideDefaultAnnotations('Retract handle')
            }
            else if (clickedObjects[0].name === 'Retract handle') {
                Unlimited3D.activateModifier({ modifier: "retract_handle" })
                showDefaultAnnotations('Retract handle')
            }
            // Wheel spinner
            else if (clickedObjects[0].name === 'Wheel spinner on') {
                Unlimited3D.activateModifier({ modifier: "wheel_spinner_on" })
                hideDefaultAnnotations('Wheel spinner off')
            }
            else if (clickedObjects[0].name === 'Wheel spinner off') {
                Unlimited3D.activateModifier({ modifier: "wheel_spinner_off" })
                showDefaultAnnotations('Wheel spinner off')
            }
        }
    }
};

// Hide annotations at the initial load
Unlimited3D.init(options, {}, () => {
    Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on'] })  
})

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Experience/>)