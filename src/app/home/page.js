'use client'
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Home() {
  const mapRef = useRef();
  const [searchAddress, setSearchAddress] = useState("");
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAyim66JOKCkBCBbebk0P_JEaj395fUIaE", // Replace with your Google Maps API key
      version: "weekly",
    });

    loader
      .load()
      .then((google) => {
        const initialMap = new google.maps.Map(mapRef.current, {
          center: { lat: 40.785091, lng: -73.968285 },
          zoom: 8,
        });
        setMap(initialMap);
      })
      .catch((err) => {
        // Handle any errors
        console.error(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  
    if (map) {
      // Use Google Geocoding service to convert address to coordinates
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: searchAddress }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          if (location && typeof location.lat === "function" && typeof location.lng === "function") {
            // Make sure location.lat and location.lng are functions
            map.setCenter(location);
            map.setZoom(15); // You can adjust the zoom level as needed
          } else {
            console.error("Invalid coordinates received");
          }
        } else {
          // Handle address not found
          console.error("Address not found");
        }
      });
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter an address"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "50%", height: "50vh", margin: "0 auto" }}
      />
    </div>
  );
}
