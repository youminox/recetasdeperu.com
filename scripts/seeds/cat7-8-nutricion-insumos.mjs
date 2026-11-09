/**
 * Categoría 7: nutricion-y-dietas-peruanas (90 artículos)
 * Categoría 8: cortes-pescados-e-insumos (90 artículos)
 * Total: 180 semillas.
 */

const NUTRICION_ANTIANEMIA_BEBES = [
  { title: "Mousse de Sangrecita con Cacao Peruano y Plátano de Seda (Sin Sabor Metálico para Niños)", iron: "14.8 mg de hierro hemínico", prot: "16 g proteína", kcal: "210 kcal", gi: "Bajo-Medio (sin azúcar refinada)", group: "Niños desde 1 año y Gestantes", tip: "Hervir la sangrecita con canela, clavo y cáscara de naranja elimina al 100% el olor férrico; acompáñalo de fresas o mandarina (Vitamina C)." },
  { title: "Panqueques Esponjosos de Sangrecita, Avena y Manzana para el Desayuno Escolar", iron: "12.5 mg de hierro", prot: "14 g proteína", kcal: "235 kcal", gi: "Bajo (avena integral)", group: "Niños de 1 a 10 años", tip: "Licúa la sangrecita cocida directamente con el huevo, la leche o agua y la avena para lograr una masa homogénea tipo pancake de chocolate." },
  { title: "Chaufa de Quinua con Sangrecita Criolla y Tortilla de Huevo (Bomba contra la Anemia)", iron: "15.2 mg de hierro", prot: "22 g proteína", kcal: "340 kcal", gi: "Bajo (Índice Glucémico 53)", group: "Toda la familia y Gestantes", tip: "Combina hierro hemínico de la sangrecita con los 9 aminoácidos esenciales de la quinua perlada y limonada natural." },
  { title: "Hamburguesas Caseras de Sangrecita, Lentejas y Avena que No se Desarman al Dorar", iron: "16.0 mg de hierro", prot: "20 g proteína", kcal: "260 kcal", gi: "Bajo", group: "Niños, Adolescentes y Gestantes", tip: "Usa lentejas cocidas escurridas y avena fina como ligante natural junto con cebolla china y pimiento picado." },
  { title: "Papilla de Hígado de Pollo con Zapallo Macre y Papa Amarilla para Bebés de 6 a 8 Meses (ABL)", iron: "6.8 mg de hierro", prot: "11 g proteína", kcal: "145 kcal", gi: "Suave digestión pediátrica", group: "Bebés de 6 a 8 meses", tip: "Cocina el hígado de pollo fresco solo 6 minutos para que no se ponga duro ni arenoso, y aplasta con tenedor añadiendo 1 cdta de aceite vegetal." },
  { title: "Puré de Bazo de Res y Camote Amarillo para Bebés de 6 a 12 Meses (Protocolo MINSA / CENAN)", iron: "14.3 mg de hierro", prot: "13 g proteína", kcal: "155 kcal", gi: "Suave y energético", group: "Bebés de 6 a 12 meses", tip: "Cocina el bazo entero en agua y raspa únicamente la pulpa interior suave con una cuchara antes de mezclarla con el camote." },
  { title: "Mazamorra de Sangrecita con Quinua, Manzana y Canela para Bebés y Niños Pequeños", iron: "11.9 mg de hierro", prot: "13 g proteína", kcal: "190 kcal", gi: "Bajo", group: "Bebés desde 8 meses", tip: "El dulzor natural de la manzana Israel rallada y la canela hace que los bebés la acepten desde la primera cucharada." },
  { title: "Brownies y Quequitos (Muffins) de Sangrecita con Algarrobina y Chispas de Cacao al 70%", iron: "13.4 mg de hierro", prot: "12 g proteína", kcal: "220 kcal", gi: "Medio", group: "Lonchera Escolar", tip: "Hornea en pirotines de silicona a 180 °C por 18 minutos; se conservan esponjosos hasta 4 días." },
  { title: "Guiso de Bazo de Res al Jugo con Lentejas Bebé y Ensalada al Limón", iron: "18.5 mg de hierro", prot: "24 g proteína", kcal: "360 kcal", gi: "Bajo", group: "Gestantes y Adultos con Anemia", tip: "El bazo aporta 28.7 mg de hierro por cada 100 g; nunca tomes té, café ni mates junto al almuerzo porque sus taninos bloquean el hierro." },
  { title: "Chanfainita Suave de Bofe para Niños (Sin Picante) con Mote y Habas Tiernas", iron: "9.2 mg de hierro", prot: "19 g proteína", kcal: "290 kcal", gi: "Bajo", group: "Niños desde 1 año", tip: "Usa pasta de ají panca blanqueada 3 veces sin venas para dar el color rojo tradicional sin rastro de picor." },
  { title: "Croquetas y Torrejitas de Sangrecita con Verduras Ralladas (Zanahoria y Zapallito Italiano)", iron: "12.0 mg de hierro", prot: "15 g proteína", kcal: "195 kcal", gi: "Bajo", group: "Finger Food (BLW y Niños)", tip: "Ideales para el método BLW desde los 9 meses para que el bebé las tome con sus manitos." },
  { title: "Lomito de Hígado de Res al Jugo Tierno (El Truco de la Leche para que No Quede Duro ni Amargo)", iron: "8.5 mg de hierro + Vitamina A y B12", prot: "25 g proteína", kcal: "310 kcal", gi: "Bajo", group: "Gestantes y Familia", tip: "Remoja los filetes de hígado 15 minutos en leche fresca antes de sellarlos solo 90 segundos por lado a fuego alto." },
  { title: "Pescado Bonito (Parte Oscura del Músculo) en Croquetas y Sudado para Combatir la Anemia", iron: "8.7 mg de hierro en el músculo oscuro", prot: "24 g proteína + Omega 3", kcal: "280 kcal", gi: "Muy Bajo", group: "Niños y Gestantes", tip: "La carne oscura lateral del bonito concentra tanto hierro como el hígado de res, además de ácidos grasos DHA para el cerebro infantil." },
  { title: "Trufas y Bolitas Energéticas de Sangrecita, Kiwicha Pop, Maní y Miel de Chancaca", iron: "10.8 mg de hierro", prot: "11 g proteína", kcal: "180 kcal", gi: "Medio", group: "Merienda Escolar sin Horno", tip: "No requieren horno: mezcla sangrecita cocida licuada con mantequilla de maní, cacao y kiwicha pop, y refrigera 30 minutos." },
  { title: "Sopa Espesa de Quinua, Hígado Picado, Espinaca y Zapallo para Bebés de 9 a 12 Meses", iron: "7.4 mg de hierro", prot: "14 g proteína", kcal: "175 kcal", gi: "Bajo", group: "Bebés de 9 a 12 meses", tip: "Recuerda la regla del INS: para bebés prioriza preparaciones espesas tipo segundo o puré sobre caldos aguados." },
  { title: "Causa Rellena de Sangrecita Criolla y Palta Fuerte (Entrada Fría Rica en Hierro)", iron: "11.5 mg de hierro", prot: "14 g proteína", kcal: "270 kcal", gi: "Medio", group: "Toda la familia", tip: "El jugo de limón sutil de la masa de causa potencia directamente la absorción intestinal del hierro." },
  { title: "Tequeños Horneados Rellenos de Sangrecita y Queso Fresco con Guacamole Peruano", iron: "10.2 mg de hierro", prot: "15 g proteína", kcal: "250 kcal", gi: "Medio", group: "Niños y Piqueo Familiar", tip: "Ningún niño nota que llevan sangrecita cuando van combinados con cubitos de queso que se derriten al hornear." },
  { title: "Arroz Tapado de Sangrecita y Carne con Plátano Maduro y Huevo de Codorniz", iron: "13.8 mg de hierro", prot: "21 g proteína", kcal: "380 kcal", gi: "Medio", group: "Almuerzo Escolar", tip: "Mezclar 50% carne molida de res y 50% sangrecita picada es la mejor transición para niños que recién empiezan a comerla." },
  { title: "Paté Casero Untable de Hígado de Pollo con Mantequilla y Hierbas Finas para Tostadas", iron: "7.9 mg de hierro", prot: "14 g proteína", kcal: "190 kcal", gi: "Muy Bajo", group: "Desayuno y Lonchera", tip: "Saltea hígados de pollo con cebolla blanca caramelizada, tomillo y una pizca de nuez moscada, y procesa hasta textura sedosa." },
  { title: "Alfajores y Galletas de Avena, Cañihua y Sangrecita Rellenos de Manjar de Dátiles o Lúcuma", iron: "9.6 mg de hierro", prot: "10 g proteína", kcal: "210 kcal", gi: "Bajo", group: "Merienda Infantil", tip: "La harina de cañihua andina suma hierro vegetal extra y un color achocolatado natural." },
  { title: "Ají de Pollo e Hígado Licuado (El Secreto para Enriquecer el Ají de Gallina Familiar)", iron: "6.5 mg de hierro", prot: "23 g proteína", kcal: "350 kcal", gi: "Medio", group: "Niños selectivos", tip: "Licuar 2 hígados de pollo cocidos dentro de la crema amarilla del ají de gallina aporta hierro y cremosidad sin cambiar el sabor." },
  { title: "Bistec de Corazón de Res Suave a la Plancha con Lentejas y Ensalada Cítrica", iron: "9.0 mg de hierro", prot: "26 g proteína", kcal: "330 kcal", gi: "Bajo", group: "Deportistas y Gestantes", tip: "El corazón de res es un músculo magro riquísimo en hierro, zinc y coenzima Q10." },
  { title: "Tallarín Rojo con Salsa Boloñesa de Sangrecita y Res al Tomate Natural", iron: "13.0 mg de hierro", prot: "20 g proteína", kcal: "370 kcal", gi: "Medio", group: "Almuerzo Infantil Favorito", tip: "El licopeno y la acidez del tomate natural cocido con zanahoria camuflan por completo la sangrecita." },
  { title: "Guiso de Tarwi (Chocho) y Quinua con Pollo para Niños en Crecimiento", iron: "5.8 mg de hierro", prot: "24 g proteína", kcal: "320 kcal", gi: "Muy Bajo (IG 35)", group: "Crecimiento Infantil", tip: "El tarwi peruano supera a la soya en proteína y calcio biodisponible." },
  { title: "Waffles de Cañihua, Plátano y Sangrecita en Waflera en 5 Minutos", iron: "11.8 mg de hierro", prot: "13 g proteína", kcal: "230 kcal", gi: "Bajo", group: "Desayuno Rápido", tip: "Sírvelos con fresas picadas o aguaymanto para asegurar la cuota de vitamina C matutina." },
  { title: "Papa Rellena al Horno con Relleno de Sangrecita, Carne, Huevo y Aceituna", iron: "12.6 mg de hierro", prot: "18 g proteína", kcal: "310 kcal", gi: "Medio", group: "Almuerzo Familiar", tip: "Asada al horno o en Airfryer reduce en un 75% la grasa respecto a la fritura tradicional." },
  { title: "Pudín de Chía, Cacao, Lúcuma y Sangrecita (Postre Frío sin Cocción Extra)", iron: "11.0 mg de hierro", prot: "12 g proteína", kcal: "205 kcal", gi: "Bajo", group: "Niños y Gestantes", tip: "La pulpa de lúcuma aporta betacarotenos y textura cremosa que combina a la perfección con el cacao." },
  { title: "Locro de Zapallo con Hígado de Pollo Picado y Queso sin Sal para Bebés de 10 a 12 Meses", iron: "6.4 mg de hierro", prot: "13 g proteína", kcal: "165 kcal", gi: "Bajo", group: "Bebés de 10 a 12 meses", tip: "Ofrece trocitos blandos para estimular la masticación antes del primer año." },
  { title: "Menú Semanal Antianemia de 7 Días (Desayuno, Almuerzo y Cena) según el INS Perú", iron: "Cubre >100% requerimiento diario", prot: "Alto valor biológico", kcal: "Equilibrado por edad", gi: "Bajo", group: "Niños con hemoglobina <11 g/dL", tip: "Incluye el calendario exacto para subir de 1 a 2 puntos de hemoglobina en 4 a 8 semanas junto al suplemento médico." },
  { title: "5 Refrescos Peruanos Ricos en Vitamina C (Camu Camu, Aguaymanto, Maracuyá, Limón y Naranja) que Duplican la Absorción del Hierro", iron: "Potenciador de Hierro (+200%)", prot: "Antioxidantes", kcal: "45 kcal", gi: "Bajo (sin azúcar)", group: "Acompañante de todo almuerzo", tip: "El camu camu amazónico tiene 40 veces más vitamina C que el limón; basta media taza con el almuerzo." }
];

const NUTRICION_DIABETICOS_FITNESS = [
  // 30 Diabéticos, Celiacos e Hipertensos + 30 Fitness y Macros = 60
  { title: "Ají de Gallina para Diabéticos (Espesado con Quinua o Almendras sin Pan ni Galleta)", iron: "3.2 mg", prot: "28 g proteína", kcal: "310 kcal", gi: "Índice Glucémico Bajo (IG 42)", group: "Diabéticos Tipo 2 y Resistencia a la Insulina", tip: "Reemplazar el pan francés remojado por quinua blanca muy cocida o harina de almendras con nueces reduce los carbohidratos simples en un 65%." },
  { title: "Lomo Saltado Saludable para Diabéticos (Al Wok con Bastones de Camote al Horno y Arroz Integral/Quinua)", iron: "4.5 mg", prot: "32 g proteína", kcal: "360 kcal", gi: "IG Bajo (48)", group: "Diabéticos y Control de Peso", tip: "Usa lomo fino magro, sillao bajo en sodio y acompaña con media taza de quinua graneada en vez de cerro de arroz blanco." },
  { title: "Ceviche Peruano para Diabéticos: Cómo Controlar la Porción de Camote y Choclo sin Subir la Glucosa", iron: "2.8 mg", prot: "34 g proteína", kcal: "260 kcal", gi: "IG Muy Bajo (35)", group: "Diabéticos y Keto/Low-Carb", tip: "El ácido cítrico del limón y la proteína del pescado frenan el pico glucémico; sirve 3 rodajas finas dechoclo y 1 de camote cocido con cáscara." },
  { title: "Causa Limeña Ligera para Diabéticos (Masa 50% Coliflor al Vapor y 50% Papa Amarilla con Aceite de Oliva)", iron: "2.4 mg", prot: "24 g proteína", kcal: "240 kcal", gi: "IG Bajo (45)", group: "Diabéticos y Low-Carb", tip: "Prensar coliflor cocida al vapor (bien exprimida en paño) junto a papa amarilla conserva la textura exacta de la causa con la mitad de almidón." },
  { title: "Arroz con Pollo Peruano con Quinua o Arroz Integral Graneado al Culantro (Bajo Índice Glucémico)", iron: "4.1 mg", prot: "30 g proteína", kcal: "345 kcal", gi: "IG Bajo (50)", group: "Diabéticos y Deportistas", tip: "Refrigera el arroz o quinua cocida y recaliéntalo: esto transforma el almidón en 'almidón resistente' que no dispara la insulina." },
  { title: "Seco de Res o Pollo con Frejoles para Diabéticos (La Proporción Correcta del Plato 50-25-25)", iron: "5.2 mg", prot: "31 g proteína", kcal: "370 kcal", gi: "IG Bajo (40)", group: "Diabéticos", tip: "En el Seco con Frejoles, la menestra ya es el carbohidrato fibroso: sírvelo sin arroz blanco y con media mitad del plato de sarsa criolla y verduras." },
  { title: "Papa a la Huancaína Ligera (Con Queso Fresco Light, Yogur Griego, Leche Descremada y Semillas de Chía)", iron: "2.1 mg", prot: "16 g proteína", kcal: "195 kcal", gi: "IG Bajo", group: "Control de Colesterol y Diabetes", tip: "Espesa la crema huancaína con queso fresco, yogur griego natural sin azúcar y 4 almendras peladas en lugar de galleta de soda y aceite." },
  { title: "Chicha Morada y Emoliente para Diabéticos Endulzados con Yacón, Stevia en Hoja y Canela", iron: "Antocianinas", prot: "1 g", kcal: "25 kcal", gi: "IG Cero (0)", group: "Diabéticos e Hipertensos", tip: "Las antocianinas del maíz morado mejoran la sensibilidad a la insulina y bajan la presión arterial cuando se hierve sin azúcar refinada." },
  { title: "Mazamorra Morada y Arroz con Leche para Diabéticos (Con Harina de Almendras/Konjac, Quinua y Yacón)", iron: "2.0 mg", prot: "8 g proteína", kcal: "140 kcal", gi: "IG Bajo", group: "Diabéticos", tip: "El jarabe de yacón andino contiene fructooligosacáridos (prebióticos) que endulzan sin elevar la glucosa en sangre." },
  { title: "Picarones Saludables al Horno y Miel de Yacón con Hoja de Higo para Personas con Diabetes", iron: "2.3 mg", prot: "7 g proteína", kcal: "180 kcal", gi: "IG Medio-Bajo", group: "Diabéticos", tip: "Prepara la masa con zapallo macre, harina integral de trigo/avena y endulza la miel aromática con yacón, canela y clavo." },
  { title: "Cocina Peruana Sin Gluten para Celiacos: 15 Platos Tradicionales que Son 100% Libres de Trigo por Naturaleza", iron: "4.0 mg", prot: "26 g proteína", kcal: "320 kcal", gi: "Bajo", group: "Celiacos e Intolerantes al Gluten", tip: "El Perú es el paraíso celiaco: Ceviche, Pachamanca, Pollo a la Brasa, Seco, Carapulcra, Causa y Rocoto Relleno no llevan trigo (usa sillao Tamari sin gluten en saltados)." },
  { title: "Cómo Hacer Panes y Empanadas Peruanas Sin Gluten con Harina de Quinua, Yuca y Arroz", iron: "3.5 mg", prot: "9 g proteína", kcal: "210 kcal", gi: "Medio", group: "Celiacos", tip: "La combinación 50% almidón de yuca + 30% harina de arroz + 20% harina de quinua da elasticidad perfecta para empanadas." },
  { title: "Cocina Peruana Baja en Sodio para Hipertensos: Cómo Sazonar con Hierbas Andinas, Ajo Asado y Ajíes sin Sal", iron: "3.8 mg", prot: "25 g proteína", kcal: "300 kcal", gi: "Bajo", group: "Hipertensión Arterial y Salud Renal", tip: "El ajo asado, el kion, el culantro, el huacatay, el orégano de Tacna y unas gotas de limón engañan a las papilas gustativas reduciendo un 70% la sal." },
  { title: "Menú Semanal Peruano para Diabéticos de 7 Días (Desayuno, Almuerzo, Media Tarde y Cena)", iron: "Completo", prot: "25–30 g por comida", kcal: "1,600 kcal/día", gi: "IG < 50 en todas las comidas", group: "Diabéticos Tipo 2", tip: "Incluye lista de compras en mercados peruanos con tarwi, quinua, palta, pescado azul, yacón y verduras." },
  { title: "Desayunos Peruanos para Diabéticos: 10 Opciones Saladas con Palta, Huevo, Tarwi, Queso y Pan de Semillas", iron: "3.2 mg", prot: "18 g proteína", kcal: "280 kcal", gi: "IG Muy Bajo (30)", group: "Diabéticos y Resistencia a la Insulina", tip: "Evita los jugos de fruta colados y las avenas azucaradas en ayunas; empieza siempre con proteína y grasa saludable." },
  { title: "Cocina Peruana para Hígado Graso y Colesterol Alto: Cómo Preparar Guisos Criollos con Cero Fritura", iron: "4.0 mg", prot: "28 g proteína", kcal: "290 kcal", gi: "Bajo", group: "Hígado Graso y Dislipidemia", tip: "Haz el aderezo base peruano sudando la cebolla y el ajo con 2 cucharadas de caldo de verduras en vez de medio vaso de aceite." },
  { title: "Platos Peruanos Suaves para Gastritis y Vesícula: Cómo Cocinar sin Ají Irritante ni Grasas Pesadas", iron: "3.5 mg", prot: "24 g proteína", kcal: "270 kcal", gi: "Bajo", group: "Gastritis y Post-Operados de Vesícula", tip: "Usa pimiento rojo asado pelado y zanahoria licuada para dar el color del ají panca, y cúrcuma con zapallo para el color del ají amarillo." },
  { title: "Recetas Peruanas Ricas en Calcio sin Lácteos (Con Ajonjolí, Kiwicha, Tarwi y Anchoveta) para Intolerantes a la Lactosa", iron: "5.0 mg", prot: "24 g proteína", kcal: "310 kcal", gi: "Bajo", group: "Intolerantes a la Lactosa y Osteopenia", tip: "100 g de kiwicha o ajonjolí tostado contienen más calcio que un vaso de leche de vaca." },
  { title: "Cocina Peruana Keto (Cetogénica): 10 Platos Criollos y Marinos con Menos de 10 g de Carbohidratos Netos", iron: "4.8 mg", prot: "35 g proteína", kcal: "420 kcal", gi: "IG Muy Bajo (<20)", group: "Dieta Keto Peruana", tip: "Ceviche sin camote (con palta y chicharrón de calamar), Pollo a la Brasa con ensalada de palta, Anticuchos con ensalada y Chaufa de coliflor." },
  { title: "Chaufa de Coliflor y Quinua al Wok: Cómo Lograr que Quede Graneado y Ahumado sin Aguarse", iron: "3.4 mg", prot: "26 g proteína", kcal: "250 kcal", gi: "IG Bajo (35)", group: "Low-Carb y Diabéticos", tip: "Tuesta la coliflor rallada en sartén seca a fuego alto durante 4 minutos para evaporar toda su agua antes de sumar el sillao y el huevo." },
  { title: "Carapulcra Ligera de Pavita y Papa Seca Integral con Caldo de Verduras (Sin Manteca para Colesterol e Hígado)", iron: "4.6 mg", prot: "29 g proteína", kcal: "320 kcal", gi: "IG Medio-Bajo", group: "Colesterol Alto y Diabéticos", tip: "Tostar la papa seca en seco y guisarla con brazuelo de pavita sin piel y 1 cucharada medida de maní tostado conserva todo el sabor chinchano con la mitad de calorías." },
  { title: "Olluquito con Charqui o Carne Magra de Res: Por Qué Es Uno de los Almuerzos de Menor Índice Glucémico del Perú", iron: "5.1 mg", prot: "28 g proteína", kcal: "275 kcal", gi: "IG Muy Bajo (38)", group: "Diabéticos y Pérdida de Peso", tip: "El olluco tiene 85% de agua y fibra mucilaginosa que enlentece la absorción de glucosa; sírvelo con media taza de quinua en vez de arroz blanco." },
  { title: "Locro de Zapallo Macre para Diabéticos (Sin Papa Blanca, con Choclo Medido, Habas Verdes y Queso Fresco Light)", iron: "3.3 mg", prot: "18 g proteína", kcal: "240 kcal", gi: "IG Bajo (44)", group: "Diabéticos e Hipertensos", tip: "Cocina el zapallo macre con su propia cáscara bien lavada en trozos para duplicar el aporte de fibra soluble y acompáñalo con filete de pescado o pollo a la plancha." },
  { title: "Caigua Rellena de Pollo o Pavita al Horno: El Plato Peruano que Reduce el Colesterol LDL y los Triglicéridos", iron: "3.8 mg", prot: "27 g proteína", kcal: "230 kcal", gi: "IG Muy Bajo (25)", group: "Dislipidemia, Hígado Graso y Diabetes", tip: "Estudios peruanos demuestran que la pectina y esteroles de la caigua ayudan a reducir el colesterol sanguíneo; hornéalas o cocínalas en salsa de tomate natural sin rebozar." },
  { title: "Sopa de Mote (Patasca Ligera) Desgrasada con Mondongo y Pecho Magro para Personas con Colesterol o Diabetes", iron: "4.9 mg", prot: "30 g proteína", kcal: "310 kcal", gi: "IG Bajo (46)", group: "Adultos Mayores y Diabéticos", tip: "El maíz mote entero pelado con cáscara de grano tiene mucha más fibra que el arroz o el fideo; refrigera el caldo la noche anterior para retirar el 100% de la grasa sólida." },
  { title: "Ceviche de Champiñones, Setas de Porcón y Palta al Limón Sutil (Opción Vegana, Renal y Baja en Ácido Úrico)", iron: "2.9 mg", prot: "11 g proteína", kcal: "210 kcal", gi: "IG Muy Bajo (20)", group: "Ácido Úrico Alto (Gota), Veganos y Diabéticos", tip: "Ideal para personas con hiperuricemia que deben limitar mariscos o carnes rojas pero no quieren privarse de una leche de tigre vegetal con ají limo." },
  { title: "Tamalito Verde de Choclo Tierno y Quinua Sin Manteca (Con Aceite de Oliva Extra Virgen) para Celiacos y Diabéticos", iron: "3.1 mg", prot: "12 g proteína", kcal: "215 kcal", gi: "IG Bajo (48)", group: "Celiacos, Intolerantes al Gluten y Diabéticos", tip: "Muele el choclo tierno con abundante culantro, espinaca, ajo y 1 cucharada de aceite de oliva; su fibra natural intacta evita picos de azúcar en el desayuno dominical." },
  { title: "Estofado de Pollo sin Piel al Tomate Natural, Zanahoria y Hongos (Con Camote Morado con Cáscara en vez de Arroz)", iron: "3.9 mg", prot: "31 g proteína", kcal: "330 kcal", gi: "IG Bajo (45)", group: "Diabéticos y Familia Saludable", tip: "El camote morado hervido con su piel aporta antocianinas antioxidantes y tiene menor índice glucémico que la papa blanca pelada." },
  { title: "Escabeche de Pescado Bonito al Horno o Vapor (Sin Fritura Previa) con Cebolla Crocante al Vinagre Tinto", iron: "6.4 mg", prot: "33 g proteína", kcal: "280 kcal", gi: "IG Muy Bajo (30)", group: "Salud Cardiovascular y Diabéticos", tip: "El ácido acético del vinagre tinto del escabeche reduce hasta en un 25% la respuesta de glucosa postprandial además de conservar intacto el Omega 3 del bonito." },
  { title: "Pan Peruano de Tres Semillas, Quinua y Tarwi en Sartén (Sin Harina de Trigo en 10 Minutos para el Desayuno Diabético)", iron: "3.6 mg", prot: "15 g proteína", kcal: "190 kcal", gi: "IG Muy Bajo (22)", group: "Diabéticos, Celiacos y Keto", tip: "Mezcla 3 cucharadas de harina de quinua o tarwi, 1 huevo, 1 cda de chía/linaza molida y polvo de hornear: cocínalo 4 minutos por lado en sartén tapada y rellénalo con palta." },

  // 20 Fitness, Calorías y Macros de Platos Peruanos
  { title: "Tabla de Calorías y Macronutrientes de los 30 Platos Peruanos Más Consumidos (Guía Fitness Real)", iron: "Datos CENAN", prot: "15 g a 48 g proteína", kcal: "250 a 950 kcal", gi: "Comparativa completa", group: "Fitness, Definición y Volumen", tip: "Conoce cuántas calorías reales tienen el Ceviche (380 kcal), Lomo Saltado (680 kcal), Pollo a la Brasa 1/4 con papas (890 kcal) y cómo ajustarlos." },
  { title: "Cuántas Calorías y Proteínas Tiene 1/4 de Pollo a la Brasa Peruano (Pechuga vs. Pierna) y Cómo Comerlo en Definición", iron: "2.9 mg", prot: "44 g proteína (pechuga)", kcal: "340 kcal (sin papas fritas)", gi: "Bajo", group: "Gimnasio y Pérdida de Grasa", tip: "Pide 1/4 de pechuga, retira la mitad de la piel, cambia las papas fritas por papa sancochada o ensalada fresca y usa ají pollero casero en vez de mayonesa." },
  { title: "Ceviche de Tarwi (Chocho) Andino: El Plato Vegano Peruano con 28 g de Proteína por Porción", iron: "4.6 mg", prot: "28 g proteína vegetal", kcal: "290 kcal", gi: "IG Muy Bajo (25)", group: "Fitness, Veganos y Diabéticos", tip: "El tarwi desamargado con limón, cebolla roja, tomate, culantro, ají limo y palta es una bomba proteica post-entreno." },
  { title: "Bowl Peruano Post-Entreno de Quinua Negra, Pescado Bonito a la Plancha, Palta y Huevo Pochado", iron: "6.2 mg", prot: "42 g proteína", kcal: "480 kcal", gi: "IG Bajo", group: "Hipertrofia y Recuperación Muscular", tip: "Aporta proteína de absorción rápida, ácidos grasos antiinflamatorios Omega 3 y carbohidratos complejos." },
  { title: "Carne de Alpaca Peruana: Por Qué Es la Mejor Carne Roja para Deportistas (24 g Proteína y Cero Colesterol)", iron: "5.5 mg", prot: "24 g por 100 g (solo 2% grasa)", kcal: "115 kcal / 100 g", gi: "IG Cero", group: "Deportistas y Salud Cardiovascular", tip: "Al ser tan magra, sella el lomo de alpaca a término medio (3 minutos por lado) para que quede tierna y jugosa." },
  { title: "Batido Proteico Peruano Casero sin Suplementos en Polvo (Quinua, Tarwi/Claras, Lúcuma, Maca y Plátano)", iron: "4.2 mg", prot: "30 g proteína natural", kcal: "360 kcal", gi: "Medio", group: "Pre y Post Entrenamiento", tip: "La maca negra y roja peruana mejora la resistencia física y la recuperación muscular sin estimulantes artificiales." },
  { title: "Cómo Preparar Lomo Saltado Fitness con 45 g de Proteína y Menos de 450 Calorías", iron: "4.8 mg", prot: "45 g proteína", kcal: "430 kcal", gi: "Bajo", group: "Definición Muscular", tip: "Usa 200 g de lomo fino, saltea con spray de aceite en wok hirviendo y sirve con papas doradas en Airfryer." },
  { title: "Triple Proteico Peruano (Pollo, Huevo, Palta y Queso Fresco en Pan Integral de Masa Madre)", iron: "3.1 mg", prot: "34 g proteína", kcal: "410 kcal", gi: "Bajo", group: "Desayuno o Cena Fitness", tip: "Reemplaza la mayonesa comercial por crema de palta con yogur griego y limón." },
  { title: "Caldo de Gallina o Pollo Fitness Desgrasado: El Mejor Recuperador de Electrolitos y Colágeno", iron: "3.4 mg", prot: "36 g proteína", kcal: "350 kcal", gi: "Bajo", group: "Recuperación Deportiva", tip: "Enfría el caldo para retirar la capa sólida de grasa superior y sírvelo con pechuga, 2 huevos duros, papa amarilla y abundante kion." },
  { title: "Tortilla Proteica de Claras, Sangrecita o Atún, Quinua y Espinaca en 6 Minutos", iron: "8.5 mg", prot: "32 g proteína", kcal: "280 kcal", gi: "Muy Bajo", group: "Cena Ligera Alta en Proteína", tip: "Una cena completa que sacia toda la noche y aporta hierro y aminoácidos." },
  { title: "Ensalada Solterito Arequipeño Alto en Proteína con Habas, Tarwi, Queso Paria y Atún/Pollo", iron: "4.4 mg", prot: "33 g proteína", kcal: "330 kcal", gi: "Muy Bajo", group: "Almuerzo Fitness de Verano", tip: "Fresco, crocante y listo para llevar en táper sin necesidad de microondas." },
  { title: "Seco de Pechuga de Pavita a la Norteña con Frejoles Medidos (Alto en Proteína Magra)", iron: "4.9 mg", prot: "38 g proteína", kcal: "390 kcal", gi: "Bajo", group: "Volumen Limpio y Definición", tip: "El medallón de pavita absorbe el aderezo de culantro y zapallo loche con apenas 1.5% de grasa saturada." },
  { title: "Ceviche de Pescado y Pulpo Post-Entreno: Cuántos Gramos de Proteína Aporta y Cómo Armar el Plato", iron: "3.6 mg", prot: "46 g proteína limpia", kcal: "340 kcal", gi: "Bajo", group: "Atletas y Gimnasio", tip: "200 g de pescado blanco + 80 g de pulpo entregan 46 g de proteína de altísima digestibilidad en 20 minutos." },
  { title: "Avena Peruana Proteica (Quaker con Quinua, Claras Batidas, Manzana y Canela) sin Que se Corten las Claras", iron: "3.5 mg", prot: "24 g proteína", kcal: "310 kcal", gi: "Bajo", group: "Desayuno Fitness de Invierno", tip: "Vierte las claras en hilo batiendo enérgicamente durante el último minuto de hervor para lograr una textura cremosa tipo mousse." },
  { title: "Anticuchos de Corazón a la Parrilla en Dieta Fitness: Por Qué Es uno de los Cortes Más Magros y Nutritivos", iron: "7.8 mg", prot: "35 g proteína", kcal: "310 kcal", gi: "Bajo", group: "Keto y Fitness", tip: "Retira el borde de grasa blanca superior del corazón antes de marinarlo en ají panca, ajo y vinagre." },
  { title: "Panqueques de Kiwicha, Tarwi y Plátano con Mantequilla de Maní Casera (Desayuno de Fuerza)", iron: "4.0 mg", prot: "25 g proteína", kcal: "380 kcal", gi: "Medio", group: "Volumen Muscular", tip: "Energía sostenida para entrenamientos intensos de pesas o running." },
  { title: "Sudado de Pescado en Olla de Barro sin Aceite: 38 g de Proteína y Menos de 280 Calorías", iron: "3.2 mg", prot: "38 g proteína", kcal: "275 kcal", gi: "Muy Bajo", group: "Pérdida de Grasa y Cena Saludable", tip: "El pescado se cocina al vapor en el jugo del tomate, la cebolla, el kion, el ají amarillo y un chorrito de chicha." },
  { title: "Arroz Chaufa Proteico de Claras, Pechuga de Pollo y Quinua Tricolor al Wok", iron: "3.9 mg", prot: "39 g proteína", kcal: "365 kcal", gi: "Bajo", group: "Meal Prep Semanal Fitness", tip: "Rinde para 4 tápers semanales manteniendo su textura graneada al recalentar." },
  { title: "Snack Peruano Pre-Entreno: Cancha Chulpi en Airfryer + Habas Tostadas + Charqui Deshilachado", iron: "4.5 mg", prot: "22 g proteína", kcal: "260 kcal", gi: "Medio", group: "Energía Deportiva", tip: "El snack ancestral de los chasquis andinos: carbohidrato de liberación rápida y proteína seca." },
  { title: "Guiso de Lentejas con Pechuga de Pollo a la Plancha y Sarsa Criolla (Combinación de Aminoácidos)", iron: "6.8 mg", prot: "40 g proteína", kcal: "420 kcal", gi: "Bajo", group: "Nutrición Deportiva", tip: "Músculo magro, fibra soluble y hierro en el almuerzo tradicional de los lunes." },
  { title: "Aguadito de Pechuga de Pollo y Quinua (Sin Arroz Blanco) para Cenas Ligeras de Invierno", iron: "3.7 mg", prot: "31 g proteína", kcal: "285 kcal", gi: "Bajo", group: "Cena Fitness Reconfortante", tip: "Reemplazar el arroz por quinua reduce la carga glucémica nocturna manteniendo todo el espesor y sabor del culantro." },
  { title: "Papa Rellena Fitness de Pollo o Atún Hecha en Airfryer con Masa de Papa Amarilla y Clara", iron: "3.0 mg", prot: "29 g proteína", kcal: "310 kcal", gi: "Medio", group: "Almuerzo Saludable", tip: "Cero aceite de fritura profunda y 29 gramos de proteína limpia en el relleno." },
  { title: "Salpicón de Pollo Peruano con Palta, Vainitas, Zanahoria y Choclo (Con Aliño de Yogur Griego al Limón)", iron: "2.8 mg", prot: "34 g proteína", kcal: "305 kcal", gi: "Bajo", group: "Definición y Verano", tip: "El aliño de yogur griego natural con mostaza, limón y pimienta reemplaza a la mayonesa ahorrando 220 calorías." },
  { title: "Patarashca de Pescado a la Parrilla o Horno: La Receta Amazónica Más Saludable del Perú", iron: "3.1 mg", prot: "36 g proteína", kcal: "260 kcal", gi: "Muy Bajo", group: "Dieta Mediterránea/Amazónica", tip: "Cero grasa añadida: la hoja de bijao o plátano cocina el pescado en sus propios jugos aromáticos." },
  { title: "Menú Semanal Peruano Fitness de 2,000 kcal y 150 g de Proteína Diaria con Comida Criolla Real", iron: "100% cubierto", prot: "150 g proteína / día", kcal: "2,000 kcal / día", gi: "Bajo", group: "Recomposición Corporal", tip: "Demuestra que no necesitas comer pollo hervido insípido para estar en forma: usa aderezos peruanos reales." },
  { title: "Dulces Peruanos Saludables sin Azúcar: Crema Volteada de Stevia/Eritritol y Mousse de Lúcuma Proteico", iron: "1.8 mg", prot: "16 g proteína", kcal: "150 kcal", gi: "IG Bajo", group: "Antojo Dulce Saludable", tip: "Carameliza alulosa o eritritol para el molde de la crema volteada y obtendrás el mismo brillo ámbar sin calorías." },
  { title: "Sopa Criolla Ligera con Carne Magra Picada, Leche Evaporada Light y Huevo Pochado", iron: "4.1 mg", prot: "29 g proteína", kcal: "310 kcal", gi: "Bajo", group: "Cena de Invierno", tip: "Usa fideo cabello de ángel integral o reduce su porción a 30 g priorizando la carne picada a cuchillo." },
  { title: "Enrrollado de Pechuga de Pollo Relleno de Espinaca, Pimiento y Queso Fresco al Horno", iron: "3.3 mg", prot: "38 g proteína", kcal: "295 kcal", gi: "Muy Bajo", group: "Meal Prep y Cenas", tip: "Rinde para cortar en medallones tanto calientes con guarnición como fríos para la lonchera." },
  { title: "Chupe de Pescado Ligero sin Crema Pesada (Con Leche Descremada, Queso Fresco y Huevo)", iron: "3.5 mg", prot: "35 g proteína", kcal: "330 kcal", gi: "Bajo", group: "Almuerzo Nutritivo", tip: "Licuar un trozo de zapallo macre cocido en el caldo le da toda la textura cremosa del chupe sin grasas saturadas." },
  { title: "Guía de Hidratación y Bebidas Deportivas Naturales del Perú: Agua de Coco, Chicha sin Azúcar y Maca", iron: "Potasio y Magnesio", prot: "Electrolitos", kcal: "35 kcal", gi: "Bajo", group: "Runners y Deportistas", tip: "El agua de cebada o maíz morado con una pizca de sal de Maras y limón repone electrolitos mejor que bebidas sintéticas." }
];

const CORTES_PESCADOS_INSUMOS = [
  // 35 Pescados y Mariscos + 30 Cortes de Carne + 25 Papas/Ajíes/Insumos = 90
  { title: "Lenguado vs. Corvina vs. Mero: Cuál Es el Mejor Pescado para Ceviche, Tiradito y Sudado en el Perú", aName: "Lenguado y Corvina (Blancos Finos)", aScore: "9.8/10", aPts: ["Fibra blanca delicada y elegante para Ceviche y Tiradito", "Absorción inmediata de la leche de tigre en 2 minutos"], bName: "Mero Murique y Cabrilla (Roca y Colágeno)", bScore: "9.7/10", bPts: ["Carne firme y gelatinosa insuperable en Sudado y Parihuela", "Su cabeza y espinazo producen el mejor fumet marino"], verdict: "Para Ceviche clásico de barra elige Lenguado o Corvina; para Sudado, Parihuela o Jalea elige Mero o Cabrilla." },
  { title: "Bonito vs. Jurel vs. Caballa: Guía de Pescados Azules del Mar Peruano y Cómo Cocinarlos sin que Queden Secos", aName: "Bonito del Litoral Peruano", aScore: "9.5/10", aPts: ["Ideal para Ceviche norteño, Escabeche y Tataki/Sellado rápido", "Precio muy económico (S/ 6 a S/ 9/kg) y altísimo Omega 3"], bName: "Caballa y Jurel", bScore: "9.3/10", bPts: ["Sabor intenso perfecto para Cebiche con zarandaja, Sudado y Causa ferreñafana", "Excelente resistencia para salar o ahumar"], verdict: "El secreto de los tres pescados azules es no sobrecocinarlos: el bonito en sartén solo necesita 90 segundos por lado." },
  { title: "Perico (Mahi-Mahi) en el Perú: Temporada de Verano, Precio y Por Qué Es el Rey del Ceviche Económico y el Chicharrón", aName: "Perico Fresco en Ceviche", aScore: "9.4/10", aPts: ["Carne blanca-rosada firme que no se deshace con el limón", "Abundante de noviembre a marzo a precio accesible"], bName: "Perico en Chicharrón y Plancha", bScore: "9.5/10", bPts: ["Cero espinas intramusculares (ideal para niños)", "Jugoso al empanizar para Jalea familiar"], verdict: "En temporada de verano el Perico ofrece la mejor relación calidad-precio del mar peruano." },
  { title: "Pejerrey Peruano: Cómo Limpiarlo en 10 Segundos sin Espinazo para Ceviche, Tiradito y Pan con Pejerrey", aName: "Pejerrey Arrebozado Clásico", aScore: "9.7/10", aPts: ["Rebozado esponjoso con huevo, harina y punto de ají amarillo", "Infaltable en el Pan con Pejerrey chalaco con salsa criolla"], bName: "Pejerrey en Ceviche y Escabeche", bScore: "9.4/10", a2: "", bPts: ["Lomos plateados ricos en calcio y Omega 3", "Se marina en solo 60 segundos por su grosor fino"], verdict: "Pasa el dedo pulgar desde la cabeza hacia la cola por el vientre abierto y el espinazo saldrá entero sin usar cuchillo." },
  { title: "Chita y Tramboyo (Pescados de Peña): Cómo Prepararlos al Ajo, a lo Macho y en Parihuela", aName: "Chita Frita o al Ajo Dorada", aScore: "9.8/10", aPts: ["Carne blanca nacarada de sabor a marisco por alimentarse de crustáceos de roca", "Crujiente al freír entera con cortes diagonales"], bName: "Tramboyo en Sudado y Caldo", bScore: "9.6/10", bPts: ["El pescado con mayor potencia de sabor para concentrados y chilcanos", "Textura gelatinosa muy apreciada en caletas"], verdict: "Para un plato de lujo frente al mar pide Chita al ajo; para el caldo levanta muertos definitivo usa Tramboyo." },
  { title: "Ojo de Uva, Cojinova y Reineta: Qué Platos Preparar con Cada Uno y Cómo Reconocerlos en el Mercado", aName: "Ojo de Uva (Cherna / Cabrilla fina)", aScore: "9.6/10", aPts: ["Piel roja y carne blanca mantequillosa perfecta para Sudado y Vapor", "Rinde filetes gruesos muy jugosos"], bName: "Cojinova y Reineta", bScore: "9.2/10", bPts: ["Ideales para Pescado Frito, Chorrillana y Escabeche limeño", "Precio moderado todo el año"], verdict: "El Ojo de Uva brilla en cocciones húmedas (sudado/al vapor), mientras la Cojinova es reina del sartén y el escabeche." },
  { title: "Paiche vs. Doncella vs. Gamitana: Guía de los Grandes Pescados de la Amazonía Peruana", aName: "Paiche Amazónico", aScore: "9.8/10", aPts: ["Lomos gigantes blancos sin espinas de textura firme similar al mero", "Brilla a la parrilla, en chicharrón y en ceviche amazónico"], bName: "Doncella y Gamitana", bScore: "9.6/10", bPts: ["Doncella: ideal para Patarashca en hoja de bijao y Sudado", "Gamitana: sus costillas asadas (Paca Gamitana) son un manjar"], verdict: "Para filetes gourmet usa Paiche; para envolver en hoja de bijao a las brasas elige Doncella." },
  { title: "Trucha Rosada vs. Trucha Blanca Andina: Por Qué Cambia el Color y Cómo Cocinarla sin que se Pegue", aName: "Trucha Rosada (Trucha Salmónida)", aScore: "9.6/10", aPts: ["Color asalmonado por dieta rica en carotenos/crustáceos", "Excelente para Ceviche de trucha, Tiradito y Parrilla"], bName: "Trucha Blanca de Río", bScore: "9.3/10", bPts: ["Sabor delicado tradicional para Trucha Frita con choclo y Thimpo", "Muy económica en ferias regionales"], verdict: "Seca muy bien la piel de la trucha y pásala por una película mínima de harina de maíz antes de freír para que quede crocante." },
  { title: "Cómo Limpiar y Ablandar la Pota Peruana (Retirar el Ácido/Amoniaco) para que Quede Suave como Calamar", aName: "Técnica del Lavado con Sal y Azúcar", aScore: "9.9/10", aPts: ["Retira las dos membranas (interna y externa) del filete de pota", "Amasa en crudo 3 minutos con 1 cda de sal y 1 cda de azúcar para romper la acidez"], bName: "Cocción Relámpago vs. Larga", bScore: "9.5/10", bPts: ["Para Chicharrón: fritura de solo 2.5 minutos en aceite a 180 °C", "Para Ceviche de pota: hervor de 4 minutos con apio, kion y anís"], verdict: "El secreto de las carretillas para que la pota nunca sepa ácida ni quede chiclosa es pelar ambas telitas y frotarla con sal y azúcar antes de enjuagar." },
  { title: "Cómo Cocinar Pulpo Peruano para que Quede Tierno como Mantequilla (Sin Agua vs. Asustado 3 Veces)", aName: "Cocción en Seco en su Propio Jugo", aScore: "9.8/10", aPts: ["Coloca el pulpo en olla gruesa con media cebolla y 1 hoja de laurel sin nada de agua", "Suelta su propio líquido morado y queda tierno en 35–40 min a fuego bajo"], bName: "Método Tradicional Asustado en Agua", bScore: "9.4/10", bPts: ["Sumerge y saca 3 veces los tentáculos en agua hirviendo para que no se desprenda la piel", "Corta la cocción en agua con hielo para fijar el color"], verdict: "Golpear ligeramente los tentáculos o congelar el pulpo 48 horas antes rompe las fibras de colágeno garantizando suavidad total." },
  { title: "Conchas de Abanico de Paracas vs. Conchas Negras de Tumbes: Limpieza, Coral y Recetas", aName: "Conchas de Abanico (Paracas / Sechura)", aScore: "9.7/10", aPts: ["Conserva siempre el coral naranja brillante", "Perfectas para Parmesana, Tiradito y Arroz con Mariscos"], bName: "Conchas Negras del Manglar (Tumbes)", bScore: "9.8/10", bPts: ["Deben estar vivas (valvas cerradas al golpearlas)", "Su sangre oscura es el alma del Ceviche de Conchas Negras"], verdict: "Respetar los periodos de veda oficial del Ministerio de la Producción (PRODUCE) protege nuestras especies marinas." },
  { title: "Choros, Almejas, Navajas, Caracoles y Lapas del Mar Peruano: Cómo Desarenarlos con Agua y Sal", aName: "Purga en Agua con Sal Marina (35 g/L)", aScore: "9.8/10", aPts: ["Deja las almejas y navajas 1 hora en agua fría con sal para que expulsen toda la arena", "Retira las barbas (biso) de los choros tirando hacia la punta"], bName: "Descarte de Valvas Abiertas", bScore: "10/10", bPts: ["Descarta cualquier choro abierto en crudo que no se cierre al darle un golpecito", "Desecha los que sigan cerrados después de hervir"], verdict: "El caldo colado por tela fina de abrir los choros al vapor con vino blanco o chicha es oro líquido para tu arroz con mariscos." },
  { title: "Camarones de Río (Majes, Ocoña y Cañete) vs. Langostinos de Tumbes: Calendario de Veda y Limpieza", aName: "Camarón de Río Arequipa/Cañete", aScore: "9.9/10", aPts: ["Su coral de la cabeza da el sabor único al Chupe de Camarones", "En veda estricta de enero a marzo (prohibido su consumo en esos meses)"], bName: "Langostino de Tumbes", bScore: "9.6/10", bPts: ["Disponible los 12 meses del año (reemplazo legal en verano)", "Retira la vena dorsal negra con mondadientes sin romper la cola"], verdict: "Durante la veda del camarón (enero–marzo), prepara tu Chupe con langostinos grandes de Tumbes y cabezas de pescado de roca." },
  { title: "Cangrejo Violáceo y Jaiva en la Cocina Marina Peruana: Cómo Limpiarlos para Parihuela y Cangrejo Reventado", aName: "Cangrejo Violáceo en Parihuela", aScore: "9.6/10", aPts: ["Retira el triángulo abdominal y las branquias grises esponjosas", "Casca las pinzas con el lomo del cuchillo para que suelten su jugo al caldo"], bName: "Pulpa para Cangrejo Reventado", bScore: "9.7/10", bPts: ["Extrae la carne blanca y el coral para guisarlos con ají amarillo, pan, huevo y vino", "Plato insignia de Lambayeque y La Libertad"], verdict: "Un solo cangrejo violáceo machacado en el aderezo cambia por completo el cuerpo de una parihuela o arroz con mariscos." },
  { title: "Pescado Seco Salado y Guitarra Norteña: Cómo Desalarlos Paso a Paso para Chinguirito y Chupe de Viernes", aName: "Desalado para Cocción (Bacalao/Mero/Raya)", aScore: "9.6/10", aPts: ["Remoja en agua fría 24 horas cambiando el agua cada 8 horas en la refrigeradora", "Usa el último remojo con un chorrito de leche para suavizar las fibras"], bName: "Guitarra Seca para Chinguirito", bScore: "9.7/10", bPts: ["Se deshilacha en seco o tras un enjuague rápido sin remojo largo", "El limón sutil hidrata las hebras al momento de servir"], verdict: "Guarda el pescado seco salado en lugar fresco y ventilado; dura meses sin perder sus propiedades." }
];

// Completamos los 75 restantes de Categoría 8 (20 más de pescados/técnicas marinas + 30 cortes de carne/cerdo/aves + 25 papas/ajíes/insumos = 90 Total Cat 8)
const EXTRA_INSUMOS_Y_CORTES = [
  // 20 más de Pescados y Mariscos
  { title: "Cómo Reconocer el Pescado Fresco en el Mercado o Terminal Pesquero: Los 5 Signos Infalibles", optA: "Pescado 100% Fresco del Día", optB: "Pescado Guardado o Maltratado", verdict: "Ojos saltones y transparentes, agallas rojo vivo con olor a brisa marina, escamas bien adheridas y carne que vuelve a su sitio al presionarla." },
  { title: "Cómo Filetear un Pescado Entero en Casa y Aprovechar el Espinazo y la Cabeza para Chilcano y Fumet", optA: "Filetes Limpios para Ceviche", optB: "Cabeza y Espinazo para Caldo", verdict: "Retira las agallas y los ojos de la cabeza antes de hervirla 20 minutos con apio, poro y kion para evitar cualquier amargor." },
  { title: "Congelar Pescado para Ceviche (Anisakis y Textura): Qué Pescados Soportan la Congelación y Cómo Descongelarlos", optA: "Descongelación Lenta en Refrigeradora (4 °C)", optB: "Error de Descongelar en Agua Caliente", verdict: "Descongela siempre sobre una rejilla en la parte baja de la refrigeradora para que el agua de deshielo no ablande la carne." },
  { title: "Huevera de Pescado (Bonito, Volador y Merluza): Cómo Limpiarla y Freírla Crocante sin que Reviente", optA: "Pochado Previo de 3 Minutos + Fritura", optB: "Fritura Directa en Crudo", verdict: "Pasar la huevera 3 minutos por agua caliente con sal y limón coagula su membrana y evita que salpique al dorarla en sartén." },
  { title: "Macha, Erizo de Mar y Concha Pala en la Costa Sur Peruana: Historia, Vedasy Preparaciones", optA: "Erizo y Lapas de Peña", optB: "Alternativas Sostenibles", verdict: "Las lenguas de erizo frescas de Marcona e Ilo son un manjar en tortillas y ceviches cuando están fuera de veda." },
  { title: "Merluza Peruana y Tilapia: Cómo Darles Firmeza con Salmuera Rápida para que No se Deshagan al Freír", optA: "Salmuera Seca de 15 Minutos", optB: "Cocción sin Preparación", verdict: "Espolvorea sal sobre los filetes de merluza 15 minutos antes y seca con papel absorbente: extraerás el exceso de agua y quedarán firmes." },
  { title: "Calamar Nacional vs. Pota: Diferencias de Precio, Tamaño, Sabor y Tiempo de Cocción", optA: "Calamar Tubo Fino", optB: "Pota Gigante", verdict: "El calamar nacional se cocina en apenas 60 segundos; la pota cuesta una cuarta parte y bien tratada rinde increíble." },
  { title: "Caracoles de Mar al Natural y a la Piedra: Cómo Limpiarlos y Cocinarlos sin que Queden Gomosos", optA: "Cocción de 3 Minutos en Agua Hirviendo", optB: "Sobrecocción (>10 min)", verdict: "Retira la uña córnea y el intestino oscuro, golpea suavemente y blanquea solo 3 minutos antes de mezclar con salsa criolla." },
  { title: "Yuyo (Chondracanthus chamissoi) y Cochayuyo: Las Algas del Mar Peruano, Lavado y Beneficios de Yodo", optA: "Yuyo Fresco de Cevichería", optB: "Cochayuyo Seco para Guisos Andinos", verdict: "El yuyo fresco solo debe pasarse 5 segundos por agua caliente para volverse verde esmeralda brillante." },
  { title: "Boquichico, Palometa, Sábalo y Paco: Guía de Pescados de Río Amazónicos para Frito, Chilcano y Patarashca", optA: "Sábalo y Paco (Grasos y Jugosos)", optB: "Boquichico (Tradicional con Cortes Finos)", verdict: "Haz cortes transversales cada 3 milímetros en el lomo del boquichico para que el calor disuelva sus pequeñas espinas al freír." },
  { title: "Anchoveta Peruana Fresca y en Conserva: El Pescado Más Nutritivo del Planeta en 5 Recetas Caseras", optA: "Anchoveta Fresca Empanizada", optB: "Anchoveta en Conserva (Charquicán y Causa)", verdict: "Rica en hierro, calcio y Omega 3; un tesoro marino al alcance de todos los bolsillos." },
  { title: "Pez Espada y Atún Aleta Amarilla del Norte Peruano (Máncora y Tumbes): Sellado a la Plancha y Tiradito", optA: "Atún Sellado Término Rojo", optB: "Pez Espada a la Parrilla o Muchame", verdict: "Cocina el atún y el pez espada solo vuelta y vuelta para conservar sus jugos naturales." },
  { title: "Cabrilla Norteña vs. Cabrillón de Peña: El Pescado Rey de Piura y Tumbes para Sudado y Majado", optA: "Cabrilla Entera en Sudado con Chicha", optB: "Cabrillón en Filetes Gruesos", verdict: "En el norte no se concibe un buen sudado en olla de barro sin una cabrilla fresca de ojos brillantes." },
  { title: "Lisa y Lorna en la Cocina Costera Popular: Cómo Preparar Lisa Asada en Panca y Lorna Frita", optA: "Lisa en Panca o Escabeche Norteño", optB: "Lorna Frita Crocante con Yuca", verdict: "Pescados humildes pero llenos de sabor cuando están recién salidos de las redes artesanales." },
  { title: "Raya, Toyo (Tiburón Joven) y Guitarra en la Costa Norte: Cómo Quitar el Olor a Urea con Leche o Limón", optA: "Remojo en Agua con Limón o Leche (20 min)", optB: "Cocción Directa", verdict: "Los elasmobranquios (toyo y raya) quedan impecables tras un remojo rápido en agua con limón antes de aderezarlos." },
  { title: "Pejesapo y Lengueta: Joyas de las Caletas del Sur (Chorrillos, Pucusana, Paracas y Atico)", optA: "Chupe y Jalea de Pejesapo", optB: "Lengueta Frita al Ajo", verdict: "El pejesapo tiene una carne blanca tan firme y sabrosa como la langosta." },
  { title: "Mixtura de Mariscos Congelada vs. Mariscos Frescos del Día: Cómo Evitar que Solten Agua en tu Arroz con Mariscos", optA: "Mariscos Frescos Salteados 2 Min", optB: "Mixtura Congelada Bien Escurrida", verdict: "Si usas mixtura congelada, descongélala en colador, sécala con papel toalla y saltéala a fuego máximo antes de unirla al arroz." },
  { title: "Cangrejo del Manglar y Concha Huaquera de Tumbes: Cómo Se Preparan en el Extremo Norte del Perú", optA: "Chilcano y Parihuela Tumbesina", optB: "Ceviche Mixto de Manglar", verdict: "Sabores intensos de estero que se equilibran con limón de Chulucanas y ají cerezo." },
  { title: "Choros a la Chalaca vs. Choros en Salsa Verde: Cómo Cocinar el Mejillón Peruano en 6 Minutos", optA: "Sarsa Chalaca con Choclo y Ají Limo", optB: "Gratinados o en Sudado", verdict: "Basta 5 a 6 minutos de vapor tapado para que los choros se abran quedando gorditos y jugosos." },
  { title: "Cómo Hacer Fumet (Caldo Concentrado de Pescado) y Caldo de Choros para Congelar en Porciones", optA: "Fumet Blanco de 25 Minutos", optB: "Caldo Rojo de Parihuela", verdict: "Nunca hiervas las espinas de pescado más de 25 minutos, pues después del minuto 30 el cartílago suelta notas amargas." },

  // 30 Cortes de Carne de Res, Cerdo, Cordero y Menudencias en el Perú
  { title: "Qué Corte de Carne Usar para Lomo Saltado: Lomo Fino vs. Cadera vs. Huachalomo vs. Bistec de Tapa", optA: "Lomo Fino y Punta de Cadera (Suavidad Máxima)", optB: "Huachalomo y Bola de Lomo (Económicos y Sabrosos)", verdict: "Si usas Cadera o Bola de Lomo, córtala en contra de la fibra y marínala 15 min con sillao, gotas de vinagre y media cucharadita de maicena." },
  { title: "Qué Corte de Carne Pedir para Seco de Res a la Norteña: Asado de Tira vs. Aguja vs. Punta de Pecho", optA: "Asado de Tira y Aguja (Con Colágeno y Veteado)", optB: "Carne Magra sin Grasa (Se seca en cocción larga)", verdict: "El Seco exige cortes con tejido conectivo (asado de tira, aguja o pecho) que al guisarse lento se vuelven melosos." },
  { title: "Asado de Pejerrey vs. Asado Cuadrado vs. Pollo Ganso: Cuál Elegir para el Asado Peruano con Puré", optA: "Asado de Pejerrey (Redondo y Uniforme)", optB: "Asado Cuadrado / Tapa (Más Jugoso)", verdict: "El Pejerrey da medallones perfectos de fiesta; mechalo con tiras de zanahoria, apio y tocino si quieres extra jugosidad." },
  { title: "Pecho de Res, Malaya y Falda: Qué Corte Comprar para Sancochado Limeño, Ropa Vieja y Espesado", optA: "Punta de Pecho (Grasa Firme y Sabor Intenso)", optB: "Malaya / Falda (Hebras Largas para Deshilachar)", verdict: "Para Sancochado pide Punta de Pecho y Asado de Tira; para Ropa Vieja o Salpicón de res pide Malaya o Falda." },
  { title: "Bistec de Tapa, Bola de Lomo y Cuadril: El Mejor Corte para Bistec a lo Pobre, Apanado y Encebollado", optA: "Cuadril y Tapa (Suaves para Sartén)", optB: "Bola de Lomo (Ideal para Apanar y Chancar)", verdict: "Pide al carnicero corte mariposa sin nervio lateral para que el bistec no se encoja ni se arquee en la sartén." },
  { title: "Garrón (Ossobuco) y Pescuezo de Res: Los Cortes con Más Colágeno para Estofados, Menestrón y Sopas", optA: "Chambarete / Ossobuco con Tuétano", optB: "Pescuezo en Trozos para Guiso", verdict: "El tuétano central del ossobuco se funde en el aderezo dando un brillo y sabor insuperables." },
  { title: "Cortes de Cerdo en el Perú: Panceta vs. Brazuelo vs. Pierna vs. Cogote para Chicharrón, Adobo y Caja China", optA: "Panceta y Costilla (Para Caja China y Chicharrón)", optB: "Cogote y Brazuelo (Para Adobo Arequipeño y Carapulcra)", verdict: "Nunca hagas Adobo ni Chicharrón con lomo de cerdo magro: usa Cogote (Bondiola) o Panceta con Costilla." },
  { title: "Mondongo Nacional vs. Mondongo Importado: Cómo Reconocerlos en el Mercado y Cuál Rinde Mejor para Cau Cau", optA: "Mondongo Nacional Fresco (Grueso y Sabroso)", optB: "Mondongo Importado Blanqueado", verdict: "El mondongo nacional sin blanquear con cal tiene el doble de sabor y textura para Cau Cau y Patasca." },
  { title: "Corazón de Res vs. Corazón de Pollo para Anticuchos: Limpieza de Nervios, Corte en Sesgo y Aderezo", optA: "Corazón de Res (Clásico Carretillero)", optB: "Corazones de Pollo (Bocado Rápido)", verdict: "Retira toda la grasa dura exterior y las válvulas internas del corazón de res para obtener filetes limpios." },
  { title: "Rachi (Librillo), Choncholí (Intestino Delgado), Pancita y Mollejitas: Guía de Menudencias de Parrilla Peruana", optA: "Choncholí Dorado y Crocante", optB: "Rachi y Pancita Suaves", verdict: "Hierve previamente el choncholí y el rachi 35 minutos con hierbabuena, ajo y sal antes de pasarlos al aderezo anticuchero y la parrilla." },
  { title: "Bofe (Pulmón de Res): Cómo Elegirlo Rosado Brillante y Cómo Hervirlo para que No Disminuya su Volumen en la Chanfainita", optA: "Hervor Entero de 35 Min + Picado en Frío", optB: "Picar en Crudo (Dificulta el Corte)", verdict: "Cocina el bofe en trozos grandes con hierbabuena y pícalo en cubitos parejos cuando ya esté frío." },
  { title: "Pata de Res, Oreja y Máscara de Cerdo: El Secreto del Colágeno para Patita con Maní, Shámbar y Frito", optA: "Pata de Res Quemada y Raspada Limpia", optB: "Pellejo y Oreja de Cerdo", verdict: "Su gelatina natural liga las salsas de maní y las sopas norteñas sin necesidad de harinas." },
  { title: "Hígado de Res vs. Hígado de Pollo vs. Riñones: Cómo Quitar la Membrana y Preparar Riñoncitos al Vino", optA: "Hígado sin Telita Exterior", optB: "Riñones Desflemados en Agua con Vinagre", verdict: "Retirar la fina membrana transparente del hígado de res evita que se encoja y endurezca al freír." },
  { title: "Sangrecita de Pollo vs. Sangrecita de Res en Mercados del Perú: Higiene, Cocción y Conservación", optA: "Sangrecita de Pollo (Sabor Más Suave para Niños)", optB: "Sangrecita de Res (Alta Disponibilidad)", verdict: "Cómprala en puestos refrigerados o envasada con registro sanitario y cocínala siempre dos veces (hervor + salteado)." },
  { title: "Gallina Negra / Colorada de Corral vs. Pollo de Granja: En Qué Platos Vale la Pena Invertir en Gallina", optA: "Gallina Colorada (Caldo, Inchicapi y Ají de Gallina)", optB: "Pollo Tierno (Saltados, Brasa y Estofados)", verdict: "El caldo de una verdadera gallina colorada o de chacra tiene un color dorado y sabor umami imposible de igualar." },
  { title: "Pato Criollo vs. Pato Pekín en el Perú: Cómo Reconocer el Pato Tierno para Arroz con Pato y Ceviche de Pato", optA: "Pato Criollo / Macho Joven (Sabor Norteño Intenso)", optB: "Pato Pekín (Más Grasa en Piel para Chifa)", verdict: "Para Arroz con Pato chiclayano o Pato en Ají huaralino busca pato criollo joven de pecho carnoso." },
  { title: "Cabrito de Leche Norteño vs. Cordero Andino: Cómo Identificar el Verdadero Cabrito en el Mercado", optA: "Cabrito de Leche (Hueso Fino y Carne Rosada Pálida)", optB: "Cordero Tierno (Grasa Blanca Aromática)", verdict: "El verdadero cabrito norteño pesa entre 5 y 7 kg entero y su carne es rosada clara sin olor cabrío fuerte." },
  { title: "Cuy Andino: Cómo Elegir un Cuy Tierno (3 Meses) para Cuy Chactado o Picante vs. Cuy Mayor para Caldo", optA: "Cuy Tierno de 700–900 g (Para Freír / Chactar)", optB: "Cuy Grande (Para Estofado o Pepián)", verdict: "Si las orejas y patitas son suaves y flexibles, es un cuy joven perfecto para freír bajo piedra." },
  { title: "Charqui de Alpaca/Res y Chalona de Cordero: Cómo Desalarlos y Tostarlos para Olluquito, Chairo y Chiri Uchu", optA: "Charqui Deshilachado y Tostado", optB: "Chalona con Hueso para Caldos", verdict: "Asa ligeramente el charqui al fuego antes de golpearlo en batán y deshilacharlo para potenciar su aroma andino." },
  { title: "Cecina de Cerdo de Selva (Tarapoto/Iquitos) vs. Cecina de Res (Chachapoyas/Piura): Diferencias y Cocción", optA: "Cecina de Lomo de Cerdo Ahumada", optB: "Cecina Seca de Res", verdict: "La cecina amazónica solo necesita pasar 45 segundos por lado en sartén caliente: si la fríes de más se reseca." },
  { title: "Carne Molida Especial vs. Carne Picada a Cuchillo: Por Qué la Papa Rellena y la Empanada Quedan Más Jugosas a Cuchillo", optA: "Bistec o Lomo Picado a Cuchillo en Cubitos de 4 mm", optB: "Carne Molida de Máquina", verdict: "Picar a cuchillo retiene los jugos dentro de cada dadito de carne en lugar de exprimirlos en el molino." },
  { title: "Pechuga de Pavita vs. Pollo en la Cocina Diaria Peruana: Cortes (Medallones, Guiso, Alitas) y Tiempos", optA: "Medallones y Brazuelo de Pavita", optB: "Pollo Tradicional", verdict: "El brazuelo de pavita guisado en aderezo de ají amarillo o seco queda tan jugoso como el muslo de pollo con menos grasa." },
  { title: "Lengua, Sesos y Criadillas en la Cocina Criolla Tradicional: Limpieza y Recetas de Antaño", optA: "Lengua en Salsa de Vino o Entomatada", optB: "Tortilla de Sesos Criolla", verdict: "Recetas clásicas de las antiguas picanterías y tabernas limeñas." },
  { title: "Cómo Ablandar Cualquier Corte de Carne Económico con Papaya Verde, Piña, Kiwi o Bicarbonato sin Cambiar el Sabor", optA: "Papaína Natural (Cáscara o Ralladura de Papaya 15 min)", optB: "Terciopelado con Bicarbonato (1/4 cdta por 500 g)", verdict: "No dejes la papaya ni la piña más de 20 minutos sobre la carne, o las enzimas desharán la fibra en exceso." },
  { title: "Menudencia de Pollo (Patitas,Pescuezo, Mollejas e Hígado): El Secreto del Aguadito Levanta Muertos y Caldo", optA: "Mollejitas y Corazones Tiernos", optB: "Patitas Peladas (Puro Colágeno)", verdict: "Escalda las patitas de pollo 30 segundos en agua hirviendo para retirar la piel amarilla de un solo tirón." },
  { title: "Tocino Ahumado, Pellejo de Chancho y Jamón del Norte: Los Potenciadores del Frejol Batido y el Shámbar", optA: "Lonjas de Pellejo de Cerdo Limpio", optB: "Hueso Manzano Ahumado", verdict: "Hervir un trozo de pellejo de cerdo dentro de los frejoles y luego licuarlo con un cucharón de menestra da la cremosidad de restaurante." },
  { title: "Salchicha de Huacho vs. Chorizo Parrillero vs. Relleno Criollo: De Qué Está Hecho Cada Uno y Cómo Cocinarlos", optA: "Salchicha Huachana (Cerdo + Achiote + Naranja Agria)", optB: "Relleno Criollo (Sangre + Hierbabuena + Ají + Cebolla)", verdict: "La salchicha huachana se cocina en su propia grasa sin añadir aceite y se revuelve con huevos batidos al final." },
  { title: "Panza de Res, Libro y Cuajo: Las 3 Partes del Mondongo Peruano y Cuál Comprar para Cada Plato", optA: "Panza / Toalla (Cau Cau y Mondonguito)", optB: "Libro / Rachi (Parrilla y Patasca)", verdict: "Pide 'panza gruesa' para un Cau Cau de cubos firmes y 'libro' para hacer rachi a la parrilla." },
  { title: "Hueso Manzano y Pecho de Res: Cómo Hacer el Mejor Caldo Base de Res para Sopas Peruanas", optA: "Hueso Manzano (Articulación con Médula)", optB: "Tira de Costilla / Pecho", verdict: "Dora los huesos 20 minutos en el horno antes de hervirlos si buscas un caldo oscuro y profundo." },
  { title: "CómoPorcionar y Congelar las Carnes del Mes sin Quemadura de Frío para Cocinar Rápido entre Semana", optA: "Empaque Plano en Bolsas Herméticas sin Aire", optB: "Porcionado ya Marinado en Aderezo Peruano", verdict: "Congelar el pollo o cerdo ya marinado en ají panca o amarillo hace que al descongelarse esté penetrado de sabor." },

  // 25 Papas Nativas, Ajíes, Maíces y Hierbas del Perú
  { title: "Guía Definitiva de las Papas del Perú: Amarilla Tumbay vs. Huayro vs. Peruanita vs. Canchan vs. Blanca vs. Única", optA: "Papas Harinosas (Amarilla Tumbay, Huayro, Peruanita)", optB: "Papas Céreas/Firmes (Canchan, Única, Blanca, Cocktelerita)", verdict: "Para Causa y Puré usa Amarilla Tumbay; para Papa Rellena mezcla 50% Blanca + 50% Amarilla; para Papas Fritas usa Canchan o Única; para Guisos y Pachamanca usa Huayro." },
  { title: "Mapa Completo de los Ajíes del Perú: Amarillo, Panca, Mirasol, Limo, Rocoto, Charapita, Arnaucho y Mochero", optA: "Ajíes de Base y Aderezo (Amarillo, Panca, Mirasol)", optB: "Ajíes Frescos de Mesa y Ceviche (Limo, Rocoto, Charapita, Arnaucho)", verdict: "El ají amarillo y el mirasol son el mismo ají (fresco vs. secado al sol); el panca da color borgoña ahumado y el limo aporta perfume cítrico." },
  { title: "Rocoto Serrano (De Monte) vs. Rocoto Arequipeño de Huerta: Cómo Reconocerlos yCuál Usar para Rocoto Relleno", optA: "Rocoto de Huerta (Grande, Paredes Gruesas, Ideal para Rellenar)", optB: "Rocoto Serrano (Más Pequeño, Picor Intenso para Moler en Batán)", verdict: "Para Rocoto Relleno elige rocotos grandes de base ancha que se paren solos en la fuente; para Rocoto Molido elige el serrano con huacatay." },
  { title: "Zapallo Macre vs. Zapallo Loche de Lambayeque vs. Zapallo Italiano: Usos y Secretos en la Cocina Peruana", optA: "Zapallo Loche (Aroma Norteño Único con Denominación de Origen)", optB: "Zapallo Macre (Gigante de Costa para Locro, Sopas y Picarones)", verdict: "Un trozo de 80 g de zapallo loche rallado con cáscara transforma cualquier seco, arroz con pato o aguadito." },
  { title: "Los Maíces del Perú: Choclo Cusco Gigante vs. Maíz Morado vs. Maíz Chulpi vs. Jora vs. Cabanita", optA: "Choclo Tierno y Mote Gigante (Cuzco/Urubamba)", optB: "Maíz Chulpi (El Único que Revienta Suave para Cancha)", verdict: "Nunca intentes hacer cancha serrana con maíz de mote ni con maíz pop corn: pide siempre Maíz Chulpi o Maíz Terciopelo." },
  { title: "Las 6 Hierbas Sagradas de la Cocina Peruana: Huacatay, Muña, Paico, Chincho, Culantro y Sachaculantro", optA: "Hierbas Andinas (Huacatay, Muña, Chincho y Paico)", optB: "Hierbas de Costa y Selva (Culantro, Hierbabuena y Sachaculantro)", verdict: "El chincho es el alma de la pachamanca, el paico del caldo verde, la muña de los chupes andinos y el sachaculantro de la cocina amazónica." },
  { title: "Chuño Blanco (Tunta / Moraya) vs. Chuño Negro del Altiplano: Cómo Hidratarlos, Lavarlos y Cocinarlos", optA: "Tunta / Moraya Blanca (Lavada en Río Helado, Sabor Suave)", optB: "Chuño Negro (Intenso para Chairo y Thimpo)", verdict: "Remoja la tunta 12 horas, pélala y cocínala al vapor para rellenarla de queso Paria en tu Chiri Uchu o Cancacho." },
  { title: "Papa Seca Peruana para Carapulcra: Cómo Elegirla sin Piedritas, Cómo Tostarla y Cuánto Crece al Hidratar", optA: "Papa Seca Amarilla/Mixta Tostada en Sartén Seca", optB: "Error de Hervirla sin Tostar", verdict: "250 g de papa seca rinden para 6 personas (triplica su volumen); tuéstala en sartén sin aceite hasta que huela a pan horneado antes de remojarla." },
  { title: "Olluco, Oca y Mashua: Guía de los Tubérculos Andinos (Cómo Solearlos para Endulzarlos y Recetas)", optA: "Olluco Tarmeño (Crujiente para Olluquito)", optB: "Oca y Mashua Negra (Soleadas 3 Días para Asar o Sancochar)", verdict: "Nunca laves el olluco después de picarlo en juliana (lávalo entero antes) para que conserve su textura firme." },
  { title: "Camote Amarillo (Jonathan) vs. Camote Morado Peruano: Cuál Usar para Ceviche, Chicharrón y Picarones", optA: "Camote Amarillo Naranja (Húmedo y Meloso para Glasear en Ceviche)", optB: "Camote Morado (Harinoso y Dulce para Freír en Rodajas)", verdict: "Para el ceviche hierve el camote amarillo con jugo de naranja, canela, clavo y chancaca; para el pan con chicharrón fríe el morado o amarillo firme." },
  { title: "Yuca Amarilla vs. Yuca Blanca en el Perú: Cómo Elegir en el Mercado la que Revienta como Algodón", optA: "Yuca de Cáscara Rosada/Tierra Fresca que Desprende Fácil", optB: "Yuca Vieja con Vetas Negras o Azules (Se pone dura / 'paluda')", verdict: "Pide a la casera cortar la punta de la yuca: debe ser 100% blanca o crema pareja sin puntitos oscuros." },
  { title: "Menestras Peruanas: Frejol Canario, Pallar de Ica, Zarandaja Norteña, Frejol Castilla, Panamito y Tarwi", optA: "Frejol Canario Camanejo (Rey de la Cremocidad)", optB: "Zarandaja y Pallar (Ideales para Ensaladas, Ceviches y Batidos)", verdict: "El Frejol Canario de Camaná (Arequipa) o Barranca tiene la piel más fina y mantecosa del Perú." },
  { title: "Quinua Blanca vs. Quinua Roja vs. Quinua Negra y Cañihua: Cómo Quitar la Saponina Amarga y Tiempos de Cocción", optA: "Quinua Blanca Perlada (Suave y Esponjosa en 14 Min)", optB: "Quinua Roja y Negra (Crujientes para Ensaladas y Chaufa en 18 Min)", verdict: "Frota la quinua entre las palmas bajo el chorro de agua fría hasta que deje de salir espuma blanca (saponina) y nunca le pongas sal antes de que reviente el grano." },
  { title: "Quesos del Perú: Queso Paria (Puno/Arequipa), Queso Serrano Cachipa, Quesillo Cajamarquino y Mantecoso", optA: "Queso Paria Pasteurizado (Firme, Se Derrite sin Deshacerse)", optB: "Queso Cachipa y Mantecoso (Cremosos para Huancaína y Pan)", verdict: "Para Rocoto Relleno, Pastel de Papa y Solterito pide Queso Paria; para Huancaína y Choclo pide Cachipa o Serrano." },
  { title: "Aceituna de Botija de Tacna e Ilo vs. Aceituna Verde Rellena: Cómo Conservarlas en Salmuera y Hacer Crema al Olivo", optA: "Aceituna Negra de Botija (Madurada en Ánfora, Carnosa y Morada)", optB: "Aceituna Verde Sevillana", verdict: "La verdadera salsa al olivo para pulpo y tiradito solo se logra con Aceituna de Botija peruana licuada con mayonesa casera." },
  { title: "Limón Sutil Peruano (Chulucanas / Olmos) vs. Limón Tahití: Por Qué el Ceviche Peruano Exige Limón Sutil", optA: "Limón Sutil Verde de Cáscara Fina (Acidez Floral y Ph 2.1)", optB: "Limón Amarillo o Tahití Grande", verdict: "Exprime el limón sutil a la mitad de su recorrido (sin aplastar la cáscara) para obtener puro jugo aromático sin aceites amargos." },
  { title: "Cebolla Roja de Arequipa (Camaneja) vs. Cebolla Blanca: Cómo Cortarla en Pluma y Quitarle el Fuego para Salsa Criolla", optA: "Pluma Fina Pasada por Agua Helada con Hielo (5 Minutos)", optB: "Error de Remojarla en Sal (La Marchita y Ablanda)", verdict: "Nunca dejes la cebolla remojando en sal: lávala en agua con cubos de hielo, escúrrela bien y agrégale la sal y el limón justo al servir para que cruja." },
  { title: "Achiote en Pepa, Palillo (Cúrcuma Amazónica / Guisador) y Azafrán: Los Colorantes Naturales de la Olla Peruana", optA: "Aceite de Achiote Casero (Olluco, Frito y Salchicha Huachana)", optB: "Palillo / Guisador (Cau Cau, Arroz Amarillo y Juane)", verdict: "Sofríe las semillas de achiote en aceite tibio durante 2 minutos sin que se quemen y cuela: tendrás aceite rojo dorado para meses." },
  { title: "Hongos Secos de Porcón (Cajamarca) y Laurel: El Umami Secreto del Tallarín Rojo y el Estofado Peruano", optA: "Hongos de Pino de Porcón Hidratados en Agua Tibia", optB: "Uso del Agua de Remojo Colada en la Salsa", verdict: "El agua oscura donde hidrataste los hongos secos de Porcón (colada con papel filtro) multiplica por diez el sabor de tu tallarín rojo." },
  { title: "Chancaca Peruana (Rubia y Oscura), Algarrobina de Piura y Miel de Abeja de Oxapampa en la Cocina", optA: "Miel de Chancaca con Hoja de Higo, Naranja y Clavo", optB: "Algarrobina Pura de Bosque Seco", verdict: "Poner una hoja fresca de higo en el almíbar de chancaca es el secreto innegociable de los picarones y el turrón." },
  { title: "Plátano Bellaco (Verde y Maduro) vs. Plátano de la Isla vs. Plátano de Seda vs. Manzano y Palillo", optA: "Plátano Bellaco (Tacacho, Patacones, Chifles y Malarrabia)", optB: "Plátano de la Isla y Palillo (Para Freír en Arroz a la Cubana y Sancochado)", verdict: "Para el Arroz a la Cubana y el Seco, fríe Plátano de la Isla o Bellaco Pintón en mantequilla." },
  { title: "Frutas Nativas del Perú para Postres y Refrescos: Lúcuma de Palo, Chirimoya Cumbe, Tumbo, Camu Camu y Cocona", optA: "Lúcuma de Seda vs. Lúcuma de Palo", optB: "Tumbo Serrano y Cocona Amazónica", verdict: "El ají de cocona con charapita y cebolla es la sarsa indispensable de toda mesa amazónica." },
  { title: "Maní Tostado en la Cocina Peruana: Carapulcra, Ocopa, Patita con Maní, Puca Picante e Inchicapi", optA: "Maní Tostado Molido Grueso (Carapulcra y Patita)", optB: "Maní Crudo Licuado (Sopa Inchicapi Amazónica)", verdict: "Retira el corazón o germen central del maní tostado si quieres que tu Carapulcra y Ocopa sean mucho más digestivas." },
  { title: "Sillao Claro vs. Sillao Oscuro (Hongo) y Salsa de Ostión: Cuál Usar para Lomo Saltado vs. Arroz Chaufa", optA: "Sillao Claro (Aporta Sal y Umami sin Teñir de Negro el Lomo)", optB: "Sillao Oscuro / Hongo (Da el Color Bronce al Chaufa y Tallarín)", verdict: "Los mejores cocineros usan 80% sillao claro y 20% salsa de ostión en el Lomo Saltado, y un toque de sillao oscuro en el Chaufa." },
  { title: "Vinagre Tinto vs. Vinagre Blanco vs. Vinagre de Manzana en la Cocina Criolla (Lomo Saltado, Escabeche y Anticucho)", optA: "Vinagre Tinto Peruano (Carácter para Lomo, Anticucho y Escabeche)", optB: "Vinagre Blanco (Encurtidos y Limpieza)", verdict: "El golpe de vinagre tinto por el borde del wok caliente al flamear es el sello de identidad del Lomo Saltado y el Escabeche." }
];

export function getCat7And8Seeds() {
  const seeds = [];

  // 7A: 30 Antianemia y Bebés
  NUTRICION_ANTIANEMIA_BEBES.forEach((n) => {
    const cleanSlug = n.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: n.title,
      category: "nutricion-y-dietas-peruanas",
      categoryName: "Nutrición, Antianemia y Dietas",
      focusKeyword: n.title.split("(")[0].trim().toLowerCase(),
      layoutVariant: "laboratorio-nutricional",
      schemaType: "Recipe",
      badgeLabel: `🩺 ${n.iron}`,
      imageHint: "platos",
      nutritionInfo: {
        ironMg: n.iron,
        proteinG: n.prot,
        caloriesKcal: n.kcal,
        glycemicIndex: n.gi,
        targetGroup: n.group,
        minsaNote: n.tip,
      },
      summary: `Receta nutritiva peruana: ${n.title}. Aporta ${n.iron} y ${n.prot} por porción (${n.kcal}), ideal para ${n.group}. ${n.tip}`,
    });
  });

  // 7B: 60 Diabéticos, Celiacos y Fitness (Total Cat 7 = 90)
  NUTRICION_DIABETICOS_FITNESS.forEach((d) => {
    const cleanSlug = d.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: d.title,
      category: "nutricion-y-dietas-peruanas",
      categoryName: "Nutrición, Antianemia y Dietas",
      focusKeyword: d.title.split("(")[0].split(":")[0].trim().toLowerCase(),
      layoutVariant: "laboratorio-nutricional",
      schemaType: d.title.includes("Tabla") || d.title.includes("Menú") ? "BlogPosting" : "Recipe",
      badgeLabel: `🩺 ${d.group.split(" ")[0]}`,
      imageHint: "sincalorias",
      nutritionInfo: {
        ironMg: d.iron,
        proteinG: d.prot,
        caloriesKcal: d.kcal,
        glycemicIndex: d.gi,
        targetGroup: d.group,
        minsaNote: d.tip,
      },
      summary: `Guía nutricional y receta: ${d.title}. Diseñada para ${d.group} (${d.prot}, ${d.kcal}, ${d.gi}). ${d.tip}`,
    });
  });

  // 8A: 15 Comparativas detalladas de Pescados y Mariscos
  CORTES_PESCADOS_INSUMOS.forEach((c) => {
    const cleanSlug = c.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 95)
      .replace(/-$/, "");

    seeds.push({
      slug: cleanSlug,
      title: c.title,
      category: "cortes-pescados-e-insumos",
      categoryName: "Cortes, Pescados e Insumos",
      focusKeyword: c.title.split(":")[0].toLowerCase(),
      layoutVariant: "duelo-insumos-rescate",
      schemaType: "BlogPosting",
      badgeLabel: `🐟 Guía de Insumos`,
      imageHint: "pescado",
      comparisonInfo: {
        optionA: {
          name: c.aName,
          badge: "🥇 Opción Recomendada A",
          score: c.aScore,
          points: c.aPts,
        },
        optionB: {
          name: c.bName,
          badge: "🥈 Opción Recomendada B",
          score: c.bScore,
          points: c.bPts,
        },
        verdict: c.verdict,
      },
      summary: `${c.title}. Comparativa técnica entre ${c.aName} y ${c.bName}: ${c.verdict}`,
    });
  });

  // 8B: 75 Guías de Pescados, Cortes de Carne y Papas/Ajíes (Total Cat 8 = 90)
  EXTRA_INSUMOS_Y_CORTES.forEach((e) => {
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
      category: "cortes-pescados-e-insumos",
      categoryName: "Cortes, Pescados e Insumos",
      focusKeyword: e.title.split(":")[0].toLowerCase(),
      layoutVariant: "duelo-insumos-rescate",
      schemaType: "BlogPosting",
      badgeLabel: `⚖️ Duelo Culinario`,
      imageHint: e.title.includes("Pescado") || e.title.includes("Marisco") || e.title.includes("Pota") || e.title.includes("Choro") ? "pescado" : "papa",
      comparisonInfo: {
        optionA: {
          name: e.optA,
          badge: "🥇 Elección Maestra",
          score: "9.8 / 10",
          points: [
            "Máximo rendimiento de sabor y textura en la receta tradicional peruana",
            "Disponible en mercados locales y mayoristas a excelente relación calidad-precio",
          ],
        },
        optionB: {
          name: e.optB,
          badge: "🥈 Alternativa / Contraste",
          score: "8.9 / 10",
          points: [
            "Requiere técnica o ajuste de tiempo específico durante la cocción",
            "Útil para preparaciones complementarias según el plato elegido",
          ],
        },
        verdict: e.verdict,
      },
      summary: `Diccionario gastronómico peruano: ${e.title}. ${e.verdict}`,
    });
  });

  return seeds;
}
