const rochas = [
    {
        "nome": "Granito",
        "tipo": "Ígnea Intrusiva",
        "cor": "#8B7355",
        "composicao_mineralogica": "O granito é composto principalmente por:\n• Quartzo (20-60%): mineral transparente a leitoso\n• Feldspato (20-40%): ortoclásio (rosa) e plagioclásio (branco)\n• Mica (5-15%): biotita (preta) e muscovita (prateada)\n• Minerais acessórios: anfíbolas, zircão, apatita",
        "ambiente_formacao": "O granito se forma quando o magma resfria lentamente em profundidade na crosta terrestre (5-30 km). O resfriamento lento permite o crescimento de cristais visíveis a olho nu. Formam-se grandes corpos chamados de plutões, batólitos e stocks. O processo pode levar milhões de anos. Associado a margens continentais convergentes e pontos quentes.",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Minas Gerais, Espírito Santo, Goiás\n• China: Grande produtor mundial\n• Índia: Rajastan, Tamil Nadu\n• Noruega: Østfold, Vestfold\n• EUA: Vermont, Geórgia, Wisconsin\n• África do Sul: Rustenburg\n• Argentina: Tandil",
        "imagem": "🌋"
    },
    {
        "nome": "Basalto",
        "tipo": "Ígnea Extrusiva",
        "cor": "#2F2F2F",
        "composicao_mineralogica": "O basalto é uma rocha máfica composta por:\n• Plagioclásio (50%): principalmente labradorita\n• Piroxênio (augita): 40%\n• Olivina: 5-10% (quando presente)\n• Minerais opacos: magnetita, ilmenita\n• Pode conter vidro vulcânico",
        "ambiente_formacao": "O basalto se forma pelo resfriamento rápido de lava na superfície terrestre ou em ambientes aquáticos. É a rocha mais comum da crosta oceânica. Formado em:\n• Derrames vulcânicos (incluindo os 'traps')\n• Riftes continentais e oceânicos\n• Hotspots (pontos quentes)\n• Pode apresentar estruturas colunares",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Bacia do Paraná (Serra Geral), Bacia do Amazonas\n• Índia: Trapps do Decão\n• EUA: Colúmbia Britânica, Havaí\n• Islândia: Cobertura quase total da ilha\n• Rússia: Trapps da Sibéria\n• Etiópia: Planalto Etíope\n• Canadá: Províncias do Escudo Canadense",
        "imagem": "🪨"
    },
    {
        "nome": "Mármore",
        "tipo": "Metamórfica",
        "cor": "#F5F5F5",
        "composicao_mineralogica": "O mármore é uma rocha metamórfica composta por:\n• Calcita (CaCO₃): principal componente (90-99%)\n• Dolomita: quando derivado de dolomito\n• Minerais acessórios: quartzo, grafite, pirita\n• Impurezas dão cores variadas (rosa, verde, preto)\n• Textura granoblástica com grãos intercrescidos",
        "ambiente_formacao": "O mármore se forma pelo metamorfismo de rochas carbonáticas (calcário ou dolomito) sob condições de temperatura e pressão elevadas. Ocorre em:\n• Cinturões metamórficos regionais\n• Contato com intrusões ígneas\n• Profundidades variáveis (5-30 km)\n• Temperaturas entre 300-800°C",
        "principais_locais": "Principais ocorrências mundiais:\n• Itália: Carrara (famoso mármore branco)\n• Brasil: Espírito Santo, Minas Gerais, Bahia\n• Grécia: Paros, Naxos, Pentélico\n• Turquia: Afyon, Bilecik\n• China: Dali, Hebei\n• Espanha: Almería, Alicante\n• EUA: Vermont, Colorado\n• Índia: Rajastan",
        "imagem": "⬜"
    },
    {
        "nome": "Arenito",
        "tipo": "Sedimentar",
        "cor": "#F4A460",
        "composicao_mineralogica": "O arenito é uma rocha sedimentar clástica composta por:\n• Grãos de quartzo: principal componente (60-95%)\n• Feldspato: 5-25% (arenito arcósio)\n• Fragmentos de rocha: líticos\n• Matriz: argila, silte entre os grãos\n• Cimento: sílica, carbonato ou óxido de ferro",
        "ambiente_formacao": "O arenito se forma pela deposição e compactação de areia em diversos ambientes:\n• Praias e ambientes costeiros\n• Rios e sistemas fluviais\n• Dunas e desertos (eólico)\n• Leques aluviais\n• Turbiditos (submarinos)\nO cimento precipita entre os grãos ao longo do tempo geológico.",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Bacia do Paraná (Botucatu), Bacia do Araripe\n• EUA: Colorado Plateau (Grand Canyon), Utah\n• Austrália: Uluru (Ayers Rock)\n• Reino Unido: Pennines\n• Alemanha: Triássico germânico\n• África do Sul: Sistema Karoo\n• Argentina: Formação Botucatu",
        "imagem": "🏜️"
    },
    {
        "nome": "Calcário",
        "tipo": "Sedimentar",
        "cor": "#DCDCDC",
        "composicao_mineralogica": "O calcário é uma rocha sedimentar carbonática composta por:\n• Calcita (CaCO₃): 50-100%\n• Dolomita (parcialmente): quando dolomitizado\n• Aragonita: em formações recentes\n• Componentes orgânicos: conchas, corais, algas\n• Pode conter sílica como chert\n• Minerais argilosos como impurezas",
        "ambiente_formacao": "O calcário se forma principalmente por processos bioquímicos e químicos:\n• Recifes de corais e algas\n• Plataformas carbonáticas marinhas\n• Depósitos de lama calcária\n• Lagos evaporíticos (travertino)\n• Cavernas (estalactites/estalagmites)\nAmbientes marinhos rasos e quentes são ideais.",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Bacias sedimentares diversas, Calcário Lagoa Santa\n• EUA: Flórida Keys, Indiana, Texas\n• China: Guilin, Guangxi\n• Egito: Formações piramidais\n• Itália: Dolomitas\n• México: Yucatán\n• Indonésia: Recifes de coral\n• Vietnã: Halong Bay",
        "imagem": "🏔️"
    },
    {
        "nome": "Xisto",
        "tipo": "Metamórfica",
        "cor": "#696969",
        "composicao_mineralogica": "O xisto é uma rocha metamórfica foliada composta por:\n• Minerais micáceos: muscovita, biotita, clorita\n• Quartzo: grãos alongados\n• Feldspato: em menor quantidade\n• Granada, estaurolita, cianita (em grau maior)\n• Estrutura xistosa com foliação bem desenvolvida",
        "ambiente_formacao": "O xisto se forma pelo metamorfismo regional de argilas e folhelhos em condições de baixo a médio grau metamórfico. Ocorre em:\n• Cinturões orogênicos\n• Zonas de subdução\n• Temperaturas de 300-500°C\n• Pressões de 2-8 kbar\nA foliação resulta da orientação preferencial dos minerais.",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Escudo das Guianas, Escudo Brasileiro, Minas Gerais\n• Escócia: Terranos metamórficos\n• Alpes: Europa Central\n• Apalaches: EUA leste\n• Himalaia: Nepal, Índia\n• Austrália: Regiões do Precambriano\n• África: Cinturões proterozóicos",
        "imagem": "📚"
    },
    {
        "nome": "Gnaisse",
        "tipo": "Metamórfica",
        "cor": "#A0522D",
        "composicao_mineralogica": "O gnaisse é uma rocha metamórfica de alto grau composta por:\n• Quartzo: intercalar em bandas\n• Feldspato: ortoclásio e plagioclásio\n• Mica: biotita e muscovita\n• Minerais máficos: anfíbolas, piroxênios\n• Estrutura gnáissica: bandamento composicional",
        "ambiente_formacao": "O gnaisse se forma em condições de metamorfismo de alto grau:\n• Temperaturas acima de 600°C\n• Pressões elevadas na crosta média-inferior\n• Zonas de colisão continental\n• Raiz de cinturões orogênicos\n• Pode ser derivado de granito ou sedimentos\nProcessos de segregação metamórfica criam o bandamento.",
        "principais_locais": "Principais ocorrências mundiais:\n• Brasil: Escudo das Guianas, Escudo Atlântico, Complexo Gnáissico\n• Canadá: Escudo Canadense\n• Escandinávia: Suécia, Noruega\n• Antártida: Escudo Antártico\n• Austrália: Cráton Yilgarn\n• Índia: Cráton Dharwar\n• África: Zimbábue, África do Sul",
        "imagem": "🪨"
    },
    {
        "nome": "Obsidiana",
        "tipo": "Ígnea Extrusiva",
        "cor": "#000000",
        "composicao_mineralogica": "A obsidiana é um vidro vulcânico natural composto por:\n• Sílica amorfa (SiO₂): 70-75%\n• Sem estrutura cristalina definida\n• Resfriamento ultra-rápido impede cristalização\n• Pequenas inclusões: magnetita, piroxênio\n• Variedades: snowflake (cristais de cristobalita)\n• Alta concentração de elementos voláteis",
        "ambiente_formacao": "A obsidiana se forma em erupções vulcânicas de alta temperatura com resfriamento muito rápido:\n• Erupções ricas em sílica (riliticas)\n• Resfriamento instantâneo (< 3 dias)\n• Pode formar em domos vulcânicos\n• Em fluxos de lava viscosa\n• Associada a margens continentais convergentes\n• Condições de alta viscosidade impedem cristalização.",
        "principais_locais": "Principais ocorrências mundiais:\n• México: Pico de Orizaba, Pachuca\n• EUA: Oregon, Califórnia, Yellowstone\n• Japão: Monte Haku, Hakkōda\n• Itália: Etna, Lipari, Monte Arci\n• Turquia: Kayseri, Capadócia\n• Indonésia: Krakatoa, Bali\n• Armênia: Regiões vulcânicas\n• Quênia: Regiões vulcânicas do Rift Valley",
        "imagem": "⚫"
    },
    {
        "nome": "Ardósia",
        "tipo": "Metamórfica",
        "cor": "#708090",
        "composicao_mineralogica": "A ardósia é uma rocha metamórfica de baixo grau composta por:\n• Minerais argilosos: illita, clorita\n• Quartzo: grãos finos disseminados\n• Minerais micáceos: sericita\n• Pirita: frequentemente presente\n• Grafita: em ardósias pretas\n• Granada: rara, grau metamórfico maior",
        "ambiente_formacao": "A ardósia se forma pelo metamorfismo de baixo grau de argilas e folhelhos:\n• Temperaturas de 200-350°C\n• Pressões de 1-4 kbar\n• Metamorfismo regional suave\n• A foliação 'clivagem de ardósia' é característica\n• Permite fácil clivagem em lâminas planas\n• Derivada de sedimentos argilosos marinhos.",
        "principais_locais": "Principais ocorrências mundiais:\n• Espanha: Galiza, León (maior produtor mundial)\n• Brasil: Minas Gerais, Santa Catarina\n• Reino Unido: País de Gales (Snowdonia)\n• França: Ardenas, Bretanha\n• Itália: Lombardia\n• Portugal: Valongo\n• China: Províncias do norte\n• EUA: Vermont, Virgínia",
        "imagem": "🪟"
    },
    {
        "nome": "Pomes",
        "tipo": "Ígnea Extrusiva",
        "cor": "#D3D3D3",
        "composicao_mineralogica": "O pomes (pedra-pome) é uma rocha vulcânica vesicular composta por:\n• Vidro vulcânico: matriz de sílica\n• Vesículas: espaços vazios de gases\n• Minerais: quartzo, feldspato (microscópicos)\n• Pode conter cristais de plagioclásio\n• Densidade muito baixa (flutua na água)\n• Textura vítrea com porosidade extrema",
        "ambiente_formacao": "O pomes se forma em erupções vulcânicas explosivas ricas em gases:\n• Despressurização rápida de magma\n• Expansão violenta de gases dissolvidos\n• Formação de espuma vulcânica\n• Resfriamento instantâneo preserva vesículas\n• Associado a magmas félsicos (alta sílica)\n• Eruptado como fragmentos (pó e blocos)",
        "principais_locais": "Principais ocorrências mundiais:\n• Itália: Lipari (principal fonte histórica)\n• Turquia: Regiões da Anatólia\n• Grécia: Ilhas do Egeu\n• EUA: Novo México, Oregon\n• Japão: Regiões vulcânicas\n• Chile: Regiões vulcânicas andinas\n• Nova Zelândia: Taupo\n• Indonésia: Krakatoa, Tambora",
        "imagem": "🫧"
    }
];
