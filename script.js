document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    // Selector de idioma
    const selector = document.createElement('div');
    selector.className = 'selector-idioma';
    selector.innerHTML = `
        <label for="idioma" aria-label="Seleccionar idioma">🌐</label>
        <select id="idioma" aria-label="Seleccionar idioma">
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    `;
    nav.appendChild(selector);

    // Textos de la página
    const textos = [
        ['nav a:nth-child(1)', 'Historia', 'Our Story'],
        ['nav a:nth-child(2)', 'La Finca', 'The Farm'],
        ['nav a:nth-child(3)', 'Nuestro Café', 'Our Coffee'],
        ['nav a:nth-child(4)', 'Galería', 'Gallery'],
        ['nav a:nth-child(5)', 'Contacto', 'Contact'],
        ['.ubicacion', 'DESDE LAS MONTAÑAS DE JINOTEGA · NICARAGUA', 'FROM THE MOUNTAINS OF JINOTEGA · NICARAGUA'],
        ['.hero p', 'Cultivado con pasión.<br>Compartido con orgullo.', 'Grown with passion.<br>Shared with pride.'],
        ['.boton', 'Conoce Nuestra Historia', 'Discover Our Story'],
        ['.historia .subtitulo', 'NUESTRA HISTORIA', 'OUR STORY'],
        ['.historia h2', 'Una finca familiar en las montañas de Jinotega', 'A family farm in the mountains of Jinotega'],
        ['.historia p:nth-of-type(1)', 'Loma Azul Coffee nace en Santa Martha de Loma Azul,\n            municipio de San Rafael del Norte, Jinotega, Nicaragua.', 'Loma Azul Coffee is born in Santa Martha de Loma Azul,\n            in the municipality of San Rafael del Norte, Jinotega, Nicaragua.'],
        ['.historia p:nth-of-type(2)', 'Somos una familia dedicada a producir café de alta calidad,\n            cuidando cada detalle desde la floración hasta la taza.', 'We are a family dedicated to producing high-quality coffee,\n            caring for every detail from blossom to cup.'],
        ['.historia p:nth-of-type(3)', 'Cada lote refleja el esfuerzo, la dedicación\n            y el orgullo de producir café en nuestras montañas.', 'Every lot reflects the effort, dedication,\n            and pride of producing coffee in our mountains.'],
        ['#finca .titulo-seccion span', 'LA FINCA', 'THE FARM'],
        ['#finca .titulo-seccion h2', 'El origen de cada taza', 'The origin of every cup'],
        ['#finca .titulo-seccion p', 'Ubicada en Santa Martha de Loma Azul,\n            San Rafael del Norte, Jinotega.', 'Located in Santa Martha de Loma Azul,\n            San Rafael del Norte, Jinotega.'],
        ['#finca .card:nth-child(1) h3', '📍 Ubicación', '📍 Location'],
        ['#finca .card:nth-child(2) h3', '⛰️ Altitud', '⛰️ Altitude'],
        ['#finca .card:nth-child(3) h3', '🌱 Variedad', '🌱 Variety'],
        ['#finca .card:nth-child(4) h3', '💧 Proceso', '💧 Process'],
        ['#cafe .titulo-seccion span', 'NUESTRO CAFÉ', 'OUR COFFEE'],
        ['#cafe .titulo-seccion h2', 'Del árbol a tu taza', 'From tree to cup'],
        ['#cafe .titulo-seccion p', 'Cada etapa del proceso se realiza con dedicación para ofrecer un café\n            que refleje el origen y la calidad de Loma Azul Coffee.', 'Every stage of the process is carried out with care to offer a coffee\n            that reflects the origin and quality of Loma Azul Coffee.'],
        ['#cafe .timeline-item:nth-child(1) h3', '🌸 Floración', '🌸 Blossom'],
        ['#cafe .timeline-item:nth-child(1) p', 'Todo comienza con la flor del café.', 'It all begins with the coffee blossom.'],
        ['#cafe .timeline-item:nth-child(2) h3', '🍒 Cosecha', '🍒 Harvest'],
        ['#cafe .timeline-item:nth-child(2) p', 'Seleccionamos únicamente las cerezas maduras.', 'We select only ripe coffee cherries.'],
        ['#cafe .timeline-item:nth-child(3) h3', '💧 Beneficiado', '💧 Processing'],
        ['#cafe .timeline-item:nth-child(3) p', 'Procesamos el café con método lavado.', 'We process the coffee using the washed method.'],
        ['#cafe .timeline-item:nth-child(4) h3', '☀️ Secado', '☀️ Drying'],
        ['#cafe .timeline-item:nth-child(4) p', 'El secado lento conserva la calidad del grano.', 'Slow drying preserves the quality of the bean.'],
        ['#cafe .timeline-item:nth-child(5) h3', '🔥 Tueste', '🔥 Roasting'],
        ['#cafe .timeline-item:nth-child(5) p', 'Buscamos resaltar las mejores características del café.', 'We seek to highlight the coffee’s finest characteristics.'],
        ['#cafe .timeline-item:nth-child(6) h3', '☕ Tu taza', '☕ Your cup'],
        ['#cafe .timeline-item:nth-child(6) p', 'Finalmente disfrutas una taza con origen y trazabilidad.', 'Finally, you enjoy a cup with origin and traceability.'],
        ['#galeria .titulo-seccion span', 'GALERÍA', 'GALLERY'],
        ['#galeria .titulo-seccion h2', 'Conoce nuestra finca', 'Discover our farm'],
        ['#galeria .titulo-seccion p', 'Algunas imágenes de Loma Azul Coffee y del entorno donde cultivamos nuestro café.', 'A few images of Loma Azul Coffee and the surroundings where we grow our coffee.'],
        ['#contacto .titulo-seccion span', 'CONTACTO', 'CONTACT'],
        ['#contacto .titulo-seccion h2', 'Gracias por visitar Loma Azul Coffee', 'Thank you for visiting Loma Azul Coffee'],
        ['#contacto .titulo-seccion p', 'Gracias por conocer nuestra historia.\n\n            Esperamos que cada taza represente el esfuerzo,\n            la dedicación y el amor por el café cultivado en nuestras montañas.', 'Thank you for learning about our story.\n\n            We hope every cup represents the effort,\n            dedication, and love behind the coffee grown in our mountains.'],
        ['#contacto .contacto-card:nth-child(1) h3', '📍 Ubicación', '📍 Location'],
        ['#contacto .contacto-card:nth-child(2) h3', '🌱 Variedad', '🌱 Variety'],
        ['#contacto .contacto-card:nth-child(3) h3', '💧 Proceso', '💧 Process'],
        ['footer .footer-contenido p:nth-of-type(1)', 'Cultivado con pasión. Compartido con orgullo.', 'Grown with passion. Shared with pride.']
    ];

    const elementos = textos.map(([selector, es, en]) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        el.dataset.es = es;
        el.dataset.en = en;
        return el;
    }).filter(Boolean);

    const cambiarIdioma = (idioma) => {
        elementos.forEach(el => {
            el.innerHTML = el.dataset[idioma];
        });
        document.documentElement.lang = idioma;
        localStorage.setItem('lomaAzulIdioma', idioma);
        selector.querySelector('select').value = idioma;
    };

    selector.querySelector('select').addEventListener('change', (e) => {
        cambiarIdioma(e.target.value);
    });

    // Idioma guardado; si es la primera visita, usa el idioma del navegador.
    const guardado = localStorage.getItem('lomaAzulIdioma');
    const idiomaInicial = guardado || (navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');
    cambiarIdioma(idiomaInicial);

    // CSS del selector para mantenerlo integrado con el diseño actual.
    const style = document.createElement('style');
    style.textContent = `
        .selector-idioma{display:flex;align-items:center;gap:5px;margin-left:22px;flex-shrink:0;}
        .selector-idioma label{font-size:17px;line-height:1;color:#fff;cursor:pointer;}
        .selector-idioma select{appearance:none;-webkit-appearance:none;border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.10);color:#fff;border-radius:20px;padding:7px 26px 7px 10px;font:600 12px 'Poppins',sans-serif;cursor:pointer;outline:none;}
        .selector-idioma select option{background:#2d2015;color:#fff;}
        .selector-idioma select:focus{border-color:#d6a45a;}
        @media(max-width:900px){.selector-idioma{margin-left:0;margin-top:4px;}.selector-idioma select{padding:6px 22px 6px 9px;}}
    `;
    document.head.appendChild(style);
});