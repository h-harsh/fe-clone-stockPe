import headerImg from "../../resources/headerImg.png";
import "./main.css";
import "./main.responsive.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Main = () => {
  return (
    <div className="main-header">
      <div className="main-header-p1">
        <div className="container-slides">
          <Carousel showArrows={false} showStatus={false}>
            <div className="slides">
              <h1>Open a StockPe Learning Account</h1>
              <p>
                Instantly buy or sell stock token with just a click of button
              </p>
            </div>

            <div className="slides">
              <h1>Learn Stock trading and Invest Like Pro</h1>
              <p>
                Learn stock trading and invest simultaneously by practically
                learning
              </p>
            </div>

            <div className="slides">
              <h1>Learn and Compete with your Peers</h1>
              <p>
                Learn togther with your peers, compete and get exciting returns
              </p>
            </div>
          </Carousel>
        </div>
        <div className="main-header-p1-inner2">
          <input className="input-number" type="number" placeholder="Phone Number" />
          <button className="btn-invite" >Get Invite</button>
        </div>
      </div>
      <div className="main-header-p2">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};
