// ==========================================
// 1. INICIALIZAÇÃO DO MAPA
// ==========================================
const map = L.map('map', {
    center: [-14.2350, -51.9253],
    zoom: 4
});

// Camada de fundo padrão e estável do OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Animação de aproximação automática (executa após 2 segundos)
setTimeout(() => {
    map.flyTo([-19.5000, -42.8000], 6, {
        animate: true,
        duration: 2.5
    });
}, 2000);


// ==========================================
// 2. CRIAÇÃO DOS ÍCONES COLORIDOS EM SVG
// ==========================================

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


// ==========================================
// 3. ESTRUTURA DOS CONTEÚDOS DOS BALÕES
// ==========================================

// --- PARTE 1: COMUNIDADE DE MUMBUCA (MG) ---
const conteudoMG = `
    <div class="popup-conteudo">
        <h3 class="popup-titulo">📍 Comunidade de Mumbuca</h3>
        <p class="popup-subtitulo"><b>Município:</b> Jequitinhonha (MG)</p>
        <p class="popup-destaque"><b>Tema central:</b> Agricultura familiar, mutirão e feira livre comunitária.</p>

        <details>
            <summary>🤝 O Mutirão e Troca de Trabalho</summary>
            <p>O <b>mutirão</b> é uma prática ancestral de cooperação técnica e social. As famílias se reúnem para realizar o plantio e a colheita coletiva, trocando dias de trabalho direto sem a necessidade de mediação financeira.</p>
        </details>

        <details>
            <summary>🛒 A Feira de Sábado e Autonomia</summary>
            <p>A feira de sábado possibilita a venda direta aos consumidores na cidade, garantindo autonomia econômica e eliminando a figura do <u>atravessador</u> na cadeia de comercialização.</p>
        </details>

        <details>
            <summary>🌱 Cultivos Centrais</summary>
            <p>Principais produtos cultivados pela comunidade:</p>
            <ul>
                <li><b>Mandioca e Farinhadas:</b> Produção tradicional de farinha e derivados.</li>
                <li><b>Milho Crioulo:</b> Preservação de sementes tradicionais.</li>
                <li><b>Feijões Nativos:</b> Variedades adaptadas ao bioma regional.</li>
                <li><b>Hortaliças:</b> Cultivo diversificado e orgânico.</li>
            </ul>
        </details>

        <details>
            <summary>🖼️ Galeria de Fotos</summary>
            <img src="mandioca.jpg" alt="Cultivo de Mandioca" style="width:100%; border-radius:6px; margin-top:6px;">
            <p style="font-size:11px; color:#666; text-align:center;">Produção tradicional de mandioca em Mumbuca</p>
        </details>
    </div>
`;

// --- PARTE 2: QUILOMBO DO CAMPINHO (RJ) ---
const conteudoRJ = `
    <div class="popup-conteudo">
        <h3 class="popup-titulo">📍 Quilombo do Campinho</h3>
        <p class="popup-subtitulo"><b>Município:</b> Paraty (RJ)</p>
        <p class="popup-destaque"><b>Tema central:</b> Gastronomia afro-caiçara, ancestralidade e turismo comunitário.</p>

        <details>
            <summary>👑 História e Ancestralidade</summary>
            <p>Comunidade fundada no século XIX por três mulheres ancestrais: <b>Antonica</b>, <b>Marcelina</b> e <b>Luiza</b>. A preservação do território ocorreu por meio da resistência e do matriarcado.</p>
        </details>

        <details>
            <summary>🍲 Gastronomia Afro-Caiçara</summary>
            <p>O <i>Restaurante do Quilombo</i> serve pratos emblemáticos que valorizam os ingredientes nativos da Mata Atlântica:</p>
            <ul>
                <li><b>Camarão com Taioba:</b> Combinação de frutos do mar com folhas tradicionais.</li>
                <li><b>Peixe à Moda Quilombola:</b> Preparado com temperos locais.</li>
                <li><b>Suco/Drink de Juçara:</b> Feito a partir do fruto da palmeira-juçara.</li>
            </ul>
        </details>

        <details>
            <summary>🎨 Artesanato e Cultura</summary>
            <p>A <b>Casa de Artesanato</b> reúne trançados em fibra de taboa, cipó, cestaria e esculturas em madeira.</p>
            <p>A comunidade mantém vivas as manifestações culturais do <b>Jongo</b> e da <b>Capoeira</b>.</p>
        </details>

        <details>
            <summary>🖼️ Galeria de Fotos</summary>
            <img src="campinho.jpg" alt="Quilombo do Campinho" style="width:100%; border-radius:6px; margin-top:6px;">
            <p style="font-size:11px; color:#666; text-align:center;">Restaurante e vivência comunitária no Campinho</p>
        </details>
    </div>
`;


// ==========================================
// 4. CRIAÇÃO E VÍNCULO DOS MARCADORES
// ==========================================

// Marcador MG (Azul)
const marcadorMG = L.marker([-16.4355, -41.0033], { icon: iconeAzul }).addTo(map);
marcadorMG.bindPopup(conteudoMG, { maxWidth: 320 });

// Marcador RJ (Laranja)
const marcadorRJ = L.marker([-23.2961, -44.7008], { icon: iconeLaranja }).addTo(map);
marcadorRJ.bindPopup(conteudoRJ, { maxWidth: 320 });
