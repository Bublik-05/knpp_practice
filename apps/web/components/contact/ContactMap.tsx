"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
  }
}

export default function ContactMap({ lat, lng, address }: { lat: number; lng: number; address: string }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_ID = "yandex-maps-script";

    function initMap() {
      if (!mapRef.current || !window.ymaps) return;
      window.ymaps.ready(() => {
        if (mapRef.current) mapRef.current.innerHTML = "";
        const map = new window.ymaps.Map(mapRef.current, {
          center: [lat, lng],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl", "geolocationControl"],
        });
        const placemark = new window.ymaps.Placemark(
          [lat, lng],
          { balloonContent: address, hintContent: address },
          { preset: "islands#blueDotIcon" }
        );
        map.geoObjects.add(placemark);
        placemark.balloon.open();
      });
    }

    if (document.getElementById(SCRIPT_ID)) { initMap(); return; }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    // Замени YOUR_KEY на ключ с developer.tech.yandex.ru
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=YOUR_KEY&lang=ru_RU`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, [lat, lng, address]);

  return (
    <div
      ref={mapRef}
      className="w-full"
      style={{ height: 460 }}
      aria-label="Карта расположения офиса"
    />
  );
}