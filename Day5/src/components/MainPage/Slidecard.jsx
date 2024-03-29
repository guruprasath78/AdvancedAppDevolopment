import React from "react"
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  const navigate = useNavigate();
  const handleVisitCollections = () => {
    // Navigate to the 'valentine' page
    navigate('/valentine');
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary' onClick={handleVisitCollections}>Visit Collections</button>
                </div>
                <div className='right' style={{backgroundImage:`url('${value.cover}')`,height:"400px",width:"100%",backgroundSize:"cover"}}>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
