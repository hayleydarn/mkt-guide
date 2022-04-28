import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const MyMapNoSSR = dynamic(() => import('../components/Map/MyMap'), {
  ssr: false,
});

const Map = () => {
  const [location, setLocation] = useState ({lng:43.7317, lat:-70.7109 });
  
  return (
    <>
    <Navbar></Navbar>
      <div style={{ position: 'fixed' } }>
        <MyMapNoSSR
          center={location}
          location={location}
          draggable={false}
          title="My Map"
          onDragMarker={(e) => {
            console.log("e", e);
            let loc = {lat: e.lng, lng: e.lat};
            setLocation(loc);
          }}
        />
      </div>
    </>
  );
};

export default Map
