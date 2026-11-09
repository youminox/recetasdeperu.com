/**
 * Categoría 9: pisco-cocteleria-y-bebidas-calientes (80 artículos)
 * Categoría 10: panaderia-regional-y-dulces-de-convento (70 artículos)
 * Total: 150 semillas.
 */

const PISCO_Y_BEBIDAS = [
  // 45 Coctelería con Pisco y Macerados
  { name: "Pisco Sour Clásico de Catedral (Fórmula Exacta 3-1-1 de Bar Histórico Limeño)", tool: "Coctelera de 3 cuerpos o Licuadora", temp: "Batido en seco + 12 seg con hielo grueso", diff: "Fácil" },
  { name: "Guía de las 8 Uvas Pisqueras del Perú (Quebranta, Italia, Torontel, Moscatel, Albilla, Negra Criolla, Mollar y Uvina): Cuál Usar en Cada Cóctel", tool: "Copa Pisquera Riedel", temp: "Servicio a 16 °C – 18 °C", diff: "Fácil" },
  { name: "Chilcano de Pisco Perfecto (Quebranta o Acholado) con Ginger Ale, Limón Sutil y Amargo de Angostura", tool: "Vaso Highball largo con hielo macizo", temp: "Refrescante a 4 °C", diff: "Fácil" },
  { name: "Maracuyá Sour Peruano con Espuma Firme de Clara de Huevo y Jarabe de Goma Casero", tool: "Coctelera Boston", temp: "Doble colado sobre copa fría", diff: "Fácil" },
  { name: "Cóctel de Algarrobina Piurano Tradicional con Pisco Quebranta, Leche Evaporada, Yema y Canela", tool: "Licuadora o Coctelera", temp: "Cremoso y bien helado", diff: "Fácil" },
  { name: "Cóctel Capitán Peruano (El Manhattan de los Andes con Pisco Quebranta y Vermouth Rosso)", tool: "Vaso Mezclador (Mixing Glass)", temp: "Refrescado con hielo (nunca batido)", diff: "Fácil" },
  { name: "Pisco Punch Tradicional con Piña Golden en Almíbar de Clavo y Limón Sutil", tool: "Coctelera y Copa Tulipán", temp: "4 °C", diff: "Fácil" },
  { name: "Chicha Sour (Pisco Sour con Reducción Concentrada de Chicha Morada y Canela)", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Coca Sour Andino con Pisco Macerado en Hoja de Coca de Cusco", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Aguaymanto Sour y Chilcano de Aguaymanto con Pisco Aromático Italia", tool: "Mortero (Pisar) y Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Tumbo Sour Serrano con Pulpa Natural de Tumbo y Pisco Acholado", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Camu Camu Sour Amazónico con Pisco Torontel y Toque de Miel Regional", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Cóctel Sol y Sombra (Pisco Peruano, Licor de Guinda de Huaura y Ginger Ale)", tool: "Vaso Largo", temp: "4 °C", diff: "Fácil" },
  { name: "Perú Libre (Pisco Quebranta, Coca-Cola Helada y Limón Sutil en Rodajas)", tool: "Vaso Highball", temp: "4 °C", diff: "Fácil" },
  { name: "Cóctel Machu Picchu (Triple Capa de Granadina, Jugo de Naranja y Pisco con Menta)", tool: "Cuchara de Bar para Densidades", temp: "4 °C", diff: "Media" },
  { name: "Pisco Tonic Botánico con Pisco Italia o Mosto Verde, Agua Tónica, Pepino y Romero", tool: "Copa Balón con hielo roca", temp: "4 °C", diff: "Fácil" },
  { name: "Pisco Mule en Taza de Cobre con Kion Machacado, Limón y Cerveza de Jengibre", tool: "Mug de Cobre", temp: "2 °C", diff: "Fácil" },
  { name: "Chilcano de Kion y Hierbaluisa con Macerado Casero en 5 Minutos", tool: "Vaso Highball", temp: "4 °C", diff: "Fácil" },
  { name: "Chilcano de Maracuyá y Ají Limo (El Chilcano Picante de las Barras de Barranco)", tool: "Vaso Highball", temp: "4 °C", diff: "Fácil" },
  { name: "Chilcano de Frutos Rojos (Fresa, Arándano y Frambuesa) con Pisco Torontel", tool: "Vaso Highball", temp: "4 °C", diff: "Fácil" },
  { name: "Chilcano de Lúcuma y Algarrobina (Variante Cremosa de Postre)", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Chilcano de Pepino, Albahaca y Limón para Tardes de Verano", tool: "Vaso Largo", temp: "4 °C", diff: "Fácil" },
  { name: "Chilcano de Guinda de Huaura y Canela", tool: "Vaso Highball", temp: "4 °C", diff: "Fácil" },
  { name: "Macerado de Pisco con Damasco Moqueguano: Tiempo Exacto en Frasco de Vidrio", tool: "Frasco Hermético de 1 Litro", temp: "Maceración 21 días en sombra", diff: "Fácil" },
  { name: "Macerado de Pisco con Hoja de Coca y Muña Andina (Digestivo y Para Chilcanos)", tool: "Botella de Vidrio Oscuro", temp: "Maceración de solo 7 a 10 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Canela, Clavo de Olor y Cáscara de Naranja (Sin Parte Blanca Amarga)", tool: "Frasco de Vidrio", temp: "Maceración de 12 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Ají Limo y Rocoto (Cómo Controlar el Picor para Coctelería)", tool: "Botella de Vidrio", temp: "Maceración corta de 48 a 72 horas", diff: "Fácil" },
  { name: "Macerado de Pisco con Aguaymanto Deshidratado y Fresco", tool: "Frasco de Vidrio", temp: "Maceración de 15 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Kion (Jengibre) y Hierbaluisa Fresca", tool: "Frasco de Vidrio", temp: "Maceración de 10 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Granos de Café Tostado de Villa Rica y Cacao", tool: "Botella de Vidrio", temp: "Maceración de 14 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Eucalipto, Miel y Limón (El Pisco Medicinal de Invierno)", tool: "Botella de Vidrio", temp: "Maceración de 7 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Piña Golden, Manzana y Membrillo", tool: "Frasco Boca Ancha", temp: "Maceración de 15 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Arándanos, Mora y Frambuesa Peruana", tool: "Frasco de Vidrio", temp: "Maceración de 18 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Maracuyá y Mango Kent Norteño", tool: "Frasco de Vidrio", temp: "Maceración de 12 días", diff: "Fácil" },
  { name: "Macerado de Pisco con Guindones, Pasas Borrachas y Higos Secos", tool: "Frasco de Vidrio", temp: "Maceración de 30 días", diff: "Fácil" },
  { name: "Cómo Hacer Jarabe de Goma Peruano Casero (Simple Syrup 2:1) que No se Cristaliza en la Refrigeradora", tool: "Olla pequeña", temp: "Disolución a 80 °C sin hervir fuerte", diff: "Fácil" },
  { name: "Té Piteado Arequipeño y Cusqueño con Anís Nájar o Pisco, Canela y Clavo", tool: "Tetera o Taza de Barro", temp: "90 °C humeante", diff: "Fácil" },
  { name: "Calientito Andino de Pisco o Cañazo con Infusión de Hierbas Serranas, Naranja y Limón", tool: "Olla con especias", temp: "85 °C para noches de frío", diff: "Fácil" },
  { name: "Ponche de Pisco e Higos con Leche y Canela para Noches de Invierno", tool: "Olla y batidor", temp: "80 °C", diff: "Fácil" },
  { name: "Leche de Pantera Peruana (El Cóctel Marino de Cevichería con Leche de Tigre y Pisco)", tool: "Coctelera con hielo", temp: "2 °C", diff: "Fácil" },
  { name: "Pisco Sour de Chirimoya Cumbe y Guanábana Cremoso", tool: "Licuadora", temp: "4 °C", diff: "Fácil" },
  { name: "Pisco Sour de Tuna Roja y Verde Ayacuchana", tool: "Coctelera", temp: "4 °C", diff: "Fácil" },
  { name: "Pisco Sour de Hierbabuena, Albahaca o Huacatay (Herbal Sour Peruano)", tool: "Coctelera con doble colado", temp: "4 °C", diff: "Fácil" },
  { name: "Vino Borgoña y Sangría Peruana con Pisco, Frutas Picadas, Canela y Jugo de Naranja", tool: "Jarra de Vidrio de 2 Litros", temp: "Reposo 2h en frío", diff: "Fácil" },
  { name: "Tabla de Maridaje Peruano: Qué Cóctel con Pisco o Vino Peruano Va Mejor con Ceviche, Lomo Saltado, Anticuchos y Postres", tool: "Guía de Sommelier", temp: "Servicio por plato", diff: "Fácil" },

  // 35 Emolientes, Chichas Fermentadas, Ponches y Bebidas Calientes Tradicionales
  { name: "Emoliente Carretillero de Lima Auténtico: Cómo Lograr el Punto Espeso con Linaza, Cebada, Membrillo y Cola de Caballo", tool: "Olla alta de acero de 5 litros", temp: "Hervor de 45 min + jugo de limón al servir", diff: "Fácil" },
  { name: "Emoliente Especial Frutado y Medicinal (Con Alfalfa, Boldo, Uña de Gato, Chancapiedra y Polen)", tool: "Olla y licuadora para extractos", temp: "85 °C en vaso térmico", diff: "Fácil" },
  { name: "Quinua Carretillera de Desayuno con Manzana Israel, Piña y Membrillo (Cómo Espesarla sin Grumos)", tool: "Olla de fondo grueso", temp: "90 °C con chuño diluido al final", diff: "Fácil" },
  { name: "Maca Carretillera con Leche, Habas, Kiwicha y Algarrobina (Desayuno Energético de Lima)", tool: "Olla", temp: "Hervor de 25 min para cocer bien la maca", diff: "Fácil" },
  { name: "Siete Semillas Peruano Caliente con Leche o Agua, Canela y Clavo para el Desayuno", tool: "Olla y batidor de mano", temp: "Disolver harina en frío antes de hervir", diff: "Fácil" },
  { name: "Champús Limeño Calientito con Guanábana, Piña, Membrillo, Mote y Harina de Maíz", tool: "Olla grande y cuchara de palo", temp: "Servir bien caliente con canela en polvo", diff: "Media" },
  { name: "Champús Norteño y Cajamarquino de Mote y Lúcuma o Chico (Calabaza)", tool: "Olla tradicional", temp: "Caliente", diff: "Media" },
  { name: "Chicha de Jora Norteña Auténtica: Cómo Cocinarla y Fermentarla en Casa con Maíz de Jora y Chancaca", tool: "Olla y cántaro/botellón de vidrio", temp: "Hervor de 3 horas + 4 días de fermento", diff: "Media" },
  { name: "Clarito Piurano de Picantería (La Parte Superior Cristalina de la Chicha de Jora Joven)", tool: "Cántaro de barro", temp: "Servido en poto de calabaza fresco", diff: "Media" },
  { name: "Chicha de Guiñapo Arequipeña con Maíz Negro Germinado: El Acompañante del Rocoto Relleno", tool: "Olla grande", temp: "Fermento suave de 48 horas", diff: "Media" },
  { name: "Chicha Blanca de Siete Semillas y Maní (Bebida Ceremonial de Ayacucho y Cusco)", tool: "Olla y colador fino", temp: "Fría con canela y ajonjolí encima", diff: "Media" },
  { name: "Frutillada Cusqueña (Chicha de Jora con Frutillas del Valle Sagrado e Hinojo)", tool: "Caporal (Vaso gigante cusqueño)", temp: "Fresca", diff: "Fácil" },
  { name: "Chicha de Quinua y Maíz Blanco Fresca sin Alcohol para Toda la Familia", tool: "Olla", temp: "Helada", diff: "Fácil" },
  { name: "Chicha de Maní y Arroz Amazónica y Norteña Cremosa", tool: "Olla y licuadora", temp: "Helada con canela", diff: "Fácil" },
  { name: "Aguajina Amazónica y Refresco de Camu Camu: Cómo Sacar la Pulpa del Aguaje sin Amargar", tool: "Bol con agua tibia", temp: "4 °C con hielo", diff: "Fácil" },
  { name: "Chapo Amazónico de Plátano Bellaco Maduro con Leche, Canela y Clavo", tool: "Olla y licuadora", temp: "Se toma caliente en desayuno o frío al almuerzo", diff: "Fácil" },
  { name: "Masato Tradicional de Yuca de la Selva Peruana (Método Casero Higiénico con Camote Rallado)", tool: "Olla y vasija", temp: "Fermentación enzimática natural con camote crudo", diff: "Media" },
  { name: "Ponche de Habas Tostadas con Leche, Canela y Clavo para el Frío Andino", tool: "Olla", temp: "85 °C", diff: "Fácil" },
  { name: "Ponche de Almendras y Nueces Ayacuchano con Leche, Yema Batida y Toque de Vino Dulce", tool: "Olla y batidor", temp: "80 °C con merengue encima", diff: "Media" },
  { name: "Api Morado Puneño con Maíz Morado Molido, Piña, Limón y Empanadas de Queso", tool: "Olla", temp: "90 °C espeso y humeante", diff: "Fácil" },
  { name: "Café Pasado Peruano Gota a Gota (Esencia de Café en Cafetera de Lata o Prensa): Chanchamayo y Villa Rica", tool: "Cafetera peruana de goteo lento", temp: "Agua a 92 °C (no hirviendo a borbotones)", diff: "Fácil" },
  { name: "Chocolate Caliente Espeso de Pasta Pura de Cacao de Cusco o Quillabamba con Cáscara de Naranja", tool: "Olla chocolatera y molinillo", temp: "Hervor de 15 min para fundir la manteca de cacao", diff: "Fácil" },
  { name: "Leche Asada Bebible y Ponche de Yemas Batidas al Pisco (Coctel y Bebida de Invierno)", tool: "Batidor y taza", temp: "75 °C", diff: "Fácil" },
  { name: "Agua de Cebada Tostada con Linaza y Limón (El Refresco Clásico de Menú y Hospital)", tool: "Olla", temp: "Tibia o helada", diff: "Fácil" },
  { name: "Agua de Manzana Israel y Membrillo Hervida con Canela (Refresco Familiar de Diario)", tool: "Olla", temp: "Fría o tibia", diff: "Fácil" },
  { name: "Refresco de Cáscara de Piña y Coronta de Maíz Morado (Aprovechamiento Total)", tool: "Olla", temp: "Helado", diff: "Fácil" },
  { name: "Refresco de Cocona con Ají Limo o con Azúcar Rubia: Los Dos Usos de la Fruta Amazónica", tool: "Licuadora y colador", temp: "4 °C", diff: "Fácil" },
  { name: "Jugo Especial y Jugo Surtido de Mercado Peruano (Con Papaya, Plátano, Fresa, Algarrobina, Malta y Huevo)", tool: "Licuadora de vaso de vidrio", temp: "Batido espumoso al instante", diff: "Fácil" },
  { name: "Ponche de Kiwicha y Cañihua con Leche Evaporada y Pasas para Adultos Mayores y Niños", tool: "Olla", temp: "85 °C", diff: "Fácil" },
  { name: "Infusión Digestiva Andina de Muña, Coca, Anís y Manzanilla después de Comidas Pesadas", tool: "Tetera", temp: "90 °C reposado 5 min", diff: "Fácil" },
  { name: "Cremolada Peruana Casera de Maracuyá, Fresa, Lúcuma y Tamarindo (El Truco del Almíbar para que No se Haga Piedra de Hielo)", tool: "Congeladora y licuadora", temp: "-12 °C textura cremosa", diff: "Fácil" },
  { name: "Raspadilla Peruana con Jarabes Naturales de Fruta Hervida (Fresa, Tamarindo, Mango y Menta)", tool: "Olla para jarabes punto hilo", temp: "Sobre hielo raspado", diff: "Fácil" },
  { name: "Marcianos / Chupetes de Fruta Peruanos para Negocio (Lúcuma con Leche, Coco, Maracuyá y Chicha)", tool: "Bolsitas de 5x32 y embudo", temp: "Congelado", diff: "Fácil" },
  { name: "Avena con Manzana y Maracuyá (El Desayuno Carretillero Ácido-Dulce que Conquistó Lima)", tool: "Olla", temp: "Caliente o frío", diff: "Fácil" },
  { name: "Leche con Quinua y Chocolate de Taza para Loncheras Térmicas de Invierno", tool: "Olla", temp: "85 °C", diff: "Fácil" }
];

const PANADERIA_Y_DULCES = [
  // 35 Panes Regionales del Perú
  { name: "Pan de Tres Puntas Arequipeño Tradicional (Receta con Masa Madre / Esponja y Manteca)", prep: "2 h fermento", cook: "18 min", tool: "Horno de piedra o bandeja precalentada", temp: "210 °C con vapor", diff: "Media" },
  { name: "Pan Chapla Ayacuchano Auténtico (El Pan Plano de Huamanga para comer con Queso y Palta)", prep: "90 min fermento", cook: "8 min", tool: "Piedra de horno o lata muy caliente", temp: "230 °C (se infla en pocos minutos)", diff: "Fácil" },
  { name: "Pan Chuta de Oropesa (Cusco): Pan Dulce Gigante con Anís, Canela, Chancaca y Manteca", prep: "2.5 h fermento", cook: "35 min", tool: "Bandeja de horno", temp: "180 °C", diff: "Media" },
  { name: "Pan Wawa (Tantawawa) y Caballitos de Pan para Todos los Santos con Careta de Yeso/Azúcar", prep: "2 h", cook: "25 min", tool: "Horno", temp: "180 °C", diff: "Media" },
  { name: "Pan Francés Peruano de Panadería de Barrio (Miga Suave, Corteza Crocante y Raya al Medio)", prep: "2 h", cook: "16 min", tool: "Palo de madera para marcar la raya y bandeja con vapor", temp: "220 °C", diff: "Media" },
  { name: "Pan Ciabatta Peruano para Sanguchería (El Pan Ideal para Chicharrón, Pavo y Asado)", prep: "3 h hidratación alta", cook: "20 min", tool: "Bandeja enharinada", temp: "220 °C", diff: "Media" },
  { name: "Pan de Yema Limeño Suave y Brillante (Para Butifarras y Mini Sánguches de Fiesta)", prep: "90 min", cook: "14 min", tool: "Bandeja de horno", temp: "180 °C", diff: "Fácil" },
  { name: "Pan de Anís de Concepción (Junín): Panecillos Aromáticos partidos en Dos mitades", prep: "90 min", cook: "15 min", tool: "Horno", temp: "200 °C", diff: "Fácil" },
  { name: "Cachangas Norteñas y Serranas en Sartén (Crujientes con Anís o Suaves con Queso)", prep: "30 min reposo", cook: "2 min por lado", tool: "Sartén amplia", temp: "175 °C", diff: "Fácil" },
  { name: "Pan Marraqueta Tacneño Crocante (El Acompañante Obligatorio del Picante a la Tacneña)", prep: "2 h", cook: "20 min", tool: "Horno con vapor", temp: "215 °C", diff: "Media" },
  { name: "Semita Cajamarquina y Chachapoyana de Harina Integral, Manteca de Cerdo y Chancaca", prep: "90 min", cook: "20 min", tool: "Horno", temp: "190 °C", diff: "Fácil" },
  { name: "Rosquitas de Manteca de Cajamarca y Rosquitas de Almidón de Yuca del Norte", prep: "40 min", cook: "15 min", tool: "Bandeja de horno", temp: "180 °C", diff: "Fácil" },
  { name: "Bizcocho Chancay Peruano Esponjoso (Para Remojar en Chocolate Caliente o Café)", prep: "90 min", cook: "18 min", tool: "Molde rectangular unidos entre sí", temp: "180 °C", diff: "Fácil" },
  { name: "Pan de Agua y Pan de Piso Norteño (Piura y Lambayeque)", prep: "2 h", cook: "18 min", tool: "Horno caliente", temp: "210 °C", diff: "Media" },
  { name: "Pan de Maíz y Pan de Quinua Andino", prep: "90 min", cook: "22 min", tool: "Horno", temp: "190 °C", diff: "Fácil" },
  { name: "Pan de Camote y Zapallo Macre (Miga Dorada que Dura Tierna 4 Días)", prep: "90 min", cook: "20 min", tool: "Horno", temp: "180 °C", diff: "Fácil" },
  { name: "Pan de Aceituna de Botija de Tacna", prep: "90 min", cook: "18 min", tool: "Horno", temp: "190 °C", diff: "Fácil" },
  { name: "Cachitos de Manteca y Cachitos Rellenos de Manjarblanco de Panadería Limeña", prep: "90 min", cook: "15 min", tool: "Horno", temp: "185 °C", diff: "Media" },
  { name: "Empanada Limeña de Carne Picada a Cuchillo con Azúcar Impalpable y Limón (Masa Quebradiza)", prep: "45 min reposo masa", cook: "22 min", tool: "Bandeja de horno", temp: "190 °C", diff: "Fácil" },
  { name: "Empanada de Ají de Gallina y Empanada de Lomo Saltado Jugosas sin Romper la Masa", prep: "45 min", cook: "22 min", tool: "Horno", temp: "190 °C (relleno frío al armar)", diff: "Fácil" },
  { name: "Empanadas de Queso Puneñas y Arequipeñas Espolvoreadas con Azúcar", prep: "40 min", cook: "15 min", tool: "Horno muy caliente", temp: "210 °C", diff: "Fácil" },
  { name: "Empanadas de Boda de Acobamba / Tarma y Empanadas Dulces de Maicena", prep: "40 min", cook: "18 min", tool: "Horno", temp: "175 °C", diff: "Fácil" },
  { name: "Pastel de Acelga Limeño de Panadería con Huevo Duro, Queso y Masa Flora", prep: "40 min", cook: "40 min", tool: "Molde redondo de 24 cm", temp: "180 °C", diff: "Media" },
  { name: "Pastel de Choclo Salado Relleno de Carne y Pastel de Choclo Dulce con Pasas y Anís", prep: "25 min", cook: "45 min", tool: "Molde de barro o vidrio", temp: "180 °C", diff: "Fácil" },
  { name: "Humitas Dulces con Manjarblanco/Pasas y Humitas Saladas con Queso en Pancas de Choclo", prep: "35 min armado", cook: "40 min al vapor", tool: "Olla tamalera con cama de corontas", temp: "100 °C vapor constante", diff: "Media" },
  { name: "Tamal Criollo de Chancho o Pollo en Hoja de Plátano y Tamalito Verde Norteño", prep: "45 min", cook: "90 min", tool: "Olla grande", temp: "Hervor continuo", diff: "Media" },
  { name: "Tamal Chinchano en Panca de Maíz Molido en Batán con Papada y Maní", prep: "60 min", cook: "2 horas", tool: "Olla tamalera", temp: "100 °C", diff: "Alta" },
  { name: "Panetón Peruano Casero de Navidad con Frutas Confitadas, Pasas Borrachas al Pisco y Esencia", prep: "2 fermentaciones", cook: "45 min", tool: "Pirotín de papel de 900 g", temp: "170 °C y enfriado boca abajo con agujas", diff: "Alta" },
  { name: "Rosca de Reyes y Rosca de Muerto Peruana con Manjar, Guindones y Frutas", prep: "2 h", cook: "25 min", tool: "Bandeja de horno", temp: "180 °C", diff: "Media" },
  { name: "Bollos de Agua Dulce y Panes de Torata (Moquegua)", prep: "90 min", cook: "20 min", tool: "Horno", temp: "190 °C", diff: "Media" },
  { name: "Pan Karamanduka Limeño (Bocados Pequeños con Anís y Ajonjolí que se Venden al Peso)", prep: "60 min", cook: "14 min", tool: "Bandeja de horno", temp: "190 °C", diff: "Fácil" },
  { name: "Yuquitas de Panadería (Masitas Fritas de Harina y Anís en Bolsa de Papel)", prep: "45 min", cook: "3 min fritura", tool: "Sartén honda", temp: "175 °C", diff: "Fácil" },
  { name: "Lenguas de Suegra y Orejitas (Palmeras) de Hojaldre Caramelizadas de Panadería", prep: "40 min", cook: "16 min", tool: "Bandeja con papel manteca", temp: "200 °C", diff: "Fácil" },
  { name: "Milhojas Peruano de Panadería Relleno de Manjarblanco de Olla y Azúcar Impalpable", prep: "30 min", cook: "15 min", tool: "Bandeja pesada encima para que no infle de más", temp: "200 °C", diff: "Media" },
  { name: "Pionono Peruano de Vainilla o Chocolate Relleno de Manjarblanco que No se Quiebra al Enrollar", prep: "15 min batido", cook: "9 min exactos", tool: "Placa de 30x40 cm y paño húmedo", temp: "190 °C (enrollar en caliente)", diff: "Fácil" },

  // 35 Dulces de Convento, Turrones y Postres de Antaño
  { name: "Turrón de Doña Pepa Artesanal de Octubre (Secreto de la Masa con Ajonjolí y la Miel de 5 Frutas)", prep: "60 min", cook: "35 min palotes + 40 min miel", tool: "Molde rectangular y termómetro/prueba de bola", temp: "180 °C masa · 108 °C miel", diff: "Media" },
  { name: "Ranfañote Limeño de Convento (Con Pan Frito en Mantequilla, Chancaca, Queso, Nueces, Coco y Oporto)", prep: "20 min", cook: "25 min", tool: "Olla de fondo grueso", temp: "Almíbar denso de chancaca", diff: "Fácil" },
  { name: "Frejol Colado de Chincha y Cañete (Con Frejol Negro/Canario, Azúcar, Leche, Clavo y Ajonjolí)", prep: "Remojo 12h + licuado", cook: "60 min moviendo lento", tool: "Olla gruesa y cuchara de palo", temp: "Hasta ver el fondo de la olla", diff: "Media" },
  { name: "King Kong de Manjarblanco de Lambayeque (3 Capas de Galleta Hojarasca con Manjar, Dulce de Piña y Maní)", prep: "45 min", cook: "25 min galletas", tool: "Molde rectangular para prensar", temp: "180 °C", diff: "Media" },
  { name: "Queso Helado Arequipeño Tradicional (Por Qué No Lleva Queso: Coco Tostado, Canela, Tres Leches y Canela)", prep: "20 min", cook: "15 min infusión", tool: "Bandeja metálica en congeladora", temp: "Raspado en lascas a -10 °C", diff: "Fácil" },
  { name: "Guargüeros Moqueguanos y Limeños (Masa de Pura Yema y Pisco Frita Rellena de Manjarblanco)", prep: "30 min", cook: "2 min fritura", tool: "Cañitas o tubos metálicos", temp: "170 °C", diff: "Media" },
  { name: "Ponderaciones de Convento (Espirales Crujientes con Hierro Caliente, Manjarblanco y Merengue al Oporto)", prep: "25 min", cook: "1 min por hojuela", tool: "Molde de hierro de ponderaciones", temp: "180 °C", diff: "Alta" },
  { name: "Sanguito Limeño de Harina de Maíz Amarillo, Manteca, Chancaca, Pasas y Anís", prep: "10 min", cook: "20 min", tool: "Olla gruesa", temp: "Fuego medio-bajo", diff: "Fácil" },
  { name: "Mazamorra de Cochino Limeña (Por Qué Se Llama Así y Cómo Hacerla con Harina, Chancaca, Manteca y Anís)", prep: "10 min", cook: "20 min", tool: "Olla", temp: "90 °C", diff: "Fácil" },
  { name: "Arroz Zambito con Chancaca, Coco Rallado, Pecanas, Pasas Rubias y Leche Evaporada", prep: "10 min", cook: "30 min", tool: "Olla gruesa", temp: "Agregar la chancaca cuando el arroz ya reventó", diff: "Fácil" },
  { name: "Clásico Limeño Perfecto (Cómo Hacer que el Arroz con Leche Quede Cremoso y la Mazamorra Morada Brillante)", prep: "20 min", cook: "45 min", tool: "Dos ollas", temp: "Servido mitad y mitad en dulcera", diff: "Fácil" },
  { name: "Suspiro a la Limeña Tradicional (Punto de Hilo del Manjar de Yemas y Merengue Italiano al Oporto)", prep: "15 min", cook: "35 min reducción", tool: "Olla de cobre/acero y batidora", temp: "Almíbar de oporto a 118 °C sobre claras", diff: "Media" },
  { name: "Picarones Peruanos con Hueco Perfecto (Fermento de Zapallo Macre, Camote, Anís y Miel de Hoja de Higo)", prep: "2 h levado", cook: "2 min por picarón", tool: "Sartén honda y palito de madera", temp: "180 °C (mojar dedos en agua con sal al formar el aro)", diff: "Media" },
  { name: "Crema Volteada Peruana con Leche Evaporada, Leche Condensada y Vainilla (Con Huequitos o Lisa)", prep: "15 min", cook: "60 min baño maría", tool: "Molde acaramelado de 22 cm", temp: "160 °C para textura sedosa", diff: "Fácil" },
  { name: "Leche Asada Tradicional de Abuela en Pocillos de Barro o Vidrio (Costra Dorada Natural)", prep: "10 min", cook: "45 min", tool: "Pocillos individuales", temp: "180 °C", diff: "Fácil" },
  { name: "Alfajores Peruanos de Maicena que se Deshacen en la Boca y Alfajor de la Curva (Moquegua/Arequipa)", prep: "30 min", cook: "11 min (no dorar)", tool: "Cortador redondo", temp: "170 °C (deben salir blanquitos)", diff: "Fácil" },
  { name: "Tejas Iqueñas de Pecana, Limón Confitado o Higo Rellenas de Manjarblanco y Baño de Fondant", prep: "45 min", cook: "20 min fondant", tool: "Olla pequeña", temp: "Baño de azúcar punto bola suave batido", diff: "Media" },
  { name: "Chapanas de Yuca Rallada, Chancaca, Anís y Pasas Cocidas al Vapor en Panca de Choclo Seca", prep: "35 min", cook: "45 min vapor", tool: "Olla vaporera", temp: "100 °C", diff: "Fácil" },
  { name: "Revolución Caliente (Las Galletas de Agua, Azúcar y Ajonjolí con Pregón Tradicional)", prep: "25 min", cook: "12 min", tool: "Bandeja de horno", temp: "190 °C", diff: "Fácil" },
  { name: "Camotillo Limeño de Convento (Dulce de Camote Amarillo, Naranja y Yemas Horneado)", prep: "20 min", cook: "25 min", tool: "Manga pastelera y horno", temp: "180 °C", diff: "Fácil" },
  { name: "Tocino del Cielo y Huevo Chimbo (Joyas Virreinales de Yemas en Almíbar de Canela y Pisco)", prep: "20 min", cook: "35 min", tool: "Molde a baño maría", temp: "160 °C", diff: "Media" },
  { name: "Bola de Oro Limeña (Bizcochuelo Embebido en Almíbar, Manjar de Yemas, Mermelada de Albaricoque y Mazapán)", prep: "60 min", cook: "30 min", tool: "Bol semiesférico para armar", temp: "180 °C", diff: "Alta" },
  { name: "Encanelado Peruano (Bizcochuelo Bañado en Almíbar de Canela y Pisco Relleno de Manjarblanco)", prep: "30 min", cook: "15 min", tool: "Placa de horno", temp: "180 °C", diff: "Fácil" },
  { name: "Natilla Piurana de Leche de Cabra y Chancaca Oscura Cocida a Leña", prep: "10 min", cook: "90 min", tool: "Paila o perol", temp: "Fuego lento constante", diff: "Media" },
  { name: "Chumbeque Piurano de 3 Capas con Miel de Limón y Manteca", prep: "30 min", cook: "20 min", tool: "Molde rectangular", temp: "180 °C", diff: "Fácil" },
  { name: "Maná Peruano (Mazapán de Yemas y Leche) para Decorar Tortas y Dulces de Fiesta", prep: "20 min", cook: "15 min en olla", tool: "Olla antiadherente y azúcar impalpable", temp: "Fuego mínimo", diff: "Media" },
  { name: "Bavarois de Guindones con Crema Inglesa y Bavarois de Chirimoya / Lúcuma", prep: "25 min", cook: "4 h refrigeración", tool: "Molde corona", temp: "4 °C", diff: "Fácil" },
  { name: "Merengado de Chirimoya Cumbe con Manjarblanco y Discos de Merengue Crocante", prep: "30 min", cook: "90 min merengue", tool: "Horno muy bajo", temp: "100 °C para secar merengues", diff: "Fácil" },
  { name: "Torta Tres Leches de Lúcuma o Café de Villa Rica muy Húmeda", prep: "30 min", cook: "30 min", tool: "Pirex rectangular", temp: "175 °C", diff: "Fácil" },
  { name: "Torta Helada Peruana de Fiesta Infantil (Con Carlota de Fresa, Piña en Almíbar y Dos Capas de Gelatina)", prep: "40 min", cook: "6 h refrigeración", tool: "Molde alto desmontable", temp: "4 °C", diff: "Fácil" },
  { name: "Budín de Pan de Panadería Limeña con Pasas, Frutas Confitadas, Pisco y Caramelo", prep: "20 min remojo", cook: "65 min baño maría", tool: "Molde savarín", temp: "175 °C", diff: "Fácil" },
  { name: "Cocadas Peruanas de Horno y de Olla (Con Chancaca o Leche Condensada y Yema)", prep: "15 min", cook: "18 min", tool: "Bandeja con papel manteca", temp: "180 °C", diff: "Fácil" },
  { name: "Buñuelos Arequipeños y Cusqueños con Miel de Chancaca y Anís", prep: "60 min", cook: "2 min fritura", tool: "Sartén honda", temp: "175 °C", diff: "Fácil" },
  { name: "Dulce de Membrillo (Machacado) y Dulce de Higos Verdes en Almíbar con Queso Fresco", prep: "20 min", cook: "60 min", tool: "Olla gruesa", temp: "Hervor suave", diff: "Fácil" },
  { name: "Prestiños Huanuqueños en Espiral Bañados en Miel de Chancaca y Naranja", prep: "35 min", cook: "3 min fritura", tool: "Sartén", temp: "175 °C", diff: "Fácil" }
];

export function getCat9And10Seeds() {
  const seeds = [];

  // 9: 80 artículos de Pisco, Coctelería y Bebidas Tradicionales
  PISCO_Y_BEBIDAS.forEach((b) => {
    const cleanSlug = b.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: b.name,
      category: "pisco-cocteleria-y-bebidas-calientes",
      categoryName: "Pisco, Coctelería y Emolientes",
      focusKeyword: b.name.split("(")[0].split(":")[0].trim().toLowerCase(),
      layoutVariant: "ficha-comanda-chef",
      schemaType: "Recipe",
      badgeLabel: b.name.includes("Pisco") || b.name.includes("Sour") || b.name.includes("Chilcano") || b.name.includes("Macerado") || b.name.includes("Cóctel") ? "🍸 Barra Peruana" : "🍵 Bebida Tradicional",
      imageHint: "bebidas",
      chefMeta: {
        prepTime: "10 min",
        cookTime: b.temp.includes("Maceración") ? b.temp : "15 min",
        servings: "4 copas o vasos",
        difficulty: b.diff,
        keyTool: b.tool,
        tempNote: b.temp,
      },
      summary: `Receta oficial de barra y carretilla peruana: ${b.name}. Proporciones exactas, selección de insumos (${b.tool}) y control de temperatura (${b.temp}).`,
    });
  });

  // 10: 70 artículos de Panadería Regional y Dulces de Convento
  PANADERIA_Y_DULCES.forEach((p) => {
    const cleanSlug = p.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: `Receta Tradicional: ${p.name}`,
      category: "panaderia-regional-y-dulces-de-convento",
      categoryName: "Panes Regionales y Dulces de Antaño",
      focusKeyword: p.name.split("(")[0].trim().toLowerCase(),
      layoutVariant: "ficha-comanda-chef",
      schemaType: "Recipe",
      badgeLabel: p.name.startsWith("Pan") || p.name.includes("Empanada") || p.name.includes("Tamal") || p.name.includes("Humita") ? "🥐 Panadería Regional" : "🍮 Dulce de Antaño",
      imageHint: p.name.startsWith("Pan") ? "pan" : "postres",
      chefMeta: {
        prepTime: p.prep,
        cookTime: p.cook,
        servings: "8 a 10 porciones",
        difficulty: p.diff,
        keyTool: p.tool,
        tempNote: p.temp,
      },
      summary: `Maestro panadero y dulcería de convento: ${p.name}. Tiempos de fermentación o punto de almíbar (${p.prep} / ${p.cook}), horneado a ${p.temp} y trucos para una textura auténtica.`,
    });
  });

  return seeds;
}
