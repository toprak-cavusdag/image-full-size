import React, { useState } from 'react';
import ImagePop from '../ImagePop/ImagePop';

const ImagePopup = ({ src, className }) => {
  const [imagePopup, setImagePopup] = useState(false);

  const imagePopupHandler = () => {
    setImagePopup(!imagePopup);
  };

  const imagePopupCloseHandler = () => {
    setImagePopup(false);
  };

  return (
    <div className={className}>
      <img
        onClick={() => imagePopupHandler()}
        src={src}
        alt=''
        className='w-full h-full object-cover'
      />

      <ImagePop
        image={src}
        imagePopup={imagePopup}
        onClickHandler={imagePopupHandler}
        onClickCloseHandler={imagePopupCloseHandler}
      />
    </div>
  );
};
export default ImagePopup;
