export default function ConfiguratorPopup({activeOption, setActiveOption}) {

    Unlimited3D.changeMaterial({ parts: ['Body_metal_base'], material: '04 CHROME SATIN CHERRY RED' })
    Unlimited3D.changeMaterial({ parts: ['Body_metal_cover'], material: '05 CHROME SATIN MIDNIGHT BLACK' })

    Unlimited3D.getAvailableMaterials((error, result) => { console.log(error, result); })
    Unlimited3D.getMaterial({ part: 'Body_metal_base' }, (error, result) => { console.log(error, result); })
    
    return (
        <>
            {
            activeOption
            &&
            <div className="configurator-popup">
                <div className="upper-section">
                    <div className="title-and-close-button">
                        <div className="title">
                            {activeOption}    
                        </div>
                        <div className="close-button" onClick={() => {setActiveOption('')}}>
                            <img src="./svgs/x-icon.svg" alt="close button"/>
                        </div>
                    </div>
                    <div className="part-title">base</div>
                    <div className="color-name-select">
                        <div className="select-color">select color</div>
                        <div className="color-name">aluminum</div>
                    </div>
                    <div className="color">

                    </div>
                </div>
                <div className="arrows">
                    <img className="left" src="./svgs/arrow.svg" alt="left arrow"/>
                    <div className="right-arrow-parent">
                        <div>Next</div>
                        <img className="right" src="./svgs/arrow.svg" alt="right arrow"/>
                    </div>
                </div>
            </div>
            }
        </>
    )
}