import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZWxzaGV3YW4iLCJhIjoiY2wyMjgycjgzMWRxMjNkbXFia3FieGlxeSJ9.iVq0ZICazuKzsrQFg-SajA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div style={{}}>
      <h1
        style={{
          fontSize: 50,
          fontWeight: 600,
          marginTop: 20,
          marginLeft: 25,
          color: "gold",
          marginBottom: 12,
        }}
      >
        OUR Location{" "}
      </h1>
      <div
        ref={mapContainer}
        style={{ width: "90%", marginLeft: 50, marginRight: 50, height: 500 }}
      />
    </div>
  );
};

export default Map;
