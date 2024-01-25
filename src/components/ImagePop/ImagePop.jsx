import React from 'react';
import ImageShadow from '../ImageShadow/ImageShadow';
import { IoCloseSharp } from 'react-icons/io5';

const ImagePop = ({
  onClickHandler,
  imagePopup,
  image,
  onClickCloseHandler,
}) => {
  return (
    <div
      className={`fixed-center w-full h-full flex justify-center duration-300 ${
        imagePopup ? 'opacity-100 z-[35]' : ' opacity-0 -z-30'
      }`}
      onClick={() => onClickHandler(!imagePopup)}
    >
      <img src={image} alt='' className='w-full h-full object-contain z-30 ' />
      <ImageShadow />

      <IoCloseSharp
        onClick={() => onClickCloseHandler()}
        size={60}
        className='z-[31] cursor-pointer text-white px-1.5 py-2.5 bg-black rounded-full bg-opacity-15 absolute top-6 right-5'
      />
    </div>
  );
};

export default ImagePop;
