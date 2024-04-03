import './Rotation.css';
import yasuoLogo from '../img/yasuoLogo.jpeg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

function Rotation() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  
  return (
    <div  className="Rotation">
      <h2>Free champion Rotation</h2>
      <Slider {...settings} className='rotationSlider'>
        <div>
            <h3>Yasuo1</h3>
            <img src={yasuoLogo} alt="Champion" />
        </div>
        <div>
            <h3>Yasuo2</h3>
            <img src={yasuoLogo} alt="Champion" />
        </div>
        <div>
            <h3>Yasuo3</h3>
            <img src={yasuoLogo} alt="Champion" />
        </div>
        <div>
            <h3>Yasuo4</h3>
            <img src={yasuoLogo} alt="Champion" />
        </div>
      </Slider>
    </div>
  );
}

export default Rotation;
