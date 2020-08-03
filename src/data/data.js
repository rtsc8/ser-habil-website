const pageData = {
  home: {
    sections: [
      {
        component: 'navigation',
        image: {
          src: 'logo.png',
          alt: 'Logo Ser habil',
        },
        logoUrl: 'https://www.google.com',
        navLinks: [
          {
            text: 'inicio',
            url: 'https://www.google.com',
          },
          {
            text: 'eventos',
            url: 'https://www.google.com',
          },
          {
            text: 'fundación',
            url: 'https://www.google.com',
          },
          {
            text: 'contacto',
            url: 'https://www.google.com',
          },
        ],
        socialMedia: {
          text: 'Encuéntranos en nuestras redes sociales:',
          socialLinks:[
            {
              image: {
                src: 'facebook-icon.png',
                alt: 'Facebook'
              },
              url:'https://www.facebook.com'
            },
            {
              image: {
                src: 'instagram-icon.png',
                alt: 'instagram'
              },
              url:'https://www.instagram.com'
            }

          
          ]
        },
        
      },
      {
        component: 'hero',
        title: '¡Hola! Esto es Ser Hábil',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: '',
            alt: 'playground',
          },
          {
            src: '',
            alt: 'kids',
          },
        ],
        backgroundImg: '',
      },
      {
        component: 'scroll-indicator',
        image: {
          src: 'arrow-scroll.png',
          alt: 'scroll page',
        },
        scrollTo: 'scroll',
        text: 'Haz scroll para continuar',
      },
      {
        component: 'programs',
        title: 'Nuestros programas',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: 'medioAcuatico.jpg',
            alt: 'medio acuático',
            text: 'Medio acuático y estimulación terapéutica',
          },
          {
            src: 'iniciacion.jpg',
            alt: 'iniciación al deporte',
            text: 'Iniciación y formación deportiva',
          },
          {
            src: 'estiramiento.jpg',
            alt: 'entrenamiento deportivo',
            text: 'Entrenamiento deportivo y actividad física',
          },
          {
            src: 'padres.jpg',
            alt: 'padres y madres',
            text: 'Grupo de padres y madres',
          },
        ],
      },
      {
        component: 'scenarios',
        title: 'Escenarios que utilizamos',
        heading: 'Piscina de actividades Sub-acuáticas',
        text: 'CDPD',
        images: [
          {
            src: '',
            alt: 'Piscina',
          },
          {
            src: '',
            alt: 'Piscina Escuela',
          },
          {
            src: '',
            alt: 'Basketball',
          },
        ],
      },
      {
        component: 'events',
        title: 'Evento Destacado',
        images: [
          {
            src: '',
            alt: 'Piscina',
            name: 'Catalina López',
            title: 'Campeona nacional de natación',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
          {
            src: '',
            alt: 'Piscina',
            name: 'Catalina López',
            title: 'Campeona nacional de natación',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
        ],
      },
      {
        component: 'footer',
        logo: {
          href: 'http://www.google.com',
          image: {
            src: 'footer-logo.png',
            alt: 'SER HABIL',
          },
        },
        items: [
          {
            text: 'Eventos',
            href: 'http://www.google.com',
          },
          {
            text: 'Fundación',
            href: 'http://www.google.com',
          },
          {
            text: 'Contacto',
            href: 'http://www.google.com',
          },
        ],
        socialText: 'Encuentrános en nuestras redes sociales:',
        socialLinks: [
          {
            href: 'https://www.facebook.com',
            icon: {
              src: 'facebook-icon.png',
              alt: 'facebook'
            },
          },
          {
            href: 'https://www.instagram.com',
            icon: {
              src: 'instagram-icon.png',
              alt: 'instagram'
            }
          },
        ],
      },
    ],
  },
  contact: {
    sections: [
      {
        name: 'contactHero',
        title: 'Unete a nosotros',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: '',
            alt: 'girl',
          },
          {
            src: '',
            alt: 'cellphome',
          },
        ],
      },
      {
        component: 'scroll-indicator',
        image: {
          src: 'arrow-scroll.png',
          alt: 'scroll page',
        },
        scrollTo: 'scroll',
        text: 'Haz scroll para continuar',
      },
      {
        name: 'contactUs',
        title: 'Ponte en contacto con nosotros',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        address: 'Carrera 52 No. 67A-15, Torre C, Piso 7, Ruta N',
        city: 'Medellin',
        country: 'Colombia',
        telephones: ['+57 123 456 7890', '+57 123 456 7890'],
        emails: ['hola@serhabil.com', 'hola@serhabil.com'],
      },
    ],
  },
  events: {
    sections: [
      {
        name: 'event',
        title: 'Dia de campo',
        image: '',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        date: 'Febrero, 12, 2020',
        hour: '3:30 p.m.',
        place: 'Fundación Ser Hábil, sala 3',
        outstandingFlag: true,
      },
      {
        component: 'scroll-indicator',
        image: {
          src: 'arrow-scroll.png',
          alt: 'scroll page',
        },
        scrollTo: 'scroll',
        text: 'Haz scroll para continuar',
      },
      {
        name: 'event',
        title: 'Curso de pintura con acuarelas',
        image: '',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        date: 'Febrero, 12, 2020',
        hour: '3:30 p.m.',
        place: 'Fundación Ser Hábil, sala 3',
        outstandingFlag: false,
      },
      {
        name: 'event',
        title: 'Curso de pintura con acuarelas',
        image: '',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        date: 'Febrero, 12, 2020',
        hour: '3:30 p.m.',
        place: 'Fundación Ser Hábil, sala 3',
        outstandingFlag: false,
      },
    ],
  },
  fundacion: {
    sections: [
      {
        name: 'fundacion',
        hero: {
          image1: '',
          image2: '',
          title: 'Acerca de la fundación',
        },
        text1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        text2:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        text3:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        bottomImage: '',
      },
    ],
  },
  navigation: {
    items: [
      {
        text: 'Inicio',
        href: 'index',
      },
      {
        text: 'Eventos',
        href: 'eventos',
      },
      {
        text: 'Fundacion',
        href: 'fundacion',
      },
      {
        text: 'Contacto',
        href: 'contacto',
      },
    ],
    socialText: 'Encuentranos en nuestras redes sociales',
    socialLinks: [
      {
        href: 'instagram.com',
        icon: 'instagram',
      },
      {
        href: 'facebook.com',
        icon: 'facebook',
      },
    ],
  },
  footer: {
    items: [
      {
        text: 'Eventos',
        href: 'eventos',
      },
      {
        text: 'Fundacion',
        href: 'fundacion',
      },
      {
        text: 'Contacto',
        href: 'contacto',
      },
    ],
    socialText: 'Encuentranos en nuestras redes sociales',
    socialLinks: [
      {
        href: 'instagram.com',
        icon: 'instagram',
      },
      {
        href: 'facebook.com',
        icon: 'facebook',
      },
    ],
  },
};

// eslint-disable-next-line import/prefer-default-export
export { pageData };
