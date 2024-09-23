import Experience from './components/Experience'
import './styles/main.scss'
import ReactDOM from 'react-dom/client'

// Configurator options
var options = { 
    distID: 'latest', 
    solution3DName: 'suitcase-color', 
    projectName: 'resources-for-videos-and-marketing-purposes', 
    solution3DID: '62766', containerID: 'root',

    // onCameraInteraction: function () {
    //     //       
    // },
};

// Hide annotations at the initial load
Unlimited3D.init(options, {}, () => {
    Unlimited3D.hideAnnotations({ annotations: ['Open', 'Extend handle', 'Wheel spinner on'] })  
})

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Experience/>)