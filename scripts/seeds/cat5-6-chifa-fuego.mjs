/**
 * Categoría 5: chifa-y-nikkei-casero (90 artículos)
 * Categoría 6: fuego-brasa-y-ollas (90 artículos)
 * Total: 180 semillas.
 */

const CHIFA_DISHES = [
  { name: "Pollo Ti Pa Kay con Salsa de Tamarindo Real", prep: "20 min", cook: "12 min", tool: "Wok de acero al carbono y sartén profunda", temp: "190 °C (doble fritura crocante)", diff: "Media" },
  { name: "Pollo Chi Jau Kay en Salsa de Ostión y Mensí", prep: "20 min", cook: "14 min", tool: "Wok y espumadera", temp: "185 °C + ligado en wok a fuego vivo", diff: "Media" },
  { name: "Kam Lu Wantán Especial con Chanchito Asado, Pollo y Langostinos", prep: "25 min", cook: "15 min", tool: "Wok humeante y freidora para wantanes", temp: "210 °C en wok para sellar verduras y carnes", diff: "Media-Alta" },
  { name: "Aeropuerto de Chifa Carretillero con Frejolito Chino y Fideo Crocante", prep: "15 min", cook: "8 min", tool: "Wok de hierro bien curado", temp: "Fuego máximo (efecto Wok Hei ahumado)", diff: "Fácil" },
  { name: "Tallarín Saltado de Chifa Taypa con Verduras Crujientes (Holantao y Pac Choy)", prep: "20 min", cook: "10 min", tool: "Wok amplio", temp: "220 °C salteado rápido de 90 segundos", diff: "Fácil" },
  { name: "Sopa Wantán Especial con Char Siu, Pollo, Huevitos de Codorniz y Col China", prep: "30 min", cook: "25 min", tool: "Olla de fondo grueso", temp: "Hervor suave a 95 °C con kion y aceite de ajonjolí", diff: "Fácil" },
  { name: "Sopa Fuchifú de Chifa con Pollo Picado, Clara de Huevo y Kion", prep: "15 min", cook: "12 min", tool: "Olla sopera y batidor de alambre", temp: "90 °C al verter el hilo de huevo y chuño", diff: "Fácil" },
  { name: "Sopa Siu Kao con Rellenos de Cerdo, Langostinos y Hongo Tonkú", prep: "35 min", cook: "15 min", tool: "Olla sopera", temp: "Hervor delicado de 5 minutos para los siu kao", diff: "Media" },
  { name: "Chancho Asado al Estilo Cantonés (Char Siu de Calle Capón)", prep: "12 h marinado", cook: "40 min", tool: "Horno con rejilla y bandeja de agua", temp: "200 °C con barnizado de miel y hoisin cada 10 min", diff: "Media" },
  { name: "Pato Asado de Chifa con Cinco Especias Chinas y Salsa de Ciruela", prep: "24 h secado", cook: "75 min", tool: "Horno o rostizador vertical", temp: "180 °C luego 220 °C para piel de cristal", diff: "Alta" },
  { name: "Taypa a la Plancha con Mariscos, Pato, Chancho Asado y Huevo de Codorniz", prep: "25 min", cook: "12 min", tool: "Wok y plato de fierro fundido caliente", temp: "230 °C al servir sobre la plancha humeante", diff: "Media" },
  { name: "Wantán Frito Relleno de Cerdo y Kion con Salsa de Tamarindo Casera", prep: "25 min", cook: "4 min", tool: "Sartén honda con aceite neutro", temp: "175 °C (30 segundos por lado)", diff: "Fácil" },
  { name: "Siu Mai Artesanal de Cerdo y Langostino al Vapor en Vaporera de Bambú", prep: "30 min", cook: "10 min", tool: "Vaporera de bambú sobre wok", temp: "100 °C vapor constante por 10 minutos", diff: "Media" },
  { name: "Min Pao Dulce Relleno de Frejol Colado (Tau Sa Pao) Esponjoso", prep: "90 min fermento", cook: "15 min", tool: "Vaporera de dos pisos", temp: "Vapor medio sin destapar hasta apagar", diff: "Media" },
  { name: "Min Pao Salado Relleno de Chancho Asado, Pollo y Huevo Duro", prep: "90 min fermento", cook: "18 min", tool: "Vaporera", temp: "100 °C al vapor sobre papel manteca", diff: "Media" },
  { name: "Enrollado Primavera Peruano Crocante con Relleno de Col, Zanahoria y Pollo", prep: "25 min", cook: "6 min", tool: "Sartén honda", temp: "180 °C hasta dorado parejo", diff: "Fácil" },
  { name: "Chancho con Tamarindo, Piña Golden, Pimiento y Duraznos en Conserva", prep: "20 min", cook: "12 min", tool: "Wok", temp: "190 °C fritura de cerdo + glaseado", diff: "Fácil" },
  { name: "Pollo con Verduras Chinas (Choy Sum, Brócoli, Tonkú y Bambú) en Salsa Blanca", prep: "15 min", cook: "8 min", tool: "Wok", temp: "200 °C blanqueo previo + salteado", diff: "Fácil" },
  { name: "Carne de Res con Tau Sí (Frejol Negro Fermentado) y Pimiento", prep: "20 min", cook: "8 min", tool: "Wok", temp: "220 °C sellado rápido de láminas de res", diff: "Media" },
  { name: "Carne de Res con Kion y Cebolla China al Wok", prep: "15 min", cook: "7 min", tool: "Wok", temp: "215 °C con carne aterciopelada en maicena", diff: "Fácil" },
  { name: "Langostinos Saltados con Nueces y Semillas de Marañón (Cashews)", prep: "15 min", cook: "6 min", tool: "Wok", temp: "200 °C (3 minutos para no recocer langostinos)", diff: "Media" },
  { name: "Langostinos Arrebozados al Panko/Tempura con Salsa Agridulce de Chifa", prep: "20 min", cook: "5 min", tool: "Sartén profunda", temp: "180 °C", diff: "Fácil" },
  { name: "Pescado en Salsa de Ostión, Kion y Cebolla China al Vapor Estilo Cantonés", prep: "15 min", cook: "12 min", tool: "Vaporera y sartén para aceite humeante", temp: "100 °C vapor + baño de aceite a 210 °C", diff: "Media" },
  { name: "Pollo con Almendras Tostadas, Apio, Holantao y Hongos Tonkú", prep: "20 min", cook: "10 min", tool: "Wok", temp: "200 °C", diff: "Fácil" },
  { name: "Costillas de Cerdo Agridulces al Estilo Chifa Limeño", prep: "25 min", cook: "35 min", tool: "Wok", temp: "180 °C", diff: "Media" },
  { name: "Alitas de Pollo al Sillao, Miel, Kion y Canela China (Bouquet de Chifa)", prep: "30 min", cook: "18 min", tool: "Wok o Airfryer", temp: "185 °C", diff: "Fácil" },
  { name: "Tofu (Queso de Soya) Ma Po y Saltado con Verduras y Hongos", prep: "15 min", cook: "10 min", tool: "Wok", temp: "190 °C", diff: "Fácil" },
  { name: "Tallarín Sam Siu con Tres Carnes y Tiras de Tortilla de Huevo", prep: "20 min", cook: "10 min", tool: "Wok", temp: "210 °C", diff: "Media" },
  { name: "Fideo de Arroz (Fansí / Sahofan) Saltado al Curry o Sillao con Mariscos", prep: "20 min remojo", cook: "8 min", tool: "Wok bien aceitado", temp: "205 °C", diff: "Media" },
  { name: "Combinado de Chifa (Arroz Chaufa + Tallarín Saltado + Wantán)", prep: "25 min", cook: "12 min", tool: "Wok", temp: "215 °C", diff: "Fácil" },
  { name: "Arroz Chaufa Especial de Tres Carnes (Pollo, Chancho Asado y Langostinos)", prep: "20 min", cook: "8 min", tool: "Wok de acero", temp: "230 °C", diff: "Fácil" },
  { name: "Arroz Chaufa de Cecina y Plátano Maduro Frito (Chaufa Charapa)", prep: "15 min", cook: "8 min", tool: "Wok", temp: "220 °C", diff: "Fácil" },
  { name: "Arroz Chaufa Blanco Estilo Salón Cantonés con Clara de Huevo y Conchas", prep: "15 min", cook: "7 min", tool: "Wok impecable", temp: "200 °C sin usar sillao oscuro", diff: "Media" },
  { name: "Arroz Chaufa de Pato Asado con Cebolla China y Pimiento Asado", prep: "20 min", cook: "8 min", tool: "Wok", temp: "220 °C", diff: "Media" },
  { name: "Salsa de Tamarindo Auténtica de Chifa (Cómo Hacerla con Pulpa Natural o Pasta de Tomate)", prep: "5 min", cook: "10 min", tool: "Olla pequeña", temp: "Reducción a 100 °C con chuño diluido", diff: "Fácil" },
  { name: "Sillao Compuesto de Chifa y Aceite de Ajonjolí Aromatizado en Casa", prep: "10 min", cook: "15 min", tool: "Olla pequeña", temp: "Infusión a 90 °C con anís estrella, kion y canela", diff: "Fácil" },
  { name: "Cómo Terciopelar (Velveting) el Pollo y la Res para que Queden Suaves como en el Chifa", prep: "20 min", cook: "2 min", tool: "Bol y wok", temp: "Marinado con clara de huevo, maicena, sillao y bicarbonato", diff: "Fácil" },
  { name: "Cómo Curar y Mantener un Wok de Acero al Carbono en Cocina a Gas Doméstica", prep: "15 min", cook: "15 min", tool: "Hornilla grande y wok de acero", temp: "260 °C hasta pavonado azul-negro", diff: "Fácil" },
  { name: "Nabo Encurtido de Chifa (Daikon Dulce y Ácido) en 30 Minutos", prep: "15 min", cook: "5 min", tool: "Frasco de vidrio esterilizado", temp: "Deshidratado en sal + salmuera tibia de vinagre y azúcar", diff: "Fácil" },
  { name: "Pollo Kaylan con Gailán (Brócoli Chino), Ajo y Salsa de Ostión", prep: "15 min", cook: "8 min", tool: "Wok", temp: "210 °C", diff: "Fácil" },
  { name: "Pato en Salsa de Ajos y Mensí con Verduras de Estación", prep: "25 min", cook: "30 min", tool: "Wok con tapa", temp: "190 °C", diff: "Media" },
  { name: "Chijaukay de Pescado y Mariscos Crocantes al Wok", prep: "20 min", cook: "10 min", tool: "Wok", temp: "190 °C", diff: "Media" },
  { name: "Tipakay de Cerdo Crocante con Piña y Salsa Agridulce Roja", prep: "20 min", cook: "12 min", tool: "Wok", temp: "190 °C", diff: "Fácil" },
  { name: "Tortilla de Langostinos y Cebolla China (Fu Yung de Chifa)", prep: "10 min", cook: "6 min", tool: "Wok", temp: "180 °C jugosa por dentro", diff: "Fácil" },
  { name: "Caldo Base Chino-Peruano de Pollo, Cerdo y Kion para Sopas y Ligados de Chifa", prep: "15 min", cook: "90 min", tool: "Olla alta", temp: "90 °C hervor lento espumado", diff: "Fácil" },
  { name: "Berenjenas Rellenas de Cerdo y Langostino en Salsa de Tau Sí (Estilo Chifa)", prep: "25 min", cook: "15 min", tool: "Wok", temp: "185 °C", diff: "Media" },
  { name: "Chanchito con Verduras y Almendras al Wok", prep: "15 min", cook: "10 min", tool: "Wok", temp: "210 °C", diff: "Fácil" },
  { name: "Pollo Cinco Sabores con Naranja, Canela China y Anís Estrella", prep: "20 min", cook: "15 min", tool: "Wok", temp: "190 °C", diff: "Media" },
  { name: "Siu Kao Frito con Salsa de Tamarindo y Encurtido de Nabo", prep: "25 min", cook: "5 min", tool: "Sartén profunda", temp: "175 °C", diff: "Fácil" },
  { name: "Banquete de Chifa en Casa para 6 Personas: Cómo Coordinar Chaufa, Tallarín, Tipakay y Wantán", prep: "45 min", cook: "30 min", tool: "Wok y 2 hornillas", temp: "Secuencia profesional de restaurante", diff: "Media" }
];

const NIKKEI_DISHES = [
  { name: "Acevichado Maki Casero Paso a Paso y la Verdadera Salsa Acevichada", prep: "35 min", cook: "20 min arroz", tool: "Esterilla Makisu forrada en film", temp: "Arroz Shari a 36 °C (temperatura corporal)", diff: "Media" },
  { name: "Tiradito Clásico en Crema de Ají Amarillo sin Venas ni Amargor", prep: "20 min", cook: "10 min blanqueo", tool: "Cuchillo Yanagiba o chef bien afilado", temp: "Pescado frío a 4 °C en corte Sashimi", diff: "Fácil" },
  { name: "Tiradito al Olivo con Emulsión de Aceituna de Botija de Tacna", prep: "20 min", cook: "0 min", tool: "Licuadora de alta velocidad y cuchillo", temp: "Servicio en plato frío de refrigeradora", diff: "Fácil" },
  { name: "Tiradito Bicolor (Crema de Rocoto y Crema de Ají Amarillo) con Choclo y Glaseado", prep: "25 min", cook: "10 min", tool: "Cuchillo largo", temp: "Frío a 4 °C", diff: "Media" },
  { name: "Tiradito Nikkei de Atún o Salmón con Salsa Ponzu de Maracuyá, Kion y Ajonjolí", prep: "15 min", cook: "0 min", tool: "Cuchillo fileteador", temp: "4 °C", diff: "Fácil" },
  { name: "Pulpo al Olivo Estilo Restaurante Nikkei (Secreta Cocción del Pulpo sin Agua)", prep: "15 min", cook: "40 min", tool: "Olla de fondo grueso", temp: "Hervor suave en su propio jugo + baño de hielo", diff: "Media" },
  { name: "Pulpo a la Parrilla con Chimichurri Nikkei de Ají Panca, Sillao y Aceite de Ajonjolí", prep: "20 min", cook: "45 min + 5 min brasa", tool: "Olla y parrilla de fierro", temp: "230 °C en parrilla para dorar ventosas", diff: "Media" },
  { name: "Conchitas a la Parmesana al Estilo Nikkei con Mantequilla Batayaki, Sillao y Limón", prep: "15 min", cook: "4 min", tool: "Gratinador de horno o soplete", temp: "250 °C (solo 3 a 4 minutos para no achicar el coral)", diff: "Fácil" },
  { name: "Furai Maki Crocante (Empanizado en Panko) Relleno de Salmón, Queso Crema y Palta con Salsa Tare", prep: "35 min", cook: "2 min fritura", tool: "Esterilla y sartén profunda", temp: "190 °C (fritura relámpago de 90 segundos)", diff: "Media" },
  { name: "Lomo Saltado Maki con Tiras de Lomo al Wok y Salsa de Lomo Reducida", prep: "40 min", cook: "8 min", tool: "Esterilla y wok", temp: " Contraste tibio-frío", diff: "Media" },
  { name: "Causa Maki (Rollo de Masa de Causa Amarilla sin Arroz Relleno de Pulpo o Langostino)", prep: "30 min", cook: "20 min papa", tool: "Esterilla con film y prensa", temp: "Frío", diff: "Fácil" },
  { name: "Causa Nikkei con Tartar de Atún Picante, Palta e Hilos de Camote Crocante", prep: "25 min", cook: "20 min", tool: "Aro emplatar", temp: "Frío", diff: "Fácil" },
  { name: "Nigiri a lo Pobre con Lámina de Lomo Fino Sopleteada, Huevo de Codorniz y Salsa Tare", prep: "25 min", cook: "2 min soplete", tool: "Soplete de cocina", temp: "Sellado directo con llama azul", diff: "Media" },
  { name: "Nigiri de Concha de Abanico con Mantequilla de Ají Amarillo y Sal de Maras", prep: "20 min", cook: "1 min soplete", tool: "Soplete", temp: "Sopleteado de 15 segundos", diff: "Fácil" },
  { name: "Salsa Acevichada Original de Barra Nikkei (Fórmula Exacta con Fumet, Limón y Hondashi)", prep: "10 min", cook: "0 min", tool: "Licuadora", temp: "Emulsión fría con hielo", diff: "Fácil" },
  { name: "Salsa Tare Peruana (Anguila Dulce Casera) con Sillao, Mirin, Azúcar Rubia y Pisco", prep: "5 min", cook: "20 min", tool: "Olla pequeña", temp: "Reducción a 105 °C hasta punto jarabe", diff: "Fácil" },
  { name: "Cómo Preparar Arroz de Sushi (Shari) con Arroz Disponible en Perú sin que Quede Masacotudo", prep: "15 min lavado", cook: "18 min + 10 reposo", tool: "Olla arrocera y abanico", temp: "Aderezo Sushi-zu en tibio", diff: "Fácil" },
  { name: "Ceviche Nikkei de Atún y Pulpo con Leche de Tigre al Sillao, Kion y Aceite de Sésamo", prep: "15 min", cook: "0 min", tool: "Bol enfriado", temp: "4 °C", diff: "Fácil" },
  { name: "Tartar de Salmón y Palta al Estilo Peruano-Japonés con Chips de Wantán y Yuca", prep: "20 min", cook: "3 min chips", tool: "Cuchillo y aro", temp: "4 °C", diff: "Fácil" },
  { name: "Gyozas Peruanas Rellenas de Seco de Asado de Tira o Lomo Saltado con Salsa Ponzu de Ají Limo", prep: "35 min", cook: "8 min", tool: "Sartén antiadherente con tapa", temp: "Dorado en base + vapor por 5 min", diff: "Media" },
  { name: "Yuquitas Rellenas de Queso Paria y Pulpo con Salsa de Ostión y Ají Amarillo", prep: "30 min", cook: "5 min", tool: "Sartén honda", temp: "175 °C", diff: "Media" },
  { name: "Ebi Furai Peruano (Langostinos al Panko Gigantes) con Tártara al Huacatay y Maracuyá", prep: "20 min", cook: "3 min", tool: "Sartén profunda", temp: "180 °C", diff: "Fácil" },
  { name: "Pollo Karaage Nikkei Marinado en Kion, Sillao y Pisco con Mayonesa de Rocoto", prep: "30 min", cook: "6 min", tool: "Wok o Airfryer", temp: "175 °C luego 195 °C", diff: "Fácil" },
  { name: "Ramen Peruano-Nikkei con Fondo de Parihuela/Miso, Chashu de Panceta y Ají Panca", prep: "40 min", cook: "90 min", tool: "Olla sopera", temp: "95 °C", diff: "Alta" },
  { name: "Udon Saltado al Estilo Lomo Saltado con Mantequilla de Ajo, Sillao y Kasuobushi", prep: "15 min", cook: "8 min", tool: "Wok", temp: "215 °C", diff: "Fácil" },
  { name: "Chaufa Nikkei con Langostinos, Pulpo, Mantequilla Clarificada y Reducción de Tare", prep: "20 min", cook: "8 min", tool: "Wok", temp: "220 °C", diff: "Media" },
  { name: "Asado de Tira Nitsuke Braseado 3 Horas en Sillao, Mirin, Ají Panca y Kion con Puré de Papa Amarilla", prep: "20 min", cook: "180 min (o 45 min olla presión)", tool: "Olla de hierro o presión", temp: "Fuego lento a 95 °C", diff: "Media" },
  { name: "Sudado Nikkei de Mero o Cabrilla con Dashi, Miso Blanco, Chicha de Jora y Yuyo", prep: "15 min", cook: "15 min", tool: "Olla de barro o fierro", temp: "95 °C sin hervir el miso", diff: "Media" },
  { name: "Parihuela Nikkei con Pasta Miso, Ají Mirasol, Kion y Mariscos", prep: "25 min", cook: "25 min", tool: "Olla sopera", temp: "95 °C", diff: "Media" },
  { name: "Bao Buns al Vapor Rellenos de Chicharrón Peruano, Camote y Salsa Hoisin de Rocoto", prep: "60 min", cook: "12 min vapor", tool: "Vaporera", temp: "100 °C", diff: "Media" },
  { name: "Tataki de Atún o Bonito en Costra de Ajonjolí y Pimienta con Leche de Tigre al Tumbo", prep: "15 min", cook: "40 seg por lado", tool: "Sartén de hierro humeante", temp: "230 °C sellado exterior, crudo al centro", diff: "Fácil" },
  { name: "Parrilla Yakitori Nikkei: Brochetas de Corazón (Anticucho), Pollo y Hongos con Glaseado Tare-Panca", prep: "30 min", cook: "8 min", tool: "Parrilla a carbón", temp: "Brasa viva", diff: "Fácil" },
  { name: "Tempura de Verduras Andinas y Langostinos con Salsa tentsuyu al Ají Limo", prep: "20 min", cook: "4 min", tool: "Wok", temp: "Masa con agua helada a 180 °C", diff: "Media" },
  { name: "Poke Bowl Peruano (Chirashi Acevichado) con Arroz de Sushi, Pescado, Palta, Choclo y Camote", prep: "25 min", cook: "18 min arroz", tool: "Bol ancho", temp: "Frío", diff: "Fácil" },
  { name: "Maki Parrillero con Chimichurri Peruano y Top de Lomo Fino Flameado", prep: "35 min", cook: "2 min soplete", tool: "Esterilla y soplete", temp: "Flameado directo", diff: "Media" },
  { name: "Maki Carretillero con Chicharrón de Pota Crocante y Leche de Tigre al Rocoto", prep: "35 min", cook: "4 min pota", tool: "Esterilla", temp: "Contraste crocante", diff: "Media" },
  { name: "Maki al Olivo con Pulpo Cocido, Palta y Crema de Aceituna Botija", prep: "30 min", cook: "0 min", tool: "Esterilla", temp: "Frío", diff: "Fácil" },
  { name: "Arroz con Mariscos al Estilo Nikkei con Mantequilla Batayaki, Dashi y Togarashi", prep: "25 min", cook: "15 min", tool: "Sartén paellera o wok", temp: "190 °C", diff: "Media" },
  { name: "Cheesecake Japonés Esponjoso de Lúcuma o Maracuyá al Baño María", prep: "25 min", cook: "60 min", tool: "Molde alto a baño maría", temp: "150 °C horno suave", diff: "Media" },
  { name: "Helado Tempura Frito y Mochi Relleno de Manjarblanco de Lúcuma", prep: "30 min", cook: "20 seg fritura", tool: "Congeladora y wok", temp: "Congelado a -18 °C + fritura de 15 seg a 195 °C", diff: "Media" }
];

const FUEGO_Y_OLLAS_ITEMS = [
  // 35 Caja China y Cilindro
  { slug: "chancho-a-la-caja-china-tiempo-exacto-carbon-salmuera-y-secreto-del-cuero-galleta", title: "Chancho a la Caja China: Tiempos por Kilo, Cantidad de Carbón y el Secreto de la Salmuera para el Cuero Galleta", stages: [
    { phase: "Fase 1 (12h antes)", title: "Salmuera al 10%", pct: "25%", detail: "Sumerge la panceta en agua, sal gruesa, romero, ajo y rodajas de naranja sin pinchar la piel." },
    { phase: "Fase 2 (Hora 1–2)", title: "Cocción Hueso Arriba", pct: "50%", detail: "Coloca la carne con el cuero hacia abajo y las costillas arriba con 3 kg de carbón encendido." },
    { phase: "Fase 3 (Hora 3)", title: "Volteo y Secado", pct: "80%", detail: "Voltea con el cuero hacia arriba, seca la humedad y haz cortes en rombos superficiales." },
    { phase: "Fase 4 (Últimos 25 min)", title: "Reventado del Cuero", pct: "100%", detail: "Aviva las brasas arriba hasta escuchar cómo revienta la piel en burbujas crocantes." }
  ]},
  { slug: "pollo-al-cilindro-peruano-aderezo-tiempo-exacto-y-como-controlar-el-humo", title: "Pollo al Cilindro Peruano: Aderezo Jugoso, Tiempo Exacto de Cocción y Cómo Evitar que se Queme por Fuera", stages: [
    { phase: "Fase 1 (4h antes)", title: "Marinado Cítrico", pct: "25%", detail: "Adereza con cerveza negra, sillao, mostaza, comino, orégano, ajo y jugo de naranja." },
    { phase: "Fase 2 (Min 0–30)", title: "Colgado a 180 °C", pct: "55%", detail: "Cuelga los pollos en ganchos dobles con carbón en anillo alrededor (no justo debajo de la grasa)." },
    { phase: "Fase 3 (Min 30–55)", title: "Ahumado con Leña", pct: "85%", detail: "Agrega trozos de leña de manzano o algarrobo hidratados y barniza con el jugo del marinado." },
    { phase: "Fase 4 (Min 60 + Reposo)", title: "Dorado y Reposo", pct: "100%", detail: "Retira a 76 °C internos y deja reposar 8 minutos en tabla antes de trozar." }
  ]},
  { slug: "costillas-de-cerdo-al-cilindro-con-glaseado-de-aguaymanto-o-maracuya", title: "Costillas de Cerdo al Cilindro con Glaseado Peruano de Aguaymanto o Maracuyá: Tiernas que se Desprenden del Hueso", stages: [
    { phase: "Fase 1", title: "Retiro de Membrana", pct: "25%", detail: "Retira la pleura plateada de las costillas St. Louis o Baby Back y frota con rub seco." },
    { phase: "Fase 2 (Hora 1.5)", title: "Ahumado Vertical", pct: "55%", detail: "Cuelga en el cilindro a 150 °C constantes con chimenea semiabierta." },
    { phase: "Fase 3 (45 min)", title: "Envuelto con Mantequilla", pct: "85%", detail: "Envuelve en papel aluminio con mantequilla, azúcar rubia y jugo de maracuyá." },
    { phase: "Fase 4 (15 min)", title: "Glaseado Brillante", pct: "100%", detail: "Pinta con reducción de aguaymanto/maracuyá y ají limo durante los últimos 15 minutos." }
  ]},
  { slug: "pavo-y-pato-a-la-caja-china-como-inyectarlos-para-que-la-pechuga-quede-jugosa", title: "Pavo y Pato a la Caja China: Fórmula de Inyección de Jugos y Tiempos Exactos sin Resecar la Pechuga", stages: [
    { phase: "Fase 1 (24h)", title: "Inyección de Mantequilla y Naranja", pct: "25%", detail: "Inyecta caldo, mantequilla derretida, pisco y naranja filtrada cada 3 cm en la pechuga." },
    { phase: "Fase 2 (Hora 1.5)", title: "Pechuga Hacia Abajo", pct: "50%", detail: "Inicia con la pechuga hacia abajo protegida en bandeja con fondo de verduras y vino." },
    { phase: "Fase 3 (Hora 2.5)", title: "Giro y Dorado", pct: "80%", detail: "Gira el ave, cubre las puntas de las alas con aluminio y barniza con miel de chancaca." },
    { phase: "Fase 4 (Reposo 20 min)", title: "Trinchado Jugoso", pct: "100%", detail: "Retira a 74 °C en pechuga y reposa 20 minutos para redistribuir todos los jugos." }
  ]},
  { slug: "cuy-a-la-caja-china-y-parrilla-como-lograr-piel-crocante-sin-freir-en-aceite", title: "Cuy a la Caja China y a la Parrilla: Cómo Lograr la Piel Crocante como Cuy Chactado sin Freír en Aceite", stages: [
    { phase: "Fase 1", title: "Oreado y Limón", pct: "25%", detail: "Orea el cuy abierto al sol o refrigeradora por 4 horas y frota con ajo, comino, huacatay y limón." },
    { phase: "Fase 2 (40 min)", title: "Cocción Hueso Abajo", pct: "55%", detail: "Cocina primero por el lado de las costillas para que la carne quede cocida y jugosa." },
    { phase: "Fase 3 (25 min)", title: "Galleta de Piel", pct: "85%", detail: "Voltea con la piel hacia la tapa caliente barnizando con un toque de aceite de achiote." },
    { phase: "Fase 4", title: "Servido con Picante", pct: "100%", detail: "Sirve de inmediato con papas doradas, choclo y salsa de maní o uchucuta." }
  ]},
  { slug: "pachamanca-en-caja-china-y-en-olla-como-replicar-el-sabor-a-piedra-caliente-y-tierra", title: "Pachamanca en Caja China vs. Pachamanca a la Olla: El Truco de las Piedras de Río y las Pancas para el Sabor Auténtico", stages: [
    { phase: "Fase 1 (12h)", title: "Macerado en Chincho y Huacatay", pct: "25%", detail: "Licúa chincho, huacatay, culantro, ají panca, mirasol, chicha de jora y ajo para las 3 carnes." },
    { phase: "Fase 2", title: "Cama de Pancas y Tubérculos", pct: "50%", detail: "Coloca papas, camotes y yucas abajo, carnes al centro y habas con humitas arriba." },
    { phase: "Fase 3 (90 min)", title: "Sellado Hermético al Vapor", pct: "85%", detail: "Cubre con hojas de plátano/pancas húmedas y sella la olla o bandeja de la caja china." },
    { phase: "Fase 4", title: "Destapado de Fiesta", pct: "100%", detail: "Dora 10 minutos las carnes y sirve con queso cachipa y japchi." }
  ]},
  { slug: "como-curar-una-caja-china-un-cilindro-o-una-parrilla-nueva-antes-del-primer-uso", title: "Cómo Curar una Caja China, Cilindro Peruano o Parrilla Nueva Paso a Paso (Elimina Olores Metálicos y Óxido)", stages: [
    { phase: "Fase 1", title: "Lavado Desengrasante", pct: "25%", detail: "Lava el acero o cilindro con agua caliente, detergente neutro y vinagre para quitar aceites industriales." },
    { phase: "Fase 2 (30 min)", title: "Quema en Vacío", pct: "55%", detail: "Enciende 2.5 kg de carbón por 30 minutos para volatilizar residuos de soldadura o pintura externa." },
    { phase: "Fase 3", title: "Curado con Grasa y Cebolla", pct: "85%", detail: "Frota las rejillas en caliente con un trozo de grasa de cerdo/res clavado en trinche y media cebolla." },
    { phase: "Fase 4", title: "Sellado Protector", pct: "100%", detail: "Guarda siempre con una película fina de aceite vegetal para evitar corrosión por humedad limeña." }
  ]}
];

const EXTRA_FUEGO_Y_OLLAS = [
  // 28 más de Caja China / Cilindro / Parrilla Peruana
  { title: "Asado de Tira y Costillar de Res al Cilindro Peruano: 3 Horas de Ahumado Lento", tool: "Cilindro Peruano", time: "3 horas a 140 °C", tip: "Usa carbón de algarrobo y envuelve a la segunda hora con caldo de res y cerveza negra." },
  { title: "Panceta de Cerdo al Cilindro con Cuero Reventado (Truco de la Sal Gruesa y el Golpe de Calor)", tool: "Cilindro Peruano", time: "2 horas 15 min", tip: "Seca la piel 12 horas en la refrigeradora destapada antes de llevarla al cilindro." },
  { title: "Cabrito y Cordero a la Caja China Estilo Norteño y Puneño", tool: "Caja China", time: "2 horas 30 min", tip: "Marina en chicha de jora, loche rallado, ajo y ají panca para que la carne quede mantequillosa." },
  { title: "Pescado Entero (Cabrilla, Chita o Corvina) a la Caja China en Hoja de Plátano", tool: "Caja China", time: "35 minutos", tip: "Envuelve el pescado con aderezo de sudado dentro de hojas de plátano y papel aluminio." },
  { title: "Pollo a la Brasa Casero Hecho en Cilindro o Caja China con el Auténtico Sabor de Pollería", tool: "Cilindro / Caja China", time: "65 minutos", tip: "El romero seco molido junto con comino, pimienta negra, sillao y cerveza negra clona el aroma de pollería." },
  { title: "Picaña y Punta de Cadera al Cilindro Peruano: Cómo Lograr el Punto Tres Cuartos Perfecto", tool: "Cilindro Peruano", time: "50 minutos", tip: "Cuelga la picaña con la capa de grasa mirando hacia el borde del cilindro y retira a 58 °C internos." },
  { title: "Lechón Entero a la Caja China para Fiestas: Guía de Pesos, Carbón y Tiempos Exactos", tool: "Caja China Grande", time: "3.5 a 4 horas", tip: "Cubre las orejas y la cola con papel aluminio durante las primeras 2.5 horas para que no se carbonicen." },
  { title: "Anticuchos de Corazón, Rachi, Mollejitas y Choncholí en Parrilla Casera sin Humo Excesivo", tool: "Parrilla a Carbón o Hierro", time: "3 minutos por lado", tip: "Corta el corazón en sesgo de 2 cm de grosor y no lo sobrecocines: 3 minutos por lado a brasa fuerte lo deja jugoso." },
  { title: "Chancho al Palo Casero: Cómo Armar la Reja y Asar Panceta frente a Leña de Manzano y Huarango", tool: "Reja de Chancho al Palo", time: "3.5 a 4 horas", tip: "Inicia a 80 cm del fuego por el lado de los huesos y acerca la reja en los últimos 30 minutos para reventar el cuero." },
  { title: "Guarniciones en la Caja China: Cómo Aprovechar el Interior para Asar Papas, Camotes, Choclos y Piña", tool: "Bandeja Interna Caja China", time: "60 minutos", tip: "Coloca las papas cocktail y camotes en los bordes de la bandeja para que se doren con los jugos del cerdo." },
  { title: "Chorizos Regionales Peruanos (Huachano, Tarapotino y Arequipeño) a la Parrilla y al Cilindro", tool: "Parrilla / Cilindro", time: "20 minutos", tip: "Nunca pinches los chorizos artesanales en la parrilla para no perder sus jugos internos." },
  { title: "Alitas Acevichadas y Alitas al Ají Limo Ahumadas al Cilindro", tool: "Rejilla Superior de Cilindro", time: "35 minutos", tip: "Ahúma las alitas a seco con polvo de hornear y sal, y báñalas en salsa acevichada justo al salir." },
  { title: "Trucha Andina a la Parrilla Rellena de Muña, Huacatay, Ajo y Mantequilla", tool: "Rejilla Pescado Parrilla", time: "12 minutos", tip: "Engrasa bien la piel de la trucha antes de ponerla sobre la rejilla muy caliente para que no se pegue." },
  { title: "Pulpo y Langostinos a la Parrilla con Aderezo Anticuchero de Ají Panca", tool: "Parrilla Caliente", time: "4 a 5 minutos", tip: "El pulpo ya debe estar tierno (hervido 40 min); la parrilla solo le da el sellado crocante y ahumado en 5 minutos." },
  { title: "Lomo al Trapo al Estilo Peruano sobre las Brasas del Carbón con Costra de Sal de Maras y Hierbas", tool: "Brasas Directas de Carbón", time: "16 minutos total (8+8)", tip: "Humedece el lienzo de algodón en chicha de jora o vino tinto antes de cubrirlo con 1 kg de sal de Maras y orégano." },
  { title: "Enrollado de Cerdo Relleno de Guindones, Duraznos y Tocino a la Caja China o Cilindro", tool: "Caja China / Cilindro", time: "1 hora 45 min", tip: "Brida el lomo de cerdo cada 2.5 cm con pabilo de cocina y envuélvelo en red de tocino para mantener la humedad." },
  { title: "Parrillada Peruana Completa para 8 Personas: Qué Cortes Comprar, Orden en la Parrilla y Cremas", tool: "Parrilla Familiar", time: "Secuencia de 45 min", tip: "Empieza con chorizos, anticuchos y mollejitas; sigue con chuletas y pollo; cierra con bife ancho y cuadril." },
  { title: "3 Cremas Infaltables para Parrilla, Cilindro y Caja China: Ají Pollero, Chimichurri de Huacatay y Rocoto Carretillero", tool: "Licuadora o Batán", time: "10 minutos", tip: "Sofríe siempre el ají, el ajo y la cebolla antes de licuarlos con queso o galleta para triplicar su duración." },
  { title: "Carbón de Algarrobo vs. Briquetas vs. Leña de Eucalipto y Manzano: Cuál Usar en Caja China y Cilindro", tool: "Combustibles de Brasa", time: "Brasa de 2 a 4 horas", tip: "El carbón de algarrobo norteño da el mayor poder calórico sin chispear; suma astillas de manzano para el aroma." },
  { title: "Pato Entero al Cilindro con Glaseado de Naranja Agria, Chancaca y Ají Mirasol", tool: "Cilindro Peruano", time: "1 hora 50 min", tip: "Haz punciones diagonales solo en la grasa de la piel (sin tocar la carne) para que drene y quede crocante." },
  { title: "Pierna de Cerdo y Jamón Glaseado en Caja China para Cena de Fin de Año o Cumpleaños", tool: "Caja China", time: "3 horas 15 min", tip: "Cocina las primeras 2 horas cubierta con papel aluminio y jugo de piña para que el centro quede tierno." },
  { title: "Pechuga de Pavo Ahumada al Cilindro para Sánguches Criollos detoda la Semana", tool: "Cilindro Peruano", time: "1 hora 20 min", tip: "Marina en salmuera con ajo, laurel y pimienta de chapa y retira a 72 °C exactos." },
  { title: "Choclos con Queso y Papas Huayro Asadas al Rescoldo del Carbón con Crema de Huacatay", tool: "Rescoldo de Parrilla", time: "25 minutos", tip: "Asa los choclos dentro de sus propias pancas remojadas en agua con sal sobre las brasas." },
  { title: "Pollo a la Parrilla con Aderezo Anticuchero (Pollada a la Parrilla Jugosa)", tool: "Parrilla a Carbón", time: "25 minutos", tip: "Usa pierna con encuentro deshuesada o con cortes profundos hasta el hueso para una cocción uniforme." },
  { title: "Costillar de Cordero con Hierbas Andinas (Muña y Romero) a la Caja China", tool: "Caja China", time: "1 hora 40 min", tip: "La muña fresca neutraliza el sabor fuerte de la grasa de cordero y aporta un aroma mentolado delicioso." },
  { title: "Brochetas Mixtas Peruanas (Res, Pollo, Chorizo y Pimiento) al Aderezo de Ají Amarillo", tool: "Parrilla o Plancha", time: "10 minutos", tip: "Remoja los palitos de bambú en agua 30 minutos antes para que no se quemen sobre las brasas." },
  { title: "Queso Paria a la Parrilla (Provoleta Andina) con Orégano de Tacna y Miel de Rocoto", tool: "Sartén de Hierro en Parrilla", time: "6 minutos", tip: "Orea una rodaja gruesa de 2 cm de Queso Paria 24h en la refrigeradora para que dore por fuera sin desparramarse." },
  { title: "Piña Golden Asada al Cilindro con Canela, Pisco y Chancaca (El Mejor Acompañante del Chancho)", tool: "Gancho en Cilindro", time: "40 minutos", tip: "La bromelina de la piña asada ayuda a digerir las carnes de cerdo a la caja china y al cilindro." },

  // 30 Olla a Presión y Olla de Barro
  { title: "Tabla Maestra de Tiempos en Olla a Presión para Cocina Peruana (Menestras, Mondongo, Pata, Lengua y Res)", tool: "Olla a Presión", time: "12 a 45 minutos", tip: "Cuenta los minutos exactos desde que la válvula empieza a silbar y baja el fuego al mínimo." },
  { title: "Cómo Cocinar Mondongo para Cau Cau, Patasca y Mondonguito en Olla a Presión en 35 Minutos (Tierno y sin Olor)", tool: "Olla a Presión", time: "35 minutos", tip: "Hiérvelo con 3 ramas de hierbabuena, 1 trozo de apio y media rodaja de limón; desecha esa primera agua si prefieres sabor suave." },
  { title: "Seco de Res con Frejoles en Olla a Presión: Carne que se Corta con Cuchara en 25 Minutos", tool: "Olla a Presión", time: "25 minutos", tip: "En la olla a presión el líquido casi no se evapora: usa solo 1 taza de chicha de jora y cerveza negra." },
  { title: "Frejol Canario, Pallares y Garbanzos en Olla a Presión (Con Remojo y Sin Remojo de Emergencia)", tool: "Olla a Presión", time: "15 min (remojado) / 35 min (sin remojo)", tip: "Agrega 1 cucharada de aceite y un trozo de tocino/pellejo para evitar que la espuma obstruya la válvula." },
  { title: "Patasca o Sopa de Mondongo y Mote en Olla a Presión en la Mitad de Tiempo", tool: "Olla a Presión Grande", time: "40 minutos", tip: "Cocina el maíz mote pelado junto con la pata de res y el mondongo para que el caldo espese con su colágeno." },
  { title: "Pata de Res para Patita con Maní y Sancochado en Olla a Presión: Punto Gelatinoso Perfecto", tool: "Olla a Presión", time: "45 minutos", tip: "Deja liberar la presión de forma natural durante 15 minutos sin abrir la válvula de golpe." },
  { title: "Lengua de Res Entomatada o en Salsa de Vino en Olla a Presión (Y Cómo Pelarla en Caliente)", tool: "Olla a Presión", time: "40 minutos", tip: "Pela la piel blanca de la lengua apenas salga tibia del caldo; si se enfría por completo cuesta el doble retirarla." },
  { title: "Asado de Pejerrey o Cuadril en Olla a Presión con Puré de Papa Amarilla en 30 Minutos", tool: "Olla a Presión", time: "30 minutos", tip: "Sella la pieza entera hasta dorar oscuro por todos sus lados antes de licuar la salsa de zanahoria, tomate y vino." },
  { title: "Sancochado Limeño Completo en Olla a Presión: En Qué Orden Poner el Pecho, Choclo, Yuca y Col", tool: "Olla a Presión", time: "30 min carne + 8 min verduras", tip: "Cocina primero el pecho de res y el asado de tira 30 min; destapa y suma las verduras para que no se deshagan." },
  { title: "Pechuga de Pollo y Gallina Dura en Olla a Presión para Ají de Gallina y Caldo en 18 Minutos", tool: "Olla a Presión", time: "12 min pollo / 25 min gallina", tip: "La gallina criolla o roja queda suave como mantequilla en 25 minutos de presión con kion, apio y poro." },
  { title: "Carapulcra de Papa Seca y Cerdo en Olla a Presión sin que se Pegue ni se Queme el Fondo", tool: "Olla a Presión", time: "18 minutos", tip: "Agrega el maní tostado molido y el chocolate recién al destapar la olla a presión para que no se asiente en la base." },
  { title: "Adobo Arequipeño en Olla a Presión cuando No Tienes Olla de Barro: Listo en 25 Minutos", tool: "Olla a Presión", time: "25 minutos", tip: "Usa cogote o brazuelo de cerdo con hueso; la presión concentra el concho de chicha y el ají panca en la fibra." },
  { title: "Estofado de Res o Pollo en Olla a Presión en 15 Minutos para Almuerzos de Día de Semana", tool: "Olla a Presión", time: "15 minutos", tip: "Corta las papas y zanahorias en trozos grandes para que mantengan su forma tras los 15 minutos." },
  { title: "Chupe de Habas, Quinua o Trigo en Olla a Presión: Granos Reventados en 12 Minutos", tool: "Olla a Presión", time: "12 minutos", tip: "Nunca pongas la leche evaporada ni el queso antes de cerrar la olla a presión: agrégalos al final con el orégano." },
  { title: "Manjarblanco de Olla (Dulce de Leche Peruano) Hecho con Lata de Leche Condensada en Olla a Presión", tool: "Olla a Presión", time: "35 minutos", tip: "Deja enfriar la lata sumergida completamente antes de abrirla para obtener el punto firme de alfajor o suspiro." },
  { title: "Cómo Curar una Olla de Barro Peruana (Chulucanas, Arequipa o Puno) para que No se Raje en Cocina a Gas", tool: "Olla de Barro Artesanal", time: "Remojo 12h + Curado 20 min", tip: "Sumerge en agua 12 horas, frota la base exterior con diente de ajo crudo o grasa de cerdo y hierve leche o agua con maíz." },
  { title: "Por Qué el Seco de Cabrito, el Adobo y los Frejoles Saben Mejor en Olla de Barro (Ciencia Térmica)", tool: "Olla de Barro", time: "Cocción lenta a 92 °C", tip: "La arcilla retiene el calor de forma envolvente sin puntos calientes metálicos, caramelizando los azúcares de la cebolla y la chicha." },
  { title: "Frejoles Batidos en Olla de Barro con Seco a la Norteña: Cómo Lograr la Textura Aterciopelada", tool: "Olla de Barro", time: "1 hora 30 min", tip: "Usa cuchara de palo para aplastar un 20% de los frejoles contra la pared rugosa de la olla de barro." },
  { title: "Arroz con Pato en Olla de Barro o Paila: Cómo Lograr el Concolón Dorado sin Quemar el Arroz", tool: "Olla de Barro / Paila", time: "45 minutos", tip: "Coloca un difusor de calor metálico debajo de la olla de barro durante los últimos 15 minutos de graneado." },
  { title: "Sopa Seca Chinchana en Olla de Barro: La Proporción Exacta de Caldo para que el Fideo Absorba Todo el Sabor", tool: "Olla de Barro", time: "18 minutos", tip: "Usa 1 litro de caldo concentrado de gallina por cada 500 g de espagueti grueso y albahaca recién molida." },
  { title: "Parihuela y Sudado de Pescado en Olla de Barro: Cómo Mantener el Hervor por 10 Minutos en la Mesa", tool: "Olla de Barro Individual", time: "15 minutos", tip: "Retira la olla de barro del fuego 2 minutos antes del punto final: la inercia térmica terminará de cocer el pescado en la mesa." },
  { title: "Chupe de Camarones y Chupe de Pescado en Olla de Barro Arequipeña", tool: "Olla de Barro", time: "25 minutos", tip: "Agrega el huevo escalfado y el huacatay justo al apagar el fuego para que se cocinen con el calor residual del barro." },
  { title: "Locro de Zapallo Macre y Huatia Surcana en Olla de Barro a Fuego Lento", tool: "Olla de Barro", time: "40 minutos", tip: "El barro deshace suavemente el zapallo macre y la papa amarilla sin necesidad de añadir agua extra." },
  { title: "Sancochado y Caldo de Cabeza en Olla de Barro: Tradición de Sierra y Costa", tool: "Olla de Barro Alta", time: "2 horas", tip: "Empieza siempre con la olla de barro y el agua a temperatura ambiente sobre fuego bajo durante los primeros 10 minutos." },
  { title: "Olluquito con Charqui y Sangrecita en Tiesto o Sartén de Barro", tool: "Tiesto de Barro", time: "20 minutos", tip: "El olluco suelta su propio mucílago y jugo en la cazuela de barro sin requerir caldo adicional." },
  { title: "Cómo Lavar, Desinfectar y Guardar Ollas de Barro sin que Absorban Olor a Jabón ni Hongos", tool: "Mantenimiento Olla de Barro", time: "10 minutos", tip: "Lava con agua caliente, bicarbonato y limón (evita detergentes perfumados) y guarda destapada con papel absorbente adentro." },
  { title: "Batán Peruano de Piedra y Tunau: Cómo Curarlo y Por Qué Cambia el Sabor de la Ocopa y la Uchucuta", tool: "Batán de Piedra Andino", time: "Curado con arroz y sal", tip: "El batán rompe las paredes celulares de las hierbas por fricción fría sin oxidarlas como las cuchillas calientes de la licuadora." },
  { title: "Perol de Cobre y Paila de Bronce en la Cocina Peruana: Chicharrones, Manjarblanco y Turrón", tool: "Perol / Paila Tradicional", time: "Alta conductividad térmica", tip: "Limpia el perol de cobre con sal gruesa y mitad de limón antes de cada uso para dejarlo brillante como espejo." },
  { title: "Cocina a Leña de Algarrobo, Huarango y Eucalipto: Qué Madera Usar para Cada Plato Peruano", tool: "Fogón a Leña", time: "Fuego tradicional", tip: "El algarrobo da brasa intensa para pato y cabrito; el huarango para carapulcra y chancho; el eucalipto para pan serrano y pachamanca." },
  { title: "Cómo Hacer Concolón Peruano Perfecto en Olla de Aluminio Fundido sin Quemar el Arroz", tool: "Olla de Aluminio Fundido", time: "8 min extra a fuego bajo", tip: "Cuando el arroz ya graneó, rocía 1 cucharada de aceite por los bordes y sube el fuego a medio-bajo por 5 minutos." },

  // 25 Airfryer / Freidora de Aire Peruana
  { title: "Papa Rellena Peruana en Freidora de Aire (Airfryer): Crocante por Fuera y sin Abrirse con Solo 1 Cucharadita de Aceite", tool: "Airfryer", time: "15 min a 195 °C", tip: "Pasa la papa rellena por huevo batido y una capa fina de pan rallado o panko con aceite en spray para lograr dorado total en Airfryer." },
  { title: "Tequeños Peruanos Rellenos de Queso o Lomo Saltado en Airfryer en 8 Minutos", tool: "Airfryer", time: "8 min a 190 °C", tip: "Barniza la masa wantán con aceite con brocha por ambos lados y voltea en el minuto 4; quedan idénticos a los fritos." },
  { title: "Chicharrón de Chancho en Airfryer (Freidora de Aire): Jugoso por Dentro y con Costra Crocante", tool: "Airfryer", time: "20 min sancocho + 18 min a 200 °C", tip: "Hiérvelo primero 20 minutos en agua con sal, ajo y hierbabuena; sécalo y llévalo al Airfryer a 200 °C sin añadir aceite." },
  { title: "Yuquitas Fritas Tipo Carretilla y Tipo KFC en Airfryer: Cómo Lograr que Queden Doradas y Suaves", tool: "Airfryer", time: "14 min a 195 °C", tip: "Sancocha la yuca amarilla hasta que abra, quita la hebra central, rocía mantequilla derretida o aceite y dora a 195 °C." },
  { title: "Alitas Acevichadas y Alitas al Maracuyá en Airfryer: El Secreto del Polvo de Hornear para Piel Extra Crocante", tool: "Airfryer", time: "22 min a 195 °C", tip: "Mezcla las alitas secas con 1 cucharadita de polvo de hornear, sal y ajo en polvo antes de meterlas a la cesta." },
  { title: "Pollo Broaster Peruano en Airfryer con Chuno y Mostaza (Sin Olla de Aceite)", tool: "Airfryer", time: "20 min a 190 °C", tip: "Reboza en mezcla de harina, chuño y especias, y rocía generosamente aceite en spray para hidratar todo el polvo blanco." },
  { title: "Chicharrón de Pescado y Chicharrón de Pota en Airfryer para tu Jalea Marina Ligera", tool: "Airfryer", time: "10 min a 200 °C", tip: "No amontones los trozos de pescado en la canasta: hazlo en una sola capa para que el aire caliente circule." },
  { title: "Papas Fritas Tipo Pollería en Airfryer con Papa Canchan, Única o Amarilla", tool: "Airfryer", time: "18 min (160 °C luego 200 °C)", tip: "Remoja los bastones de papa 20 minutos en agua fría con 1 chorrito de vinagre, sécalos al 100% y usa 1 cucharada de aceite." },
  { title: "Camote Frito para Desayuno y Ceviche en Airfryer: Crocante o Glaseado", tool: "Airfryer", time: "12 min a 190 °C", tip: "Corta en rodajas de medio centímetro; en 12 minutos quedan caramelizados para tu pan con chicharrón." },
  { title: "Chifles Piuranos y Patacones Amazónicos en Freidora de Aire en 10 Minutos", tool: "Airfryer", time: "9 min a 180 °C", tip: "Lamina el plátano bellaco verde con mandolina, mezcla con 1 cdta de aceite y sal, y agita la canasta cada 3 minutos." },
  { title: "Cancha Serrana Chulpi en Airfryer sin que Salte ni se Queme", tool: "Airfryer", time: "10 min a 190 °C", tip: "Mezcla 1 taza de maíz chulpi con 1 cucharadita de aceite y sal fina; agita en el minuto 5 y 8." },
  { title: "Rocoto Relleno Gratinado en Airfryer: Listo en 12 Minutos sin Prender el Horno Grande", tool: "Airfryer", time: "12 min a 180 °C", tip: "Ideales cuando solo quieres preparar de 2 a 4 rocotos rellenos con su sombrero de queso Paria derretido." },
  { title: "Pastel de Choclo Dulce o Salado y Pastel de Acelga en Molde para Airfryer", tool: "Molde en Airfryer", time: "25 min a 170 °C", tip: "Usa una temperatura moderada de 170 °C para que cuaje el centro antes de dorar la superficie." },
  { title: "Empanadas de Carne y Pollo en Airfryer con Masa Casera o de Hojaldre", tool: "Airfryer", time: "12 min a 180 °C", tip: "Pinta con yema de huevo batida con 1 cucharadita de leche para un brillo de panadería." },
  { title: "Anticuchos de Corazón y Brochetas de Pollo en Airfryer (Sabor a Brasa en Departamento)", tool: "Airfryer", time: "8 min a 200 °C (4 min por lado)", tip: "Precalienta el Airfryer 5 minutos a máxima potencia (200 °C) antes de meter los palitos de anticucho." },
  { title: "Pejerreyes Arrebozados y Hueveras Fritas en Airfryer para Pan con Pejerrey", tool: "Airfryer", time: "8 min a 195 °C", tip: "Coloca papel manteca perforado en la base para que el rebozado no se adhiera a la rejilla." },
  { title: "Plátano Maduro Asado con Queso y Miel de Chancaca en Airfryer en 12 Minutos", tool: "Airfryer", time: "12 min a 185 °C", tip: "Ásalo con cáscara 8 minutos, ábrelo a lo largo, rellena con queso mantecoso y gratina 4 minutos más." },
  { title: "Pollo al Horno Peruano al Ají Panca y Naranja en Airfryer (4 Presas Jugosas en 25 Minutos)", tool: "Airfryer", time: "25 min a 180 °C", tip: "Empieza 15 minutos con la piel hacia abajo y termina 10 minutos con la piel hacia arriba a 195 °C." },
  { title: "Bistec Apanado Peruano (Milanesa Criolla) Crocante en Airfryer", tool: "Airfryer", time: "9 min a 195 °C", tip: "Mezcla el pan rallado con una cucharada de aceite antes de empanizar para que dore de manera uniforme." },
  { title: "Salchipapa y Choripapa Peruana en Airfryer con Papas Nativas y Cremas Caseras", tool: "Airfryer", time: "18 min total", tip: "Cocina las papas 13 minutos y agrega los hot dogs y chorizos cortados en los últimos 5 minutos." },
  { title: "Choclo con Queso Gratinado a la Huancaína o al Ajo en Airfryer", tool: "Airfryer", time: "8 min a 190 °C", tip: "Pinta el choclo sancochado con mantequilla de ajo y cúbrelo de queso rallado antes de gratinar." },
  { title: "Trucha Dorada al Ajo y Limón en Freidora de Aire sin Olor a Fritura en Casa", tool: "Airfryer", time: "11 min a 195 °C", tip: "Coloca el filete con la piel hacia arriba los últimos 5 minutos para que quede crocante como chicharrón." },
  { title: "Picarones y Buñuelos en Airfryer: Cómo Adaptar la Masa para Cocción con Aire Caliente", tool: "Airfryer", time: "9 min a 190 °C", tip: "Usa moldes de donas de silicona engrasados para mantener la forma de aro y baña en miel caliente al salir." },
  { title: "Cachangas y Yuquitas de Panadería en Airfryer en 7 Minutos", tool: "Airfryer", time: "7 min a 190 °C", tip: "Estira la masa fina, pincela con mantequilla derretida y se inflarán en pocos minutos." },
  { title: "Queque Peruano de Naranja o Plátano en Airfryer (Receta para Molde de 18 cm)", tool: "Airfryer", time: "30 min a 160 °C", tip: "Cubre el molde con papel aluminio los primeros 18 minutos para que suba parejo sin quemarse arriba." }
];

export function getCat5And6Seeds() {
  const seeds = [];

  // 5A: 50 Chifa Peruano
  CHIFA_DISHES.forEach((c) => {
    const cleanSlug = c.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    seeds.push({
      slug: `chifa-peruano-${cleanSlug}`,
      title: `Chifa Peruano en Casa: ${c.name} (Receta y Secreto del Wok)`,
      category: "chifa-y-nikkei-casero",
      categoryName: "Chifa y Cocina Nikkei",
      focusKeyword: c.name.split("(")[0].trim().toLowerCase(),
      layoutVariant: "ficha-comanda-chef",
      schemaType: "Recipe",
      badgeLabel: `🥢 Chifa Auténtico`,
      imageHint: "chaufa",
      chefMeta: {
        prepTime: c.prep,
        cookTime: c.cook,
        servings: "4 porciones de salón",
        difficulty: c.diff,
        keyTool: c.tool,
        tempNote: c.temp,
      },
      summary: `Aprende a preparar ${c.name} con el auténtico sabor de los chifas limeños. Control de fuego (${c.temp}), proporción de sillao, aceite de ajonjolí, kion y chuño paso a paso.`,
    });
  });

  // 5B: 40 Cocina Nikkei Peruana (Total Cat 5 = 90)
  NIKKEI_DISHES.forEach((n) => {
    const cleanSlug = n.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    seeds.push({
      slug: `cocina-nikkei-${cleanSlug}`,
      title: `Cocina Nikkei Peruana: ${n.name} Paso a Paso`,
      category: "chifa-y-nikkei-casero",
      categoryName: "Chifa y Cocina Nikkei",
      focusKeyword: n.name.split("(")[0].trim().toLowerCase(),
      layoutVariant: "ficha-comanda-chef",
      schemaType: "Recipe",
      badgeLabel: `🍣 Fusión Nikkei`,
      imageHint: "nikkei",
      chefMeta: {
        prepTime: n.prep,
        cookTime: n.cook,
        servings: "4 porciones",
        difficulty: n.diff,
        keyTool: n.tool,
        tempNote: n.temp,
      },
      summary: `Receta maestra de cocina Nikkei peruana: ${n.name}. Técnicas de corte, equilibrio entre ajíes peruanos y umami japonés (dashi, sillao, mirin) usando ${n.tool}.`,
    });
  });

  // 6A: 7 Pilares de Caja China y Cilindro con stages personalizados
  FUEGO_Y_OLLAS_ITEMS.forEach((f) => {
    seeds.push({
      slug: f.slug,
      title: f.title,
      category: "fuego-brasa-y-ollas",
      categoryName: "Caja China, Cilindro y Ollas",
      focusKeyword: f.title.split(":")[0].toLowerCase(),
      layoutVariant: "cronograma-fuego",
      schemaType: "Recipe",
      badgeLabel: `🔥 Brasa & Precisión`,
      imageHint: "platos",
      timelineSteps: f.stages,
      summary: `${f.title}. Cronograma térmico en 4 fases para garantizar carnes jugosas por dentro y doradas por fuera.`,
    });
  });

  // 6B: 83 artículos adicionales (28 Caja China/Cilindro/Parrilla + 30 Olla a Presión/Barro + 25 Airfryer = 90 Total Cat 6)
  EXTRA_FUEGO_Y_OLLAS.forEach((e) => {
    const cleanSlug = e.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: e.title,
      category: "fuego-brasa-y-ollas",
      categoryName: "Caja China, Cilindro y Ollas",
      focusKeyword: e.title.split(":")[0].toLowerCase(),
      layoutVariant: "cronograma-fuego",
      schemaType: e.title.includes("Curar") || e.title.includes("Tabla") || e.title.includes("Lavar") ? "HowTo" : "Recipe",
      badgeLabel: `🔥 ${e.tool}`,
      imageHint: e.tool.includes("Airfryer") ? "electrodomesticos" : "platos",
      timelineSteps: [
        { phase: "Etapa 1 (Preparación)", title: "Aderezo y Selección", pct: "25%", detail: "Acondicionamiento de la proteína o insumo y sellado aromático." },
        { phase: "Etapa 2 (Inicio Térmico)", title: `Carga en ${e.tool}`, pct: "50%", detail: `Control de temperatura y tiempo principal (${e.time}).` },
        { phase: "Etapa 3 (Punto Clave)", title: "Textura y Dorado", pct: "80%", detail: e.tip },
        { phase: "Etapa 4 (Final)", title: "Reposo y Servido", pct: "100%", detail: "Reposo de 5 a 10 minutos antes de cortar o servir en mesa." },
      ],
      summary: `Guía técnica y receta: ${e.title}. Tiempo exacto (${e.time}) en ${e.tool} y secreto del chef: ${e.tip}`,
    });
  });

  return seeds;
}
