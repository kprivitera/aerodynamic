import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/ROYALTY FREE.001.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.002.jpeg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.003.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ROYALTY FREE.004.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

);

export default ImageCarousel;


