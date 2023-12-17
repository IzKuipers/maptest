<script>
  // @ts-nocheck
  import { Map, TileLayer } from "svelte-map-leaflet";

  const mapOptions = {
    center: [51.48051478012906, 4.957180977260251],
    zoom: 16,
    minZoom: 16,
    maxZoom: 16,
    zoomAnimation: false,
    fadeAnimation: false,
    maxBounds: [
      [51.48051478012906, 4.957180977260251],
      [51.48051478012906, 4.957180977260251],
    ],
  };
  const tileUrl =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
</script>

<Map options={mapOptions}>
  <TileLayer url={tileUrl} />
</Map>
