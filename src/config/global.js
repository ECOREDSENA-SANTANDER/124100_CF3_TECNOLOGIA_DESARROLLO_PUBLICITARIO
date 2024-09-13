export default {
  global: {
    componenteFormativo: 'Identidad corporativa',
    descripcionCurso:
      'Es común que se confundan la identidad y la imagen corporativa o se piense que son lo mismo, pero en realidad existen diferencias entre ambas y es muy importante tenerlas claras. La imagen, a diferencia de la identidad, no se puede captar a través de los sentidos, es más bien un factor emocional; es la percepción que se tiene de una empresa, producto o servicio y que hace que el mercado desee o no acercarse a esa marca.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La identidad corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antecedentes de la identidad corporativa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto de Identidad corporativa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Concepto de imagen corporativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identidad visual',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Construcción de la identidad corporativa',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de software de diseño vectorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Software de diseño vectorial en el mercado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo de Ilustrador',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manual de identidad corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura básica de un manual de identidad corporativa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Medios de entrega y difusión',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Construcción de la identidad corporativa',
      referencia: 'Arias, M. (2020). Formato modelo brief de primer contacto.',
      tipo: 'Documento Word',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Construcción de la identidad corporativa',
      referencia: 'Arias, M. (2020). Modelo brief de primer contacto.',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      tema: 'Construcción de la identidad corporativa',
      referencia: 'Arias, M. (2020). Formato modelo brief de campaña táctica.',
      tipo: 'Documento Word',
      descarga: '/downloads/prueba.pdf',
    },
    {
      tema: 'Construcción de la identidad corporativa',
      referencia: 'Arias, M. (2020). Modelo brief de campaña táctica.',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      tema: 'Manual de identidad corporativa',
      referencia: 'Fernández, R. (2009). Segmentación de mercados.',
      tipo: 'Libro digital',
      descarga: '/downloads/prueba.pdf',
    },
    {
      tema: 'Manejo de Illustrator',
      referencia: 'Adobe Illustrator. (2015). Guía ACA Illustrator SPA.',
      tipo: 'Documento PDF',
      link:
        'https://ecored-sena.github.io/522306_CF3_TECNOLOGIA_DESARROLLO_PUBLICITARIO//downloads/Guia%20ACA%20Illustrator%20SPA.pdf',
    },
    {
      tema: 'Concepto de imagen corporativa',
      referencia: 'Orozko, M. (s. f.). 13 Manuales de Marca para Inspirarte.',
      tipo: 'Página web',
      link: 'https://sirope.es/manual-de-marca-inspirar/',
    },
  ],
  glosario: [
    {
      termino: 'Carátula',
      significado:
        'diseño editorial. Tapa o cara principal de una publicación. La funda de un disco o la cubierta de un libro. Interior: reverso o cara posterior de la tapa o carátula.',
    },
    {
      termino: 'Color',
      significado:
        'característica propia o adquirida de una superficie, mediante la cual, al incidir los rayos de luz blanca sobre ella, adquiere esta una apariencia visual determinada.',
    },
    {
      termino: 'Eslogan <em>(Slogan)</em>',
      significado:
        'término de origen inglés utilizado para recordar una marca o un producto, por medio de una frase de fácil memorización, en los mensajes publicitarios.',
    },
    {
      termino: 'Identidad corporativa',
      significado:
        'el conjunto de características específicas y personales de una entidad, las cuales crean una forma perceptible y memorizable de sí misma y la diferencian de las demás entidades.',
    },
    {
      termino: 'Logotipo',
      significado:
        'diseño en el cual las letras componentes del escrito encuentran uniones especiales o formas particulares más características. Marca en la cual la palabra funciona como imagen (Veraldi- Scherman, 2004).',
    },
    {
      termino: 'Manual de Identidad Corporativa',
      significado:
        'conjunto de normas que regulan el uso y aplicación de la identidad corporativa en el plano del diseño.',
    },
    {
      termino: 'Símbolo',
      significado:
        'en la identidad visual, el símbolo es un grafismo distintivo que posee tres clases de funciones: simbólica, identificadora y estética. Se llama símbolo porque: “es un signo convencional, que está en el lugar de otra cosa no presente, a la cual representa”. Esta “cosa no presente” es el propio grupo y cada una de las entidades que lo integran.',
    },
    {
      termino: 'Tipografía',
      significado:
        'representación gráfica del lenguaje. Disciplina que rige el diseño de caracteres unificados por propiedades visuales uniformes. Estudia las diferentes categorías de letras, las familias, los recursos, su legibilidad.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe Illustrator. (2015). Guía ACA Illustrator SPA. Adobe.',
      link: 'https://helpx.adobe.com/co/illustrator/user-guide.html',
    },
    {
      referencia: 'Adobe. (2010). Manual de Identidad Corporativa. Adobe.',
      link: 'https://express.adobe.com/page/xXUs3z85NhNaq/',
    },
    {
      referencia:
        'Alcaldía de Medellín. (2020). Libro de Marca Municipio de Medellín. https://n9.cl/y5j7',
      link:
        'https://www.medellin.gov.co/irj/go/km/docs/pccdesign/medellin/Temas/NuestroGobierno/Publicaciones/Shared%20Content/Documentos/2020/Librodemarca-AlcaldiaMedelliinV1.pdf',
    },
    {
      referencia:
        'Animal Planet. (2008). International Off-Air Brand Guidelines. https://cutt.ly/byVP1Sd',
      link: 'https://logoblink.com/img/2009/01/animal_planet1.pdf',
    },
    {
      referencia:
        'Currás Pérez, R. (2010). Identidad e imagen corporativas: revisión conceptual e interrelación.',
      link: 'http://192.100.164.85/handle/20.500.12249/815',
    },
    {
      referencia:
        'Fernández, J. C. A. (2016). Comunicación y marketing. Esic editorial.',
      link: '',
    },
    {
      referencia: 'Fender. (2015). The Fender Brand. https://cutt.ly/syVA783',
      link:
        'https://assets.spotlight.fender.com/styleguides/Fender_Brand_Guide.pdf',
    },
    {
      referencia: 'Foursquare. (2011). Brand Book. https://cutt.ly/IyVAGX6',
      link:
        'https://playfoursquare.s3.amazonaws.com/press/foursquare-brandbook.pdf',
    },
    {
      referencia: 'Labarta, F. (2014). Guía para Crear Mensajes y Contenidos.',
      link:
        'https://www.amazon.es/Mensajes-Contenidos-Publicitarios-Economia-Empresa/dp/8416100098',
    },
    {
      referencia: 'Llopis, E. (2015). Crear la Marca Global. ESIC Editorial.',
      link:
        'https://books.google.com.co/books?id=1cFuCAAAQBAJ&pg=PA57&hl=es&source=gbs_toc_r&cad=2#v=onepage&q&f=false',
    },
    {
      referencia:
        'Orozko. M. (s. f.). 13 Manuales de Marca para Inspirarte. Sirope. Consultado el 04 de junio de 2020.',
      link: 'https://sirope.es/manual-de-marca-inspirar/',
    },
    {
      referencia:
        'Pepsi. (2012). Live for Now. Brand Guidelines. Work in Progress. https://cutt.ly/kyVP6gZ',
      link:
        'http://www.refinariadesign.com.br/manuais/PEPSI/brandbook-manual-de-identidade-pepsi-2012.pdf',
    },
    {
      referencia:
        'Pinterest. (2015). Pinterest Brand Guidelines for Partners. https://cutt.ly/xyVALOi',
      link:
        'https://s.pinimg.com/sub/business/guides/pinterest-brand-guidelines-en-02.pdf',
    },
    {
      referencia:
        'Reimers Design. (s. f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020. https://cutt.ly/VyDzeWh',
      link:
        'http://losqueno.com/wp-content/uploads/2015/04/DICCIONARIO-DISE--O.pdf',
    },
    {
      referencia:
        'Sánchez, G. (2020). Glosario Gráfico. https://cutt.ly/WyVO5FW',
      link: 'http://www.glosariografico.com/categoria_tipografia?page=4',
    },
    {
      referencia: 'Twitter. (2020). Brand Guidelines. https://cutt.ly/byVAuhe ',
      link: 'https://about.x.com/en/who-we-are/brand-toolkit',
    },
    {
      referencia: 'Unicef. (2008). Brand Tool Kit. Unicef.',
      link:
        'https://www.unicef.org/jordan/media/7166/file/ANNEX_G_-_Brand_book_V3.1.pdf',
    },
    {
      referencia:
        'Usabilitypost. (2019). A Guide to Choosing Colors for Your Brand. https://cutt.ly/EyVPzjx',
      link:
        'https://usabilitypost.com/2008/09/29/a-guide-to-choosing-colors-for-your-brand/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Actividad didactica',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
