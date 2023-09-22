'use client'
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Home() {
  const mapRef = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAyim66JOKCkBCBbebk0P_JEaj395fUIaE",
      version: "weekly",
    });

    loader
      .load()
      .then((google) => {
        new google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      })
      .catch((err) => {
        // Handle any errors
        console.error(err);
      });
      // get lat, long
      // https://developers.google.com/maps/documentation/routes/understand-route-response
      // route is the polyline - going to want to show and manipulate the polyline on the screen?
      // stretch - want physically the closest or the shortest route
      // pain and tears
  }, []);

  return <div id="map" ref={mapRef} style={{ width: "50%", height: "50vh", margin: "0 auto" }} />;
}
