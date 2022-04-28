import Google from '../components/Google';
import Navbar from '../components/Navbar/Navbar';
import styles from '../../styles/Map.module.css';

const Maps = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}> Interactive Maps</h1>
      <div className='interactive-maps'>
        <Google />
      </div>
    </>
  );
};

export default Maps;
