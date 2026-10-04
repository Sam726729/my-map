// 1. Inicializa o mapa com visão ampla do Brasil
const map = L.map('map', {
    center: [-14.2350, -51.9253],
    zoom: 4
});

// 2. Carrega as imagens do mapa (Estilo Escuro / Dark Mode)
// Opção de estilo escuro alternativa e estável
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
}).addTo(map);

// 3. Animação de aproximação automática (Executa após 2 segundos)
setTimeout(() => {
    map.flyTo([-19.5000, -42.8000], 6, {
        animate: true,
        duration: 2.5
    });
}, 2000);

// 4. Alfinete Exato: Comunidade de Mumbuca — Jequitinhonha (MG)
const marcadorMG = L.marker([-16.4355, -41.0033]).addTo(map);
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

// 5. Alfinete Exato: Quilombo do Campinho da Independência — Paraty (RJ)
const marcadorRJ = L.marker([-23.2961, -44.7008]).addTo(map);
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
