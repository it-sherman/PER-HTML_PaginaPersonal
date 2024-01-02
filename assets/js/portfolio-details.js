$(document).ready(function() {
    option = getQuery("show");
    showProyect();
});

/* $(document).on('click', '.play-video', function() {
    option = getQuery("show");
    $('#pd_ifvideo').attr('src', ytlink[option]);
    //$('#video-viewer iframe').attr('src', ytlink[option]);
    //$('#video-title').text($(this).data('title'));
    //$('#video-description').text($(this).data('description'));
}); */

var option = "";
let names = ["HelpIT", "Inspect", "Siniestro", "Inspect", "QRZone", "Uniformes",
    "Cartas DBZ", "Timbrado Externo", "Respalda BD", "Terminar Procesos", "Inventario Excel", "Inventario GSheet"
];
let ytlink = ['https://youtu.be/R5DAi16NnNY', 'https://youtu.be/QzXnnm_iKQg', 'https://youtu.be/JhUum-mqpwg',
    'https://youtu.be/Ksq75-0uTdE', 'https://youtu.be/RLs6_uK03lU', 'https://youtu.be/ijJF4M5p4D8',
    'https://youtu.be/GdzYEhBzrrs', 'https://youtu.be/zFDFSCjwAV8',
    'https://youtu.be/b4vvFzYNJ_U', 'https://youtu.be/JS7H5Z6npCA',
    'https://youtu.be/7o182bZuFpE', 'https://youtu.be/8Yi4AxFIOSg'
];
let category = ["Web", "Web", "Web", "Movil", "Movil", "Movil", "Desktop", "Desktop", "SQL", "SQL", "Otros", "Otros"];
let dates = ["Junio - 2019", "Junio - 2019", "Febrero - 2020", "Junio - 2019", "Enero - 2020", "Enero - 2020", "Julio - 2021",
    "Octubre - 2020", "Agosto - 2020", "Julio - 2020", "Noviembre - 2019", "Abril - 2021"
];
let desc = ["Sistema de tickets para soporte de IT.<br>Tiene otros módulos de ayuda en general; menú de comida semanal, generación de memos, registro de soluciones de it, evaluación de personal para aumento de sueldo, entre otros.<br>Hecho con PHP y Javascript.<br>NOTA: Contribuí si acaso en un 20%, pero después tuve que hacer modificaciones y agregar módulos por lo que aprendí como funciona.",
    "Sistema complementario de la app móvil con el mismo nombre. Aquí se pueden ver los resultados de las inspecciones tomadas en todas las yardas de la empresa en México y Estados Unidos.<br>Tiene otros módulos que van de la mano con el tema de inspecciones y rendimiento de unidades.<br>Hecho con PHP y Javascript.",
    "Sistema -incompleto- para la captura, seguimiento y visión de siniestros automovilísticos. No ha sido implementado pero el modulo fuerte esta listo y funcionando correctamente. <br>Hecho en PHP y Javascript.",
    "Aplicación móvil para Android con la función de realizar inspecciones de tractos y trailers. Se usa en seis yardas, entre México y Estados Unidos.<br>Hecho con Java, SQLite y utiliza Web Services de PHP para envió y solicitud de información.",
    "Aplicación móvil para Android con la función de leer códigos QR repartidos a lo largo de la yarda, de esa forma, los guardias comprueban que han pasado a inspeccionar la zona.<br>Hecho con Java, SQLite y PHP.",
    "Aplicación móvil para Android con la función de saber que uniforme toca en que día… la parte buena de ser flojo supongo.<br>Hecha con Kotlin.",
    "También conocido como “Evitando pensar en el coronavirus”, se trata de una aplicación de escritorio que con los recursos necesarios genera cartas de Dragon Ball Z hasta la saga de Buu.<br>Por ahora son 140 cartas, imagina si tuvieras que hacerlas a mano…",
    "Programa de escritorio hecho con C# que integra a un proveedor externo de timbrados.<br>Contribuí si acaso en un 20%, pero después tuve que hacer correcciones y agregar módulos por lo que aprendí como funciona.",
    "Método efectivo para realizar respaldos de bases de datos diariamente de forma automática.",
    "Método efectivo, aunque circunstancial para tumbar procesos de aplicaciones que usen la base de datos hosteada donde se ejecuta el script. ",
    "Automatización de captura en Excel, en su momento me enfrente a una forma… interesante de hacer el inventario. Lo hice a mano una vez y decidí que debía mejorarlo… al menos para mí.",
    "Efectiva forma de realizar inventario si no se tiene una mejor. Con seis personas y más de 2500 piezas por contar, se pudo terminar en solo tres horas incluyendo ajustes."
];

function getQuery(q) {
    return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
}

function showProyect() {
    if (option != null) {
        $('#pd_h2name').html(names[option]);
        document.getElementById('pd_if' + option).style.display = 'inline';
        /* $('#pd_img1').attr('src', 'assets/img/portfolio/pd/pd' + option + '-1.jpg');
        $('#pd_img2').attr('src', 'assets/img/portfolio/pd/pd' + option + '-2.jpg');
        $('#pd_img3').attr('src', 'assets/img/portfolio/pd/pd' + option + '-3.jpg'); */
        $('#pd_licat').html('<strong>Categoria</strong>: ' + category[option]);
        $('#pd_date').html('<strong>Fecha</strong>: ' + dates[option]);
        $('#pd_demons').html('<strong>Demostracion</strong>: <a href="' + ytlink[option] + '" target="_blank"><br>' + ytlink[option] + '</a>');
        $('#pd_pdesc').html(desc[option]);
    }
}