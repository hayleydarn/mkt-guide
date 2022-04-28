import Google from '../components/Google';
import Navbar from '../components/Navbar/Navbar';

const Maps = () => {
  return (
    <>
      <Navbar />
      <h1 className='page-title'> Interactive Maps</h1>
      <div className='interactive-maps'>
        <Google />
      </div>
    </>
  );
};

export default Maps;
