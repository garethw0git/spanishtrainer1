const phrases = [

{q:"I need an appointment",a:"Necesito una cita"},
{q:"The plumber is coming tomorrow",a:"El fontanero viene mañana"},
{q:"The heating is not working",a:"La calefacción no funciona"},
{q:"Can I have the bill please",a:"La cuenta por favor"},
{q:"I already sent the documents",a:"Ya envié los documentos"},

{q:"I need a prescription",a:"Necesito una receta"},
{q:"My back hurts",a:"Me duele la espalda"},
{q:"I have an appointment at ten",a:"Tengo una cita a las diez"},
{q:"Where is the pharmacy?",a:"¿Dónde está la farmacia?"},
{q:"I need to see a specialist",a:"Necesito ver a un especialista"},

{q:"The community meeting is tonight",a:"La reunión de la comunidad es esta noche"},
{q:"Have you spoken to the administrator?",a:"¿Has hablado con el administrador?"},
{q:"There is a problem with the roof",a:"Hay un problema con el tejado"},
{q:"The lift is broken",a:"El ascensor está averiado"},
{q:"We need a repair",a:"Necesitamos una reparación"},

{q:"I would like to open a bank account",a:"Me gustaría abrir una cuenta bancaria"},
{q:"Can I pay by card?",a:"¿Puedo pagar con tarjeta?"},
{q:"I need a transfer",a:"Necesito una transferencia"},
{q:"What are the fees?",a:"¿Cuáles son las comisiones?"},
{q:"The payment has arrived",a:"El pago ha llegado"},

{q:"The boiler stopped working yesterday",a:"La caldera dejó de funcionar ayer"},
{q:"We are waiting for the electrician",a:"Estamos esperando al electricista"},
{q:"The plumber is running late",a:"El fontanero llega con retraso"},
{q:"The repair will start next week",a:"La reparación empezará la semana que viene"},
{q:"There is a water leak in the garage",a:"Hay una fuga de agua en el garaje"},

{q:"The community meeting is tonight",a:"La reunión de la comunidad es esta noche"},
{q:"The administrator sent the minutes",a:"El administrador envió el acta"},
{q:"Everyone agreed with the proposal",a:"Todos estuvieron de acuerdo con la propuesta"},
{q:"We voted in favour of the project",a:"Votamos a favor del proyecto"},
{q:"The meeting lasted two hours",a:"La reunión duró dos horas"},

{q:"I need to book an appointment",a:"Necesito pedir una cita"},
{q:"The doctor wants more tests",a:"El médico quiere más pruebas"},
{q:"I have had back pain for three days",a:"Tengo dolor de espalda desde hace tres días"},
{q:"The pharmacy is closed today",a:"La farmacia está cerrada hoy"},
{q:"I need to renew my prescription",a:"Necesito renovar mi receta"},

{q:"I have an appointment at the town hall",a:"Tengo una cita en el ayuntamiento"},
{q:"What documents do I need?",a:"¿Qué documentos necesito?"},
{q:"I need to complete this form",a:"Necesito completar este formulario"},
{q:"The application was approved",a:"La solicitud fue aprobada"},
{q:"I am still waiting for approval",a:"Todavía estoy esperando la aprobación"},

{q:"Can I pay by card?",a:"¿Puedo pagar con tarjeta?"},
{q:"I would like to open a bank account",a:"Me gustaría abrir una cuenta bancaria"},
{q:"The payment has arrived",a:"El pago ha llegado"},
{q:"I need to make a transfer",a:"Necesito hacer una transferencia"},
{q:"What are the fees?",a:"¿Cuáles son las comisiones?"},

{q:"Could we have the bill please?",a:"¿Nos trae la cuenta, por favor?"},
{q:"The food was excellent",a:"La comida estuvo excelente"},
{q:"I would like a table for two",a:"Quisiera una mesa para dos"},
{q:"We have a reservation",a:"Tenemos una reserva"},
{q:"Can I see the menu?",a:"¿Puedo ver el menú?"},

{q:"My neighbour is very helpful",a:"Mi vecino es muy servicial"},
{q:"There was a lot of noise last night",a:"Hubo mucho ruido anoche"},
{q:"I am speaking with the administrator tomorrow",a:"Hablaré con el administrador mañana"},
{q:"We need a solution to this problem",a:"Necesitamos una solución para este problema"},
{q:"The work has already started",a:"Las obras ya han comenzado"},

{q:"The internet is not working",a:"Internet no funciona"},
{q:"The signal is very weak",a:"La señal es muy débil"},
{q:"I forgot my password",a:"Olvidé mi contraseña"},
{q:"Can you send me the link?",a:"¿Puede enviarme el enlace?"},
{q:"I downloaded the document",a:"Descargué el documento"},

{q:"The train is delayed",a:"El tren lleva retraso"},
{q:"What platform does the train leave from?",a:"¿De qué andén sale el tren?"},
{q:"I only have hand luggage",a:"Solo llevo equipaje de mano"},
{q:"Where is the bus stop?",a:"¿Dónde está la parada de autobús?"},
{q:"What time does the flight arrive?",a:"¿A qué hora llega el vuelo?"},

{q:"I go cycling every weekend",a:"Voy en bicicleta todos los fines de semana"},
{q:"The climb was very difficult",a:"La subida fue muy difícil"},
{q:"Today's ride was fantastic",a:"La salida de hoy fue fantástica"},
{q:"My average speed was good",a:"Mi velocidad media fue buena"},
{q:"I need a recovery day tomorrow",a:"Necesito un día de recuperación mañana"},

{q:"We are moving to Spain in the future",a:"Nos mudaremos a España en el futuro"},
{q:"I am improving my Spanish every day",a:"Estoy mejorando mi español cada día"},
{q:"I understand much more now",a:"Ahora entiendo mucho más"},
{q:"I still make mistakes",a:"Todavía cometo errores"},
{q:"Practice makes a big difference",a:"La práctica marca una gran diferencia"},

{q:"The garage door is not opening",a:"La puerta del garaje no se abre"},
{q:"The electrician will come on Monday",a:"El electricista vendrá el lunes"},
{q:"The estimate seems reasonable",a:"El presupuesto parece razonable"},
{q:"How long will the repair take?",a:"¿Cuánto tiempo durará la reparación?"},
{q:"We need to replace the boiler",a:"Necesitamos sustituir la caldera"},

{q:"The administrator replied this morning",a:"El administrador respondió esta mañana"},
{q:"I received the meeting minutes",a:"Recibí el acta de la reunión"},
{q:"The community fee has increased",a:"La cuota de comunidad ha aumentado"},
{q:"The work was approved unanimously",a:"Las obras fueron aprobadas por unanimidad"},
{q:"When is the next owners meeting?",a:"¿Cuándo es la próxima junta de propietarios?"},

{q:"I need a copy of the document",a:"Necesito una copia del documento"},
{q:"Can you help me fill in this form?",a:"¿Puede ayudarme a rellenar este formulario?"},
{q:"The office is only open in the morning",a:"La oficina solo abre por la mañana"},
{q:"I have all the required documents",a:"Tengo todos los documentos necesarios"},
{q:"The process takes several weeks",a:"El trámite tarda varias semanas"},

{q:"The doctor recommended some tests",a:"El médico recomendó algunas pruebas"},
{q:"I am feeling much better today",a:"Me siento mucho mejor hoy"},
{q:"The results were normal",a:"Los resultados fueron normales"},
{q:"I need to collect my medication",a:"Necesito recoger mi medicación"},
{q:"I have private health insurance",a:"Tengo seguro médico privado"},

{q:"I'd like a coffee with milk",a:"Quisiera un café con leche"},
{q:"Could I have some water please?",a:"¿Me trae agua por favor?"},
{q:"Everything was very good",a:"Todo estuvo muy bueno"},
{q:"Do you have today's menu?",a:"¿Tiene el menú del día?"},
{q:"Can we sit outside?",a:"¿Podemos sentarnos fuera?"},

{q:"The train leaves in ten minutes",a:"El tren sale en diez minutos"},
{q:"Where is the ticket machine?",a:"¿Dónde está la máquina de billetes?"},
{q:"I only have hand luggage",a:"Solo llevo equipaje de mano"},
{q:"The flight was delayed",a:"El vuelo se retrasó"},
{q:"What time do we arrive?",a:"¿A qué hora llegamos?"},

{q:"I need to transfer some money",a:"Necesito transferir dinero"},
{q:"My card is not working",a:"Mi tarjeta no funciona"},
{q:"Can I withdraw cash here?",a:"¿Puedo sacar efectivo aquí?"},
{q:"The payment was rejected",a:"El pago fue rechazado"},
{q:"The transfer has been completed",a:"La transferencia se ha completado"},

{q:"The weather is perfect today",a:"Hoy hace un tiempo perfecto"},
{q:"It is much warmer than yesterday",a:"Hace mucho más calor que ayer"},
{q:"It might rain later",a:"Puede que llueva más tarde"},
{q:"The forecast looks good",a:"El pronóstico parece bueno"},
{q:"The wind is very strong today",a:"Hoy hace mucho viento"},

{q:"I am trying to improve my Spanish",a:"Estoy intentando mejorar mi español"},
{q:"Could you speak more slowly?",a:"¿Podría hablar más despacio?"},
{q:"I understand but I cannot explain it",a:"Entiendo pero no puedo explicarlo"},
{q:"What does this word mean?",a:"¿Qué significa esta palabra?"},
{q:"I am learning something new every day",a:"Estoy aprendiendo algo nuevo cada día"},

{q:"We are thinking about moving here",a:"Estamos pensando en mudarnos aquí"},
{q:"This area is very quiet",a:"Esta zona es muy tranquila"},
{q:"The neighbours are very friendly",a:"Los vecinos son muy amables"},
{q:"The cost of living is reasonable",a:"El coste de vida es razonable"},
{q:"We really enjoy living here",a:"Disfrutamos mucho viviendo aquí"} 


  
];
