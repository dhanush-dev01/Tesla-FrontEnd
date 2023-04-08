import { NavLink } from "react-router-dom";
import desc1 from "../assets/Model3-desc1.png";
import desc2 from "../assets/Model3-desc2.jpg";
import desc3 from "../assets/Model3-desc3.png";
import desc4 from "../assets/Model3-desc4.jpg";
import { useEffect, useState } from "react";
import Loading from "./loading.component";


let Model3 = ()=>{

  const [isloading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },500)
  },[])
  return(
    
<>
{isloading?<Loading/>:<div className="row">
        <div className="col-md-12 col-lg-8" style={{marginTop:'7rem'}}>
          <div id="myCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={desc1} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={desc2} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={desc3} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={desc4} className="d-block w-100" alt="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-12" style={{maxHeight: "710px", overflowY: "scroll", marginTop:'4.5rem', textAlign:'center'}}>
            <h1>Model 3</h1>
           <h6>Model 3 Rear-Wheel Drive</h6>
           <br />

<table className="desc-tbl">

<tbody>
<tr className="thead">
  <th><h4><b>272 mi</b></h4></th>
  <th><h4><b>140 mph</b></h4></th>
  <th><h4><b>5.8 s</b></h4></th>
</tr>
</tbody>
<tbody>
<tr>
  <td>Range(EPA est.)</td>
  <td>0-60 mph*</td>
  <td>1/4 Mile</td>
</tr>
</tbody>
</table>
<br />
<h2>Key Features</h2>
<br />
<ul style={{textAlign:'left', width:'50%',marginLeft:'auto',marginRight:'auto'}}>
    <li>Deep Blue Metallic Paint</li>
    <li>18" Aero Wheels</li>
    <li>All Black Partial Premium Interior</li>
    <li>Autopilot</li>
    <li>Front and Rear Heated Seats</li>
    <li>30-Day Premium Connectivity Trial</li>
</ul>
<br/>
<h2>Enhanced Autopilot </h2>
<p>$6,000</p>
<ul style={{textAlign:'justify', width:'50%',marginLeft:'auto',marginRight:'auto'}}>
    <li>Automatic steering, acceleration and braking on highways
      <br />
      <br />
      The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.
    </li>
</ul>
<br />
<div style={{ width:'50%',marginLeft:'auto',marginRight:'auto'}}>
<h2>Warranty</h2>
<br />
<h6>Basic Vehicle Limited Warranty</h6>
<p>December 2023 / 50,000 total miles</p>

<h6>Used Vehicle Limited Warranty</h6>
<p>Additional 1 year / 10,000 miles
Begins after Basic Vehicle Limited Warranty expires
</p>
<h6>Battery and Drive Unit Limited Warranty</h6>
<p>December 2027 / unlimited mileage</p>
<br />
<NavLink to={"/demodrive"}><button className="button-desc ">Demo Drive</button></NavLink>
</div>

    
</div>
        </div>}
      
        </>
    
  );
};


export default Model3