export const AMAZON_TAG_US = "recetasdeperu-20";
export const AMAZON_TAG_ES = "recetasdeperu-21";

export type AmazonStoreRegion = "US" | "ES";

export type AmazonCulinaryCategoryType =
  | "pan"
  | "appliance"
  | "knife"
  | "scale"
  | "storage"
  | "baking"
  | "pantry";

export interface AmazonProductRecommendation {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  categoryType: AmazonCulinaryCategoryType;
  /** Direct ASIN on Amazon.com if fixed product */
  asinUS?: string;
  /** Direct ASIN on Amazon.es if fixed product */
  asinES?: string;
  /** Search query fallback or primary dynamic search on Amazon.com */
  queryUS: string;
  /** Search query fallback or primary dynamic search on Amazon.es */
  queryES: string;
  ctaLabel: string;
}

/**
 * Generates an official Amazon Affiliate link with automatic geolocation store support:
 * - Peru, USA & Latin America (US): amazon.com with tag=recetasdeperu-20
 * - Spain & Europe (ES): amazon.es with tag=recetasdeperu-21
 */
export function buildAmazonUrl(
  product: AmazonProductRecommendation,
  region: AmazonStoreRegion
): string {
  if (region === "ES") {
    if (product.asinES) {
      return `https://www.amazon.es/dp/${product.asinES}?tag=${AMAZON_TAG_ES}`;
    }
    const q = encodeURIComponent(product.queryES);
    return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_TAG_ES}`;
  }

  if (product.asinUS) {
    return `https://www.amazon.com/dp/${product.asinUS}?tag=${AMAZON_TAG_US}`;
  }
  const q = encodeURIComponent(product.queryUS);
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG_US}`;
}

/**
 * Detects whether the user is browsing from Spain/Europe or Peru/Americas
 * based on browser timezone and language locale.
 */
export function detectUserAmazonRegion(): AmazonStoreRegion {
  if (typeof window === "undefined") {
    return "US";
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();

    if (
      tz === "Europe/Madrid" ||
      tz === "Atlantic/Canary" ||
      tz === "Europe/Ceuta" ||
      lang === "es-es"
    ) {
      return "ES";
    }

    if (tz.startsWith("Europe/")) {
      return "ES";
    }

    return "US";
  } catch {
    return "US";
  }
}

// ============================================================================
// CURATED PERUVIAN CULINARY & KITCHENWARE CATALOG (AMAZON.COM & AMAZON.ES)
// ============================================================================

export const CATALOG = {
  WOK_CARBON_STEEL: {
    id: "wok-carbon-steel",
    badge: "🥢 El Secreto del Lomo Saltado y Chaufa",
    title: "Wok de Acero al Carbono de Fondo Plano (32 cm / 12.5\") para Fuego Alto e Inducción",
    subtitle:
      "Alcanza la temperatura de chifa para sellar carne jugosa, flamear con sillao y lograr el auténtico aroma ahumado 'Wok Hei'.",
    features: [
      "Acero al carbono profesional libre de químicos que calienta al instante sin aguar la carne",
      "Fondo plano estable compatible con hornillas de gas, vitrocerámica e inducción",
      "Mango ergonómico de madera fría al tacto ideal para saltear lomo, chaufa y tallarines",
    ],
    categoryType: "pan",
    queryUS: "flat bottom carbon steel wok 12.5 inch stir fry pan",
    queryES: "wok acero al carbono fondo plano 32 cm induccion gas",
    ctaLabel: "Ver wok en Amazon",
  } satisfies AmazonProductRecommendation,

  HIGH_POWER_BLENDER: {
    id: "high-power-blender",
    badge: "🌪️ Cremas y Ajíes 100% Sedosos",
    title: "Licuadora Profesional de Alta Potencia (1500W) con Vaso de Vidrio Termorresistente",
    subtitle:
      "Emulsiona salsa huancaína, ocopa arequipeña, ají de gallina, leche de tigre y pastas de ají sin dejar fibras ni grumos.",
    features: [
      "Jarra de vidrio borosilicato de 1.8L que no retiene olor a ajo, cebolla ni color de ají panca",
      "Cuchillas de acero inoxidable endurecido para triturar galletas, nueces, hielo y ajíes secos",
      "Control de velocidad variable + pulso para controlar el espesor exacto de tus cremas",
    ],
    categoryType: "appliance",
    queryUS: "professional high speed countertop blender glass jar 1500W",
    queryES: "batidora de vaso cristal 1500W profesional salsas smoothies",
    ctaLabel: "Ver licuadora en Amazon",
  } satisfies AmazonProductRecommendation,

  PERUVIAN_AJI_INSUMOS_PACK: {
    id: "peruvian-aji-insumos-pack",
    badge: "🇵🇪 Sazón Original del Perú en Casa",
    title: "Pack de Pastas e Insumos Peruanos Auténticos (Ají Amarillo, Ají Panca y Rocoto)",
    subtitle:
      "La base indispensable del aderezo peruano lista para usar en ají de gallina, anticuchos, causa limeña, seco y adobos.",
    features: [
      "Elaborados con ajíes cosechados en valles costeros del Perú con picor y aroma auténticos",
      "Frascos herméticos de larga duración: basta 1 o 2 cucharadas para transformar el aderezo",
      "Envío rápido a domicilio tanto en EE. UU. / Latinoamérica como en España y Europa",
    ],
    categoryType: "pantry",
    queryUS: "Peruvian aji amarillo paste aji panca Peru food ingredients",
    queryES: "pasta aji amarillo aji panca peruano productos peruanos",
    ctaLabel: "Ver insumos peruanos en Amazon",
  } satisfies AmazonProductRecommendation,

  PERUVIAN_CHICHA_MAIZ_PACK: {
    id: "peruvian-chicha-maiz-pack",
    badge: "🌽 Tradición Peruana Auténtica",
    title: "Maíz Morado Peruano Entero / Concentrado + Especias para Chicha y Mazamorra",
    subtitle:
      "Rico en antocianinas antioxidantes naturales: prepara chicha morada casera bien helada y mazamorra morada limeña.",
    features: [
      "Maíz morado andino seleccionado de pigmentación intensa y rendimiento familiar",
      "Ideal para hervir con cáscara de piña, manzana, membrillo, canela y clavo de olor",
      "El sabor exacto de las mesas y fiestas peruanas en cualquier ciudad del mundo",
    ],
    categoryType: "pantry",
    queryUS: "Peruvian purple corn maiz morado chicha morada Peru",
    queryES: "maiz morado peruano chicha morada mazamorra productos peruanos",
    ctaLabel: "Ver maíz morado en Amazon",
  } satisfies AmazonProductRecommendation,

  RICE_COOKER_MULTIFUNCTION: {
    id: "rice-cooker-multifunction",
    badge: "🍚 Arroz Graneado Perfecto Siempre",
    title: "Olla Arrocera Eléctrica Multifunción con Tazón Antiadherente y Vaporera",
    subtitle:
      "Logra el clásico arroz blanco peruano con ajo bien graneado, arroz para chaufa o guarniciones al vapor sin quemar el fondo.",
    features: [
      "Sensor térmico inteligente que pasa automáticamente a modo 'Mantener Caliente' al terminar",
      "Olla interior antiadherente libre de PFOA con marcas de agua exactas y fácil lavado",
      "Incluye bandeja vaporera para verduras, pescados o calentar tamales y humitas",
    ],
    categoryType: "appliance",
    queryUS: "electric rice cooker food steamer nonstick pot keep warm",
    queryES: "olla arrocera electrica vaporera antiadherente mantener caliente",
    ctaLabel: "Ver olla arrocera en Amazon",
  } satisfies AmazonProductRecommendation,

  DUTCH_OVEN_COCOTTE: {
    id: "dutch-oven-cocotte",
    badge: "🍲 Reina del Seco, Adobo y Arroz con Pollo",
    title: "Olla Cocotte de Hierro Fundido Esmaltado (5.5 Litros) con Tapa de Condensación",
    subtitle:
      "Concentra el aderezo y mantiene el calor uniforme en seco de cabrito, carapulcra, adobo arequipeño y arroz con pato.",
    features: [
      "Esmalte interior vitrificado que no altera la acidez de la chicha de jora ni del vinagre",
      "Tapa pesada que rocía los propios jugos sobre la carne para dejarla tierna como mantequilla",
      "Apta para cocina a gas, inducción, eléctrica y directamente al horno para gratinar o dorar",
    ],
    categoryType: "pan",
    queryUS: "enameled cast iron dutch oven 6 quart with lid",
    queryES: "olla cocotte hierro fundido esmaltado 5.5 litros",
    ctaLabel: "Ver olla de hierro en Amazon",
  } satisfies AmazonProductRecommendation,

  ELECTRIC_PRESSURE_COOKER: {
    id: "electric-pressure-cooker",
    badge: "⏱️ Menestras y Carnes en 70% Menos Tiempo",
    title: "Olla a Presión Eléctrica Programable 7-en-1 (Acero Inoxidable 5.7L / 6 Qt)",
    subtitle:
      "Ablanda frejoles para seco, pallares, patasca, mondongo, maíz morado y asado en una fracción del tiempo tradicional.",
    features: [
      "Combina olla a presión, olla de cocción lenta, arrocera, vaporera y función sofreír aderezo",
      "Olla interna de acero inoxidable 18/10 con fondo tricapa que nunca se pela ni oxida",
      "Más de 10 sistemas de seguridad y temporizador automático para cocinar sin vigilar",
    ],
    categoryType: "appliance",
    queryUS: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Quart",
    queryES: "Instant Pot olla a presion electrica programable 5.7L acero inoxidable",
    ctaLabel: "Ver olla a presión en Amazon",
  } satisfies AmazonProductRecommendation,

  CHEF_KNIFE_CEVICHE: {
    id: "chef-knife-ceviche",
    badge: "🔪 Cortes de Cevichería y Nikkei",
    title: "Cuchillo de Chef y Fileteador Profesional 20 cm (8\") — Acero de Alto Carbono VG-10",
    subtitle:
      "Filo de bisturí para cortar cubos de pescado de ceviche y láminas de tiradito de un solo trazo sin aplastar las fibras.",
    features: [
      "Ángulo de filo japonés de 15° que corta pescado fresco, cebolla en pluma fina y ají limo sin esfuerzo",
      "Hoja forjada de acero inoxidable de alto carbono resistente a la acidez del limón",
      "Mango ergonómico antideslizante perfectamente balanceado para uso intensivo",
    ],
    categoryType: "knife",
    queryUS: "professional chef knife 8 inch high carbon Damascus VG10 steel",
    queryES: "cuchillo chef profesional 20 cm acero damasco VG10 alto carbono",
    ctaLabel: "Ver cuchillo profesional en Amazon",
  } satisfies AmazonProductRecommendation,

  CITRUS_PRESS_INOX: {
    id: "citrus-press-inox",
    badge: "🍋 Jugo al Instante Sin Amargar",
    title: "Exprimidor Manual de Limón Sutil y Cítricos en Acero Inoxidable 304 Reforzado",
    subtitle:
      "Extrae el jugo justo del limón para tu ceviche, leche de tigre o pisco sour sin romper los aceites amargos de la cáscara.",
    features: [
      "Acero inoxidable macizo de grado alimenticio 100% resistente al ácido cítrico (no se descascara)",
      "Palanca ergonómica con filtro de semillas integrado para exprimir con una sola mano",
      "Apto para lavavajillas y garantizado para durar toda la vida en tu cocina",
    ],
    categoryType: "knife",
    queryUS: "heavy duty stainless steel lemon squeezer manual citrus press",
    queryES: "exprimidor limones manual acero inoxidable prensa citricos",
    ctaLabel: "Ver exprimidor inox en Amazon",
  } satisfies AmazonProductRecommendation,

  CUTTING_BOARD_PRO: {
    id: "cutting-board-pro",
    badge: "🛡️ Higiene Marina + Cuidado del Filo",
    title: "Set de Tablas de Cortar Profesionales con Canal de Jugos y Superficie Antibacteriana",
    subtitle:
      "Separa pescados y mariscos crudos de carnes y vegetales de zarza criolla evitando cualquier contaminación cruzada.",
    features: [
      "Superficie no porosa que no absorbe olor a pescado, ajo ni manchas de ají",
      "Borde antideslizante y canal perimetral para retener jugos de carnes y asados",
      "Protege el filo de tus cuchillos profesionales y se lava en segundos",
    ],
    categoryType: "knife",
    queryUS: "professional cutting board set juice groove non slip kitchen",
    queryES: "juego tablas de cortar cocina profesional canal jugo antideslizante",
    ctaLabel: "Ver tablas de corte en Amazon",
  } satisfies AmazonProductRecommendation,

  POTATO_RICER_CAUSA: {
    id: "potato-ricer-causa",
    badge: "🥔 Masa de Causa 100% Lisa Sin Grumos",
    title: "Prensa Papas Profesional de Acero Inoxidable con 3 Discos Intercambiables",
    subtitle:
      "El utensilio infaltable para prensar papa amarilla en caliente y lograr la textura sedosa de la causa limeña y papa rellena.",
    features: [
      "Construcción robusta 100% acero inoxidable que no se dobla al prensar papas o yucas firmes",
      "Incluye 3 discos (fino para causa y puré sedoso, medio y grueso para texturas rústicas)",
      "Mangos largos con cobertura de silicona antideslizante para prensar sin esfuerzo",
    ],
    categoryType: "pan",
    queryUS: "heavy duty stainless steel potato ricer 3 interchangeable discs",
    queryES: "prensa patatas acero inoxidable profesional 3 discos pure causa",
    ctaLabel: "Ver prensa papas en Amazon",
  } satisfies AmazonProductRecommendation,

  PLATING_RINGS_SET: {
    id: "plating-rings-set",
    badge: "🍽️ Emplatado de Restaurante Peruano",
    title: "Set de Aros y Moldes Emplatadores de Acero Inoxidable con Prensa Empujadora",
    subtitle:
      "Arma causas limeñas, arroz tapado, timbales de quinua y tartares con capas definidas y desmolde perfecto.",
    features: [
      "Acero inoxidable pulido de bordes suaves que desliza sin desarmar el relleno de palta y pollo",
      "Incluye empujador superior con mango para compactar y retirar el aro con precisión",
      "También sirve como cortador de masas para alfajores, empanadas y galletas",
    ],
    categoryType: "baking",
    queryUS: "stainless steel food rings cooking molds with pusher plating set",
    queryES: "aros de emplatar acero inoxidable con empujador moldes cocina",
    ctaLabel: "Ver aros emplatadores en Amazon",
  } satisfies AmazonProductRecommendation,

  OVEN_BOROSILICATE_DISH: {
    id: "oven-borosilicate-dish",
    badge: "🔥 Del Horno Directo a la Mesa",
    title: "Set de Fuentes Refractarias de Vidrio Borosilicato para Horno con Tapas Herméticas",
    subtitle:
      "Horneado dorado y parejo para pastel de papa arequipeño, rocoto relleno, lasañas criollas y budines.",
    features: [
      "Vidrio borosilicato templado que soporta altas temperaturas de horno sin agrietarse",
      "Paredes transparentes para vigilar el gratinado del queso paria o mozzarella",
      "Incluye tapas herméticas libres de BPA para guardar las porciones directo en la refrigeradora",
    ],
    categoryType: "baking",
    queryUS: "borosilicate glass baking dish set with lids rectangular casserole",
    queryES: "fuente horno cristal vidrio borosilicato rectangular con tapa",
    ctaLabel: "Ver fuentes de horno en Amazon",
  } satisfies AmazonProductRecommendation,

  INSTANT_MEAT_THERMOMETER: {
    id: "instant-meat-thermometer",
    badge: "🌡️ Punto Exacto en Caja China y Horno",
    title: "Termómetro Digital de Carnes de Lectura Instantánea (2 Segundos) con Sonda Inoxidable",
    subtitle:
      "Garantiza panceta jugosa con cuero galleta en caja china, pollo al cilindro a 74 °C y pavo navideño que nunca queda seco.",
    features: [
      "Sonda ultrafina de acero inoxidable con lectura precisa en 2 segundos",
      "Ideal también para medir aceite a 180 °C al freír picarones, calamares para jalea y yuquitas",
      "Pantalla iluminada, carcasa impermeable IP67 e imán integrado para la refrigeradora",
    ],
    categoryType: "scale",
    queryUS: "instant read digital meat thermometer waterproof kitchen probe",
    queryES: "termometro cocina digital lectura instantanea sonda carnes horno",
    ctaLabel: "Ver termómetro digital en Amazon",
  } satisfies AmazonProductRecommendation,

  BBQ_GRILL_GLOVES_SET: {
    id: "bbq-grill-gloves-set",
    badge: "🔥 Domina las Brasas con Seguridad",
    title: "Guantes Térmicos para Parrilla y Caja China (800 °C) + Set de Pinzas y Brocha en Acero Inox",
    subtitle:
      "Manipula bandejas de carbón al rojo vivo, rejillas de caja china, ganchos de cilindro y brochetas de anticucho sin quemarte.",
    features: [
      "Fibras de aramida con agarre de silicona antideslizante resistentes hasta 800 °C (1472 °F)",
      "Pinzas largas de acero inoxidable y brocha para barnizar anticuchos y carnes con ají panca",
      "Manga larga protectora de muñeca y antebrazo para parrillas, hornos y cilindros",
    ],
    categoryType: "pan",
    queryUS: "heat resistant BBQ grill gloves 1472F stainless steel grill tongs set",
    queryES: "guantes barbacoa resistentes al calor 800 grados pinzas acero inoxidable",
    ctaLabel: "Ver kit de brasas en Amazon",
  } satisfies AmazonProductRecommendation,

  MORTAR_BATAN_GRANITE: {
    id: "mortar-batan-granite",
    badge: "🪨 Textura Artesanal tipo Batán",
    title: "Mortero de Piedra Granito Natural Macizo (Estilo Batán Andino) de Gran Capacidad",
    subtitle:
      "Muele ajo criollo, comino, pimienta, huacatay y ají con maní para lograr la textura rústica auténtica de la uchucuta.",
    features: [
      "Granito 100% natural sin pulir en el interior para liberar los aceites esenciales de hierbas y especias",
      "Peso sólido y base antideslizante que no baila sobre la encimera al machacar",
      "No absorbe líquidos ni olores y dura generaciones enteras",
    ],
    categoryType: "knife",
    queryUS: "unpolished heavy granite mortar and pestle set large stone",
    queryES: "mortero piedra granito natural macizo grande cocina",
    ctaLabel: "Ver mortero de piedra en Amazon",
  } satisfies AmazonProductRecommendation,

  AIR_FRYER_XXL: {
    id: "air-fryer-xxl",
    badge: "⚡ #1 en Ventas · Crocante Sin Aceite",
    title: "Freidora de Aire Digital XXL (5.5L – 6.2L) con Convección 360° de Alta Velocidad",
    subtitle:
      "Prepara tequeños rellenos de queso, alitas anticucheras, chicharrón, yuquitas y papas nativas con 85% menos aceite.",
    features: [
      "Control digital exacto de temperatura (75 °C a 205 °C) con recordatorio de volteo",
      "Canasta familiar para 4 a 6 porciones con recubrimiento antiadherente libre de BPA/PFOA",
      "Ahorra tiempo y aceite logrando dorado parejo en minutos",
    ],
    categoryType: "appliance",
    queryUS: "Cosori Air Fryer 6 Qt XXL digital airfryer",
    queryES: "Cosori freidora de aire 5.5L XXL digital sin aceite",
    ctaLabel: "Ver freidora de aire en Amazon",
  } satisfies AmazonProductRecommendation,

  CERAMIC_NONSTICK_PAN: {
    id: "ceramic-nonstick-pan",
    badge: "🍳 Tacu Tacu y Frituras Sin Pegarse",
    title: "Sartén Antiadherente de Cerámica Saludable (26-28 cm) Libre de Teflón, PFAS y PFOA",
    subtitle:
      "Dora y voltea el tacu tacu con costra crocante, sella filetes de pescado, torrejas de verduras y tortillas con mínimo aceite.",
    features: [
      "Recubrimiento cerámico mineral antiadherente 100% libre de tóxicos a cualquier temperatura",
      "Base gruesa difusora apta para gas, inducción, eléctrica y horno",
      "Limpieza en segundos con solo pasar una esponja suave",
    ],
    categoryType: "pan",
    queryUS: "ceramic nonstick frying pan PFAS free healthy skillet 11 inch",
    queryES: "sarten ceramica sin teflon libre de PFAS PFOA induccion 28 cm",
    ctaLabel: "Ver sartén antiadherente en Amazon",
  } satisfies AmazonProductRecommendation,

  STAINLESS_TRIPLY_PAN: {
    id: "stainless-triply-pan",
    badge: "👨‍🍳 Aderezo Peruano Parejo Sin Quemar",
    title: "Sartén / Olla de Acero Inoxidable 18/10 Tricapa (Tri-Ply) con Fondo Difusor",
    subtitle:
      "Distribución térmica de borde a borde para caramelizar cebolla, ajo y ajíes del aderezo madre peruano a la perfección.",
    features: [
      "Construcción multicapa de acero inoxidable 18/10 con núcleo de aluminio térmico",
      "Ideal para desglasar los jugos del sellado con pisco, chicha de jora o caldo concentrado",
      "Indestructible, sin recubrimientos que se desgasten y apta para todo tipo de cocinas",
    ],
    categoryType: "pan",
    queryUS: "tri-ply stainless steel frying pan skillet 12 inch",
    queryES: "sarten acero inoxidable 18/10 tricapa profesional induccion",
    ctaLabel: "Ver sartén tricapa en Amazon",
  } satisfies AmazonProductRecommendation,

  STAND_MIXER_PLANETARY: {
    id: "stand-mixer-planetary",
    badge: "🍰 Suspiro, Picarones y Panadería",
    title: "Batidora Amasadora Planetaria (1200W–1500W) con Bol de Acero Inoxidable 5.5L",
    subtitle:
      "Monta el merengue al oporto firme del suspiro a la limeña, bate queques esponjosos y amasa panes regionales sin esfuerzo.",
    features: [
      "Incluye batidor de globo para merengues y chantilly, pala para tortas y gancho amasador",
      "Bol de acero inoxidable 304 de 5.5L con tapa antisalpicaduras y 6 velocidades",
      "Motor silencioso de alto torque para masas densas de pan chapla, wawa, brioche y turrón",
    ],
    categoryType: "baking",
    queryUS: "planetary stand mixer 5.5 quart stainless steel bowl bread baking",
    queryES: "amasadora batidora planetaria reposteria pan 5.5L acero inoxidable",
    ctaLabel: "Ver batidora planetaria en Amazon",
  } satisfies AmazonProductRecommendation,

  PRECISION_KITCHEN_SCALE: {
    id: "precision-kitchen-scale",
    badge: "⚖️ Exactitud en Gramos y Mililitros",
    title: "Báscula Digital de Cocina de Alta Precisión (1 g hasta 5 kg) en Acero Inoxidable",
    subtitle:
      "Pesa harinas, azúcar para almíbar, chancaca, colapez y porciones nutricionales al gramo exacto con función TARA.",
    features: [
      "Sensores de alta precisión para que tus postres, panes y dietas salgan idénticos siempre",
      "Cambia en 1 toque entre gramos (g), mililitros (ml), onzas (oz) y libras",
      "Plataforma higiénica de acero inoxidable ultradelgada fácil de guardar en cualquier cajón",
    ],
    categoryType: "scale",
    queryUS: "digital kitchen food scale grams and ounces stainless steel",
    queryES: "bascula cocina digital precision acero inoxidable gramos",
    ctaLabel: "Ver báscula digital en Amazon",
  } satisfies AmazonProductRecommendation,

  BAKING_MOLDS_SILICONE_KIT: {
    id: "baking-molds-silicone-kit",
    badge: "🧁 Desmolde Limpio Sin Pegarse",
    title: "Set de Moldes Desmontables Antiadherentes para Tortas, Cheesecakes y Postres Sin Horno",
    subtitle:
      "Cierre lateral hermético ideal para torta helada peruana, cheesecake de maracuyá, tres leches, crema volteada y queques.",
    features: [
      "Hebilla de liberación rápida en acero inoxidable para desmoldar postres fríos o horneados intactos",
      "Recubrimiento antiadherente libre de PFOA de doble capa y distribución uniforme de calor",
      "Incluye moldes de distintos diámetros + espátulas de silicona",
    ],
    categoryType: "baking",
    queryUS: "springform cake pan set nonstick leakproof cheesecake pans",
    queryES: "moldes desmontables reposteria tarta queso bizcocho antiadherentes",
    ctaLabel: "Ver moldes de repostería en Amazon",
  } satisfies AmazonProductRecommendation,

  COCKTAIL_SHAKER_PISCO: {
    id: "cocktail-shaker-pisco",
    badge: "🍸 Pisco Sour Catedral en Casa",
    title: "Set de Coctelera Profesional en Acero Inoxidable + Jigger Medidor, Colador y Mortero",
    subtitle:
      "Mide la proporción maestra (3 oz pisco, 1 oz limón, 1 oz jarabe) y logra la espuma firme del Pisco Sour y Chilcanos.",
    features: [
      "Coctelera de acero inoxidable 304 a prueba de fugas que enfría el cóctel en 12 segundos",
      "Incluye vaso medidor (Jigger) en onzas/ml, colador gusanillo (Hawthorne), cuchara de bar y muddler",
      "Ideal para Pisco Sour, Maracuyá Sour, Chilcano de Pisco, Capitán y Algarrobina",
    ],
    categoryType: "appliance",
    queryUS: "stainless steel cocktail shaker set bartender kit jigger strainer",
    queryES: "set coctelera acero inoxidable profesional jigger medidor bar",
    ctaLabel: "Ver set de coctelería en Amazon",
  } satisfies AmazonProductRecommendation,

  BOROSILICATE_PITCHER_CHICHA: {
    id: "borosilicate-pitcher-chicha",
    badge: "🍹 Resiste Hervor y Hielo Directo",
    title: "Jarra de Vidrio Borosilicato Termorresistente (2 Litros) con Tapa y Filtro en Acero Inoxidable",
    subtitle:
      "Vierte tu chicha morada, emoliente o infusión recién hervida sin que el vidrio se rompa y llévala directo a la refrigeradora.",
    features: [
      "Vidrio borosilicato soplado resistente a choques térmicos desde -20 °C hasta 150 °C",
      "Tapa de acero inoxidable 304 con doble salida (abierta y con filtro retenedor de frutas/hielo)",
      "Diseño esbelto que cabe en la puerta de la refrigeradora y luce impecable en la mesa",
    ],
    categoryType: "storage",
    queryUS: "borosilicate glass pitcher with stainless steel filter lid 68 oz",
    queryES: "jarra cristal vidrio borosilicato 2 litros tapa filtro acero inoxidable",
    ctaLabel: "Ver jarra térmica en Amazon",
  } satisfies AmazonProductRecommendation,

  GLASS_MEAL_PREP_CONTAINERS: {
    id: "glass-meal-prep-containers",
    badge: "🧊 #1 para Menú Semanal y Refrigeradora",
    title: "Set de Recipientes Herméticos de Vidrio Borosilicato (Tápers sin BPA para Horno y Freezer)",
    subtitle:
      "Organiza tu menú semanal económico, guarda aderezos base (ajo y ajíes) y conserva almuerzos frescos por más días.",
    features: [
      "Vidrio borosilicato que pasa directo del congelador al horno o microondas sin mancharse de ají",
      "Tapas con 4 cierres de presión y junta de silicona 100% a prueba de derrames en la mochila",
      "Mantiene el sabor intacto de guisos, arroces y ensaladas sin absorber olores de la refrigeradora",
    ],
    categoryType: "storage",
    queryUS: "glass meal prep containers airtight food storage borosilicate",
    queryES: "recipientes hermeticos cristal vidrio borosilicato tuppers horno nevera",
    ctaLabel: "Ver pack de tápers de vidrio en Amazon",
  } satisfies AmazonProductRecommendation,

  VACUUM_FOOD_SEALER: {
    id: "vacuum-food-sealer",
    badge: "❄️ Multiplica x5 la Frescura en Congeladora",
    title: "Envasadora al Vacío Doméstica para Alimentos (Secos y Húmedos) con Cortador y Rollos",
    subtitle:
      "Porciona tus compras del mercado, filetes de pescado, carnes marinadas y culantro licuado sin quemaduras por hielo.",
    features: [
      "Modo dual para alimentos secos y húmedos (guisos criollos, adobos, salsas y caldos)",
      "Ahorra en el presupuesto familiar comprando por mayor y conservando al vacío hasta 6 meses",
      "Sellado térmico hermético en segundos con cortador de bolsas integrado",
    ],
    categoryType: "storage",
    queryUS: "food vacuum sealer machine dry moist sous vide starter kit",
    queryES: "envasadora al vacio alimentos domestica bolsas humedos secos",
    ctaLabel: "Ver envasadora al vacío en Amazon",
  } satisfies AmazonProductRecommendation,

  ELECTRIC_LUNCH_BOX_OFFICE: {
    id: "electric-lunch-box-office",
    badge: "🍱 Almuerzo Casero Caliente en la Oficina",
    title: "Lonchera / Fiambrera Eléctrica Calentadora en Acero Inoxidable 304 (Oficina y Auto)",
    subtitle:
      "Calienta tu menú peruano casero en tu escritorio o vehículo sin hacer cola en el microondas y ahorrando todos los días.",
    features: [
      "Recipiente interior desmontable de acero inoxidable 18/10 fácil de lavar + envase para ensalada/fruta",
      "Incluye 2 cables: enchufe de pared (oficina/hogar) + conector 12V/24V para auto o camioneta",
      "Viene con maletín térmico de transporte y set de cubiertos de acero inoxidable",
    ],
    categoryType: "storage",
    queryUS: "electric heated lunch box stainless steel office car portable warmer",
    queryES: "fiambrera electrica acero inoxidable oficina coche tupper calentador",
    ctaLabel: "Ver lonchera eléctrica en Amazon",
  } satisfies AmazonProductRecommendation,

  FOOD_PROCESSOR_CHOPPER: {
    id: "food-processor-chopper",
    badge: "🥗 Sangrecita, Cebolla y Cremas en 5 Segundos",
    title: "Procesador de Alimentos y Picadora Eléctrica (500W) con Bol de Vidrio de 2 Litros",
    subtitle:
      "Pica cebolla roja en brunoise sin llorar, procesa mousse de sangrecita antianemia, hamburguesas de quinua y snacks.",
    features: [
      "Doble nivel de 4 cuchillas en acero inoxidable con 2 velocidades según textura deseada",
      "Bol de vidrio grueso higiénico que permite ver el tamaño exacto del picado",
      "Ideal para loncheras nutritivas infantiles, papillas ricas en hierro y aderezos rápidos",
    ],
    categoryType: "appliance",
    queryUS: "electric food chopper processor 2L glass bowl 500W stainless blades",
    queryES: "picadora electrica cocina procesador alimentos bol cristal 2L 500W",
    ctaLabel: "Ver procesador en Amazon",
  } satisfies AmazonProductRecommendation,

  SHAKER_BOTTLE_FUXION: {
    id: "shaker-bottle-fuxion",
    badge: "🥤 Mezcla Instantánea Sin Grumos",
    title: "Vaso Mezclador Shaker Antiderrames (700 ml) con Bola Batidora de Acero Inoxidable 316",
    subtitle:
      "El compañero ideal para disolver al instante tus bebidas funcionales FuXion frías, batidos proteicos y refrescos saludables.",
    features: [
      "Bola batidora quirúrgica que emulsiona polvos funcionales, proteínas y fibra en 5 segundos",
      "100% libre de BPA con tapa a rosca antiderrames y escala medidora grabada en ml y oz",
      "Asa de transporte ergonómica y boca ancha para agregar hielo y frutas picadas",
    ],
    categoryType: "storage",
    queryUS: "BlenderBottle Classic V2 Shaker Bottle Perfect for Protein Shakes 24 oz",
    queryES: "BlenderBottle vaso mezclador shaker bola acero inoxidable sin BPA",
    ctaLabel: "Ver vaso shaker en Amazon",
  } satisfies AmazonProductRecommendation,

  MILK_FROTHER_MATCHA: {
    id: "milk-frother-matcha",
    badge: "🍵 Espuma Cremosa en 15 Segundos",
    title: "Espumador Eléctrico Recargable USB en Acero Inoxidable con Soporte de Encimera",
    subtitle:
      "Disuelve y espuma al instante tus recetas con Matcha, tés funcionales calientes, cappuccinos y chocolates saludables.",
    features: [
      "Varilla doble de acero inoxidable 304 de alta velocidad que elimina cualquier grumo",
      "Batería recargable por USB-C de larga duración (sin gastar en pilas desechables)",
      "Incluye soporte metálico vertical y se limpia bajo el chorro de agua en 3 segundos",
    ],
    categoryType: "appliance",
    queryUS: "rechargeable handheld milk frother stainless steel whisk stand matcha",
    queryES: "espumador de leche electrico recargable USB acero inoxidable matcha",
    ctaLabel: "Ver espumador eléctrico en Amazon",
  } satisfies AmazonProductRecommendation,

  SILICONE_GUMMY_POPSICLE_MOLDS: {
    id: "silicone-gummy-popsicle-molds",
    badge: "🍧 Postres Funcionales y Helados en Casa",
    title: "Set de Moldes de Silicona Platino Sin BPA para Paletas Heladas, Gomitas y Bombones",
    subtitle:
      "Prepara gomitas funcionales de Flora Liv, paletas refrescantes sin azúcar, chocolates con proteína y postres saludables.",
    features: [
      "Silicona flexible 100% grado alimenticio para desmoldar gomitas y helados con un suave empujón",
      "Resiste desde -40 °C en congeladora hasta 230 °C en horno o microondas",
      "Reutilizable, antiadherente y apto para lavavajillas",
    ],
    categoryType: "baking",
    queryUS: "silicone popsicle molds and gummy candy molds BPA free food grade",
    queryES: "moldes silicona helados polos y gominolas sin BPA reposteria",
    ctaLabel: "Ver moldes de silicona en Amazon",
  } satisfies AmazonProductRecommendation,
};

// ============================================================================
// CONTEXTUAL RECOMMENDATION ENGINE FOR ALL 4,013 PAGES OF RECETASDEPERU.COM
// ============================================================================

/**
 * Given any of the 3,978 recipes/guides, 34 categories, or Home (slug, category, title),
 * returns the 3 highest-converting Amazon affiliate products tailored to that exact page.
 */
export function getContextualAmazonProducts(
  slug: string,
  category: string,
  title: string
): {
  sectionTitle: string;
  sectionSubtitle: string;
  products: [
    AmazonProductRecommendation,
    AmazonProductRecommendation,
    AmazonProductRecommendation,
  ];
} {
  const s = `${slug.toLowerCase()} ${title.toLowerCase()} ${category.toLowerCase()}`;

  // 1. FUXION RECIPES & FUNCTIONAL RECIPES (/fuxion/)
  if (category === "fuxion") {
    return {
      sectionTitle: "🍵 Utensilios Recomendados en Amazon para tus Recetas Funcionales",
      sectionSubtitle:
        "Prepara tus bebidas, postres ligeros, lattes de matcha y gomitas saludables en segundos con estos 3 accesorios:",
      products: [
        CATALOG.SHAKER_BOTTLE_FUXION,
        CATALOG.MILK_FROTHER_MATCHA,
        CATALOG.SILICONE_GUMMY_POPSICLE_MOLDS,
      ],
    };
  }

  // 2. CHIFA, NIKKEI & WOK STIR-FRY (/chifa-y-nikkei-casero/, lomo saltado, chaufa, tallarin saltado, aeropuerto, wok, kam lu, tipakay)
  if (
    category === "chifa-y-nikkei-casero" ||
    s.includes("lomo-saltado") ||
    s.includes("lomo saltado") ||
    s.includes("chaufa") ||
    s.includes("tallarin-saltado") ||
    s.includes("tallarín saltado") ||
    s.includes("aeropuerto") ||
    s.includes("chifa") ||
    s.includes("nikkei") ||
    s.includes("wok") ||
    s.includes("tipakay") ||
    s.includes("kam-lu")
  ) {
    return {
      sectionTitle: "🥢 Equipamiento Recomendado para Chifa, Lomo Saltado y Cocina Nikkei",
      sectionSubtitle:
        "Consigue el auténtico sabor ahumado de chifa ('Wok Hei'), cortes de precisión japonesa y arroz graneado en casa:",
      products: [
        CATALOG.WOK_CARBON_STEEL,
        CATALOG.CHEF_KNIFE_CEVICHE,
        CATALOG.RICE_COOKER_MULTIFUNCTION,
      ],
    };
  }

  // 3. CAJA CHINA, CILINDRO, BRASAS, ANTICUCHOS & SLOW OLLAS (/fuego-brasa-y-ollas/)
  if (
    category === "fuego-brasa-y-ollas" ||
    s.includes("caja-china") ||
    s.includes("caja china") ||
    s.includes("cilindro") ||
    s.includes("anticucho") ||
    s.includes("pachamanca") ||
    s.includes("pollo-a-la-brasa") ||
    s.includes("chancho-al-palo") ||
    s.includes("parrilla")
  ) {
    return {
      sectionTitle: "🔥 Equipamiento Esencial para Caja China, Cilindro, Brasas y Ollas",
      sectionSubtitle:
        "Controla la temperatura interna al grado exacto para lograr cuero galleta, jugosidad interior y manejo seguro del fuego:",
      products: [
        CATALOG.INSTANT_MEAT_THERMOMETER,
        CATALOG.BBQ_GRILL_GLOVES_SET,
        CATALOG.DUTCH_OVEN_COCOTTE,
      ],
    };
  }

  // 4. CEVICHE, TIRADITO, LECHE DE TIGRE, SEAFOOD & CUTS (/cortes-pescados-e-insumos/)
  if (
    category === "cortes-pescados-e-insumos" ||
    s.includes("ceviche") ||
    s.includes("cebiche") ||
    s.includes("tiradito") ||
    s.includes("leche-de-tigre") ||
    s.includes("leche de tigre") ||
    s.includes("jalea") ||
    s.includes("parihuela") ||
    s.includes("choritos") ||
    s.includes("sudado-de-pescado") ||
    s.includes("pescado") ||
    s.includes("marisco")
  ) {
    return {
      sectionTitle: "🐟 Utensilios de Cevichería Profesional para Pescados, Cortes y Limón",
      sectionSubtitle:
        "Corta cubos limpios sin desgarrar el pescado y exprime el limón sutil en el punto exacto sin amargar la leche de tigre:",
      products: [
        CATALOG.CHEF_KNIFE_CEVICHE,
        CATALOG.CITRUS_PRESS_INOX,
        CATALOG.CUTTING_BOARD_PRO,
      ],
    };
  }

  // 5. PERUVIANS IN THE WORLD (/peruanos-en-el-mundo/)
  if (
    category === "peruanos-en-el-mundo" ||
    s.includes("extranjero") ||
    s.includes("miami") ||
    s.includes("madrid") ||
    s.includes("sustituto") ||
    s.includes("reemplazo")
  ) {
    return {
      sectionTitle: "🌎 Insumos y Utensilios Peruanos con Envío Directo en Amazon",
      sectionSubtitle:
        "Cocina con el sabor exacto de casa estés donde estés: pastas de ají amarillo y ají panca originales, maíz morado y licuadora de alta potencia:",
      products: [
        CATALOG.PERUVIAN_AJI_INSUMOS_PACK,
        CATALOG.PERUVIAN_CHICHA_MAIZ_PACK,
        CATALOG.HIGH_POWER_BLENDER,
      ],
    };
  }

  // 6. SALSAS, CREMAS & CONDIMENTOS (/salsas/, /condimentos/, huancaina, ocopa, aji de gallina, tari, uchucuta)
  if (
    category === "salsas" ||
    category === "condimentos" ||
    s.includes("huancaina") ||
    s.includes("huancaína") ||
    s.includes("ocopa") ||
    s.includes("aji-de-gallina") ||
    s.includes("ají de gallina") ||
    s.includes("uchucuta") ||
    s.includes("salsa-de-rocoto") ||
    s.includes("crema-de-aji") ||
    s.includes("aderezo")
  ) {
    return {
      sectionTitle: "🫕 Los 3 Imprescindibles para Salsas, Cremas de Ají y Aderezos Peruanos",
      sectionSubtitle:
        "Logra una huancaína, ocopa o crema de rocoto 100% aterciopelada con licuadora de vidrio, pastas de ají peruano y mortero de piedra:",
      products: [
        CATALOG.HIGH_POWER_BLENDER,
        CATALOG.PERUVIAN_AJI_INSUMOS_PACK,
        CATALOG.MORTAR_BATAN_GRANITE,
      ],
    };
  }

  // 7. ARROZ (/arroz/, arroz con pollo, arroz con pato, arroz con mariscos, tacu tacu, arroz tapado)
  if (
    category === "arroz" ||
    s.includes("arroz-con-pollo") ||
    s.includes("arroz-con-pato") ||
    s.includes("arroz-con-mariscos") ||
    s.includes("arroz-tapado") ||
    s.includes("tacu-tacu") ||
    s.includes("tacu tacu") ||
    s.includes("aguadito")
  ) {
    return {
      sectionTitle: "🍚 Equipamiento Recomendado para Arroces Peruanos Graneados y Tacu Tacu",
      sectionSubtitle:
        "Que nunca se pegue ni se pase de cocción: olla arrocera inteligente, cocotte de hierro fundido y sartén antiadherente de cerámica:",
      products: [
        CATALOG.RICE_COOKER_MULTIFUNCTION,
        CATALOG.DUTCH_OVEN_COCOTTE,
        CATALOG.CERAMIC_NONSTICK_PAN,
      ],
    };
  }

  // 8. PAPA, CAUSA LIMEÑA, PAPA RELLENA & ROCOTO RELLENO (/papa/)
  if (
    category === "papa" ||
    s.includes("causa-limena") ||
    s.includes("causa limeña") ||
    s.includes("papa-rellena") ||
    s.includes("pastel-de-papa") ||
    s.includes("rocoto-relleno") ||
    s.includes("ocopa") ||
    s.includes("pure-de-papa")
  ) {
    return {
      sectionTitle: "🥔 Utensilios para Causa Limeña, Papa Rellena y Pastel de Papa Perfectos",
      sectionSubtitle:
        "Prensa la papa amarilla en caliente sin un solo grumo, emplata como chef profesional y hornea con dorado uniforme:",
      products: [
        CATALOG.POTATO_RICER_CAUSA,
        CATALOG.PLATING_RINGS_SET,
        CATALOG.OVEN_BOROSILICATE_DISH,
      ],
    };
  }

  // 9. ELECTRODOMÉSTICOS, FREIDORA DE AIRE & SARTÉN (/electrodomesticos/, /sarten/)
  if (
    category === "electrodomesticos" ||
    category === "sarten" ||
    s.includes("freidora-de-aire") ||
    s.includes("air-fryer") ||
    s.includes("sarten") ||
    s.includes("sartén") ||
    s.includes("microondas")
  ) {
    return {
      sectionTitle: "⚡ Los 3 Electrodomésticos y Sartenes Más Vendidos para tu Cocina",
      sectionSubtitle:
        "Cocina más rápido, sin que nada se pegue y con un 85% menos de aceite usando equipamiento de alta durabilidad en Amazon:",
      products: [
        CATALOG.AIR_FRYER_XXL,
        CATALOG.CERAMIC_NONSTICK_PAN,
        CATALOG.ELECTRIC_PRESSURE_COOKER,
      ],
    };
  }

  // 10. POSTRES, POSTRES SIN HORNO, PAN & DULCES DE CONVENTO (/postres/, /postres-sin-horno/, /pan/, /panaderia-regional-y-dulces-de-convento/)
  if (
    category === "postres" ||
    category === "postres-sin-horno" ||
    category === "pan" ||
    category === "panaderia-regional-y-dulces-de-convento" ||
    s.includes("suspiro") ||
    s.includes("picaron") ||
    s.includes("picarón") ||
    s.includes("mazamorra") ||
    s.includes("arroz-con-leche") ||
    s.includes("turron") ||
    s.includes("turrón") ||
    s.includes("alfajor") ||
    s.includes("crema-volteada") ||
    s.includes("torta-helada") ||
    s.includes("queque") ||
    s.includes("postre")
  ) {
    return {
      sectionTitle: "🍰 Los 3 Esenciales de Repostería y Panadería Peruana en Amazon",
      sectionSubtitle:
        "Logra el merengue firme del suspiro a la limeña, masas esponjosas y desmoldes impecables con precisión al gramo:",
      products: [
        CATALOG.STAND_MIXER_PLANETARY,
        CATALOG.PRECISION_KITCHEN_SCALE,
        CATALOG.BAKING_MOLDS_SILICONE_KIT,
      ],
    };
  }

  // 11. PISCO, COCTELERÍA, CHICHA MORADA, BEBIDAS & SMOOTHIES (/pisco-cocteleria-y-bebidas-calientes/, /bebidas/, /bebidas-refrescantes-y-smoothies/)
  if (
    category === "pisco-cocteleria-y-bebidas-calientes" ||
    category === "bebidas" ||
    category === "bebidas-refrescantes-y-smoothies" ||
    s.includes("pisco-sour") ||
    s.includes("pisco sour") ||
    s.includes("chilcano") ||
    s.includes("algarrobina") ||
    s.includes("chicha-morada") ||
    s.includes("emoliente") ||
    s.includes("smoothie") ||
    s.includes("jugo")
  ) {
    return {
      sectionTitle: "🍸 Equipamiento para Pisco Sour, Chicha Morada, Emolientes y Smoothies",
      sectionSubtitle:
        "Prepara cócteles con espuma de bar, hervidos de maíz morado en jarra térmica y batidos cremosos en casa:",
      products: [
        CATALOG.COCKTAIL_SHAKER_PISCO,
        CATALOG.BOROSILICATE_PITCHER_CHICHA,
        CATALOG.HIGH_POWER_BLENDER,
      ],
    };
  }

  // 12. REFRIGERADORA, CONSERVACIÓN, MENÚS SEMANALES & LONCHERAS (/refrigeradora/, /menus-y-presupuesto/)
  if (
    category === "refrigeradora" ||
    category === "menus-y-presupuesto" ||
    s.includes("conservar") ||
    s.includes("congelar") ||
    s.includes("refrigerador") ||
    s.includes("menu-semanal") ||
    s.includes("menú semanal") ||
    s.includes("lonchera") ||
    s.includes("presupuesto")
  ) {
    return {
      sectionTitle: "🧊 Equipamiento para Conservación, Menú Semanal y Lonchera Caliente",
      sectionSubtitle:
        "Ahorra tiempo y dinero organizando tus comidas de lunes a viernes en envases de vidrio herméticos y sellado al vacío:",
      products: [
        CATALOG.GLASS_MEAL_PREP_CONTAINERS,
        CATALOG.VACUUM_FOOD_SEALER,
        CATALOG.ELECTRIC_LUNCH_BOX_OFFICE,
      ],
    };
  }

  // 13. NUTRICIÓN, ANTIANEMIA, SIN CALORÍAS, DESAYUNOS FRÍOS & SNACKS (/nutricion-y-dietas-peruanas/, /sincalorias/, /desayunos-frios/, /snacks-crudos/)
  if (
    category === "nutricion-y-dietas-peruanas" ||
    category === "sincalorias" ||
    category === "desayunos-frios" ||
    category === "snacks-crudos" ||
    s.includes("antianemia") ||
    s.includes("sangrecita") ||
    s.includes("diabetico") ||
    s.includes("diabético") ||
    s.includes("quinua") ||
    s.includes("saludable")
  ) {
    return {
      sectionTitle: "🩺 Utensilios Recomendados para Cocina Nutritiva, Antianemia y Saludable",
      sectionSubtitle:
        "Procesa mousse de sangrecita y desayunos ricos en hierro, mide porciones exactas y cocina sin aceite añadido:",
      products: [
        CATALOG.FOOD_PROCESSOR_CHOPPER,
        CATALOG.PRECISION_KITCHEN_SCALE,
        CATALOG.AIR_FRYER_XXL,
      ],
    };
  }

  // 14. RESCATE CULINARIO, TÉCNICAS, BANQUETES FESTIVOS, PLATOS TÍPICOS, REGIONES, RUTAS & HOME
  return {
    sectionTitle: "🇵🇪 Los 3 Esenciales para Equipar tu Cocina Peruana en Casa (Amazon)",
    sectionSubtitle:
      "Logra el aderezo madre perfecto, guisos tiernos a fuego lento, saltados al wok y cremas de ají sedosas como en los mejores restaurantes del Perú:",
    products: [
      CATALOG.WOK_CARBON_STEEL,
      CATALOG.HIGH_POWER_BLENDER,
      CATALOG.DUTCH_OVEN_COCOTTE,
    ],
  };
}
