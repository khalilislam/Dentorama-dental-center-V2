import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact Us",
        book: "Book Appointment",
        logo: "Dental Center",
      },
      hero: {
        badge: "Trusted by 5,000+ happy smiles",
        titlePrefix: "Experience",
        titleHighlight: "Dental Excellence",
        titleSuffix: "with a Gentle Touch",
        description:
          "From routine cleanings to full smile makeovers, our award-winning team blends modern technology with genuine care — so every visit feels effortless.",
        primaryBtn: "Make An Appointment",
        secondaryBtn: "Explore Our Site",
        rating: "Google Rating",
        reviews: "Based on 492 reviews",
        founders: "Dr. Memmeri & Dr. Tamendjari",
        foundersRole: "Founders",
        infoCallTitle: "Need Dental Services?",
        infoCallValue: "Call: 06 72 68 09 13",
        infoHoursTitle: "Opening Hours",
        infoHoursValue: "Sat–Thu 9am–10pm · Fri 2pm–8pm",
      },
      about: {
        badge: "About Us",
        title: "A clinic built around your comfort",
        subtitle: "Caring for smiles, one patient at a time",
        description:
          "At Dentorama, we believe great dentistry starts with listening. Our calming environment, board-certified specialists, and modern tools combine to make every visit comfortable, transparent, and effective.",
        storyTitle: "Our story",
        storyPara1:
          "What began as a single chair clinic has grown into a multi-specialty center serving thousands of families. We've stayed true to our founding principle: every patient deserves time, transparency, and tenderness.",
        storyPara2:
          "From digital scanners to laser dentistry, we invest in technology that makes treatment quicker and gentler.",
        feature1: "Patient-first philosophy",
        feature2: "Latest dental technology",
        feature3: "Sterile, calming environment",
        feature4: "Affordable plans",
        yearsExp: "Years Exp.",
        features: [
          "Board-certified specialists",
          "Painless, sedation-friendly care",
          "State-of-the-art equipment",
          "Transparent pricing",
        ],
        valuesBadge: "Our Values",
        valuesTitle: "What guides us every day",
        values: {
          compassion: { title: "Compassion", desc: "We listen first, treat second." },
          excellence: { title: "Excellence", desc: "Best-in-class training and tools." },
          comfort: { title: "Comfort", desc: "Calming spaces, gentle hands." },
          community: { title: "Community", desc: "Caring for families across generations." },
        },
        teamBadge: "Our Team",
        teamTitle: "Meet the specialists",
        founderRole: "Co-Founder · Dentist",
      },
      services: {
        badge: "Our Services",
        title: "Complete dental care under one roof",
        subtitle: "From preventive checkups to advanced cosmetic procedures.",
        description:
          "Explore our full range of treatments — preventive, restorative, and cosmetic — all delivered with our signature gentle touch.",
        items: {
          cleaning: {
            title: "Teeth Cleaning",
            desc: "Professional cleaning to remove plaque and keep your smile healthy and fresh.",
          },
          whitening: {
            title: "Teeth Whitening",
            desc: "Brighten your smile by several shades in a single visit.",
          },
          implants: {
            title: "Dental Implants",
            desc: "Permanent, natural-looking replacements for missing teeth.",
          },
          rootCanal: {
            title: "Root Canal Therapy",
            desc: "Pain-free procedures using the latest sedation tech.",
          },
          cosmetic: {
            title: "Cosmetic Dentistry",
            desc: "Veneers and reshaping for a flawless, photogenic smile.",
          },
          pediatric: {
            title: "Pediatric Dentistry",
            desc: "Gentle, friendly care designed for little patients.",
          },
          orthodontics: {
            title: "Orthodontics",
            desc: "Invisible aligners and braces for perfect alignment.",
          },
          fillings: {
            title: "Dental Fillings",
            desc: "Restore damaged teeth with natural-looking, durable fillings.",
          },
          extraction: {
            title: "Tooth Extraction",
            desc: "Safe and painless tooth removal using modern techniques.",
          },
          crowns: {
            title: "Crowns & Bridges",
            desc: "Restore strength and appearance of your teeth with custom-made solutions.",
          },
          veneers: {
            title: "Veneers (Hollywood Smile)",
            desc: "Transform your smile with perfectly shaped, natural-looking veneers.",
          },
          surgery: {
            title: "Oral Surgery",
            desc: "Advanced surgical procedures including wisdom tooth removal.",
          },
          imaging: {
            title: "Dental Imaging",
            desc: "Accurate diagnosis with modern digital dental imaging technology.",
          },
          fluoride: {
            title: "Fluoride Treatment",
            desc: "Strengthen enamel and protect teeth from decay.",
          },
          mouthguards: {
            title: "Mouth Guards",
            desc: "Custom-made protection for teeth grinding or sports.",
          },
        },
        ctaTitle: "Not sure which treatment is right for you?",
        ctaDesc: "Schedule a free consultation and we'll guide you.",
        ctaBtn: "Book Free Consultation",
        viewDetails: "View Details",
      },
      beforeAfter: {
        badge: "Before / After",
        title: "Real smile transformations",
        description:
          "Slide the cursor to discover the results of our treatments — real transformations performed in our clinic.",
        case: "Case n°",
        naturalResult: "Natural result",
        customCare: "Personalized care",
        cases: [
          {
            title: "Full Prosthetic Rehabilitation",
            desc: "Restoration of a smile affected by tooth loss and degradation through aesthetic fixed prostheses, restoring function, harmony, and confidence.",
          },
          {
            title: "Conservative Care & Aesthetic Crowns",
            desc: "Treatment of multiple cavities and reconstruction of damaged teeth with custom ceramic crowns for a natural, clean, and bright smile.",
          },
          {
            title: "Dental Bridge & Smile Restoration",
            desc: "Replacement of missing teeth and removal of metallic restorations with a modern bridge, offering perfect alignment and a durable aesthetic result.",
          },
        ],
      },
      stats: {
        patients: "Happy Patients",
        experience: "Years Experience",
        specialists: "Expert Specialists",
        rating: "Average Rating",
      },
      testimonials: {
        badge: "Testimonials",
        title: "What our patients say",
        list: [
          {
            name: "Yanis Bessal",
            role: "Patient",
            quote:
              "A professional team, a warm welcome, reasonable prices and meticulous work. Very satisfied with the care I received at Dentorama.",
          },
          {
            name: "Dalila Bouanane",
            role: "Patient",
            quote:
              "Une cabinet très moderne, professionnel et propre, un travail magnifique et surtout a l'heure. Des assistante très gentille et chaleureux je recommande son hésiter.",
          },
          {
            name: "Ines Ferchouli",
            role: "Patient",
            quote:
              "Very satisfied with my experience in this clinic. Warm welcome, professional staff and high quality care. Thank you for your professionalism.",
          },
        ],
      },
      cta: {
        title: "Ready to give your smile the care it deserves?",
        subtitle: "Book a consultation today and meet the team that puts your comfort first.",
        button: "Book Appointment",
      },
      contact: {
        badge: "Contact",
        title: "Let's start your smile journey",
        description: "Reach out and our team will get back within a few hours.",
        phone: "Phone",
        formTitle: "Make an appointment",
        formDesc: "Fill the form and we'll confirm your slot.",
        namePlaceholder: "Full Name",
        phonePlaceholder: "Phone Number",
        emailPlaceholder: "Email",
        selectService: "Select a service",
        messagePlaceholder: "Message (optional)",
        sendBtn: "Send Request",
        sent: "Sent!",
        openMap: "Open in Google Maps",
        satThu: "Saturday – Thursday",
        friday: "Friday",
        hrsSatThu: "09:00 – 22:00",
        hrsFriday: "14:00 – 20:00",
      },
      footer: {
        description:
          "Premium dental care centered around patient comfort, featuring modern technology and gentle specialists.",
        quickLinks: "Quick Links",
        services: "Our Services",
        contact: "Contact Info",
        rights: "All rights reserved.",
        location: "Cheraga, Algiers",
        viewMap: "View on Google Maps",
        crafted: "Crafted with care for healthier smiles.",
      },
      common: {
        learnMore: "Learn More",
        callUs: "Call Us",
        emailUs: "Email Us",
        address: "Our Location",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "اتصل بنا",
        book: "احجز موعداً",
        logo: "مركز طب الأسنان",
      },
      hero: {
        badge: "موثوق من قبل أكثر من ٥٠٠٠ مبتسم",
        titlePrefix: "اختبر",
        titleHighlight: "التميز في طب الأسنان",
        titleSuffix: "بلمسة لطيفة",
        description:
          "من التنظيف الروتيني إلى تحويلات الابتسامة الكاملة، يجمع فريقنا الحائز على جوائز بين التكنولوجيا الحديثة والرعاية الحقيقية - لضمان راحة تامة في كل زيارة.",
        primaryBtn: "احجز موعداً الآن",
        secondaryBtn: "استكشف موقعنا",
        rating: "تقييم جوجل",
        reviews: "بناءً على ٤٩٢ مراجعة",
        founders: "د. ممري ود. تمنجري",
        foundersRole: "المؤسسان",
        infoCallTitle: "هل تحتاج لخدمات طب الأسنان؟",
        infoCallValue: "اتصل على: ٠٦ ٧٢ ٦٨ ٠٩ ١٣",
        infoHoursTitle: "أوقات العمل",
        infoHoursValue: "السبت–الخميس ٩ صباحاً – ١٠ مساءً · الجمعة ٢ ظهراً – ٨ مساءً",
      },
      about: {
        badge: "من نحن",
        title: "عيادة مبنية حول راحتك",
        subtitle: "نعتني بابتسامتك، مريضاً تلو الآخر",
        description:
          "في دنتوراما، نؤمن بأن طب الأسنان يبدأ بالاستماع. تجمع بيئتنا الهادئة، والمتخصصون المعتمدون لدينا، والأدوات الحديثة لجعل كل زيارة مريحة وشفافة وفعالة.",
        storyTitle: "قصتنا",
        storyPara1:
          "ما بدأ كعيادة بكرسي واحد نما ليصبح مركزاً متعدد التخصصات يخدم آلاف العائلات. لقد بقينا أوفياء لمبدئنا التأسيسي: كل مريض يستحق الوقت والشفافية والحنان.",
        storyPara2:
          "من الماسحات الضوئية الرقمية إلى طب الأسنان بالليزر، نستثمر في التكنولوجيا التي تجعل العلاج أسرع وألطف.",
        feature1: "فلسفة المريض أولاً",
        feature2: "أحدث تكنولوجيا طب الأسنان",
        feature3: "بيئة معقمة وهادئة",
        feature4: "خطط ميسورة التكلفة",
        yearsExp: "سنة خبرة",
        features: [
          "متخصصون معتمدون",
          "رعاية بدون ألم وهادئة",
          "أحدث المعدات والتقنيات",
          "أسعار شفافة وواضحة",
        ],
        valuesBadge: "قيمنا",
        valuesTitle: "ما يوجهنا كل يوم",
        values: {
          compassion: { title: "التعاطف", desc: "نحن نستمع أولاً، ثم نعالج." },
          excellence: { title: "التميز", desc: "أفضل تدريب وأدوات في فئتها." },
          comfort: { title: "الراحة", desc: "مساحات هادئة، وأيدٍ لطيفة." },
          community: { title: "المجتمع", desc: "رعاية العائلات عبر الأجيال." },
        },
        teamBadge: "فريقنا",
        teamTitle: "تعرف على المتخصصين",
        founderRole: "مؤسس مشارك · طبيب أسنان",
      },
      services: {
        badge: "خدماتنا",
        title: "رعاية أسنان كاملة تحت سقف واحد",
        subtitle: "من الفحوصات الوقائية إلى الإجراءات التجميلية المتقدمة.",
        description:
          "استكشف مجموعتنا الكاملة من العلاجات - الوقائية، والترميمية، والتجميلية - وجميعها مقدمة بلمسة لطيفة تميزنا.",
        items: {
          cleaning: {
            title: "تنظيف الأسنان",
            desc: "تنظيف متخصص لإزالة الترسبات والحفاظ على ابتسامتك صحية ومنتعشة.",
          },
          whitening: {
            title: "تبييض الأسنان",
            desc: "اجعل ابتسامتك أكثر إشراقاً بعدة درجات في زيارة واحدة.",
          },
          implants: {
            title: "زراعة الأسنان",
            desc: "بدائل دائمة وطبيعية للأسنان المفقودة.",
          },
          rootCanal: {
            title: "علاج العصب",
            desc: "إجراءات بدون ألم باستخدام أحدث تقنيات التخدير.",
          },
          cosmetic: {
            title: "طب الأسنان التجميلي",
            desc: "الفينير وإعادة التشكيل لابتسامة مثالية وجذابة.",
          },
          pediatric: {
            title: "طب أسنان الأطفال",
            desc: "رعاية لطيفة وودودة مصممة للمرضى الصغار.",
          },
          orthodontics: {
            title: "تقويم الأسنان",
            desc: "تقويم شفاف وأقواس لتحقيق اصطفاف مثالي.",
          },
          fillings: {
            title: "حشوات الأسنان",
            desc: "استعادة الأسنان المتضررة بحشوات طبيعية المظهر ومتينة.",
          },
          extraction: {
            title: "خلع الأسنان",
            desc: "إزالة الأسنان بشكل آمن وغير مؤلم باستخدام تقنيات حديثة.",
          },
          crowns: {
            title: "التيجان والجسور",
            desc: "استعادة قوة ومظهر أسنانك بحلول مصممة خصيصاً.",
          },
          veneers: {
            title: "الفينير (ابتسامة هوليود)",
            desc: "حول ابتسامتك بفينير طبيعي المظهر ومصمم بشكل مثالي.",
          },
          surgery: {
            title: "جراحة الفم",
            desc: "إجراءات جراحية متقدمة تشمل خلع ضرس العقل.",
          },
          imaging: {
            title: "تصوير الأسنان",
            desc: "تشخيص دقيق باستخدام أحدث تقنيات تصوير الأسنان الرقمية.",
          },
          fluoride: {
            title: "علاج الفلورايد",
            desc: "تقوية المينا وحماية الأسنان من التسوس.",
          },
          mouthguards: {
            title: "واقيات الفم",
            desc: "حماية مخصصة لحالات صرير الأسنان أو ممارسة الرياضة.",
          },
        },
        ctaTitle: "لست متأكداً من العلاج المناسب لك؟",
        ctaDesc: "احجز استشارة مجانية وسنوجهك للأفضل.",
        ctaBtn: "احجز استشارة مجانية",
        viewDetails: "عرض التفاصيل",
      },
      beforeAfter: {
        badge: "قبل / بعد",
        title: "تحولات حقيقية للابتسامة",
        description: "حرك المنزلق لاكتشاف نتائج علاجاتنا - تحولات حقيقية تم إجراؤها في عيادتنا.",
        case: "الحالة رقم",
        naturalResult: "نتيجة طبيعية",
        customCare: "رعاية شخصية",
        cases: [
          {
            title: "إعادة تأهيل بروتيزية كاملة",
            desc: "استعادة ابتسامة متضررة من فقدان الأسنان وتدهورها من خلال بدائل ثابتة جمالية، مما يعيد الوظيفة والانسجام والثقة للمريض.",
          },
          {
            title: "العناية المحافظة والعدسات التجميلية",
            desc: "علاج التجاويف المتعددة وإعادة بناء الأسنان التالفة بتيجان سيراميك مخصصة لابتسامة طبيعية ونظيفة ومشرقة.",
          },
          {
            title: "جسر الأسنان واستعادة الابتسامة",
            desc: "استبدال الأسنان المفقودة وإزالة الترميمات المعدنية بجسر حديث، مما يوفر اصطفافاً مثالياً ونتيجة جمالية دائمة.",
          },
        ],
      },
      stats: {
        patients: "مريض سعيد",
        experience: "سنة خبرة",
        specialists: "طبيب خبير",
        rating: "متوسط التقييم",
      },
      testimonials: {
        badge: "آراء المرضى",
        title: "ماذا يقول مرضانا",
        list: [
          {
            name: "Yanis Bessal",
            role: "مريض",
            quote: "فريق عمل محترف، استقبال حار، أسعار معقولة وعمل دقيق. سعيد جداً بالرعاية التي تلقيتها في دنتوراما.",
          },
          {
            name: "Dalila Bouanane",
            role: "مريضة",
            quote:
              "Une cabinet très moderne, professionnel et propre, un travail magnifique et surtout a l'heure. Des assistante très gentille et chaleureux je recommande son hésiter.",
          },
          {
            name: "Ines Ferchouli",
            role: "مريضة",
            quote: "راضية جداً عن تجربتي في هذه العيادة. استقبال حار، طاقم عمل محترف ورعاية عالية الجودة. شكراً على احترافيتكم.",
          },
        ],
      },
      cta: {
        title: "هل أنت مستعد لمنح ابتسامتك الرعاية التي تستحقها؟",
        subtitle: "احجز استشارة اليوم وتعرف على الفريق الذي يضع راحتك أولاً.",
        button: "احجز موعداً",
      },
      contact: {
        badge: "اتصل بنا",
        title: "لنبدأ رحلة ابتسامتك",
        description: "تواصل معنا وسيقوم فريقنا بالرد عليك في غضون بضع ساعات.",
        phone: "الهاتف",
        formTitle: "احجز موعداً",
        formDesc: "املأ النموذج وسنقوم بتأكيد موعدك.",
        namePlaceholder: "الاسم الكامل",
        phonePlaceholder: "رقم الهاتف",
        emailPlaceholder: "البريد الإلكتروني",
        selectService: "اختر خدمة",
        messagePlaceholder: "الرسالة (اختياري)",
        sendBtn: "إرسال الطلب",
        sent: "تم الإرسال!",
        openMap: "فتح في خرائط جوجل",
        satThu: "السبت – الخميس",
        friday: "الجمعة",
        hrsSatThu: "٠٩:٠٠ – ٢٢:٠٠",
        hrsFriday: "١٤:٠٠ – ٢٠:٠٠",
      },
      footer: {
        description:
          "رعاية أسنان مميزة تتمحور حول راحة المريض، وتتميز بأحدث التقنيات وبأخصائيين محترفين.",
        quickLinks: "روابط سريعة",
        services: "خدماتنا",
        contact: "معلومات الاتصال",
        rights: "جميع الحقوق محفوظة.",
        location: "الشراقة، الجزائر العاصمة",
        viewMap: "عرض على خرائط جوجل",
        crafted: "صُنع بعناية من أجل ابتسامات صحية",
      },
      common: {
        learnMore: "اقرأ المزيد",
        callUs: "اتصل بنا",
        emailUs: "راسيلنا إلكترونياً",
        address: "موقعنا",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        contact: "Contactez-nous",
        book: "Prendre RDV",
        logo: "Centre Dentaire",
      },
      hero: {
        badge: "Approuvé par 5 000+ sourires",
        titlePrefix: "Découvrez",
        titleHighlight: "L'Excellence Dentaire",
        titleSuffix: "en toute douceur",
        description:
          "Des nettoyages de routine aux transformations complètes du sourire, notre équipe primée allie technologie moderne et soins attentionnés pour des visites sans effort.",
        primaryBtn: "Prendre un Rendez-vous",
        secondaryBtn: "Explorer le Site",
        rating: "Note Google",
        reviews: "Basé sur 492 avis",
        founders: "Dr. Memmeri & Dr. Tamendjari",
        foundersRole: "Fondateurs",
        infoCallTitle: "Besoin de soins dentaires?",
        infoCallValue: "Appelez: 06 72 68 09 13",
        infoHoursTitle: "Horaires d'Ouverture",
        infoHoursValue: "Sam–Jeu 9h–22h · Ven 14h–20h",
      },
      about: {
        badge: "À Propos",
        title: "Une clinique bâtie autour de votre confort",
        subtitle: "Prendre soin des sourires, un patient à la fois",
        description:
          "Chez Dentorama, nous croyons que l'excellence dentaire commence par l'écoute. Notre environnement apaisant, nos spécialistes certifiés et nos outils modernes se combinent pour rendre chaque visite confortable, transparente et efficace.",
        storyTitle: "Notre histoire",
        storyPara1:
          "Ce qui n'était au départ qu'une clinique à un seul fauteuil est devenu un centre multi-spécialités servant des milliers de familles. Nous sommes restés fidèles à notre principe fondateur : chaque patient mérite du temps, de la transparence et de la tendresse.",
        storyPara2:
          "Des scanners numériques à la dentisterie laser, nous investissons dans des technologies qui rendent le traitement plus rapide et plus doux.",
        feature1: "Philosophie centrée sur le patient",
        feature2: "Dernière technologie dentaire",
        feature3: "Environnement stérile et apaisant",
        feature4: "Tarifs abordables",
        yearsExp: "Années d'Exp.",
        features: [
          "Spécialistes certifiés",
          "Soins indolores et apaisants",
          "Équipement de pointe",
          "Tarification transparente",
        ],
        valuesBadge: "Nos Valeurs",
        valuesTitle: "Ce qui nous guide chaque jour",
        values: {
          compassion: { title: "Compassion", desc: "Nous écoutons d'abord, soignons ensuite." },
          excellence: { title: "Excellence", desc: "Formation et outils de pointe." },
          comfort: { title: "Confort", desc: "Espaces apaisants, mains douces." },
          community: {
            title: "Communauté",
            desc: "Prendre soin des familles sur plusieurs générations.",
          },
        },
        teamBadge: "Notre Équipe",
        teamTitle: "Rencontrez les spécialistes",
        founderRole: "Co-fondateur · Dentiste",
      },
      services: {
        badge: "Nos Services",
        title: "Soins dentaires complets sous un même toit",
        subtitle: "Des examens préventifs aux procédures esthétiques avancées.",
        description:
          "Découvrez notre gamme complète de traitements — préventifs, restaurateurs et esthétiques — tous prodigués avec notre douceur signature.",
        items: {
          cleaning: {
            title: "Nettoyage Dentaire",
            desc: "Nettoyage professionnel pour éliminer la plaque et garder votre sourire sain et frais.",
          },
          whitening: {
            title: "Blanchiment Dentaire",
            desc: "Illuminez votre sourire de plusieurs teintes en une seule visite.",
          },
          implants: {
            title: "Implants Dentaires",
            desc: "Remplacements permanents et d'aspect naturel pour les dents manquantes.",
          },
          rootCanal: {
            title: "Traitement de Canal",
            desc: "Procédures sans douleur utilisant les dernières technologies de sédation.",
          },
          cosmetic: {
            title: "Dentisterie Esthétique",
            desc: "Facettes et remodelage pour un sourire parfait et photogénique.",
          },
          pediatric: {
            title: "Dentisterie Pédiatrique",
            desc: "Soins doux et amicaux conçus pour les petits patients.",
          },
          orthodontics: {
            title: "Orthodontie",
            desc: "Aligneurs invisibles et bagues pour un alignement parfait.",
          },
          fillings: {
            title: "Plombages Dentaires",
            desc: "Restaurez les dents endommagées avec des plombages durables d'aspect naturel.",
          },
          extraction: {
            title: "Extraction Dentaire",
            desc: "Extraction dentaire sûre et indolore utilisant des techniques modernes.",
          },
          crowns: {
            title: "Couronnes & Ponts",
            desc: "Restaurez la force et l'apparence de vos dents avec des solutions sur mesure.",
          },
          veneers: {
            title: "Facettes (Sourire Hollywood)",
            desc: "Transformez votre sourire avec des facettes parfaitement formées au rendu naturel.",
          },
          surgery: {
            title: "Chirurgie Buccale",
            desc: "Procédures chirurgicales avancées, incluant l'extraction des dents de sagesse.",
          },
          imaging: {
            title: "Radiographie Dentaire",
            desc: "Diagnostic précis avec une technologie d'imagerie dentaire numérique moderne.",
          },
          fluoride: {
            title: "Traitement au Fluor",
            desc: "Renforce l'émail et protège les dents contre la carie.",
          },
          mouthguards: {
            title: "Protège-dents",
            desc: "Protection sur mesure contre le grincement des dents ou pour le sport.",
          },
        },
        ctaTitle: "Vous n'êtes pas sûr du traitement qu'il vous faut ?",
        ctaDesc: "Prenez rendez-vous pour une consultation gratuite et laissez-nous vous guider.",
        ctaBtn: "Consultation Gratuite",
        viewDetails: "Voir Détails",
      },
      beforeAfter: {
        badge: "Avant / Après",
        title: "Transformations réelles du sourire",
        description:
          "Faites glisser le curseur pour découvrir les résultats de nos traitements — des transformations réelles réalisées dans notre clinique.",
        case: "Cas n°",
        naturalResult: "Résultat naturel",
        customCare: "Soin personnalisé",
        cases: [
          {
            title: "Réhabilitation prothétique complète",
            desc: "Restauration d'un sourire affecté par la perte et la dégradation des dents grâce à des prothèses fixes esthétiques, redonnant fonction, harmonie et confiance au patient.",
          },
          {
            title: "Soins conservateurs & couronnes esthétiques",
            desc: "Traitement des caries multiples et reconstruction des dents abîmées avec des couronnes céramiques sur mesure pour un sourire naturel et lumineux.",
          },
          {
            title: "Bridge dentaire & restauration du sourire",
            desc: "Remplacement des dents manquantes et retrait des restaurations métalliques par un bridge moderne, offrant un alignement parfait et un résultat durable.",
          },
        ],
      },
      stats: {
        patients: "Patients Heureux",
        experience: "Années d'Expérience",
        specialists: "Spécialistes Experts",
        rating: "Note Moyenne",
      },
      testimonials: {
        badge: "Témoignages",
        title: "Ce que disent nos patients",
        list: [
          {
            name: "Yanis Bessal",
            role: "Patient",
            quote:
              "Une équipe professionnelle, un accueil chaleureux, des tarifs raisonnables et un travail minutieux, Très satisfait des soins que j'ai reçu chez dentorama.",
          },
          {
            name: "Dalila Bouanane",
            role: "Patient",
            quote:
              "Une cabinet très moderne, professionnel et propre, un travail magnifique et surtout a l'heure. Des assistante très gentille et chaleureux je recommande son hésiter.",
          },
          {
            name: "Ines Ferchouli",
            role: "Patient",
            quote:
              "Très satisfatite de mon expérience dans cette clinique Accueil chaleureux, personnel professionnel et soins de grande qualité merci pour votre professionnalisme.",
          },
        ],
      },
      cta: {
        title: "Prêt à donner à votre sourire les soins qu'il mérite ?",
        subtitle:
          "Réservez une consultation aujourd'hui et rencontrez l'équipe qui privilégie votre confort.",
        button: "Prendre RDV",
      },
      contact: {
        badge: "Contact",
        title: "Commençons votre voyage vers le sourire",
        description: "Contactez-nous et notre équipe vous répondra dans les plus brefs délais.",
        phone: "Téléphone",
        formTitle: "Prendre un rendez-vous",
        formDesc: "Remplissez le formulaire et nous confirmerons votre créneau.",
        namePlaceholder: "Nom complet",
        phonePlaceholder: "Numéro de téléphone",
        emailPlaceholder: "Email",
        selectService: "Sélectionnez un service",
        messagePlaceholder: "Message (optionnel)",
        sendBtn: "Envoyer la demande",
        sent: "Envoyé !",
        openMap: "Ouvrir dans Google Maps",
        satThu: "Samedi – Jeudi",
        friday: "Vendredi",
        hrsSatThu: "09:00 – 22:00",
        hrsFriday: "14:00 – 20:00",
      },
      footer: {
        description:
          "Soins dentaires de qualité centrés sur le confort du patient, avec une technologie moderne et des spécialistes qualifiés.",
        quickLinks: "Liens Rapides",
        services: "Nos Services",
        contact: "Contact",
        rights: "Tous droits réservés.",
        location: "Chéraga, Alger",
        viewMap: "Voir sur Google Maps",
        crafted: "Conçu avec soin pour des sourires sains",
      },
      common: {
        learnMore: "En savoir plus",
        callUs: "Nous appeler",
        emailUs: "Nous écrire",
        address: "Notre Emplacement",
      },
    },
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
