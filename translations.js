/*
 * Artium Trio — i18n dictionaries (CA / EN / ES)
 * ------------------------------------------------
 * Keys map to `data-i18n` (textContent) and `data-i18n-html` (innerHTML)
 * attributes in index.html. Testimonial couple names and venue place
 * names are kept identical across languages; only quotes and month names
 * are localised.
 */
const translations = {
  /* ============================ CATALÀ ============================ */
  ca: {
    meta: {
      title: "Artium Trio - Música per a Casaments a Catalunya | Violí, Violoncel i Piano",
      description: "Artium Trio — Trio de violí, violoncel i piano per a casaments premium a Catalunya. 12 anys d'experiència, més de 100 casaments. Demaneu el dossier.",
      ogTitle: "Artium Trio — Música que enamora",
      ogDescription: "Trio de violí, violoncel i piano per a casaments a Catalunya. Música en directe personalitzada per al vostre dia."
    },
    nav: {
      home: "Inici",
      about: "Sobre Nosaltres",
      packages: "Propostes",
      testimonials: "Testimonis",
      videos: "Escolta'ns",
      faq: "Preguntes",
      contact: "Contacte"
    },
    hero: {
      title: "Posem la banda sonora al dia que recordareu per sempre",
      subtitle: "Trio de violí, violoncel i piano per a esdeveniments",
      ctaPrimary: "Escolta'ns",
      ctaSecondary: "Consulta la vostra data",
      proof: "5,0 · +100 casaments · 12 anys tocant junts"
    },
    about: {
      title: 'Coneix <span class="text-artium-red">Artium Trio</span>',
      subtitle: "Som el Bernat, l'Antoni i el Guillem. Traduïm la vostra història al violí, al violoncel i al piano.",
      violinTitle: "Violí",
      violinDesc: "Melodies que toquen el cor i creen moments màgics en cada interpretació.",
      pianoTitle: "Piano",
      pianoDesc: "Harmonies perfectes que complementen i eleven cada moment musical.",
      celloTitle: "Violoncel",
      celloDesc: "Profunditat i elegància que aporten calidesa i emotivitat única.",
      storyTitle: "La nostra història junts",
      story1: "Des de fa més de 10 anys, hem perfeccionat el nostre art musical per oferir interpretacions que van des de la música clàssica més elegant fins a les cançons contemporànies més populars.",
      story2: "Cada casament és únic, i per això adaptem el nostre repertori als gustos i preferències de cada parella, creant bandes sonores personalitzades per al seu dia més especial.",
      story3: "Ens han arribat a fer peticions d'allò més variades al llarg dels anys: des d'himnes d'equips de futbol, l'himne de la Champions, fins a adaptacions de cançons escrites per familiars. I fins a dia d'avui no hi ha hagut cap proposta que no haguem pogut dur a terme amb èxit.",
      stat1: "Casaments realitzats",
      stat2: "Anys d'experiència",
      stat3: "Satisfacció"
    },
    packages: {
      title: 'Les nostres <span class="text-artium-red">propostes</span>',
      subtitle: "Acompanyem cada moment del vostre dia amb música en directe adaptada a la vostra història. Cada proposta es personalitza per a vosaltres.",
      ceremonyTitle: "La Cerimònia",
      ceremonyDesc: "Entre 5 i 8 peces triades amb vosaltres per acompanyar l'entrada, els moments clau i la sortida. Us assessorem a l'hora d'escollir el repertori perquè cada moment tingui la seva banda sonora.",
      welcomeTitle: "El Welcome",
      welcomeDesc: "30 minuts de música en directe mentre arriben els convidats. Un preludi elegant que marca el to de tota la celebració des del primer moment.",
      aperitifTitle: "L'Aperitiu",
      aperitifDesc: "90 minuts de música durant l'aperitiu, amb un repertori que s'adapta a l'ambient de la celebració — més íntim al principi, més festiu a mesura que avança la trobada.",
      combineTitle: "Combineu els moments que necessiteu",
      combineBody: "Cada casament és únic. Us ajudem a triar la combinació que millor s'adapta al vostre dia, i us l'adaptem a mida. Escriviu-nos per parlar del vostre projecte i us enviem el dossier complet amb totes les propostes.",
      ctaTestimonials: "Llegeix els testimonis",
      ctaTalk: "Parlem del vostre dia"
    },
    testimonials: {
      title: 'El que diuen <span class="text-artium-red">les nostres parelles</span>',
      subtitle: "Cada casament és únic i especial. Aquestes són les paraules d'algunes de les parelles que han confiat en nosaltres per fer del seu dia alguna cosa inoblidable.",
      badge: "5,0 de mitjana a bodas.net",
      t1Quote: "Artium Trio va fer que el nostre casament fos absolutament màgic. La música durant la cerimònia ens va emocionar fins a les llàgrimes, i durant el còctel van crear l'ambient perfecte. Tots els nostres convidats van quedar encantats!",
      t1Name: "Maria i Carles",
      t1Venue: "Jardí Botànic Marimurtra · Juny 2025",
      t2Quote: "Professionals increïbles. Van adaptar totes les nostres cançons favorites i el resultat va ser espectacular. La versió de 'Marry Me' de Bruno Mars amb violí, violoncel i piano va ser el moment més emotiu de la cerimònia.",
      t2Name: "Anna i Miquel",
      t2Venue: "Masia Rural a Roses · Juny 2025",
      t3Quote: "Des del primer contacte fins al darrer acord, tot va ser perfecte. La seva música va acompanyar cada moment important del nostre dia. Sense dubte, una de les millors decisions que vam prendre per al nostre casament.",
      t3Name: "Laura i Javi",
      t3Venue: "Finca Port Verd (Mallorca) · Juliol 2025",
      t4Quote: "Buscàvem alguna cosa especial i diferent per al nostre casament a la platja. Artium Trio va superar totes les nostres expectatives. La combinació d'instruments va ser perfecta per a l'entorn i va crear una atmosfera única.",
      t4Name: "Cristina i Alejandro",
      t4Venue: "Garriga de Castelladral · Juliol 2025",
      t5Quote: "Van acceptar tocar una cançó que havia compost el meu pare per a nosaltres i la van adaptar d'una manera preciosa. Vam plorar tots! La professionalitat i la sensibilitat d'Artium Trio són incomparables.",
      t5Name: "Marta i Pau",
      t5Venue: "Can Ribas (Montblanc) · Setembre 2025",
      t6Quote: "La comunicació amb ells va ser excel·lent des del primer moment. Van entendre perfectament el que volíem i el dia del casament tot va sortir immillorable. Els nostres convidats encara ens en parlen!",
      t6Name: "Núria i Marc",
      t6Venue: "Mas Terrats (Cornudella) · Octubre 2025"
    },
    stats: {
      stat1: "Casaments realitzats",
      stat2: "Valoració mitjana",
      stat3: "Parelles satisfetes",
      stat4: "Anys d'experiència"
    },
    videos: {
      title: '<span class="text-artium-red">Escolta\'ns</span> en acció',
      subtitle: "Descobreix com els nostres instruments donen vida als moments més especials. Aquests vídeos mostren la nostra experiència real en casaments i esdeveniments.",
      youtubeLabel: "Escolta'ns al nostre canal de YouTube",
      ctaTitle: "T'agrada el que veus?",
      ctaBody: "Aquests són només alguns exemples del nostre treball. Cada casament és únic i adaptem el nostre estil a les vostres preferències musicals per crear la banda sonora perfecta del vostre dia especial.",
      ctaYoutube: "Veure més a YouTube",
      ctaTalk: "Escriu-nos sense compromís"
    },
    faq: {
      title: 'Preguntes <span class="text-artium-red">freqüents</span>',
      q1: "Quant temps abans hem de reservar?",
      a1: "La majoria de parelles ens reserven entre 8 i 14 mesos abans de la data. Els mesos de maig, juny, setembre i octubre tenen molta demanda; recomanem contactar-nos tan aviat com tingueu la data confirmada.",
      q2: "Toqueu fora de Catalunya?",
      a2: "Sí, viatgem per tota Catalunya sense suplement. Per a bodes a les Balears o fora de Catalunya, ens ho poden consultar i preparem un pressupost personalitzat.",
      q3: "Podem triar les cançons que vulguem?",
      a3: "Sí. Tenim un repertori de més de 70 arranjaments propis, i totes les propostes inclouen 2 arranjaments fora de repertori sense cost extra. Si teniu una cançó especial — un tema del vostre grup preferit, una cançó dedicada, un himne familiar — la podem preparar en directe.",
      q4: "Porteu equip de so?",
      a4: "Sí. Totes les propostes inclouen equip de so professional adaptat a l'espai on toquem. No cal que us preocupeu de res tècnic.",
      q5: "Com vestiu el dia del casament?",
      a5: "Formalment, sempre. El nostre vestuari s'adapta a l'estètica de la vostra boda — habitualment amb americana i camisa. Si teniu un codi de vestuari específic, ens ho comenteu i ens hi adaptem.",
      q6: "Fem primer una prova/audició?",
      a6: "Al nostre canal de YouTube i a Instagram teniu més de 30 vídeos de bodes reals. Habitualment amb això les parelles ja tenen prou informació per decidir, però si voleu, ens podem trobar per parlar del vostre projecte sense compromís."
    },
    contact: {
      title: 'Parlem del vostre <span class="text-artium-red">dia</span>?',
      subtitle: "Expliqueu-nos la vostra història i com podem fer que la vostra música sigui tan especial com vosaltres. Estarem encantats de crear la banda sonora perfecta per al vostre dia.",
      testimonialsCta: "Llegeix els testimonis",
      heading: "Poseu-vos en contacte",
      phoneLabel: "Telèfon",
      emailLabel: "Correu electrònic",
      locationLabel: "Ubicació",
      locationValue: "Catalunya",
      instagramLabel: "Instagram",
      includesTitle: "Què inclou el nostre servei?",
      include1: "Consulta personalitzada gratuïta",
      include2: "Repertori adaptat als vostres gustos",
      include3: "Equipament professional inclòs",
      include4: "Flexibilitat en horaris i ubicació",
      formHeading: "Parlem del vostre dia?",
      formBody: "Feu clic al botó de sota per enviar-nos els detalls del vostre casament. Us respondrem el més aviat possible i us enviarem el dossier complet amb totes les propostes.",
      formCta: "Escriu-nos sense compromís",
      formPhoneNote: "O truqueu-nos directament al"
    },
    footer: {
      tagline: "Trio musical especialitzat en casaments i esdeveniments especials. Creem bandes sonores úniques per als vostres moments més importants.",
      contactHeading: "Contacte",
      location: "Catalunya",
      copyright: "Artium Trio. Tots els drets reservats.",
      bottomTagline: "Fem realitat la música dels vostres somnis"
    }
  },

  /* ============================ ENGLISH ============================ */
  en: {
    meta: {
      title: "Artium Trio - Wedding Music in Catalonia | Violin, Cello & Piano",
      description: "Artium Trio — a violin, cello and piano trio for premium weddings in Catalonia. 12 years of experience, over 100 weddings. Request our dossier.",
      ogTitle: "Artium Trio — Music that captivates",
      ogDescription: "A violin, cello and piano trio for weddings in Catalonia. Bespoke live music for your day."
    },
    nav: {
      home: "Home",
      about: "About Us",
      packages: "Our offering",
      testimonials: "Testimonials",
      videos: "Listen",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      title: "The soundtrack to the day you'll remember forever",
      subtitle: "Violin, cello and piano trio for events",
      ctaPrimary: "Listen to us",
      ctaSecondary: "Check your date",
      proof: "5.0 · 100+ weddings · 12 years playing together"
    },
    about: {
      title: 'Meet <span class="text-artium-red">Artium Trio</span>',
      subtitle: "We're Bernat, Antoni and Guillem. We translate your story into violin, cello and piano.",
      violinTitle: "Violin",
      violinDesc: "Melodies that touch the heart and create magical moments in every performance.",
      pianoTitle: "Piano",
      pianoDesc: "Perfect harmonies that complement and elevate every musical moment.",
      celloTitle: "Cello",
      celloDesc: "Depth and elegance that bring unique warmth and emotion.",
      storyTitle: "Our story together",
      story1: "For more than 10 years we have refined our craft to deliver performances ranging from the most elegant classical music to today's most popular contemporary songs.",
      story2: "Every wedding is unique, which is why we adapt our repertoire to the taste and preferences of each couple, creating personalised soundtracks for their most special day.",
      story3: "Over the years we have received the most varied requests: from football club anthems and the Champions League anthem to arrangements of songs written by family members. To this day there has not been a single request we haven't been able to bring to life.",
      stat1: "Weddings played",
      stat2: "Years of experience",
      stat3: "Satisfaction"
    },
    packages: {
      title: 'Our <span class="text-artium-red">offering</span>',
      subtitle: "We accompany every moment of your day with live music tailored to your story. Every proposal is personalised for you.",
      ceremonyTitle: "The Ceremony",
      ceremonyDesc: "Between 5 and 8 pieces chosen together with you to accompany the entrance, the key moments and the exit. We advise you on the repertoire so every moment has its own soundtrack.",
      welcomeTitle: "The Welcome",
      welcomeDesc: "30 minutes of live music as your guests arrive. An elegant prelude that sets the tone for the whole celebration from the very first moment.",
      aperitifTitle: "The Aperitif",
      aperitifDesc: "90 minutes of music during the aperitif, with a repertoire that adapts to the atmosphere of the celebration — more intimate at first, more festive as the gathering unfolds.",
      combineTitle: "Combine the moments you need",
      combineBody: "Every wedding is unique. We help you choose the combination that best fits your day, and we tailor it to you. Get in touch to talk about your project and we'll send you the full dossier with all the proposals.",
      ctaTestimonials: "Read the testimonials",
      ctaTalk: "Let's talk about your day"
    },
    testimonials: {
      title: 'What <span class="text-artium-red">our couples</span> say',
      subtitle: "Every wedding is unique and special. These are the words of some of the couples who have trusted us to make their day unforgettable.",
      badge: "5.0 average on bodas.net",
      t1Quote: "Artium Trio made our wedding absolutely magical. The music during the ceremony moved us to tears, and during the cocktail hour they created the perfect atmosphere. All of our guests were delighted!",
      t1Name: "Maria & Carles",
      t1Venue: "Jardí Botànic Marimurtra · June 2025",
      t2Quote: "Incredible professionals. They arranged all of our favourite songs and the result was spectacular. Their version of Bruno Mars' 'Marry Me' with violin, cello and piano was the most emotional moment of the ceremony.",
      t2Name: "Anna & Miquel",
      t2Venue: "Rural Estate in Roses · June 2025",
      t3Quote: "From the very first contact to the final chord, everything was perfect. Their music accompanied every important moment of our day. Without a doubt, one of the best decisions we made for our wedding.",
      t3Name: "Laura & Javi",
      t3Venue: "Finca Port Verd (Mallorca) · July 2025",
      t4Quote: "We were looking for something special and different for our beach wedding. Artium Trio exceeded all our expectations. The combination of instruments was perfect for the setting and created a unique atmosphere.",
      t4Name: "Cristina & Alejandro",
      t4Venue: "Garriga de Castelladral · July 2025",
      t5Quote: "They agreed to play a song my father had composed for us and arranged it in a beautiful way. We all cried! The professionalism and sensitivity of Artium Trio are second to none.",
      t5Name: "Marta & Pau",
      t5Venue: "Can Ribas (Montblanc) · September 2025",
      t6Quote: "Communication with them was excellent from the very first moment. They understood exactly what we wanted and on the wedding day everything turned out flawlessly. Our guests still talk about it!",
      t6Name: "Núria & Marc",
      t6Venue: "Mas Terrats (Cornudella) · October 2025"
    },
    stats: {
      stat1: "Weddings played",
      stat2: "Average rating",
      stat3: "Happy couples",
      stat4: "Years of experience"
    },
    videos: {
      title: '<span class="text-artium-red">Listen</span> to us in action',
      subtitle: "Discover how our instruments bring the most special moments to life. These videos show our real experience at weddings and events.",
      youtubeLabel: "Listen to us on our YouTube channel",
      ctaTitle: "Do you like what you see?",
      ctaBody: "These are just a few examples of our work. Every wedding is unique and we adapt our style to your musical preferences to create the perfect soundtrack for your special day.",
      ctaYoutube: "See more on YouTube",
      ctaTalk: "Get in touch, no strings attached"
    },
    faq: {
      title: 'Frequently asked <span class="text-artium-red">questions</span>',
      q1: "How far in advance should we book?",
      a1: "Most couples book us between 8 and 14 months before the date. May, June, September and October are in high demand; we recommend getting in touch as soon as you have your date confirmed.",
      q2: "Do you play outside Catalonia?",
      a2: "Yes, we travel throughout Catalonia at no extra charge. For weddings in the Balearic Islands or beyond Catalonia, just ask and we'll prepare a personalised quote.",
      q3: "Can we choose whatever songs we like?",
      a3: "Yes. We have a repertoire of more than 70 of our own arrangements, and every proposal includes 2 arrangements outside the repertoire at no extra cost. If you have a special song — a track by your favourite band, a dedicated song, a family anthem — we can prepare it live.",
      q4: "Do you bring your own sound equipment?",
      a4: "Yes. Every proposal includes professional sound equipment adapted to the space where we play. You don't have to worry about anything technical.",
      q5: "How do you dress on the wedding day?",
      a5: "Formally, always. Our attire adapts to the aesthetic of your wedding — usually a blazer and shirt. If you have a specific dress code, let us know and we'll adapt.",
      q6: "Do we do a trial or audition first?",
      a6: "On our YouTube channel and Instagram you'll find over 30 videos from real weddings. Usually that gives couples enough to decide, but if you'd like, we can meet to talk about your project with no obligation."
    },
    contact: {
      title: "Let's talk about your <span class=\"text-artium-red\">day</span>?",
      subtitle: "Tell us your story and how we can make your music as special as you are. We would be delighted to create the perfect soundtrack for your day.",
      testimonialsCta: "Read the testimonials",
      heading: "Get in touch",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Catalonia",
      instagramLabel: "Instagram",
      includesTitle: "What does our service include?",
      include1: "Free personalised consultation",
      include2: "Repertoire tailored to your taste",
      include3: "Professional equipment included",
      include4: "Flexible schedule and location",
      formHeading: "Let's talk about your day?",
      formBody: "Click the button below to send us the details of your wedding. We'll get back to you as soon as possible and send you the full dossier with all the proposals.",
      formCta: "Get in touch, no strings attached",
      formPhoneNote: "Or call us directly at"
    },
    footer: {
      tagline: "A music trio specialising in weddings and special events. We create unique soundtracks for your most important moments.",
      contactHeading: "Contact",
      location: "Catalonia",
      copyright: "Artium Trio. All rights reserved.",
      bottomTagline: "Making the music of your dreams come true"
    }
  },

  /* =========================== ESPAÑOL ============================ */
  es: {
    meta: {
      title: "Artium Trio - Música para Bodas en Cataluña | Violín, Violonchelo y Piano",
      description: "Artium Trio — Trío de violín, violonchelo y piano para bodas premium en Cataluña. 12 años de experiencia, más de 100 bodas. Pide nuestro dossier.",
      ogTitle: "Artium Trio — Música que enamora",
      ogDescription: "Trío de violín, violonchelo y piano para bodas en Cataluña. Música en directo personalizada para vuestro día."
    },
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      packages: "Propuestas",
      testimonials: "Testimonios",
      videos: "Escúchanos",
      faq: "Preguntas",
      contact: "Contacto"
    },
    hero: {
      title: "Ponemos la banda sonora al día que recordaréis para siempre",
      subtitle: "Trío de violín, violonchelo y piano para eventos",
      ctaPrimary: "Escúchanos",
      ctaSecondary: "Consulta vuestra fecha",
      proof: "5,0 · +100 bodas · 12 años tocando juntos"
    },
    about: {
      title: 'Conoce a <span class="text-artium-red">Artium Trio</span>',
      subtitle: "Somos Bernat, Antoni y Guillem. Traducimos vuestra historia al violín, al violonchelo y al piano.",
      violinTitle: "Violín",
      violinDesc: "Melodías que llegan al corazón y crean momentos mágicos en cada interpretación.",
      pianoTitle: "Piano",
      pianoDesc: "Armonías perfectas que complementan y elevan cada momento musical.",
      celloTitle: "Violonchelo",
      celloDesc: "Profundidad y elegancia que aportan calidez y una emotividad única.",
      storyTitle: "Nuestra historia juntos",
      story1: "Desde hace más de 10 años hemos perfeccionado nuestro arte musical para ofrecer interpretaciones que van desde la música clásica más elegante hasta las canciones contemporáneas más populares.",
      story2: "Cada boda es única, y por eso adaptamos nuestro repertorio a los gustos y preferencias de cada pareja, creando bandas sonoras personalizadas para su día más especial.",
      story3: "A lo largo de los años nos han hecho peticiones de lo más variadas: desde himnos de equipos de fútbol y el himno de la Champions hasta adaptaciones de canciones escritas por familiares. Y hasta el día de hoy no ha habido ninguna propuesta que no hayamos podido llevar a cabo con éxito.",
      stat1: "Bodas realizadas",
      stat2: "Años de experiencia",
      stat3: "Satisfacción"
    },
    packages: {
      title: 'Nuestras <span class="text-artium-red">propuestas</span>',
      subtitle: "Acompañamos cada momento de vuestro día con música en directo adaptada a vuestra historia. Cada propuesta se personaliza para vosotros.",
      ceremonyTitle: "La Ceremonia",
      ceremonyDesc: "Entre 5 y 8 piezas elegidas con vosotros para acompañar la entrada, los momentos clave y la salida. Os asesoramos a la hora de escoger el repertorio para que cada momento tenga su banda sonora.",
      welcomeTitle: "El Welcome",
      welcomeDesc: "30 minutos de música en directo mientras llegan los invitados. Un preludio elegante que marca el tono de toda la celebración desde el primer momento.",
      aperitifTitle: "El Aperitivo",
      aperitifDesc: "90 minutos de música durante el aperitivo, con un repertorio que se adapta al ambiente de la celebración — más íntimo al principio, más festivo a medida que avanza el encuentro.",
      combineTitle: "Combinad los momentos que necesitéis",
      combineBody: "Cada boda es única. Os ayudamos a elegir la combinación que mejor se adapta a vuestro día, y os la adaptamos a medida. Escribidnos para hablar de vuestro proyecto y os enviamos el dossier completo con todas las propuestas.",
      ctaTestimonials: "Lee los testimonios",
      ctaTalk: "Hablemos de vuestro día"
    },
    testimonials: {
      title: 'Lo que dicen <span class="text-artium-red">nuestras parejas</span>',
      subtitle: "Cada boda es única y especial. Estas son las palabras de algunas de las parejas que han confiado en nosotros para hacer de su día algo inolvidable.",
      badge: "5,0 de media en bodas.net",
      t1Quote: "Artium Trio hizo que nuestra boda fuera absolutamente mágica. La música durante la ceremonia nos emocionó hasta las lágrimas, y durante el cóctel crearon el ambiente perfecto. ¡Todos nuestros invitados quedaron encantados!",
      t1Name: "Maria y Carles",
      t1Venue: "Jardí Botànic Marimurtra · Junio 2025",
      t2Quote: "Profesionales increíbles. Adaptaron todas nuestras canciones favoritas y el resultado fue espectacular. La versión de 'Marry Me' de Bruno Mars con violín, violonchelo y piano fue el momento más emotivo de la ceremonia.",
      t2Name: "Anna y Miquel",
      t2Venue: "Masía Rural en Roses · Junio 2025",
      t3Quote: "Desde el primer contacto hasta el último acorde, todo fue perfecto. Su música acompañó cada momento importante de nuestro día. Sin duda, una de las mejores decisiones que tomamos para nuestra boda.",
      t3Name: "Laura y Javi",
      t3Venue: "Finca Port Verd (Mallorca) · Julio 2025",
      t4Quote: "Buscábamos algo especial y diferente para nuestra boda en la playa. Artium Trio superó todas nuestras expectativas. La combinación de instrumentos fue perfecta para el entorno y creó una atmósfera única.",
      t4Name: "Cristina y Alejandro",
      t4Venue: "Garriga de Castelladral · Julio 2025",
      t5Quote: "Aceptaron tocar una canción que había compuesto mi padre para nosotros y la adaptaron de una manera preciosa. ¡Lloramos todos! La profesionalidad y la sensibilidad de Artium Trio son incomparables.",
      t5Name: "Marta y Pau",
      t5Venue: "Can Ribas (Montblanc) · Septiembre 2025",
      t6Quote: "La comunicación con ellos fue excelente desde el primer momento. Entendieron perfectamente lo que queríamos y el día de la boda todo salió inmejorable. ¡Nuestros invitados todavía nos hablan de ello!",
      t6Name: "Núria y Marc",
      t6Venue: "Mas Terrats (Cornudella) · Octubre 2025"
    },
    stats: {
      stat1: "Bodas realizadas",
      stat2: "Valoración media",
      stat3: "Parejas satisfechas",
      stat4: "Años de experiencia"
    },
    videos: {
      title: '<span class="text-artium-red">Escúchanos</span> en acción',
      subtitle: "Descubre cómo nuestros instrumentos dan vida a los momentos más especiales. Estos vídeos muestran nuestra experiencia real en bodas y eventos.",
      youtubeLabel: "Escúchanos en nuestro canal de YouTube",
      ctaTitle: "¿Te gusta lo que ves?",
      ctaBody: "Estos son solo algunos ejemplos de nuestro trabajo. Cada boda es única y adaptamos nuestro estilo a vuestras preferencias musicales para crear la banda sonora perfecta de vuestro día especial.",
      ctaYoutube: "Ver más en YouTube",
      ctaTalk: "Escríbenos sin compromiso"
    },
    faq: {
      title: 'Preguntas <span class="text-artium-red">frecuentes</span>',
      q1: "¿Con cuánto tiempo de antelación hay que reservar?",
      a1: "La mayoría de parejas nos reservan entre 8 y 14 meses antes de la fecha. Los meses de mayo, junio, septiembre y octubre tienen mucha demanda; recomendamos contactarnos tan pronto como tengáis la fecha confirmada.",
      q2: "¿Tocáis fuera de Cataluña?",
      a2: "Sí, viajamos por toda Cataluña sin suplemento. Para bodas en Baleares o fuera de Cataluña, podéis consultárnoslo y preparamos un presupuesto personalizado.",
      q3: "¿Podemos elegir las canciones que queramos?",
      a3: "Sí. Tenemos un repertorio de más de 70 arreglos propios, y todas las propuestas incluyen 2 arreglos fuera de repertorio sin coste extra. Si tenéis una canción especial — un tema de vuestro grupo preferido, una canción dedicada, un himno familiar — la podemos preparar en directo.",
      q4: "¿Traéis equipo de sonido?",
      a4: "Sí. Todas las propuestas incluyen equipo de sonido profesional adaptado al espacio donde tocamos. No tenéis que preocuparos de nada técnico.",
      q5: "¿Cómo vestís el día de la boda?",
      a5: "Formalmente, siempre. Nuestro vestuario se adapta a la estética de vuestra boda — habitualmente con americana y camisa. Si tenéis un código de vestuario específico, nos lo comentáis y nos adaptamos.",
      q6: "¿Hacemos primero una prueba/audición?",
      a6: "En nuestro canal de YouTube y en Instagram tenéis más de 30 vídeos de bodas reales. Habitualmente con eso las parejas ya tienen suficiente información para decidir, pero si queréis, podemos vernos para hablar de vuestro proyecto sin compromiso."
    },
    contact: {
      title: '¿Hablamos de vuestro <span class="text-artium-red">día</span>?',
      subtitle: "Contadnos vuestra historia y cómo podemos hacer que vuestra música sea tan especial como vosotros. Estaremos encantados de crear la banda sonora perfecta para vuestro día.",
      testimonialsCta: "Lee los testimonios",
      heading: "Poneos en contacto",
      phoneLabel: "Teléfono",
      emailLabel: "Correo electrónico",
      locationLabel: "Ubicación",
      locationValue: "Cataluña",
      instagramLabel: "Instagram",
      includesTitle: "¿Qué incluye nuestro servicio?",
      include1: "Consulta personalizada gratuita",
      include2: "Repertorio adaptado a vuestros gustos",
      include3: "Equipamiento profesional incluido",
      include4: "Flexibilidad en horarios y ubicación",
      formHeading: "¿Hablamos de vuestro día?",
      formBody: "Haced clic en el botón de abajo para enviarnos los detalles de vuestra boda. Os responderemos lo antes posible y os enviaremos el dossier completo con todas las propuestas.",
      formCta: "Escríbenos sin compromiso",
      formPhoneNote: "O llamadnos directamente al"
    },
    footer: {
      tagline: "Trío musical especializado en bodas y eventos especiales. Creamos bandas sonoras únicas para vuestros momentos más importantes.",
      contactHeading: "Contacto",
      location: "Cataluña",
      copyright: "Artium Trio. Todos los derechos reservados.",
      bottomTagline: "Hacemos realidad la música de vuestros sueños"
    }
  }
};
