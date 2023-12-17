import App from './App.svelte'
import 'leaflet/dist/leaflet.css';
import './css/main.css';

const app = new App({
  target: document.getElementById('app')!,
})

export default app
