import React from "react";
import ExamRoom1 from "../../../Images/ExamRoom1.jpg";
import ExamRoom2 from "../../../Images/ExamRoom2.jpg";
import Exterior from "../../../Images/Exterior.jpg";
import FrontDoor from "../../../Images/FrontDoor.jpg";
import Hygiene from "../../../Images/Hygiene.jpg";
import Lobby from "../../../Images/Lobby.jpg";
import Reception1 from "../../../Images/Reception1.jpg";
import Reception3 from "../../../Images/Reception3.jpg";
import Restrooms from "../../../Images/Restrooms.jpg";
import TreatmentHallway from "../../../Images/TreatmentHallway.jpg";
import XRay from "../../../Images/XRay.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = require("react-responsive-carousel").Carousel;

class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={Exterior} alt="Exterior" />
        </div>
        <div>
          <img src={Reception1} alt="Reception Desk" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Lobby} alt="Seating Area" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={Restrooms} alt="Restrooms and waterfountain" />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={TreatmentHallway} alt="Treatment Hallway" />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={ExamRoom2} alt="Exam Room" />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={XRay} alt="XRay Unit" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;
