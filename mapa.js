// ==========================================
// 1. CONTEÚDO: COMUNIDADE DE MUMBUCA (MG)
// ==========================================
const conteudoMG = `
    <div class="popup-conteudo">
        <h3 class="popup-titulo">📍 Comunidade de Mumbuca</h3>
        <p class="popup-subtitulo"><b>Município:</b> Jequitinhonha (MG)</p>
        <p class="popup-destaque"><b>Foco:</b> Agricultura familiar, mutirão e feira livre comunitária.</p>

        <!-- Seção 1: Mutirão -->
        <details>
            <summary>🤝 O Mutirão e Troca de Trabalho</summary>
            <p>O <b>mutirão</b> é uma prática ancestral de cooperação técnica e social. As famílias se reúnem para realizar o plantio e a colheita coletiva, trocando dias de trabalho direto sem a necessidade de mediação financeira.</p>
        </details>

        <!-- Seção 2: Feira e Autonomia -->
        <details>
            <summary>🛒 A Feira de Sábado e o Fim do "Atravessador"</summary>
            <p>A feira comunitária de sábado permite que os produtores vendam alimentos diretamente ao consumidor final. Essa autonomia eliminou a figura do <u>atravessador</u>, garantindo preços mais justos para quem produz e para quem compra.</p>
        </details>

        <!-- Seção 3: Cultivos -->
        <details>
            <summary>🌱 Cultivos Centrais</summary>
            <p>Principais produtos da agricultura familiar local:</p>
            <ul>
                <li><b>Mandioca e Farinhadas:</b> Produção tradicional de farinha e derivados.</li>
                <li><b>Milho Crioulo:</b> Sementes mantidas e preservadas pelas gerações.</li>
                <li><b>Feijões Nativos:</b> Variedades adaptadas ao bioma do Vale do Jequitinhonha.</li>
                <li><b>Hortaliças:</b> Cultivo orgânico e diversificado.</li>
            </ul>
        </details>
    </div>
`;

// ==========================================
// 2. CONTEÚDO: CAMPINHO DA INDEPENDÊNCIA (RJ)
// ==========================================
const conteudoRJ = `
    <div class="popup-conteudo">
        <h3 class="popup-titulo">📍 Quilombo do Campinho</h3>
        <p class="popup-subtitulo"><b>Município:</b> Paraty (RJ)</p>
        <p class="popup-destaque"><b>Foco:</b> Gastronomia afro-caiçara, ancestralidade e turismo comunitário.</p>

        <!-- Seção 1: Ancestralidade -->
        <details>
            <summary>👑 As Três Ancestrais</summary>
            <p>A comunidade foi fundada no final do século XIX por três mulheres guerreiras: <b>Antonica</b>, <b>Marcelina</b> e <b>Luiza</b>. A história e a posse da terra foram mantidas através do matriarcado e da resistência cultural.</p>
        </details>

        <!-- Seção 2: Culinária -->
        <details>
            <summary>🍲 Culinária Afro-Caiçara</summary>
            <p>O <i>Restaurante do Quilombo</i> valoriza os ingredientes da Mata Atlântica e a tradição ancestral. Destaques do cardápio:</p>
            <ul>
                <li><b>Camarão com Taioba:</b> Mistura de frutos do mar com folhas nativas.</li>
                <li><b>Peixe à Moda Quilombola:</b> Assado com temperos tradicionais.</li>
                <li><b>Suco/Drink de Juçara:</b> Fruto nativo da palmeira-juçara local.</li>
            </ul>
        </details>

        <!-- Seção 3: Artesanato e Cultura -->
        <details>
            <summary>🎨 Artesanato e Manifestações</summary>
            <p>Na <b>Casa de Artesanato</b> encontram-se trançados de fibra de taboa, cipó, cestaria e esculturas em madeira.</p>
            <p>A comunidade preserva e realiza apresentações de <b>Jongo</b> (dança e ritmo ancestral) e rodas de <b>Capoeira</b>.</p>
        </details>
    </div>
`;

// Vincula os conteúdos aos marcadores já existentes no seu código
marcadorMG.bindPopup(conteudoMG, { maxWidth: 320 });
marcadorRJ.bindPopup(conteudoRJ, { maxWidth: 320 });
