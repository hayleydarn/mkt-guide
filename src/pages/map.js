import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const MyMapNoSSR = dynamic(() => import('../components/Map/MyMap'), {
  ssr: false,
});

const Map = () => {
  const [location, setLocation] = useState ({lng:43.8537, lat:-70.5621 });
  
  return (
    <div>
      <MyMapNoSSR
        center={location}
        location={location}
        draggable={true}
        title="My Map"
        onDragMarker={(e) => {
          console.log("e", e);
          let loc = {lat: e.lng, lng: e.lat};
          setLocation(loc);
        }}
      />
      {"lng: " + location.lng}
      <br />
      {" lat: " + location.lat}
    </div>
  );
};

export default Map
