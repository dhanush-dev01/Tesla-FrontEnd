import DemoDriveForm from "./demodriveform.component"
import Footer from "./footer.component"
import Model3 from "./model3.component"
import ModelS from "./models.component"
import ModelX from "./modelx.component"
import ModelY from "./modely.component"
import NavBar from "./navbar.component"


let Routing=()=>{

    const currentURL = window.location.pathname

    return(
        <>
        <NavBar/>
        {currentURL==='/modelS'&&<ModelS/>}
        {currentURL==='/modelX'&&<ModelX/>}
        {currentURL==='/model3'&&<Model3/>}
        {currentURL==='/modelY'&&<ModelY/>}
        {currentURL==='/demodrive'&&<DemoDriveForm/>}
        <Footer/>
        </>
    )
}

export default Routing