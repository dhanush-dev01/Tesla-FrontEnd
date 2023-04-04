import { useEffect, useState } from "react"
import Footer from "./footer.component"
import Loading from "./loading.component"
import ModelX from "./modelx.component"
import NavBar from "./navbar.component"
import SlideShow from "./slideshow.component"


let HomePage=()=>{
    const [isloading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
    return(
        <>
        <NavBar/>
{isloading?<Loading/>:<SlideShow/>}
        {/* <SlideShow/> */}
        <Footer/>
        </>
    )
}

export default HomePage