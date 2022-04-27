import React, { useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styles from "./MyMap.module.css";
// import 'leaflet/dist/leaflet.css';

const MyMap = ({ center, draggable, onDragMarker, location }) => {
  const markerRef = useRef(null);

  const dragHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          onDragMarker(marker.getLatLng());
        }
      },
    }),
    []
  );

  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [40, 40]
    },
  });

  var customIcon = new LeafIcon({
    iconUrl:
      '/Users/hayleyrobertson/Development/2022/sebago-markets/mapeg/next-leaflet-starter/static/icons/atrichoke-32px.png',
  });

  return (
    <MapContainer
      center={[center.lng, center.lat]}
      zoom={13}
      scroolWheelZoom={false}
      className={styles.container}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        icon={customIcon}
        position={[
          location && location.lng ? location.lng : center.lng,
          location && location.lat ? location.lat : center.lat,
        ]}
        draggable={draggable}
        eventHandlers={dragHandlers}
        ref={markerRef}
      >
        <Popup className={styles.popup}>{"my title"}</Popup>
      </Marker>
    </MapContainer>
  );
};




// function MyMap() {
//   const position = [43.8537, -70.5621];
//   return (
//     <Map
//       className="map"
//       center={position}
//       zoom={12}
//       // style={{ width: '100%' }}
//     >
//       <TileLayer
//         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//     </Map>
//   );
// }

export default MyMap;