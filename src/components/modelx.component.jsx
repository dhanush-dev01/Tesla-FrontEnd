import { NavLink } from "react-router-dom";
import desc1 from "../assets/ModelX-desc1.jpg";
import desc2 from "../assets/ModelX-desc2.jpg";
import desc3 from "../assets/ModelX-desc3.jpg";
import desc4 from "../assets/ModelX-desc4.png";
import Footer from "./footer.component";
import NavBar from "./navbar.component";

let ModelX = ()=>{
  return(
    
<>
<NavBar/>
      <div className="row">
        <div className="col-md-12 col-lg-8" style={{marginTop:'4rem'}}>
          <div id="myCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={desc1} className="d-block w-100" alt="Your Image 1" />
              </div>
              <div className="carousel-item">
                <img src={desc2} className="d-block w-100" alt="Your Image 2" />
              </div>
              <div className="carousel-item">
                <img src={desc3} className="d-block w-100" alt="Your Image 3" />
              </div>
              <div className="carousel-item">
                <img src={desc4} className="d-block w-100" alt="Your Image 3" />
              </div>
              {/* <div className="carousel-item">
                <img src={modely} className="d-block w-100" alt="Your Image 4" />
              </div> */}
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
            <h1>Model X</h1>
           <h6>Model X Long Range Plus All Wheel Drive</h6>
           <br />
           {/* <table>
            <tr>
              <td>405mi</td>
              <td>155mph</td>
              <td>3.1sec</td>
            </tr>
           </table> */}

<table className="desc-tbl">

<tr className="thead">
  <th><h4><b>333 mi</b></h4></th>
  <th><h4><b>2.5s</b></h4></th>
  <th><h4><b>9.9s</b></h4></th>
  
</tr>
<tr>
  <td>Range(EPA est.)</td>
  <td>0-60 mph*</td>
  <td>1/4 Mile</td>
</tr>
</table>
<br />
<h2>Key Features</h2>
<br />
<ul style={{textAlign:'left', width:'50%',marginLeft:'auto',marginRight:'auto'}}>
    <li>Pearl White Paint</li>
    <li>20" Silver Wheels</li>
    <li>All Black Premium Interior with Figured Ash Wood Décor</li>
    <li>Autopilot</li>
    <li>Five Seat Interior</li>
    <li>Tow Package</li>
    <li>Infotainment Upgrade</li>
    <li>30-Day Premium Connectivity Trial</li>
</ul>
<br/>
<h2> Basic Autopilot</h2>
<p>Included</p>
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
<text>Additional 1 year / 10,000 miles</text>
<text>Begins after Basic Vehicle Limited Warranty expires</text>
<br />
<br />
<h6>Battery and Drive Unit Limited Warranty</h6>
<p>December 2027 / unlimited mileage</p>
<br />
<NavLink to={"/demodrive"}><button className="button-desc ">Demo Drive</button></NavLink>
</div>

    
</div>
        </div>
    <Footer/>
    </>
  );
};


export default ModelX