const provincias = [
  { nombre: "Azua", capital: "Azua de Compostela", lat: 18.45319, lon: -70.7349 },
  { nombre: "Bahoruco", capital: "Neiba", lat: 18.4863, lon: -71.4150 },
  { nombre: "Barahona", capital: "Barahona", lat: 18.20854, lon: -71.10077 },
  { nombre: "Dajabon", capital: "Dajabon", lat: 19.54878, lon: -71.70829 },
  { nombre: "Duarte", capital: "San Francisco de Macoris", lat: 19.28939, lon: -70.25787 },
  { nombre: "El Seibo", capital: "El Seibo", lat: 18.76559, lon: -69.03886 },
  { nombre: "Elias Pina", capital: "Comendador", lat: 18.87667, lon: -71.70294 },
  { nombre: "Espaillat", capital: "Moca", lat: 19.62773, lon: -70.27799 },
  { nombre: "Hato Mayor", capital: "Hato Mayor del Rey", lat: 18.76216, lon: -69.25647 },
  { nombre: "Hermanas Mirabal", capital: "Salcedo", lat: 19.37350, lon: -70.41883 },
  { nombre: "Independencia", capital: "Jimani", lat: 18.48769, lon: -71.85150 },
  { nombre: "La Altagracia", capital: "Salvaleon de Higuey", lat: 18.61467, lon: -68.71714 },
  { nombre: "La Romana", capital: "La Romana", lat: 18.42241, lon: -68.96631 },
  { nombre: "La Vega", capital: "La Vega", lat: 19.22378, lon: -70.53276 },
  { nombre: "Maria Trinidad Sanchez", capital: "Nagua", lat: 19.36668, lon: -69.85113 },
  { nombre: "Monsenor Nouel", capital: "Bonao", lat: 18.92721, lon: -70.39728 },
  { nombre: "Monte Cristi", capital: "Monte Cristi", lat: 19.84992, lon: -71.64884 },
  { nombre: "Monte Plata", capital: "Monte Plata", lat: 18.80776, lon: -69.78479 },
  { nombre: "Pedernales", capital: "Pedernales", lat: 18.03332, lon: -71.74310 },
  { nombre: "Peravia", capital: "Bani", lat: 18.27941, lon: -70.33225 },
  { nombre: "Puerto Plata", capital: "Puerto Plata", lat: 19.78358, lon: -70.67147 },
  { nombre: "Samana", capital: "Santa Barbara de Samana", lat: 19.20266, lon: -69.33563 },
  { nombre: "San Cristobal", capital: "San Cristobal", lat: 18.41593, lon: -70.11085 },
  { nombre: "San Jose de Ocoa", capital: "San Jose de Ocoa", lat: 18.54379, lon: -70.50703 },
  { nombre: "San Juan", capital: "San Juan de la Maguana", lat: 18.80690, lon: -71.23250 },
  { nombre: "San Pedro de Macoris", capital: "San Pedro de Macoris", lat: 18.46374, lon: -69.30405 },
  { nombre: "Sanchez Ramirez", capital: "Cotui", lat: 19.05119, lon: -70.14681 },
  { nombre: "Santiago", capital: "Santiago", lat: 19.45084, lon: -70.69472 },
  { nombre: "Santiago Rodriguez", capital: "San Ignacio de Sabaneta", lat: 19.47912, lon: -71.34573 },
  { nombre: "Santo Domingo", capital: "Santo Domingo Este", lat: 18.47769, lon: -69.88334 },
  { nombre: "Valverde", capital: "Mao", lat: 19.54818, lon: -71.08257 },
  { nombre: "Distrito Nacional", capital: "Santo Domingo", lat: 18.44953, lon: -69.97564 }
];

const codigosClima = {
  0: { texto: "Cielo despejado", icono: "☀️" },
  1: { texto: "Mayormente despejado", icono: "🌤" },
  2: { texto: "Parcialmente nublado", icono: "⛅" },
  3: { texto: "Nublado", icono: "☁️" },
  45: { texto: "Niebla", icono: "🌫" },
  48: { texto: "Niebla con escarcha", icono: "🌫" },
  51: { texto: "Llovizna ligera", icono: "🌦" },
  53: { texto: "Llovizna moderada", icono: "🌦" },
  55: { texto: "Llovizna densa", icono: "🌦" },
  56: { texto: "Llovizna helada ligera", icono: "🌦" },
  57: { texto: "Llovizna helada densa", icono: "🌦" },
  61: { texto: "Lluvia ligera", icono: "🌧" },
  63: { texto: "Lluvia moderada", icono: "🌧" },
  65: { texto: "Lluvia fuerte", icono: "🌧" },
  66: { texto: "Lluvia helada ligera", icono: "🌧" },
  67: { texto: "Lluvia helada fuerte", icono: "🌧" },
  71: { texto: "Nevada ligera", icono: "🌨" },
  73: { texto: "Nevada moderada", icono: "🌨" },
  75: { texto: "Nevada fuerte", icono: "🌨" },
  77: { texto: "Granos de nieve", icono: "🌨" },
  80: { texto: "Chubascos ligeros", icono: "🌦" },
  81: { texto: "Chubascos moderados", icono: "🌧" },
  82: { texto: "Chubascos violentos", icono: "🌧" },
  85: { texto: "Chubascos de nieve ligeros", icono: "🌨" },
  86: { texto: "Chubascos de nieve fuertes", icono: "🌨" },
  95: { texto: "Tormenta electrica", icono: "⛈" },
  96: { texto: "Tormenta con granizo ligero", icono: "⛈" },
  99: { texto: "Tormenta con granizo fuerte", icono: "⛈" }
};

const gruposClima = [
  { rango: [0, 1], nombre: "Despejado", icono: "☀️" },
  { rango: [2, 2], nombre: "Parcialmente nublado", icono: "⛅" },
  { rango: [3, 3], nombre: "Nublado", icono: "☁️" },
  { rango: [45, 48], nombre: "Niebla", icono: "🌫" },
  { rango: [51, 57], nombre: "Llovizna", icono: "🌦" },
  { rango: [61, 67], nombre: "Lluvia", icono: "🌧" },
  { rango: [80, 82], nombre: "Chubascos", icono: "🌧" },
  { rango: [95, 99], nombre: "Tormentas", icono: "⛈" }
];

const app = document.getElementById('app');
const destacadoGrid = document.getElementById('destacadoGrid');
const ubicacionSection = document.getElementById('tuUbicacion');
const ubicacionGrid = document.getElementById('ubicacionGrid');
const searchInput = document.getElementById('searchInput');
const visibleCount = document.getElementById('visibleCount');
const updateInfo = document.getElementById('updateInfo');
const sortSelect = document.getElementById('sortSelect');
const windSlider = document.getElementById('windSlider');
const windValue = document.getElementById('windValue');
const filterChips = document.getElementById('weatherGroupFilters');
const refreshBtn = document.getElementById('refreshBtn');
const resetBtn = document.getElementById('resetBtn');
const subscribeBtn = document.getElementById('subscribeBtn');
const modal = document.getElementById('subscribeModal');
const modalClose = document.getElementById('modalClose');

let conClima = [];

function getGrupoClima(code) {
  for (const g of gruposClima) {
    if (code >= g.rango[0] && code <= g.rango[1]) return g;
  }
  return null;
}

function showLoading() {
  app.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Cargando clima de las provincias...</p>
    </div>
  `;
}

function createCard(p, idx) {
  const clima = p.current ? (codigosClima[p.current.weather_code] || { texto: "Desconocido", icono: "?" }) : null;
  const temp = p.current ? Math.round(p.current.temperature_2m) : "--";
  const hum = p.current ? p.current.relative_humidity_2m : "--";
  const wind = p.current ? p.current.wind_speed_10m : "--";
  const icon = clima ? clima.icono : "⏳";
  const desc = clima ? clima.texto : "Cargando...";

  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = idx;
  card.style.animationDelay = (idx * 0.02) + 's';
  card.innerHTML = `
    <div class="card-top">
      <div class="card-info">
        <h2>${p.nombre}</h2>
        <span class="capital">${p.capital}</span>
      </div>
      <div class="card-weather-summary">
        <span class="weather-icon">${icon}</span>
        <span class="weather-temp">${temp}<span class="unit">°C</span></span>
      </div>
    </div>
    <div class="card-desc">${desc}</div>
    <div class="card-meta">
      <span>💧 ${hum}%</span>
      <span>🍃 ${wind} km/h</span>
    </div>
  `;
  return card;
}

function buildGroupChips() {
  const found = new Set();
  conClima.forEach(p => {
    if (p.current) {
      const g = getGrupoClima(p.current.weather_code);
      if (g) found.add(g.nombre);
    }
  });

  filterChips.innerHTML = '';
  gruposClima.forEach(g => {
    if (!found.has(g.nombre)) return;
    const chip = document.createElement('span');
    chip.className = 'filter-chip active';
    chip.innerHTML = `${g.icono} ${g.nombre}`;
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      applyFilters();
    });
    filterChips.appendChild(chip);
  });
}

function renderFiltered(filtered, sortBy) {
  app.innerHTML = '';

  if (filtered.length === 0) {
    app.innerHTML = `<div style="text-align:center;padding:60px 24px;color:var(--texto-suave);font-size:0.95rem;">Ninguna provincia coincide con los filtros.</div>`;
    return;
  }

  if (sortBy === 'default') {
    const agrupados = {};
    for (const p of filtered) {
      const cat = getGrupoClima(p.current.weather_code);
      if (!cat) continue;
      if (!agrupados[cat.nombre]) agrupados[cat.nombre] = { icono: cat.icono, provincias: [] };
      agrupados[cat.nombre].provincias.push(p);
    }

    const fragment = document.createDocumentFragment();
    let cardIdx = 0;

    for (const grupo of gruposClima) {
      const lista = agrupados[grupo.nombre];
      if (!lista || !lista.provincias.length) continue;

      const section = document.createElement('section');
      section.className = 'group';
      section.dataset.group = grupo.nombre;

      const header = document.createElement('div');
      header.className = 'group-header';
      header.innerHTML = `
        <span class="group-icon">${grupo.icono}</span>
        <h2>${grupo.nombre}</h2>
        <span class="group-count">${lista.provincias.length}</span>
      `;

      const grid = document.createElement('div');
      grid.className = 'group-grid';
      lista.provincias.forEach(p => {
        grid.appendChild(createCard(p, cardIdx++));
      });

      section.appendChild(header);
      section.appendChild(grid);
      fragment.appendChild(section);
    }

    app.appendChild(fragment);
  } else {
    const grid = document.createElement('div');
    grid.className = 'group-grid';
    filtered.forEach((p, i) => grid.appendChild(createCard(p, i)));
    app.appendChild(grid);
  }
}

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  const sortBy = sortSelect.value;
  const minWind = parseInt(windSlider.value);

  const selectedGroups = [];
  filterChips.querySelectorAll('.filter-chip.active').forEach(chip => {
    selectedGroups.push(chip.textContent.trim().replace(/^[^\s]+\s/, ''));
  });

  let filtered = conClima.filter(p => {
    if (!p.current) return false;
    if (p.current.wind_speed_10m < minWind) return false;
    const grupo = getGrupoClima(p.current.weather_code);
    if (!grupo || !selectedGroups.includes(grupo.nombre)) return false;
    if (query && !p.nombre.toLowerCase().includes(query) && !p.capital.toLowerCase().includes(query)) return false;
    return true;
  });

  if (sortBy === 'name') {
    filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (sortBy === 'temp-asc') {
    filtered.sort((a, b) => a.current.temperature_2m - b.current.temperature_2m);
  } else if (sortBy === 'temp-desc') {
    filtered.sort((a, b) => b.current.temperature_2m - a.current.temperature_2m);
  }

  renderFiltered(filtered, sortBy);
  visibleCount.textContent = filtered.length;
}

async function fetchWeather() {
  const lats = provincias.map(p => p.lat);
  const lons = provincias.map(p => p.lon);
  const params = new URLSearchParams({
    latitude: lats.join(','),
    longitude: lons.join(','),
    current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
    timezone: 'America/Santo_Domingo'
  });

  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const results = Array.isArray(data) ? data : [data];
    conClima = provincias.map((p, i) => ({
      ...p,
      current: results[i] && results[i].current ? results[i].current : null
    }));

    buildGroupChips();
    renderDestacados();
    renderUbicacion();
    applyFilters();
    updateInfo.textContent = `Actualizado: ${new Date().toLocaleString('es-DO')}`;
  } catch (err) {
    updateInfo.textContent = 'Error al cargar el clima';
    updateInfo.style.color = 'var(--rojo)';
    showLoading();
    app.innerHTML = `
      <div style="text-align:center;padding:60px 24px;color:var(--rojo);">
        <p style="font-size:1.2rem;">No se pudo obtener el clima</p>
        <p style="color:var(--texto-suave);margin-top:8px;">Revisa tu conexion e intenta de nuevo</p>
      </div>
    `;
  }
}

function renderDestacados() {
  const conDatos = conClima.filter(p => p.current);
  if (conDatos.length === 0) return;

  let extremos = [];

  const tormentas = conDatos.filter(p => p.current.weather_code >= 95);
  const lluvias = conDatos.filter(p => [65, 67, 82].includes(p.current.weather_code));
  const masCalor = conDatos.sort((a, b) => b.current.temperature_2m - a.current.temperature_2m)[0];

  if (tormentas.length > 0) {
    extremos.push({ provincia: tormentas[0], tipo: 'tormenta' });
  }
  if (lluvias.length > 0 && !extremos.find(e => e.provincia === lluvias[0])) {
    extremos.push({ provincia: lluvias[0], tipo: 'lluvia' });
  }

  if (extremos.length === 0) {
    extremos.push({ provincia: masCalor, tipo: 'calor' });
  } else if (extremos.length < 2 && masCalor && !extremos.find(e => e.provincia === masCalor)) {
    extremos.push({ provincia: masCalor, tipo: 'calor' });
  }

  destacadoGrid.innerHTML = '';

  extremos.forEach(({ provincia: p, tipo }) => {
    const clima = codigosClima[p.current.weather_code] || { texto: 'Desconocido', icono: '?' };
    const temp = Math.round(p.current.temperature_2m);
    const hum = p.current.relative_humidity_2m;
    const wind = p.current.wind_speed_10m;

    const etiquetas = { calor: 'Calor extremo', lluvia: 'Alerta lluvia', tormenta: 'Tormenta' };

    const card = document.createElement('div');
    card.className = `card-destacado card-destacado--${tipo}`;
    card.innerHTML = `
      <span class="destacado-badge destacado-badge--${tipo}">${etiquetas[tipo]}</span>
      <div class="card-top">
        <div class="card-info">
          <h2>${p.nombre}</h2>
          <span class="capital">${p.capital}</span>
        </div>
        <div class="card-weather-summary">
          <span class="weather-icon">${clima.icono}</span>
          <span class="weather-temp">${temp}<span class="unit">°C</span></span>
        </div>
      </div>
      <div class="card-desc">${clima.texto}</div>
      <div class="card-meta">
        <span>💧 ${hum}%</span>
        <span>🍃 ${wind} km/h</span>
      </div>
    `;
    destacadoGrid.appendChild(card);
  });
}

function renderUbicacion() {
  const savedProvincia = localStorage.getItem('ubicacionProvincia');

  if (savedProvincia) {
    mostrarUbicacion(savedProvincia);
    return;
  }

  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;

      const deg2rad = (deg) => deg * (Math.PI / 180);
      let minDist = Infinity;
      let nearest = null;

      for (const p of provincias) {
        const dlat = deg2rad(p.lat - userLat);
        const dlon = deg2rad(p.lon - userLon);
        const a = Math.sin(dlat / 2) ** 2 +
          Math.cos(deg2rad(userLat)) * Math.cos(deg2rad(p.lat)) *
          Math.sin(dlon / 2) ** 2;
        const dist = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        if (dist < minDist) {
          minDist = dist;
          nearest = p;
        }
      }

      if (!nearest || minDist > 200) return;

      localStorage.setItem('ubicacionProvincia', nearest.nombre);
      mostrarUbicacion(nearest.nombre);
    },
    () => {},
    { enableHighAccuracy: false, timeout: 5000 }
  );
}

function mostrarUbicacion(nombreProvincia) {
  const data = conClima.find(p => p.nombre === nombreProvincia);
  if (!data || !data.current) return;

  const clima = codigosClima[data.current.weather_code] || { texto: 'Desconocido', icono: '?' };
  const temp = Math.round(data.current.temperature_2m);
  const hum = data.current.relative_humidity_2m;
  const wind = data.current.wind_speed_10m;

  ubicacionGrid.innerHTML = `
    <div class="card-ubicacion">
      <span class="ubicacion-badge">Tu ciudad actual</span>
      <div class="card-top">
        <div class="card-info">
          <h2>${data.nombre}</h2>
          <span class="capital">${data.capital}</span>
        </div>
        <div class="card-weather-summary">
          <span class="weather-icon">${clima.icono}</span>
          <span class="weather-temp">${temp}<span class="unit">°C</span></span>
        </div>
      </div>
      <div class="card-desc">${clima.texto}</div>
      <div class="card-meta">
        <span>💧 ${hum}%</span>
        <span>🍃 ${wind} km/h</span>
      </div>
    </div>
  `;
  ubicacionSection.style.display = '';
}

// Refresh
refreshBtn.addEventListener('click', () => {
  fetchWeather();
});

// Auto-refresh every hour
setInterval(fetchWeather, 3600000);

// Reset filters
resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  sortSelect.value = 'default';
  windSlider.value = 0;
  windValue.textContent = '0 km/h';
  filterChips.querySelectorAll('.filter-chip').forEach(chip => chip.classList.add('active'));
  applyFilters();
});

// Subscribe modal
subscribeBtn.addEventListener('click', () => modal.classList.remove('hidden'));

modalClose.addEventListener('click', () => modal.classList.add('hidden'));

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Filter events
searchInput.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);
windSlider.addEventListener('input', () => {
  windValue.textContent = windSlider.value + ' km/h';
  applyFilters();
});

showLoading();
fetchWeather();
