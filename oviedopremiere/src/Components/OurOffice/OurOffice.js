import React from "react";
import ImageCarousel from "./Carousel/Carousel.js";
import "./OurOffice.css";

class OurOffice extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>About Our Office</h1>
          <p>
            Oviedo Premier Dental boasts a brand new state-of-the-art dental
            facility designed to provide you and your family with a comfortable,
            quality experience. Our office utilizes up-to-date digital
            radiography, which emits 80% less radiation than older x-ray film
            models. Digital radiographs are not only safer for you and your
            family, but also enable us to take more accurate x-rays for faster
            and more efficient diagnosis. By eliminating the need to develop
            film using harsh chemicals, we are able to reduce patient waiting
            times as well as our impact on the environment. Dr. Simpson has
            developed expertise in a variety of general, family and cosmetic
            dentistry services to meet any patient’s needs. He regularly
            participates in continuing education programs in order to
            incorporate dentistry’s newest and most gentle procedures. We offer
            a variety of services, including tooth-colored fillings, crowns,
            dentures, implant restorations, veneers, Invisalign and more. For
            more information on the services we provide, see Dentist Services.
            We are looking forward to your visit! Please call 407-977-6464 to
            begin your personalized experience today.
          </p>
        </div>
        <div className="carousel">
          <ImageCarousel />
        </div>
      </div>
    );
  }
}

export default OurOffice;
