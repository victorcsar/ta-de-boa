"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import { APIProvider, Map, useMap,  } from "@vis.gl/react-google-maps";
import { DeckProps } from "@deck.gl/core";
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { StaticRoutes } from "@/lib/staticroutes";

interface PinsProps {
  data: StaticRoutes[]
}

function DeckGLOverlay(props: DeckProps) {
  const map = useMap();
  const overlay = useMemo(() => new GoogleMapsOverlay(props), [props]);

  useEffect(() => {
    if (map) {
      overlay.setMap(map);
    }
    
    return () => overlay.setMap(null);
  }, [map, overlay]);

  useEffect(() => {
    overlay.setProps(props);
  }, [overlay, props]);

  return null;
}

export default function Heatmap(props: PinsProps) {
  const mapPinsFixed = props.data
  let dataHeatMap = mapPinsFixed.map((point) => ({
    position: [point?.position?.lng, point?.position?.lat]
  }));

  console.log(dataHeatMap);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  // Configuração dos layers do deck.gl
  const layers = useMemo(() => {
    return [
      new HeatmapLayer({
        id: "heatmap-layer",
        data: dataHeatMap || [],
        getPosition: (d) => d.position,
        getFillColor: [255, 0, 0, 100],
        getRadius: 100,
        intensity: 1
      }),
    ];
  }, [dataHeatMap]);

  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{ lat: -12.25830, lng: -38.960600 }}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={`421ca848a160d26b`}
      >
        <DeckGLOverlay layers={layers} />
      </Map>
    </APIProvider>
  );
}
