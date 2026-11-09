/**
 * Categoría 3: peruanos-en-el-mundo (90 artículos)
 * Categoría 4: menus-y-presupuesto (100 artículos)
 * Total: 190 semillas.
 */

const WORLD_CITIES = [
  { city: "Miami (Florida, EE. UU.)", flag: "🇺🇸", shops: "Sedano's, Presidente, Publix, Bravo Supermarkets y tiendas peruanas en Kendall/Doral/Hialeah", sub: "Ají amarillo congelado Goya/Belmont o mezcla de Yellow Bell Pepper + Habanero sin venas (80/20)", cut: "Beef Tenderloin o Sirloin Flap Meat para Lomo Saltado · Corvina / Mahi-Mahi / Snapper para Ceviche", curr: "USD ($)" },
  { city: "Paterson y Nueva Jersey (EE. UU.)", flag: "🇺🇸", shops: "Market Street (Little Lima en Paterson), ShopRite, Compare Foods y H-Mart", sub: "Pasta de Ají Panca/Amarillo Inca's Food en pasillo hispano o Guajillo + Ancho deshidratados", cut: "Chuck Roast para Seco de Res · Flank Steak / Skirt Steak para Bistec a lo Pobre", curr: "USD ($)" },
  { city: "Nueva York y Queens (EE. UU.)", flag: "🇺🇸", shops: "Food Bazaar (Jackson Heights / Corona), Key Food, Whole Foods y mercados asiáticos de Flushing", sub: "Queso Fresco Tropical / Cacique para Huancaína · Yukon Gold Potatoes como sustituto de Papa Amarilla", cut: "Sea Bass / Fluke / Halibut fresco para Ceviche y Tiradito", curr: "USD ($)" },
  { city: "Los Ángeles y California (EE. UU.)", flag: "🇺🇸", shops: "Vallarta Supermarkets, Northgate Market, 99 Ranch Market y Ralphs", sub: "Cilantro + gotas de menta y albahaca si no hay Huacatay fresco · Hominy gigante (Mote) en Vallarta", cut: "Tri-Tip o Top Sirloin en tiras para Lomo Saltado · Rock Cod / Halibut para Jalea y Ceviche", curr: "USD ($)" },
  { city: "Houston y Dallas (Texas, EE. UU.)", flag: "🇺🇸", shops: "Fiesta Mart, H-E-B, El Rancho Supermercado y Hong Kong Food Market", sub: "Chile Manzano amarillo fresco (idéntico al Rocoto serrano, se vende en Fiesta y H-E-B)", cut: "Beef Shank con hueso para Sancochado y Caldo · Brisket / Chuck para Asado Peruano", curr: "USD ($)" },
  { city: "Chicago y Medio Oeste (EE. UU.)", flag: "🇺🇸", shops: "Cermak Fresh Market, Tony's Fresh Market, Pete's Fresh Market y Jewel-Osco", sub: "Pasta de ají peruano importada en Cermak o pimiento amarillo asado con toque de chile güero", cut: "Pork Belly con piel en mercados asiáticos para Chancho a la Caja China o Chicharrón", curr: "USD ($)" },
  { city: "Washington D.C., Virginia y Maryland (EE. UU.)", flag: "🇺🇸", shops: "Megamart, Todos Supermarket, Lotte Plaza Market y H-Mart (Annandale/Rockville)", sub: "En Lotte y H-Mart encuentras pescado grado sashimi, taro, yuca, maíz morado y pastas peruanas", cut: "Striped Bass (Róbalo) o Red Snapper entero para Sudado y Parihuela", curr: "USD ($)" },
  { city: "Madrid (España)", flag: "🇪🇸", shops: "Mercado de los Mostenses, Mercado de Maravillas (Tetuán), Carrefour y Mercadona", sub: "Queso de Burgos + un toque de Queso Feta para Huancaína · Ñora + Pimiento Choricero si falta Ají Panca", cut: "Solomillo o Babilla/Cadera de ternera para Lomo Saltado · Corvina, Lubina o Merluza fresca para Ceviche", curr: "EUR (€)" },
  { city: "Barcelona (España)", flag: "🇪🇸", shops: "Mercat de la Boqueria, Mercat de Sant Antoni, Condis, Bonpreu y tiendas latinas de Sants/Hospitalet", sub: "Patata Monalisa o Kennebec para Causa Limeña · Poniendo un 20% de yema cocida logras la textura Tumbay", cut: "Morcillo / Jarrete de ternera para Seco · Rape, Corvina o Dorada para Arroz con Mariscos y Ceviche", curr: "EUR (€)" },
  { city: "Valencia, Sevilla y Málaga (España)", flag: "🇪🇸", shops: "Mercado Central de Valencia, Mercadona, Consum y tiendas latinas de barrio", sub: "Garrofó valenciano tierno como excelente reemplazo del Pallar Verde de Ica para guisos y picantes", cut: "Aguja de ternera para guisos criollos · Sepia y Calamar fresco en vez de Pota para Chicharrón Marino", curr: "EUR (€)" },
  { city: "Santiago de Chile (Chile)", flag: "🇨🇱", shops: "La Vega Central (Recoleta), Tirso de Molina, Terminal Pesquero Metropolitano, Jumbo y Lider", sub: "En La Vega Central encuentras Ají Amarillo, Rocoto, Huacatay, Maíz Morado y Limón Sutil peruano fresco todo el año", cut: "Lomo Vetado o Lomo Liso para Lomo Saltado · Reineta, Corvina o Congrio para Ceviche y Chicharrón", curr: "CLP ($)" },
  { city: "Buenos Aires (Argentina)", flag: "🇦🇷", shops: "Mercado de Liniers, Barrio del Abasto, Barrio Chino de Belgrano, Coto y Jumbo", sub: "Ají locoto en verdulerías bolivianas/peruanas de Liniers · Queso Cremoso / Cuartirolo firme para Huancaína", cut: "Lomo o Bola de Lomo / Cuadril para Lomo Saltado · Roast Beef o Tortuguita para Seco · Lenguado o Mero en pescaderías", curr: "ARS ($)" },
  { city: "Milán, Roma y Turín (Italia)", flag: "🇮🇹", shops: "Mercato Centrale, Esselunga, Conad, Carrefour Italia y tiendas étnicas de Via Padova (Milán) o Esquilino (Roma)", sub: "Primo Sale o Ricotta Romana salada para Huancaína · Patata a pasta gialla para Causa · Peperoncino giallo", cut: "Filetto o Scamone di manzo para Lomo Saltado · Branzino (Lubina) o Orata (Dorada) para Ceviche", curr: "EUR (€)" },
  { city: "París y Lyon (Francia)", flag: "🇫🇷", shops: "Quartier Latin, Tang Frères (13e), Carrefour, Monoprix y tiendas latinas de Belleville", sub: "Fromage Frais salé / Feta doux para Huancaína · Pomme de terre Bintje o Agata para Causa y Papa Rellena", cut: "Filet de bœuf o Rumsteck para Lomo Saltado · Bar (Róbalo), Cabillaud o Dorade para Ceviche", curr: "EUR (€)" },
  { city: "Londres (Reino Unido)", flag: "🇬🇧", shops: "Elephant & Castle, Seven Sisters (Latin Village), Tesco, Sainsbury's y Waitrose", sub: "Maris Piper o King Edward Potatoes para Causa y Papas Fritas de Pollería · Paneer suave + leche evaporada para Huancaína", cut: "Beef Fillet o Sirloin Steak para Lomo Saltado · Sea Bass o Cod Loin ultra fresco para Ceviche", curr: "GBP (£)" },
  { city: "Berlín, Múnich y Fráncfort (Alemania)", flag: "🇩🇪", shops: "REWE, Edeka, Kaufland, mercados turcos/asiáticos y tiendas latinas (Chilees / Hola Latino)", sub: "Kartoffeln (Mehligkochend - harinosas) para Causa y Puré · Hirtenkäse suave desalado para Huancaína", cut: "Rinderfilet o Hüftsteak para Lomo Saltado · Kabeljau o Wolfsbarsch en pescaderías para Ceviche", curr: "EUR (€)" },
  { city: "Tokio, Nagoya y Hamamatsu (Japón)", flag: "🇯🇵", shops: "Don Quijote, Gyomu Super, Ameyoko (Ueno) y bodegas peruanas/brasileñas en Shizuoka, Gunma y Aichi", sub: "En Japón el pescado grado sashimi (Tai / Suzuki / Hirame) hace el mejor Ceviche y Tiradito Nikkei del mundo", cut: "Gyu Hire (Lomo) para Lomo Saltado · Daikon encurtido y Kabocha (idéntico al Zapallo Macre peruano)", curr: "JPY (¥)" },
  { city: "Toronto, Montreal y Vancouver (Canadá)", flag: "🇨🇦", shops: "Kensington Market (Toronto), Marché Jean-Talon (Montreal), T&T Supermarket, Loblaws y No Frills", sub: "Yukon Gold canadiense (cremosa y amarilla para Causa) · Queso Fresco en Kensington Market o T&T", cut: "Beef Tenderloin / Striploin para Lomo Saltado · Halibut del Pacífico o Snapper para Ceviche", curr: "CAD ($)" },
  { city: "Sídney y Melbourne (Australia)", flag: "🇦🇺", shops: "Sydney Fish Market, Queen Victoria Market, Coles, Woolworths y tiendas latinas de Fairfield/CBD", sub: "Sebago o Desiree Potatoes · Kingfish, Snapper o Barramundi del Sydney Fish Market para Ceviche y Tiradito", cut: "Eye Fillet o Porterhouse para Lomo Saltado · Chuck Steak para Seco con Frejoles", curr: "AUD ($)" },
  { city: "Ciudad de México, Bogotá y São Paulo (Latam)", flag: "🌎", shops: "Mercado de Medellín (CDMX), Paloquemao (Bogotá), Mercado Municipal (SP), Walmart y Carulla", sub: "En CDMX el Chile Manzano amarillo es el mismo Rocoto andino · En Bogotá la Papa Criolla es hermana directa de la Papa Amarilla", cut: "Filete de Res / Lomo Viche para Lomo Saltado · Róbalo, Corvina o Sierra para Ceviche", curr: "Moneda Local" }
];

const INGREDIENT_SUBSTITUTIONS = [
  { slug: "con-que-reemplazar-el-aji-amarillo-peruano-en-el-extranjero-proporciones-exactas", title: "Con Qué Reemplazar el Ají Amarillo Peruano en el Extranjero: 4 Fórmulas Caseras que Clonan su Color y Sabor", item: "Ají Amarillo (Escabeche)", sub: "80% Pimiento Amarillo o Naranja asado y pelado + 20% Chile Habanero/Manzano amarillo sin venas ni semillas + 1 pizca de cúrcuma", dish: "Ají de Gallina, Causa Limeña, Papa a la Huancaína y Tiradito" },
  { slug: "sustituto-del-aji-panca-en-estados-unidos-espana-y-europa-como-hacer-la-pasta", title: "Sustituto Exacto del Ají Panca fuera del Perú: Cómo Combinar Chiles Secos para Anticuchos, Adobo y Carapulcra", item: "Ají Panca Colorado", sub: "60% Chile Guajillo seco hidratado + 40% Chile Ancho o Ñora española + 1/2 cdta de pimentón ahumado dulce", dish: "Anticuchos, Adobo Arequipeño, Carapulcra y Chancho al Horno" },
  { slug: "sustituto-del-aji-mirasol-seco-como-reemplazarlo-o-deshidratar-aji-en-casa", title: "Con Qué Reemplazar el Ají Mirasol Peruano o Cómo Deshidratar Ají Amarillo en tu Horno o Airfryer", item: "Ají Mirasol Deshidratado", sub: "Deshidratar ají amarillo fresco a 65 °C por 4 horas o usar pasta de ají amarillo reducida a fuego lento con un toque de orejones secos", dish: "Seco de Res, Cau Cau, Locro de Zapallo y Chupe de Camarones" },
  { slug: "con-que-reemplazar-el-huacatay-fresco-para-hacer-ocopa-y-aji-de-polleria", title: "Con Qué Reemplazar el Huacatay si Vives en el Extranjero: La Mezcla de 3 Hierbas que Engaña hasta a un Peruano", item: "Huacatay (Menta Negra Andina)", sub: "50% hojas de Cilantro (Culantro) + 30% hojas de Hierbabuena/Menta + 20% Albahaca fresca + ralladura mínima de lima", dish: "Ocopa Arequipeña, Ají de Pollería, Pachamanca y Sopa Chairo" },
  { slug: "que-queso-usar-para-papa-a-la-huancaina-y-ocopa-en-estados-unidos-espana-y-europa", title: "Qué Queso Usar para Papa a la Huancaína en EE. UU., España y Europa cuando No Hay Queso Fresco Serrano", item: "Queso Fresco Serrano / Paria", sub: "En EE. UU.: Queso Fresco Tropical/Cacique · En España/Europa: 70% Queso de Burgos o Ricotta firme + 30% Queso Feta desalado en agua 20 min", dish: "Papa a la Huancaína, Ocopa, Choclo con Queso y Solterito" },
  { slug: "que-papa-usar-para-causa-limena-y-papa-rellena-en-estados-unidos-espana-y-chile", title: "Qué Variedad de Papa Comprar en Estados Unidos, España o Europa para Causa Limeña y Papa Rellena sin que se Desarme", item: "Papa Amarilla Tumbay / Huayro", sub: "En EE. UU./Canadá: Yukon Gold (para Causa) + Russet (para Papa Rellena) · En España: Patata Monalisa o Kennebec cocida al vapor con piel", dish: "Causa Limeña, Papa Rellena, Puré Peruano y Pastel de Papa" },
  { slug: "con-que-reemplazar-la-chicha-de-jora-en-el-seco-de-res-cabrito-y-arroz-con-pollo", title: "Sustituto de la Chicha de Jora en la Cocina Peruana: Qué Líquido Usar para no Perder la Acidez del Seco y Arroz con Pollo", item: "Chicha de Jora Fermentada", sub: "1 taza de Cerveza Rubia artesanal o Lager + 1 cucharada de vinagre de manzana o sidra + 1 cucharadita de chancaca/panela rallada", dish: "Seco de Cabrito, Seco de Res, Arroz con Pato y Adobo" },
  { slug: "con-que-reemplazar-el-zapallo-loche-y-el-zapallo-macre-fuera-del-peru", title: "Con Qué Reemplazar el Zapallo Macre y el Zapallo Loche fuera del Perú: Kabocha, Butternut y Calabaza", item: "Zapallo Macre y Zapallo Loche", sub: "Kabocha Squash (calabaza japonesa de cáscara verde) tiene la misma textura harinosa y dulzor que el Macre; agrega una pizca de culantro y maní para simular el Loche", dish: "Locro de Zapallo, Picarones, Sancochado y Arroz con Pato" },
  { slug: "que-pescado-comprar-para-ceviche-peruano-en-estados-unidos-espana-y-europa", title: "Guía de Pescados para Hacer Ceviche Peruano en EE. UU. y Europa: Nombres en Inglés y Español de Filetes Firmes", item: "Corvina, Lenguado y Mero Peruano", sub: "EE. UU.: Corvina, Halibut, Red Snapper, Mahi-Mahi (Perico) o Sea Bass · España: Corvina salvaje, Lubina, Dorada, Merluza de pincho o Rape", dish: "Ceviche Clásico, Tiradito, Leche de Tigre y Sudado" },
  { slug: "nombres-de-los-cortes-de-carne-en-estados-unidos-y-espana-para-platos-peruanos", title: "Diccionario de Cortes de Carne en EE. UU. (Inglés) y España para Cocinar Lomo Saltado, Seco, Asado y Sancochado", item: "Cortes de Res Peruanos en el Extranjero", sub: "Lomo Fino = Beef Tenderloin / Solomillo · Cadera = Top Sirloin / Babilla · Asado de Tira = Short Ribs / Churrasco · Pejerrey = Eye of Round / Redondo", dish: "Lomo Saltado, Seco con Frejoles, Asado con Puré y Estofado" },
  { slug: "como-hacer-queso-fresco-peruano-y-quesillo-cajamarquino-en-casa-con-leche-entera", title: "Cómo Hacer Queso Fresco Serrano y Quesillo en Casa con Solo 3 Ingredientes si Vives en el Extranjero", item: "Queso Fresco Casero", sub: "4 litros de leche entera pasteurizada (no UHT), cuajo líquido o jugo de limón/vinagre blanco y sal marina", dish: "Choclo con Queso, Caldo Verde, Huancaína y Papa con Queso" },
  { slug: "con-que-reemplazar-el-aji-limo-y-el-rocoto-en-el-ceviche-si-no-hay-en-tu-ciudad", title: "Con Qué Reemplazar el Ají Limo y el Rocoto para el Ceviche fuera del Perú sin Alterar el Aroma Cítrico", item: "Ají Limo y Rocoto", sub: "Para Ají Limo: Chile Habanero rojo/amarillo o Scotch Bonnet frotado solo por el borde del bol · Para Rocoto: Chile Manzano (idéntico, semillas negras)", dish: "Ceviche Peruano, Leche de Tigre y Rocoto Relleno" },
  { slug: "que-limon-usar-para-ceviche-fuera-del-peru-key-lime-vs-persian-lime", title: "Qué Limón Usar para Ceviche Peruano en el Extranjero: Key Lime (Limón Mexicano) vs. Lima Persa", item: "Limón Sutil de Chulucanas/Olmos", sub: "Usa Key Limes (Limón Mexicano pequeño de cáscara delgada) exprimidos a un solo apretón al 70% para evitar el amargor del albedo blanco", dish: "Ceviche, Tiradito, Chilcano de Pisco y Leche de Tigre" },
  { slug: "con-que-reemplazar-el-chuno-la-harina-de-camote-y-la-chancaca-en-el-extranjero", title: "Sustitutos de la Chancaca, Chuño y Harina de Camote en el Extranjero para Mazamorra Morada y Picarones", item: "Chancaca, Chuño y Harina de Camote", sub: "Chancaca = Panela / Piloncillo mexicano · Chuño = Potato Starch (Fécula de papa, muy común en supermercados kosher/asiáticos)", dish: "Mazamorra Morada, Miel de Picarones, Turrón y Lomo Saltado" },
  { slug: "como-hacer-chicha-morada-en-el-extranjero-con-maiz-seco-o-polvo-de-maiz-morado-puro", title: "Cómo Preparar Chicha Morada Auténtica en el Extranjero con Maíz Morado Seco: Tiempos para Extraer Todo el Color", item: "Maíz Morado Seco de Exportación", sub: "Remojar la coronta partida desde la noche anterior y hervir 60 minutos con cáscara de piña, manzana, membrillo, canela y clavo", dish: "Chicha Morada, Mazamorra Morada y Chicha Sour" },
  { slug: "con-que-reemplazar-el-choclo-peruano-de-grano-grande-y-como-preparar-cancha-chulpi", title: "Dónde Encontrar Choclo Peruano Gigante y Maíz Chulpi para Cancha en EE. UU. y Europa (Y Cómo Tostarla)", item: "Choclo Cusco y Maíz Chulpi", sub: "Busca 'Giant White Corn / Choclo Desgranado' en la sección de congelados hispanos y hiérvelo con 1 cdta de azúcar y gotas de limón y anís", dish: "Ceviche, Pepián de Choclo, Pastel de Choclo y Cancha Serrana" },
  { slug: "con-que-reemplazar-la-pota-gigante-peruana-en-espana-estados-unidos-y-europa", title: "Con Qué Reemplazar la Pota Peruana en el Extranjero para Hacer Chicharrón de Pota y Jalea Carretillera", item: "Pota (Calamar Gigante del Pacífico)", sub: "Sepia grande, Tubo de Calamar limpio (Squid Tubes) o Rejos de Potón cocidos previamente 15 min con apio y laurel", dish: "Chicharrón de Pota, Ceviche de Pota y Arroz con Mariscos" },
  { slug: "con-que-reemplazar-el-olluco-y-la-cecina-amazonica-si-vives-fuera-del-peru", title: "Cómo Hacer Olluquito y Tacacho con Cecina en el Extranjero: Sustitutos y Técnicas de Ahumado Casero", item: "Olluco y Cecina Amazónica", sub: "Olluco en lata/congelado en tiendas latinas o Jícama/Papa cérea cortada en juliana fina · Lomo de cerdo curado con sal y pimentón ahumado", dish: "Olluquito con Carne/Charqui y Tacacho con Cecina" },
  { slug: "como-hacer-pan-frances-peruano-y-pan-ciabatta-en-casa-si-extrana-las-panaderias-de-lima", title: "Receta de Pan Francés Peruano en Horno Doméstico para Peruanos en el Mundo: Corteza Crocante y Raya Central", item: "Pan Francés Peruano de Barrio", sub: "Harina de fuerza (Bread Flour), levadura, pizca de azúcar, manteca vegetal y bandeja con agua hirviendo para generar vapor en el horno", dish: "Pan con Chicharrón, Butifarra y Desayuno Limeño" },
  { slug: "con-que-reemplazar-la-algarrobina-la-lucuma-y-el-aguaymanto-en-postres-y-cocteles", title: "Dónde Comprar o Cómo Reemplazar Algarrobina, Lúcuma y Aguaymanto (Goldenberry) fuera del Perú", item: "Algarrobina, Lúcuma y Aguaymanto", sub: "El Aguaymanto se vende en EE. UU./Europa como Physalis, Cape Gooseberry o Goldenberry; la Algarrobina por Carob Syrup (jarabe de algarrobo mediterráneo)", dish: "Cóctel de Algarrobina, Suspiro y Mousse de Lúcuma" },
  { slug: "como-reemplazar-el-paico-el-chincho-la-muna-y-el-sachaculantro-en-recetas-regionales", title: "Guía de Hierbas Peruanas en el Extranjero: Equivalencias para Paico (Epazote), Chincho, Muña y Sachaculantro", item: "Paico, Chincho, Muña y Sachaculantro", sub: "Paico = Epazote mexicano (es la misma planta: Dysphania ambrosioides) · Sachaculantro = Culantro Coyote / Recao puertorriqueño /Sawtooth Herb en tiendas asiáticas", dish: "Caldo Verde, Pachamanca, Inchicapi y Juane" },
  { slug: "que-arroz-comprar-en-estados-unidos-y-espana-para-que-salga-graneado-como-en-peru", title: "Qué Marca y Tipo de Arroz Comprar en EE. UU. y España para Hacer Arroz Graneado con Ajo y Arroz Chaufa", item: "Arroz Añejo Extra Peruano", sub: "En EE. UU.: Extra Long Grain Enriched Rice (Canilla / Carolina) o Jasmine Rice con menos agua · En España: Arroz Largo (nunca arroz redondo de paella)", dish: "Arroz Blanco con Ajo, Arroz con Pollo y Arroz Chaufa" },
  { slug: "con-que-reemplazar-el-frejol-canario-y-el-pallar-en-estados-unidos-y-europa", title: "Qué Frijol o Alubia Comprar en EE. UU. y Europa para Reemplazar el Frejol Canario y los Pallares Peruanos", item: "Frejol Canario (Mayocoba) y Pallar", sub: "El Frejol Canario se vende en EE. UU. como 'Mayocoba Beans' o 'Peruvian Yellow Beans' (marca Goya) · El Pallar es 'Large Lima Beans' o 'Judión de La Granja' en España", dish: "Seco con Frejoles, Tacu Tacu y Pallares Batidos" },
  { slug: "como-hacer-salchicha-de-huacho-y-jamon-del-pais-casero-en-el-extranjero", title: "Cómo Preparar Salchicha de Huacho y Jamón del País Peruano en Casa desde Cualquier Parte del Mundo", item: "Salchicha de Huacho y Jamón del País", sub: "Pierna de cerdo atada y hervida en caldo con achiote (annatto seeds), ají panca, ajo, comino, pimienta y jugo de naranja agria", dish: "Butifarra Peruana y Desayuno Huachano" },
  { slug: "kit-basico-de-despensa-peruana-en-el-extranjero-los-12-insumos-que-rinden-todo-el-ano", title: "Kit Básico de Despensa Peruana en el Extranjero: Los 12 Insumos que Debes Tener para Cocinar 50 Platos del Perú", item: "Despensa Peruana Internacional", sub: "Frascos de Ají Amarillo, Ají Panca, Maíz Morado, Quinua, Achiote, Comino, Orégano serrano, Sillao, Vinagre tinto y Leche Evaporada", dish: "Todo el recetario criollo y marino peruano" },
  { slug: "como-adaptar-el-aderezo-del-pollo-a-la-brasa-para-horno-convencional-o-rostizador-en-el-extranjero", title: "Receta de Pollo a la Brasa Peruano en Horno Convencional para Peruanos en el Extranjero (Mismo Sabor a Pollería)", item: "Pollo a la Brasa Casero Internacional", sub: "Marinado 12h con cerveza negra (Stout/Guinness), sillao, vinagre tinto, comino, romero seco molido, ajo, pimienta y ají panca", dish: "Pollo a la Brasa con Papas y Ensalada" },
  { slug: "donde-comprar-pisco-peruano-en-estados-unidos-espana-y-europa-y-que-cepa-elegir", title: "Guía para Comprar Pisco Peruano en EE. UU. y Europa: Marcas Disponibles, Denominación de Origen y Cócteles", item: "Pisco Peruano Quebranta, Italia y Acholado", sub: "Total Wine, Astor Wines, El Corte Inglés, Amazon EU y distribuidores especializados (Portón, Barsol, Cuatro Gallos, Tabernero, Queirolo)", dish: "Pisco Sour, Chilcano y Algarrobina" },
  { slug: "como-hacer-pasta-de-aji-amarillo-y-aji-panca-desde-cero-y-conservarla-6-meses", title: "Cómo Hacer Pasta de Ají Amarillo y Ají Panca Casera sin Picor y Conservarla por 6 Meses en Frascos o Cubeteras", item: "Pastas Madre de Ajíes Peruanos", sub: "Desvenado, triple blanqueado en agua con sal y azúcar, pelado en tibio y licuado con hilo de aceite vegetal neutro", dish: "Base para toda la gastronomía peruana" },
  { slug: "equivalencias-de-medidas-y-temperaturas-para-recetas-peruanas-en-estados-unidos-tazas-onzas-y-fahrenheit", title: "Tabla de Equivalencias Culinarias para Cocinar Recetas Peruanas en EE. UU.: De Gramos y Grados Celsius a Onzas y Fahrenheit", item: "Conversión Métrica a Imperial (USA)", sub: "180 °C = 350 °F · 200 °C = 400 °F · 1 kg = 2.2 lbs · 1 taza de arroz peruano = 200 g (7 oz)", dish: "Horneados, Pavo Navideño, Pasteles y Guisos" },
  { slug: "con-que-reemplazar-la-leche-evaporada-peruana-o-como-reducir-leche-fresca-en-casa", title: "Cómo Lograr la Textura de la Leche Evaporada Peruana en el Extranjero para Huancaína, Chupe y Tres Leches", item: "Leche Evaporada Entera", sub: "Carnation / Goya Evaporated Milk o reducir 1 litro de leche fresca entera con 30 g de leche en polvo a fuego suave hasta obtener 450 ml", dish: "Ají de Gallina, Chupe de Camarones, Suspiro y Arroz con Leche" }
];

const BUDGET_MENUS_AND_LONCHERAS = [
  // 50 Menús Semanales, Presupuesto en Soles y Tápers de Oficina
  { slug: "menu-semanal-peruano-economico-con-20-soles-diarios-para-4-personas", title: "Menú Semanal Peruano Económico con S/ 20 Diarios para 4 Personas: Lista de Mercado y Recetas de Lunes a Viernes", budget: "S/ 20.00 / día (S/ 100 semanal)", portion: "S/ 5.00 por plato", taper: "48 horas en refrigeración", tip: "Combina menestras el lunes, sangrecita o hígado el martes, pescado azul (bonito) el miércoles, guiso de verduras el jueves y arroz chaufa o tallarín el viernes." },
  { slug: "menu-semanal-criollo-con-25-soles-diarios-entrada-segundo-y-refresco-natural", title: "Menú Semanal Familiar con S/ 25 al Día: Incluye Entrada, Plato de Fondo y Refresco de Fruta de Estación", budget: "S/ 25.00 / día (S/ 125 semanal)", portion: "S/ 6.25 menú completo", taper: "36 a 48 horas", tip: "Usa las cáscaras de la piña o manzana de la entrada para hervir el agua de mesa familiar sin gastar en gaseosas." },
  { slug: "menu-semanal-peruano-con-30-soles-diarios-para-familias-de-5-personas", title: "Planificador de Menú Semanal Peruano con S/ 30 Diarios para 5 Personas: Compras Inteligentes por Temporada", budget: "S/ 30.00 / día (S/ 150 semanal)", portion: "S/ 6.00 por persona", taper: "48 horas en táper hermético", tip: "Compra un pollo entero y divídelo: pechuga para ají de gallina/tallarín, piernas para estofado y espinazo/menudencia para aguadito o sopa." },
  { slug: "20-almuerzos-peruanos-de-fin-de-mes-por-menos-de-15-soles-para-toda-la-familia", title: "20 Almuerzos Peruanos Salvadores de Fin de Mes por Menos de S/ 15 para Toda la Familia", budget: "S/ 12.00 a S/ 15.00 total", portion: "S/ 3.50 por plato", taper: "Ideal para llevar al día siguiente", tip: "El Charquicán de anchoveta/atún, la Tortilla de verduras con arroz, las Lentejas con huevo montado y el Locro con queso rinden 4 porciones con menos de S/ 15." },
  { slug: "comidas-peruanas-para-llevar-en-taper-a-la-oficina-que-no-se-avinagran-en-verano", title: "15 Comidas Peruanas para Llevar en Táper al Trabajo que No se Fermentan con el Calor ni Pierden Textura", budget: "S/ 22.00 para 4 tápers", portion: "S/ 5.50 por táper ejecutivo", taper: "Aguanta hasta 6 horas en lonchera térmica", tip: "Evita aderezos con tomate fresco crudo o lácteos sin hervir en verano; prefiere Lomo Saltado, Seco de Pollo, Arroz con Pollo, Pollo al Sillao y Garbanzos guisados." },
  { slug: "batch-cooking-peruano-como-cocinar-el-domingo-en-2-horas-los-almuerzos-de-toda-la-semana", title: "Batch Cooking Peruano: Cómo Adelantar en 2 Horas el Domingo los Aderezos, Menestras y Almuerzos de Lunes a Viernes", budget: "S/ 120.00 compra semanal completa", portion: "S/ 4.80 por ración", taper: "5 días refrigerado / 30 días congelado", tip: "Prepara el domingo una olla grande de aderezo base (cebolla + ajo + ají), sancocha medio kilo de menestra y deja arroz graneado y quinua listos en porciones." },
  { slug: "menu-mensual-peruano-de-30-dias-sin-repetir-plato-calendario-completo-para-imprimir", title: "Menú Mensual Peruano de 30 Días sin Repetir Almuerzo: Calendario Completo con Menestras, Pescado, Pollo y Res", budget: "S/ 140 a S/ 170 por semana", portion: "S/ 5.80 promedio", taper: "Rotación diaria equilibrada", tip: "Organiza tu mes con la regla peruana 2-2-2-1: 2 días de aves, 2 días de menestras, 2 días de pescado y 1 día de carnes rojas o pastas." },
  { slug: "10-recetas-peruanas-con-una-lata-de-atun-o-grated-de-caballa-economicas-y-nutritivas", title: "10 Platos Peruanos con Conserva de Atún, Caballa o Anchoveta para Resolver el Almuerzo en 15 Minutos", budget: "S/ 14.00 para 4 platos", portion: "S/ 3.50 por porción", taper: "24 horas refrigerado", tip: "Desde Causa de Atún, Croquetas con quinua, Tallarín Rojo con atún y Arroz Tapado marino hasta Ajiaco de papas con caballa." },
  { slug: "12-guisos-peruanos-con-pollo-que-rinden-para-6-a-8-personas-gastando-poco", title: "12 Guisos Peruanos con Pollo que Rinden de 6 a 8 Porciones Abundantes con un Solo Pollo", budget: "S/ 28.00 a S/ 32.00 total", portion: "S/ 4.20 por plato", taper: "72 horas en refrigeración", tip: "El Pollo deshilachado o trozado pequeño en Ají de Gallina, Escabeche, Estofado, Pollo al Maní (Inchicapi/Maní) y Aguadito duplica el rendimiento por presa." },
  { slug: "calendario-de-lunes-de-menestras-en-peru-10-formas-de-preparar-lentejas-frejoles-y-garbanzos", title: "Lunes de Menestras en Perú: 10 Recetas Económicas de Lentejas, Frejol Canario, Pallares, Arveja Partida y Garbanzos", budget: "S/ 16.00 por olla de 6 platos", portion: "S/ 2.70 por porción", taper: "Se conserva 4 días y el sobrante hace Tacu Tacu", tip: "Cocina medio kilo de menestra el lunes: sirve la mitad en guiso y usa la otra mitad el miércoles para armar Tacu Tacu montado con huevo o pescado." },
  { slug: "menu-semanal-de-invierno-en-lima-y-sierra-sopas-chupes-y-guisos-calientes-economicos", title: "Menú Semanal de Invierno en el Perú: 7 Sopas Contundentes y 7 Segundos Calientes por Menos de S/ 24 al Día", budget: "S/ 24.00 / día", portion: "S/ 6.00 sopa + segundo", taper: "Recalentar a hervor completo", tip: "Sopa a la Minuta, Menestrón económico, Aguadito de menudencia, Sopa de Quinua, Crema de Zapallo Macre y Caldo de Cabeza combaten el frío con bajo presupuesto." },
  { slug: "menu-semanal-de-verano-en-peru-platos-frescos-rapidos-y-sin-pasar-horas-frente-a-la-cocina", title: "Menú Semanal de Verano en Perú: 14 Almuerzos Frescos y Rápidos en Menos de 25 Minutos", budget: "S/ 22.00 / día", portion: "S/ 5.50 por plato", taper: "Excelente para comer frío o tibio", tip: "Solterito arequipeño, Causa en fuente, Escabeche de pescado frío, Salpicón de pollo peruano, Ceviche de bonito y Ensalada de pallares con atún." },
  { slug: "como-hacer-compras-en-el-mercado-peruano-con-100-soles-para-toda-la-semana", title: "Desafío de Mercado en Perú: Qué Comprar Exactamente con S/ 100 para Cocinar los Almuerzos de 5 Días", budget: "S/ 100.00 compra semanal cerrada", portion: "S/ 5.00 por ración", taper: "Planificación cero desperdicio", tip: "Destina S/ 42 a proteínas (pollo, bonito, hígado, huevos), S/ 25 a abarrotes (arroz, menestras, fideos), S/ 23 a verduras/tubérculos y S/ 10 a frutas/hierbas." },
  { slug: "10-almuerzos-peruanos-con-carne-molida-economicos-rapidos-y-rendidores", title: "10 Platos Peruanos con Carne Molida (Arroz Tapado, Papa Rellena, Caiguas Rellenas y Picante) que Rinden el Doble", budget: "S/ 20.00 con 500 g de carne", portion: "S/ 4.00 por porción", taper: "48 horas en táper", tip: "Con solo 400 g de carne molida mezclada con cebolla picada, pasas, huevo duro y aceituna rellenas 8 caiguas, 8 papas rellenas o 6 moldes de Arroz Tapado." },
  { slug: "10-recetas-peruanas-con-pescado-bonito-jurel-y-caballa-el-pescado-mas-barato-y-nutritivo", title: "10 Recetas Peruanas con Bonito, Jurel y Caballa: Cómo Cocinar los Pescados Más Económicos del Mar Peruano", budget: "S/ 15.00 a S/ 18.00 para 4 personas", portion: "S/ 4.00 por plato", taper: "Consumir en 24h (o 72h si es escabeche)", tip: "El bonito cuesta entre S/ 6 y S/ 9 el kilo en mercado; sella sus medallones solo 2 minutos por lado para que quede jugoso en sudado, escabeche o cebiche." },
  { slug: "almuerzos-peruanos-para-estudiantes-universitarios-y-personas-que-viven-solas", title: "Guía de Supervivencia Culinaria para Universitarios en Perú: 15 Platos en 1 Sola Olla con S/ 8 por Comida", budget: "S/ 8.00 por comida", portion: "S/ 4.00 (rinde hoy y mañana)", taper: "Ideal para llevar a la universidad", tip: "Cocina siempre para 2 porciones (almuerzo de hoy y táper de mañana): Chaufa casero, Tallarín al Alfredo con jamón, Saltado de atún, Lentejas rápidas y Tortilla de quinua." },
  { slug: "10-recetas-peruanas-con-huevo-cuando-no-hay-carne-en-la-refrigeradora", title: "10 Almuerzos Peruanos con Huevo cuando No Hay Carne en Casa: Del Ajiaco y Cau Cau de Huevo al Arroz a la Cubana", budget: "S/ 10.00 a S/ 12.00 para 4 platos", portion: "S/ 2.80 por porción", taper: "24 a 36 horas", tip: "El Chupe de huevos, el Picante de huevo con papas amarillas y ají panca, la Ropa Vieja criolla con huevo y la Tortilla de choclo salvan cualquier almuerzo." },
  { slug: "como-aprovechar-las-sobras-del-pollo-a-la-brasa-y-del-pavo-en-5-platos-nuevos", title: "Cocina Peruana Cero Desperdicio: 6 Platos Deliciosos que Puedes Hacer con lo que Sobró del Pollo a la Brasa", budget: "S/ 5.00 en ingredientes extra", portion: "S/ 2.50 por plato nuevo", taper: "36 horas", tip: "Transforma el pollo a la brasa del domingo en Aguadito ahumado, Tequeños con salsa de palta, Salpicón, Sánguche deshilachado o Ají de Pollo." },
  { slug: "10-guisos-peruanos-con-verduras-caigua-acelga-zapallo-vainitas-y-espinaca", title: "10 Guisos y Saltados Peruanos con Verduras de Temporada (Saltado de Vainitas, Locro, Revuelto de Acelga y Caigua)", budget: "S/ 14.00 a S/ 18.00", portion: "S/ 4.00 por porción", taper: "48 horas", tip: "El Saltado de vainitas o coliflor con tiras de pollo, el Pastel de acelga en sartén y el Locro con choclo reducen a la mitad el gasto en carnes." },
  { slug: "como-preparar-menu-para-vender-desde-casa-en-peru-costos-rendimiento-y-empaque", title: "Cómo Preparar Menú Ejecutivo y Criollo para Vender desde Casa en Perú: Cálculo de Costos, Merma y Ganancia por Plato", budget: "Costo directo: S/ 5.20 por menú", portion: "Precio de venta sugerido: S/ 12 a S/ 15", taper: "Envase biodegradable con división", tip: "Ofrece siempre 2 opciones de entrada (1 fría de ensalada/causa y 1 sopa hecha con la merma limpia de verduras y huesos) para lograr un margen neto del 55%." }
];

const LONCHERAS_PERUANAS = [
  { slug: "loncheras-escolares-peruanas-para-inicial-3-4-y-5-anos-plan-de-4-semanas-minsa", title: "20 Loncheras Escolares Peruanas para Niños de Inicial (3 a 5 Años): Fáciles de Masticar y Aprobadas por el MINSA", group: "Inicial (3 a 5 años)", cost: "S/ 3.50 a S/ 4.80 por lonchera", note: "Porciones pequeñas en trozos de bocado: panqueques de avena y plátano, huevitos de codorniz pelados, choclo desgranado con queso sin sal y agua de manzana." },
  { slug: "loncheras-escolares-para-primaria-6-a-11-anos-energia-para-toda-la-manana", title: "20 Ideas de Loncheras Escolares Peruanas para Primaria (6 a 11 Años) con Quinua, Pollo, Sangrecita y Frutas", group: "Primaria (6 a 11 años)", cost: "S/ 4.50 a S/ 6.00 por lonchera", note: "Incluye siempre los 3 grupos del INS: 1 energético (pan, choclo, papa o queque casero), 1 constructor (pollo, huevo, queso, sangrecita) y 1 hidratante/fruta." },
  { slug: "loncheras-para-secundaria-y-adolescentes-en-peru-contundentes-y-saludables", title: "15 Loncheras Contundentes para Adolescentes de Secundaria y Academia Preuniversitaria en Perú", group: "Secundaria (12 a 17 años)", cost: "S/ 5.50 a S/ 7.50 por lonchera", note: "Los adolescentes con jornada hasta las 3:30 p.m. necesitan mayor aporte proteico: wraps de pollo con palta, triple peruano, hamburguesa casera de lentejas/res y frutos secos." },
  { slug: "10-loncheras-peruanas-con-sangrecita-dulces-y-saladas-contra-la-anemia-escolar", title: "10 Loncheras Escolares con Sangrecita (Dulces y Saladas) que los Niños Aman y Combaten la Anemia", group: "Preescolar y Escolar", cost: "S/ 3.20 por lonchera", note: "Mousse de sangrecita con cacao, panqueques de sangrecita con miel de chancaca, sánguche de sangrecita criolla con palta y muffins de sangrecita con arándanos." },
  { slug: "loncheras-peruanas-sin-pan-12-opciones-con-choclo-papa-camote-yuca-y-cancha", title: "12 Loncheras Escolares Peruanas Sin Pan: Usando Choclo, Papa Cocktelerita, Camote, Yuca y Cancha", group: "Todas las edades", cost: "S/ 3.80 por lonchera", note: "Reemplaza el pan diario por choclo tierno con queso Paria, bastones de camote al horno/airfryer, yuquitas doradas con pollo o papas nativas con huevitos de codorniz." },
  { slug: "loncheras-escolares-para-el-calor-de-verano-en-costa-y-selva-que-no-se-malogran", title: "Loncheras Escolares de Verano en Perú (Marzo, Abril y Diciembre): Qué Enviar para que No se Fermente con el Calor", group: "Clima cálido (>26 °C)", cost: "S/ 4.00 por lonchera", note: "Evita mayonesa, jamonadas, tomate picado y jugos que fermentan rápido (como papaya o maracuyá sin hervir); envía agua de cebada/manzana helada y frutas con cáscara (mandarina, plátano, granadilla)." },
  { slug: "loncheras-escolares-con-quinua-kiwicha-y-canihua-recetas-practicas-para-la-semana", title: "10 Recetas de Lonchera con Quinua, Kiwicha y Cañihua: Pop, Panqueques, Tortillas y Barritas Caseras", group: "Escolar y Deportivo", cost: "S/ 4.20 por lonchera", note: "Prepara bolitas energéticas de kiwicha pop con mantequilla de maní y miel, o tortillas de quinua cocida con queso rallado y espinaca en 5 minutos." },
  { slug: "7-refrescos-peruanos-naturales-para-la-lonchera-que-no-se-oxidan-ni-fermentan", title: "7 Refrescos Naturales Peruanos para la Lonchera Escolar que No se Oxidan ni se Avinagran al Mediodía", group: "Hidratación Escolar", cost: "S/ 1.50 por litro familiar", note: "Agua de cáscara de piña con canela, chicha morada casera baja en azúcar, emoliente de cebada tibio, infusión fría de hierbaluisa con limón y agua de manzana Delicia." },
  { slug: "5-queques-caseros-peruanos-para-la-lonchera-de-platano-zanahoria-naranja-quinua-y-algarrobina", title: "5 Queques Caseros Nutritivos para la Lonchera de toda la Semana (Plátano, Quinua, Zanahoria, Naranja y Algarrobina)", group: "Merienda Escolar", cost: "S/ 12.00 el molde de 12 tajadas (S/ 1.00 por día)", note: "Hornea un queque el domingo por la tarde endulzado con plátano maduro, chancaca o panela y tendrás el energético listo de lunes a viernes." },
  { slug: "loncheras-peruanas-con-atun-pejerrey-y-bonito-omega-3-para-la-memoria-de-los-ninos", title: "Loncheras Marinas para Niños: Nuggets de Bonito al Horno, Sánguche de Pejerrey sin Espinas y Croquetas de Atún", group: "Primaria y Secundaria", cost: "S/ 4.50 por lonchera", note: "El pescado azul peruano aporta DHA y EPA clave para la concentración en clase; empánalo en avena o quinua pop y hornéalo 12 minutos en Airfryer." }
];

export function getCat3And4Seeds() {
  const seeds = [];

  // 3A: 20 Ciudades del Mundo x 3 ángulos = 60 artículos
  WORLD_CITIES.forEach((w) => {
    const cleanCity = w.city
      .split("(")[0]
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Ángulo 1: Guía general de compras y sustitutos en la ciudad
    seeds.push({
      slug: `donde-comprar-ingredientes-peruanos-y-como-cocinar-en-${cleanCity}`,
      title: `Cocina Peruana en ${w.city}: Dónde Comprar Ingredientes y Qué Sustitutos de Supermercado Usar`,
      category: "peruanos-en-el-mundo",
      categoryName: "Peruanos en el Mundo",
      focusKeyword: `ingredientes peruanos en ${w.city.split("(")[0].trim().toLowerCase()}`,
      layoutVariant: "geo-peruano-exterior",
      schemaType: "BlogPosting",
      badgeLabel: `${w.flag} Guía en ${w.city.split("(")[0].trim()}`,
      imageHint: "platos",
      worldInfo: {
        locationName: w.city,
        flag: w.flag,
        supermarkets: w.shops,
        localSubstitute: w.sub,
        cutEquivalent: w.cut,
        currency: w.curr,
      },
      summary: `Manual práctico para peruanos y amantes de nuestra gastronomía en ${w.city}: en qué supermercados (${w.shops}) encontrar ajíes, maíz morado y quesos, y cómo usar ${w.sub} cuando falta el insumo original.`,
    });

    // Ángulo 2: Ceviche y Cocina Marina Peruana con pescados locales de esa ciudad
    seeds.push({
      slug: `que-pescado-y-limon-usar-para-hacer-ceviche-peruano-en-${cleanCity}`,
      title: `Cómo Hacer Ceviche Peruano Auténtico en ${w.city}: Qué Pescado y Limón Comprar en el Supermercado`,
      category: "peruanos-en-el-mundo",
      categoryName: "Peruanos en el Mundo",
      focusKeyword: `como hacer ceviche peruano en ${w.city.split("(")[0].trim().toLowerCase()}`,
      layoutVariant: "geo-peruano-exterior",
      schemaType: "Recipe",
      badgeLabel: `${w.flag} Ceviche en ${w.city.split("(")[0].trim()}`,
      imageHint: "ceviche",
      worldInfo: {
        locationName: w.city,
        flag: w.flag,
        supermarkets: w.shops,
        localSubstitute: "Key Limes (Limón sutil) + Chile Habanero/Manzano para el toque de ají limo",
        cutEquivalent: w.cut,
        currency: w.curr,
      },
      summary: `Prepara un Ceviche y Leche de Tigre con sabor 100% peruano viviendo en ${w.city}: qué filetes pedir en la pescadería (${w.cut}), cómo elegir el limón ácido correcto y cómo equilibrar el picor.`,
    });

    // Ángulo 3: Lomo Saltado, Seco y Guisos con los cortes de carne de ese país
    seeds.push({
      slug: `que-corte-de-carne-pedir-en-${cleanCity}-para-lomo-saltado-seco-y-asado-peruano`,
      title: `Qué Corte de Carne Pedir en ${w.city} para Preparar Lomo Saltado, Seco de Res y Guisos Peruanos`,
      category: "peruanos-en-el-mundo",
      categoryName: "Peruanos en el Mundo",
      focusKeyword: `cortes de carne para comida peruana en ${w.city.split("(")[0].trim().toLowerCase()}`,
      layoutVariant: "geo-peruano-exterior",
      schemaType: "Recipe",
      badgeLabel: `${w.flag} Cortes en ${w.city.split("(")[0].trim()}`,
      imageHint: "lomo",
      worldInfo: {
        locationName: w.city,
        flag: w.flag,
        supermarkets: w.shops,
        localSubstitute: w.sub,
        cutEquivalent: w.cut,
        currency: w.curr,
      },
      summary: `Guía de carnicería en ${w.city} para cocinar platos criollos: traducción exacta de los cortes (${w.cut}), dónde conseguirlos en ${w.shops} y tiempos de cocción.`,
    });
  });

  // 3B: 30 Guías de Sustitución de Ingredientes Peruanos en el Extranjero (Total Cat 3 = 90)
  INGREDIENT_SUBSTITUTIONS.forEach((s) => {
    seeds.push({
      slug: s.slug,
      title: s.title,
      category: "peruanos-en-el-mundo",
      categoryName: "Peruanos en el Mundo",
      focusKeyword: s.title.split(":")[0].toLowerCase(),
      layoutVariant: "geo-peruano-exterior",
      schemaType: "HowTo",
      badgeLabel: `🌎 Sustituto: ${s.item}`,
      imageHint: "condimentos",
      worldInfo: {
        locationName: "EE. UU., España, Europa y Latinoamérica",
        flag: "🌎",
        supermarkets: "Walmart, Whole Foods, H-Mart, Mercadona, Carrefour, Jumbo y Tiendas Latinas",
        localSubstitute: s.sub,
        cutEquivalent: `Ideal para: ${s.dish}`,
        currency: "USD ($) / EUR (€)",
      },
      summary: `${s.title}. Fórmula probada (${s.sub}) para que tus preparaciones de ${s.dish} conserven el color, textura y aroma tradicional peruano en cualquier país.`,
    });
  });

  // 4A: 20 Guías Pilares de Menús Semanales y Presupuesto
  BUDGET_MENUS_AND_LONCHERAS.forEach((m) => {
    seeds.push({
      slug: m.slug,
      title: m.title,
      category: "menus-y-presupuesto",
      categoryName: "Menús Semanales y Loncheras",
      focusKeyword: m.title.split(":")[0].toLowerCase(),
      layoutVariant: "calculadora-presupuesto",
      schemaType: "ItemList",
      badgeLabel: `💰 Presupuesto: ${m.budget.split("(")[0].trim()}`,
      imageHint: "platos",
      budgetInfo: {
        totalBudgetSoles: m.budget,
        costPerPortion: m.portion,
        servings: "4 a 5 porciones familiares",
        bestSeason: "Todo el año con insumos de mercado local",
        taperLife: m.taper,
        savingsNote: m.tip,
      },
      summary: `${m.title}. Presupuesto calculado en Soles (${m.budget}, ${m.portion}), lista de compras organizada por secciones del mercado y consejos de conservación (${m.taper}).`,
    });
  });

  // 4B: 10 Guías Pilares de Loncheras Escolares
  LONCHERAS_PERUANAS.forEach((l) => {
    seeds.push({
      slug: l.slug,
      title: l.title,
      category: "menus-y-presupuesto",
      categoryName: "Menús Semanales y Loncheras",
      focusKeyword: l.title.split(":")[0].toLowerCase(),
      layoutVariant: "calculadora-presupuesto",
      schemaType: "ItemList",
      badgeLabel: `🎒 Lonchera: ${l.group}`,
      imageHint: "desayunos-frios",
      budgetInfo: {
        totalBudgetSoles: "S/ 20 a S/ 28 por semana escolar",
        costPerPortion: l.cost,
        servings: `1 lonchera diaria (${l.group})`,
        bestSeason: "Año Escolar (Marzo a Diciembre)",
        taperLife: "6 horas fresca en lonchera escolar",
        savingsNote: l.note,
      },
      summary: `${l.title}. Costo promedio de ${l.cost}, combinaciones de alimentos energéticos, constructores e hidratantes y recomendaciones prácticas: ${l.note}`,
    });
  });

  // 4C: 40 Almuerzos Económicos y de Táper por Presupuesto y Día (para completar 70)
  const ECONOMIC_COMBOS = [
    { dish: "Ají de Atún con Papa Amarilla y Arroz Graneado", cost: "S/ 13.50", port: "S/ 3.40", protein: "Conserva de atún en trozos y huevo duro" },
    { dish: "Cau Cau de Pollo Económico con Hierbabuena", cost: "S/ 16.00", port: "S/ 4.00", protein: "Pechuga o muslos de pollo picados en cubos" },
    { dish: "Lentejitas Criollas con Sangrecita Salteada y Zarza", cost: "S/ 12.00", port: "S/ 3.00", protein: "Lenteja bebé y sangrecita fresca con cebolla china" },
    { dish: "Arroz Chaufa Casero de Pollo, Hot Dog y Tortilla", cost: "S/ 15.00", port: "S/ 3.75", protein: "Filete de pollo, huevos y arroz del día anterior" },
    { dish: "Locro de Zapallo Macre con Queso Fresco y Huevo Frito", cost: "S/ 13.00", port: "S/ 3.25", protein: "Queso serrano, leche evaporada y huevos" },
    { dish: "Seco de Pollo a la Norteña con Frejol Canario", cost: "S/ 20.00", port: "S/ 5.00", protein: "4 presas de pollo, culantro y frejol canario" },
    { dish: "Saltado de Vainitas con Pollo y Papa Frita", cost: "S/ 15.50", port: "S/ 3.90", protein: "Tiras de pechuga de pollo y vainitas verdes" },
    { dish: "Tallarín Rojo de Pollo con Papa a la Huancaína (Combinado Casero)", cost: "S/ 21.00", port: "S/ 5.25", protein: "Presas de pollo en salsa de tomate, zanahoria y hongos" },
    { dish: "Olluquito con Carne Picada o Charqui y Arroz Blanco", cost: "S/ 18.00", port: "S/ 4.50", protein: "Bistec picado a cuchillo y olluco tarmeño" },
    { dish: "Ajiaco de Papas con Huevo Duro y Pescado Frito", cost: "S/ 17.00", port: "S/ 4.25", protein: "Filetes de bonito fresco y huevos" },
    { dish: "Guiso de Quinua Blanca con Pollo y Queso Paria", cost: "S/ 16.00", port: "S/ 4.00", protein: "Quinua perlada lavada 4 veces, pollo y queso" },
    { dish: "Arveja Partida Verde con Lomito de Hígado Encebollado", cost: "S/ 14.00", port: "S/ 3.50", protein: "Hígado de res suave salteado con tomate y cebolla" },
    { dish: "Sudado de Pescado Bonito con Yuca Sancochada", cost: "S/ 16.00", port: "S/ 4.00", protein: "Medallones de bonito en tomate, chicha y culantro" },
    { dish: "Carapulcra de Pollo Económica con Arroz Blanco", cost: "S/ 18.00", port: "S/ 4.50", protein: "Papa seca tostada, maní molido, ají panca y pollo" },
    { dish: "Estofado de Pollo Peruano con Pasas, Papa y Zanahoria", cost: "S/ 18.50", port: "S/ 4.60", protein: "Presas de pollo doradas en aderezo rojo dulce" },
    { dish: "Picante de Carne con Papas en Cubitos y Arroz", cost: "S/ 17.50", port: "S/ 4.40", protein: "Carne picada muy fina con ají panca y alverjitas" },
    { dish: "Garbanzos Guisados con Acelga y Pollo al Horno", cost: "S/ 19.00", port: "S/ 4.75", protein: "Garbanzos remojados con hojas de acelga y pollo" },
    { dish: "Caiguas Rellenas de Carne Molida y Pasas al Vapor", cost: "S/ 17.00", port: "S/ 4.25", protein: "Carne molida de res, huevo duro y caiguas criollas" },
    { dish: "Mondonguito a la Italiana Económico con Papas Fritas", cost: "S/ 18.00", port: "S/ 4.50", protein: "Mondongo cocido con hierbabuena en tiras con arvejas" },
    { dish: "Pescado a la Chorrillana con Filete de Jurel o Caballa", cost: "S/ 16.00", port: "S/ 4.00", protein: "Filetes de jurel dorados con cebolla y tomate al vinagre" },
    { dish: "Arroz con Pollo Casero Express en 35 Minutos", cost: "S/ 21.00", port: "S/ 5.25", protein: "Pollo, culantro licuado, cerveza negra y verduras" },
    { dish: "Escabeche de Pollo para Llevar en Táper al Día Siguiente", cost: "S/ 19.50", port: "S/ 4.90", protein: "Pollo sellado en cebolla crujiente, ají amarillo y vinagre" },
    { dish: "Guiso de Trigo Entero con Queso y Tortilla de Verduras", cost: "S/ 12.50", port: "S/ 3.10", protein: "Trigo resbalado cremoso con leche, queso y huevo" },
    { dish: "Pallares Batidos Iqueños con Asado de Pollo", cost: "S/ 18.50", port: "S/ 4.60", protein: "Pallar seco pelado cocido lento con aderezo de ajo" },
    { dish: "Pollo al Sillao y Kion con Brócoli y Arroz Blanco", cost: "S/ 17.50", port: "S/ 4.40", protein: "Trozos de pollo glaseados en sillao, ostión y maicena" },
    { dish: "Saltado de Coliflor con Tiras de Res o Pollo", cost: "S/ 15.00", port: "S/ 3.75", protein: "Ramilletes de coliflor al dente salteados al wok" },
    { dish: "Frejol Castilla o Panamito con Pescado Apanado", cost: "S/ 16.50", port: "S/ 4.10", protein: "Frejol panamito suave con filete de merluza o perico" },
    { dish: "Arroz Tapado Clásico con Carne, Huevo, Plátano y Aceituna", cost: "S/ 18.00", port: "S/ 4.50", protein: "Relleno jugoso de carne picada con pasas y plátano frito" },
    { dish: "Sopa a la Minuta + Tortilla de Atún (Menú de S/ 14)", cost: "S/ 14.00", port: "S/ 3.50", protein: "Carne picada en caldo con leche y fideo + conserva de atún" },
    { dish: "Chanfainita Criolla Económica con Mote y Cancha", cost: "S/ 14.50", port: "S/ 3.60", protein: "Bofe de res cocido con hierbabuena en aderezo de ají panca" },
    { dish: "Pepián de Choclo Tierno con Pollo Guisado", cost: "S/ 17.00", port: "S/ 4.25", protein: "Choclo licuado espeso con aderezo amarillo o verde y pollo" },
    { dish: "Tallarín Saltado Criollo de Pollo con Tomate y Cebolla", cost: "S/ 16.50", port: "S/ 4.10", protein: "Espagueti al dente salteado con pechuga, sillao y vinagre" },
    { dish: "Sánguche y Almuerzo de Sangrecita con Yuca Dorada", cost: "S/ 11.00", port: "S/ 2.75", protein: "Sangrecita de pollo/res con hierbabuena, cebolla china y ají" },
    { dish: "Puré de Papas Amarillas con Asado de Pejerrey en Olla a Presión", cost: "S/ 23.00", port: "S/ 5.75", protein: "Medallones de asado en su jugo oscuro de zanahoria y vino" },
    { dish: "Crema de Arvejas con Croutones + Saltado de Hígado", cost: "S/ 15.00", port: "S/ 3.75", protein: "Doble fuente de hierro y fibra para toda la familia" },
    { dish: "Tacu Tacu de Lentejas con Huevo Montado y Plátano Frito", cost: "S/ 13.50", port: "S/ 3.40", protein: "Menestra del día anterior dorada en sartén con arroz" },
    { dish: "Chupe de Pescado Económico con Leche, Huevo y Orégano", cost: "S/ 18.00", port: "S/ 4.50", protein: "Filetes de pescado blanco, zapallo, choclo, habas y queso" },
    { dish: "Pollo a la Olla estilo Pollo a la Brasa con Papas Doradas", cost: "S/ 21.50", port: "S/ 5.40", protein: "Presas marinadas en cerveza negra, romero y comino en olla" },
    { dish: "Menestrón Peruano Económico de Lunes para Toda la Familia", cost: "S/ 19.00", port: "S/ 3.80", protein: "Pecho de res, frejol verde, yuca, choclo, fideo canuto y albahaca" },
    { dish: "Adobo de Pollo con Camote Glaseado y Arroz con Choclo", cost: "S/ 18.50", port: "S/ 4.60", protein: "Pollo macerado en ají panca, chicha de jora, comino y orégano" }
  ];

  ECONOMIC_COMBOS.forEach((c) => {
    const cleanSlug = c.dish
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    seeds.push({
      slug: `almuerzo-economico-peruano-${cleanSlug}-presupuesto-familiar`,
      title: `Almuerzo Peruano Económico: ${c.dish} por ${c.cost} para 4 Personas (Receta y Táper)`,
      category: "menus-y-presupuesto",
      categoryName: "Menús Semanales y Loncheras",
      focusKeyword: `${c.dish.toLowerCase()} economico`,
      layoutVariant: "calculadora-presupuesto",
      schemaType: "Recipe",
      badgeLabel: `💰 ${c.port} / plato`,
      imageHint: "platos",
      budgetInfo: {
        totalBudgetSoles: `${c.cost} (4 porciones)`,
        costPerPortion: c.port,
        servings: "4 platos generosos",
        bestSeason: "Todo el año en mercados de barrio",
        taperLife: "48 horas en táper refrigerado",
        savingsNote: `Base proteica: ${c.protein}. Compra los insumos en mercado local para mantener el costo debajo de ${c.port} por plato.`,
      },
      summary: `Cómo preparar ${c.dish} gastando solo ${c.cost} en total (${c.port} por persona). Incluye lista de precios en Soles, paso a paso y cómo empacarlo en táper para el trabajo.`,
    });
  });

  // 4D: 30 Loncheras Específicas por Combinación (Total Cat 4 = 20 + 10 + 40 + 30 = 100)
  const LONCHERA_COMBOS = [
    { name: "Panqueques de Avena y Plátano + Huevitos de Codorniz + Agua de Manzana", age: "Inicial y Primaria", cost: "S/ 3.80" },
    { name: "Sánguche de Pollo Deshilachado con Palta + Mandarina + Chicha Morada", age: "Primaria y Secundaria", cost: "S/ 4.50" },
    { name: "Choclo Tierno Desgranado con Queso Fresco + Granadilla + Agua de Piña", age: "Todas las edades", cost: "S/ 3.90" },
    { name: "Tortilla de Quinua y Espinaca + Uvas Verdes + Infusión de Hierbaluisa", age: "Inicial y Primaria", cost: "S/ 4.10" },
    { name: "Muffins Dulces de Sangrecita y Cacao + Fresas + Agua de Cebada", age: "Contra la Anemia (3–10 años)", cost: "S/ 3.60" },
    { name: "Mini Butifarra de Pavo Casero + Camote al Airfryer + Refresco de Maracuyá", age: "Primaria y Secundaria", cost: "S/ 5.20" },
    { name: "Nuggets Caseros de Pescado Bonito en Avena + Papitas Cocktail + Limonada", age: "Primaria (6–11 años)", cost: "S/ 4.60" },
    { name: "Queque Casero de Zanahoria y Pecanas + Yogur Natural + Arándanos", age: "Inicial y Primaria", cost: "S/ 4.40" },
    { name: "Triple Peruano de Palta, Huevo y Tomate en Pan Integral + Pera + Emoliente", age: "Secundaria y Oficina", cost: "S/ 4.80" },
    { name: "Croquetas de Atún y Papa Amarilla + Bastones de Zanahoria + Agua de Membrillo", age: "Primaria y Secundaria", cost: "S/ 4.20" },
    { name: "Bolitas de Kiwicha Pop y Miel + Queso en Cubos + Plátano de Seda", age: "Inicial (3–5 años)", cost: "S/ 3.50" },
    { name: "Mini Hamburguesa de Lentejas y Res en Pan de Yema + Durazno + Chicha", age: "Primaria y Secundaria", cost: "S/ 4.90" },
    { name: "Humita Dulce Casera en Panca + Huevo Duro + Agua de Manzanilla y Anís", age: "Días de Invierno", cost: "S/ 4.00" },
    { name: "Yuquitas Doradas al Horno + Tiras de Pollo al Ajonjolí + Jugo de Cocona", age: "Primaria y Secundaria", cost: "S/ 4.70" },
    { name: "Pan con Pejerrey Arrebozado sin Espinas + Cancha Chulpi + Limonada con Hierbabuena", age: "Secundaria", cost: "S/ 5.00" },
    { name: "Omelette de Sangrecita y Cebolla China + Camote Sancochado + Mandarina", age: "Antianemia Escolar", cost: "S/ 3.40" },
    { name: "Tostadas Francesas con Algarrobina + Manzana Picada con Limón + Agua Pura", age: "Inicial y Primaria", cost: "S/ 3.90" },
    { name: "Ensalada Fresca de Tarwi (Chocho), Choclo y Queso + Pan Ciabatta + Chicha", age: "Secundaria y Deportistas", cost: "S/ 4.50" },
    { name: "Rollitos de Jamón de Pavita y Queso + Cancha + Aguaymanto Fresco", age: "Inicial y Primaria", cost: "S/ 4.30" },
    { name: "Queque de Quinua y Naranja + Huevitos de Codorniz + Agua de Durazno", age: "Todas las edades", cost: "S/ 4.00" },
    { name: "Empanaditas Horneadas de Pollo y Verduras + Uvas + Agua de Cáscara de Piña", age: "Primaria y Secundaria", cost: "S/ 4.80" },
    { name: "Pan con Tortilla de Verduras y Atún + Plátano Isla + Emoliente Frío", age: "Primaria y Secundaria", cost: "S/ 4.10" },
    { name: "Pudín de Chía, Avena y Lúcuma + Nueces + Agua de Manzana sin Azúcar", age: "Secundaria y Oficina", cost: "S/ 4.90" },
    { name: "Papa Huamantanga con Crema de Palta (Guacamole Peruano) + Pollo + Granadilla", age: "Primaria y Secundaria", cost: "S/ 4.60" },
    { name: "Panqueques Verdes de Espinaca y Plátano + Queso Fresco + Agua de Hierbaluisa", age: "Inicial (3–5 años)", cost: "S/ 3.70" },
    { name: "Sánguche de Asado de Res en su Jugo + Manzana Roja + Chicha de Maíz Morado", age: "Secundaria", cost: "S/ 5.40" },
    { name: "Waffles Caseros de Avena y Cañihua + Fresas Picadas + Yogur Griego", age: "Inicial y Primaria", cost: "S/ 4.50" },
    { name: "Tequeños Horneados de Queso y Espinaca + Guacamole + Agua de Maracuyá", age: "Primaria y Secundaria", cost: "S/ 4.70" },
    { name: "Tortilla de Choclo Tierno (Torrejitas) + Pechuga de Pollo + Mandarina", age: "Todas las edades", cost: "S/ 4.20" },
    { name: "Pan Ciabatta con Hígado Encebollado Suave + Palta + Refresco de Camu Camu", age: "Alto en Hierro + Vitamina C", cost: "S/ 4.00" }
  ];

  LONCHERA_COMBOS.forEach((lc) => {
    const cleanSlug = lc.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    seeds.push({
      slug: `lonchera-peruana-${cleanSlug}`,
      title: `Lonchera Peruana Nutritiva: ${lc.name} (Lista en 10 Minutos)`,
      category: "menus-y-presupuesto",
      categoryName: "Menús Semanales y Loncheras",
      focusKeyword: `lonchera de ${lc.name.split("+")[0].trim().toLowerCase()}`,
      layoutVariant: "calculadora-presupuesto",
      schemaType: "Recipe",
      badgeLabel: `🎒 ${lc.age}`,
      imageHint: "desayunos-frios",
      budgetInfo: {
        totalBudgetSoles: `${lc.cost} por lonchera completa`,
        costPerPortion: lc.cost,
        servings: `1 lonchera escolar (${lc.age})`,
        bestSeason: "Todo el año escolar",
        taperLife: "Se mantiene fresca 6 horas sin refrigeración",
        savingsNote: "Fórmula balanceada 1 Energético + 1 Constructor + 1 Regulador/Hidratante recomendada por nutricionistas en Perú.",
      },
      summary: `Receta rápida de lonchera escolar peruana: ${lc.name}. Ideal para ${lc.age} con un costo de solo ${lc.cost}, sin octógonos ni ultraprocesados.`,
    });
  });

  return seeds;
}
