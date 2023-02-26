import PropTypes from "prop-types";
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
