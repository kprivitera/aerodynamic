import { Carousel } from 'react-bootstrap';
import { map } from 'lodash/fp';

import { ImageObj } from '../../interfaces';
import styles from './styles.module.css';

interface Slide {
  description?: string;
  imageObject: ImageObj;
  title?: string;
};

interface ImageCarouselProps {
  slides: Slide[];
};

const ImageCarousel = ({ slides }:ImageCarouselProps ) => (
  <Carousel>
    {map(({ description, title, imageObject }) => {
      return (
        <Carousel.Item key={imageObject.src}>
          <img className="d-block w-100" src={imageObject.src} />
        </Carousel.Item>
      )
    })(slides)}
  </Carousel>
);

export default ImageCarousel;

