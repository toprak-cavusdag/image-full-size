import ImagePopup from './components/ImagePopUp/ImagePopup';

function App() {
  return (
    <div className='justify-center flex-col items-center w-full flex gap-16'>
      <ImagePopup
        className='w-96 h-96 cursor-pointer'
        src='https://www.bhmpics.com/downloads/1080p-pc-Wallpapers/37.wp7435296.jpg'
      />

      <ImagePopup
        className='w-96 h-96 cursor-pointer '
        src='https://www.everwallpaper.co.uk/cdn/shop/collections/3D_Wallpaper.jpg?v=1660209305'
      />

      <div className='h-screen w-full' />
      <div className='h-screen w-full' />
    </div>
  );
}
export default App;
