'use client';

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3;
  const φ1 = lat1 * (Math.PI / 180);
  const φ2 = lat2 * (Math.PI / 180);
  const Δφ = (lat2 - lat1) * (Math.PI / 180);
  const Δλ = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [steps, setSteps] = useState(0);
  const [position, setPosition] = useState<{ lat: number, lon: number } | null>(null);
  const [geoPermissionGranted, setGeoPermissionGranted] = useState(false);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    if (!geoPermissionGranted) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoPermissionGranted(true);
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lon: longitude });

          const geoWatchId = navigator.geolocation.watchPosition(successCallback, errorCallback, {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 5000,
          });

          return () => {
            navigator.geolocation.clearWatch(geoWatchId);
          };
        },
        (error) => {
          console.error("Геолокация не разрешена", error);
        }
      );
    }

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;

      if (position) {
        const prevLat = position?.coords.latitude;
        const prevLon = position?.coords.longitude;

        if (prevLat && prevLon) {
          const distance = haversine(prevLat, prevLon, latitude, longitude);
          const newSteps = Math.floor(distance / 0.78);
          setSteps((prevSteps) => prevSteps + newSteps);
        }
      }

      setPosition({ lat: latitude, lon: longitude });
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error("Error getting location", error);
    };

    return () => {
      clearTimeout(timer);
    };
  }, [geoPermissionGranted]);

  return (
    <main>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData?.id}</li>
            <li>First Name: {userData?.first_name}</li>
            <li>Last Name: {userData?.last_name}</li>
            <li>Username: {userData?.username}</li>
            <li>Language Code: {userData?.language_code}</li>
            <li>Is Premium: {userData?.is_premium ? 'Yes' : 'No'}</li>
          </ul>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Current Position:</h2>
            <p>Latitude: {position?.lat}</p>
            <p>Longitude: {position?.lon}</p>
            <h2 className="text-xl font-semibold">Steps Taken: {steps}</h2>
          </div>
        </>
      )}
    </main>
  );
}
