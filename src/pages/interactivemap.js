import InteractiveMap from '../components/InteractiveMap';

import Navbar from '../components/Navbar/Navbar';

const sources = [
  'https://www.google.com/maps/d/u/0/embed?mid=1Y4lAtOmQaFkmvu6loTXrsLv7Xs_QXyer&ehbc=2E312F',
  'https://www.google.com/maps/d/u/0/embed?mid=17yX5Li1xS0TttUpdPPQ689NqWKpn-z4L&ehbc=2E312F',
];



const Google = () => {
  const maps = sources.map((src) => 
    <InteractiveMap src={src}/>);
  return (
    <>
      <Navbar />
      {/* <h1 style={{ textAlign: 'center' }}>Interactive Map</h1> */}
      <h1> Interactive Maps</h1>
      <div className='interactive-map'>{maps}
      </div>
    </>
  );
};

export default Google;
