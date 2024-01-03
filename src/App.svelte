<script lang="ts">
  import { Marker } from "leaflet";
  import { onMount } from "svelte";

  // @ts-nocheck
  import { Map, TileLayer } from "svelte-map-leaflet";

  let render = false;

  const mapOptions = {
    center: [51.48051478012906, 4.957180977260251],
    zoom: 16,
    minZoom: 14,
    maxZoom: 18,
    zoomAnimation: false,
    fadeAnimation: false,
    maxBounds: [
      [51.42896485014125, 4.900179464093519],
      [51.63383584869949, 5.182914618075518],
    ],
  };
  const tileUrl =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  function reset() {
    mapOptions.center = [51.48051478012906, 4.957180977260251];
    mapOptions.zoom = 16;

    render = false;

    setTimeout(() => {
      render = true;
    }, 10);
  }

  onMount(() => {
    render = true;
    document.addEventListener("keydown", (e) => {
      console.log("reset");
      if (e.key.toLowerCase() == "r") reset();
    });
  });
</script>

{#if render}
  <Map options={mapOptions}>
    <TileLayer url={tileUrl}></TileLayer>
  </Map>
{/if}
