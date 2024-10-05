import useScreenWidthBreakpoint from "../stores/useScreenWidthBreakpoint";

export default function ResponsiveCamera() {

    const screenWidthBreakpoint = useScreenWidthBreakpoint(state => state.screenWidthBreakpoint)

    window.addEventListener('resize', () => {
        if (window.innerWidth < screenWidthBreakpoint) {
            Unlimited3D.isActiveCamera({ name: 'Camera Mobile' }, (error, result) => { 
                if (!result) {
                    Unlimited3D.activateCamera({ name: 'Camera Mobile' })
                }
            })
        }
        else {
            Unlimited3D.isActiveCamera({ name: 'Camera Desktop' }, (error, result) => { 
                if (!result) {
                    Unlimited3D.activateCamera({ name: 'Camera Desktop' })
                }
            })
        }
    })

    return null
}