import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ROYALTY FREE.001.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.002.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.003.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.004.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

);

export default ImageCarousel;


