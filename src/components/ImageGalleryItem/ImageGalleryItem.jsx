import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map((picture, index) => {
    return (              
        <li key={index} className={css.gallery}>
             <img src={picture.webformatURL}
            alt={picture.tags} 
            onClick={() => {
            onClickImg(picture.largeImageURL);
          }}/>
</li>
    );
  });
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClickImg: PropTypes.func.isRequired,
};