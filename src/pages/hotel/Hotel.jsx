import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport Taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi cumque animi facilis ullam, accusamus ab enim sequi quo
                blanditiis nemo quibusdam deserunt iusto. Eaque eum natus
                tempore tempora, voluptates quas.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
