import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_adds.js';

// Server module must be initalized in server/main.js
export default function () {
  publications();
  methods();
  addInitialData();
}
