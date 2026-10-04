// 1. Inicializa o mapa com visão ampla do Brasil
const map = L.map('map', {
    center: [-14.2350, -51.9253],
    zoom: 4
});

// 2. Carrega as imagens do mapa de fundo padrão (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Animação de aproximação automática (Executa após 2 segundos)
setTimeout(() => {
    map.flyTo([-19.5000, -42.8000], 6, {
        animate: true,
        duration: 2.5
    });
}, 2000);

// --- CRIAÇÃO DOS ÍCONES COLORIDOS EM SVG ---

// Marcador Laranja (Rio de Janeiro)
const iconeLaranja = L.divIcon({
    className: 'custom-pin',
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f97316" width="36px" height="36px" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));">
            <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
           </svg>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
});

// Marcador Azul Padrão (Minas Gerais)
const iconeAzul = L.divIcon({
    className: 'custom-pin',
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2563eb" width="36px" height="36px" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));">
            <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
           </svg>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
});

// --- ADICIONANDO OS MARCADORES COM OS ÍCONES PERSONALIZADOS ---

// 4. Alfinete: Comunidade de Mumbuca (MG) -> Recebe o iconeAzul
const marcadorMG = L.marker([-16.4355, -41.0033], { icon: iconeAzul }).addTo(map);
const conteudoMG = `
    <h3 class="popup-titulo">📍 Comunidade de Mumbuca</h3>
    <p><b>Município:</b> Jequitinhonha (MG)</p>
    <p>Demonstração de ferramentas de texto exigidas:</p>
    <ul>
        <li>Texto em <b>Negrito</b></li>
        <li>Texto em <i>Itálico</i></li>
        <li>Texto <u>Sublinhado</u></li>
    </ul>
    <details>
        <summary>👉 Clique para expandir (Toggle)</summary>
        <p style="margin-top: 5px; color: #4b5563;">
            Este texto estava totalmente oculto dentro do mapa! O menu retrátil funciona perfeitamente aqui dentro do balão do alfinete.
        </p>
    </details>
`;
marcadorMG.bindPopup(conteudoMG);

// 5. Alfinete: Campinho da Independência (RJ) - Laranja
const marcadorRJ = L.marker([-23.2961, -44.7008], { icon: iconeLaranja }).addTo(map);
const conteudoRJ = `
    <h3 class="popup-titulo">📍 Campinho da Independência</h3>
    <p><b>Município:</b> Paraty (RJ)</p>
    <p><i>Primeira comunidade quilombola titulada do estado do Rio de Janeiro.</i></p>
    <details>
        <summary>📋 Ver Atrativos Culturais</summary>
        <p style="margin-top: 5px; color: #4b5563;">
            • Famoso <b>Restaurante Quilombola</b> local.<br>
            • Produção de <i>artesanato tradicional</i>.<br>
            • Roteiros guiados de turismo ecológico e cultural.
        </p>
    </details>
`;
marcadorRJ.bindPopup(conteudoRJ);
