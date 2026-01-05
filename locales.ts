import { Translations } from './types';

export const EN: Translations = {
  nav: {
    home: 'Home',
    practices: 'Practices',
    people: 'Team',
    insights: 'Insights',
    careers: 'Careers',
    contact: 'Contact',
  },
  hero: {
    title1: 'Strategic',
    title2: 'Vision,',
    title3: 'Unwavering Trust.',
    subtitle: 'Navigating the complexities of Indonesian law with international standards and a forward-thinking approach.',
    cta1: 'Partner With Us',
    cta2: 'Our Expertise',
  },
  home: {
    firmTitle: 'The Firm',
    firmSubtitle: 'Modern agility. Traditional excellence.',
    firmDesc: 'DITRA is a premier legal partnership founded on decades of high-stakes experience. We combine the agility of a modern boutique firm with the sophistication required for complex cross-border transactions, serving as trusted architects for our clients\' most critical business decisions.',
    meetTeam: 'Meet our Partners',
    expertiseTitle: 'Expertise',
    expertiseSubtitle: 'Practice Areas',
    viewAll: 'View All Practices',
    quote: '"We do not just interpret the law; we leverage it to build sustainable commercial advantages for our clients."',
    quoteAuthor: 'Ditra Law Partnership',
    interiorQuote: '"Decades of excellence in corporate strategy."',
    insightsTitle: 'Perspectives',
    insightsSubtitle: 'Legal Analysis',
    readMore: 'Read Analysis',
  },
  practices: {
    capabilities: 'Capabilities',
    title: 'Practices & Expertise',
    subtitle: 'Comprehensive legal solutions tailored to the unique challenges of Indonesia’s dynamic business landscape.',
    index: 'Practice Index',
  },
  people: {
    team: 'The Team',
    title: 'Our People',
    subtitle: 'A collective of seasoned legal minds dedicated to commercial success and regulatory precision.',
    readBio: 'View Profile',
    bio: {
      biography: 'Professional Biography',
      education: 'Education',
      admissions: 'Admissions & Affiliations',
      languages: 'Languages',
    }
  },
  insights: {
    title: 'Market Intelligence',
    subtitle: 'Analysis and commentary on the latest regulatory developments and market trends.',
    filterAll: 'All Topics',
  },
  careers: {
    title: 'Join DITRA',
    subtitle: 'We are seeking exceptional legal talent to shape the future of our firm.',
    cultureTitle: 'Our Culture',
    cultureDesc: 'At DITRA, we champion a culture of intellectual rigor and collaborative excellence. We are committed to mentorship and professional growth, offering an environment where ambitious lawyers can thrive while delivering top-tier service.',
    openingsTitle: 'Current Opportunities',
    noOpenings: 'There are currently no open positions, but we welcome expressions of interest from high-caliber candidates.',
    apply: 'Apply Now',
  },
  contact: {
    getInTouch: 'Get in Touch',
    title: 'Contact Us',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Inquiry',
      sending: 'Transmitting...',
      sent: 'Thank you. Your inquiry has been received.',
      error: 'Transmission failed. Please try again.',
    },
    office: {
      title: 'Jakarta Office',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      viewMap: 'View on Google Maps',
    },
  },
  footer: {
    slogan: 'Strategic Vision.\nBuilt on Trust.',
    office: 'Office',
    links: 'Navigation',
    insights: 'Insights',
    subscribe: 'Subscribe to legal updates.',
    subscribed: 'Subscription successful.',
    rights: 'DITRA Law Partnership.',
    designed: 'Designed for Excellence.',
    privacy: 'Privacy Policy',
  },
  search: {
    placeholder: 'Search practices, professionals, or insights...',
    noResults: 'No matches found.',
    practices: 'Practice Areas',
    people: 'Professionals',
  },
  cookie: {
    text: 'We use cookies to optimize your digital experience and analyze site traffic.',
    accept: 'Accept',
  },
  notFound: {
    title: 'Page Not Found',
    desc: 'The resource you are looking for is unavailable or has been moved.',
    button: 'Return to Home',
  },
  practicesList: [
    {
      id: "ma",
      title: "Mergers & Acquisitions",
      shortDescription: "Architecting high-value transactions and strategic consolidations across the region.",
      fullDescription: `DITRA stands at the forefront of Indonesian M&A, advising multinational corporations and leading domestic entities on complex cross-border transactions. Our expertise spans high-profile acquisitions for Indonesian corporates and inbound investments for clients across Australia, Greater China, Japan, and Southeast Asia.

We provide end-to-end advisory services encompassing private and public takeovers, schemes of arrangement, private equity buyouts, due diligence, and regulatory compliance. We excel in highly regulated industries, where our nuanced understanding of the commercial and political landscape adds tangible value to deal structures.`
    },
    {
      id: "capital-market",
      title: "Capital Markets",
      shortDescription: "Navigating public markets, IPOs, and complex debt structures with precision.",
      fullDescription: `We possess deep expertise in both Equity Capital Markets (ECM) and Debt Capital Markets (DCM), with a strong track record in Initial Public Offerings (IPOs) and rights issues. Our team guides issuers and underwriters through the intricacies of capital raising, ensuring rigorous compliance with OJK regulations while optimizing commercial results.

Our Partner’s membership in the HKHSK (Capital Market Legal Consultants Association) underscores our ability to provide high-level strategic guidance on Indonesia’s evolving capital market frameworks.`
    },
    {
      id: "banking-finance",
      title: "Banking & Finance",
      shortDescription: "Structuring the capital that drives growth for lenders and borrowers.",
      fullDescription: `DITRA advises major domestic and international financial institutions on a broad spectrum of banking matters. Our team has a formidable track record in project finance, syndicated lending, and regulatory compliance.

We represent borrowers, private equity firms, and corporate conglomerates in cross-border financings, increasingly handling domestic transactions under Indonesian law utilizing international-standard documentation. We help clients navigate the financial landscape to execute high-stakes funding strategies.`
    },
    {
      id: "employment",
      title: "Employment & Industrial Relations",
      shortDescription: "Harmonizing workforce dynamics with strict regulatory rigor.",
      fullDescription: `Navigating Indonesia's employment landscape requires a delicate balance of technical compliance and practical strategy. We offer comprehensive services across the full spectrum of employment law, from drafting complex executive agreements to negotiating collective labor agreements.

We provide strategic counsel on termination rights, severance obligations, and industrial dispute resolution, ensuring our clients maintain a stable and compliant workforce.`
    },
    {
      id: "vc-growth",
      title: "Venture Capital & High-Growth",
      shortDescription: "Bridging the gap between ambitious founders and strategic capital.",
      fullDescription: `DITRA is a trusted partner for the venture ecosystem. We possess a deep understanding of the VC landscape, advising venture capital firms, private equity funds, and corporate venture arms, as well as high-growth startups through all fundraising stages.

Our partners’ international background equips us to handle sophisticated equity structuring, term sheet negotiations, and exit strategies, ensuring that innovation is backed by solid legal foundations.`
    },
    {
      id: "real-estate",
      title: "Real Estate & Property",
      shortDescription: "Maximizing asset value in property development and infrastructure.",
      fullDescription: `We advise on major real estate transactions across residential, commercial, and industrial sectors. Our team represents developers, investors, and corporate tenants in acquisitions, disposals, and leasing arrangements.

We work closely with clients to navigate land acquisition laws, zoning regulations, and construction contracts, ensuring seamless transaction execution and risk mitigation in Indonesia’s property market.`
    },
    {
      id: "mining",
      title: "Mining & Resources",
      shortDescription: "Strategic counsel for exploration, production, and resource acquisition.",
      fullDescription: `We bring specialized expertise to the mining sector, covering the full lifecycle of mining projects—from exploration and mine development to offtake agreements and divestments.

Our lawyers have successfully advised on transactions involving coal, nickel, gold, and copper. We possess deep knowledge of the regulatory shifts in the mining industry, guiding major corporations and junior explorers through licensing, compliance, and operational challenges.`
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      shortDescription: "Powering the energy transition with robust legal frameworks.",
      fullDescription: `DITRA is committed to the future of energy. We advise on the acquisition, development, and financing of renewable energy projects, including solar, hydro, and biomass.

Our team is adept at structuring power purchase agreements (PPAs) and navigating the regulatory complexities of the renewable sector in Indonesia, helping clients capitalize on the shift toward sustainable energy sources.`
    },
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      shortDescription: "Navigating the intersection of medical innovation and business regulation.",
      fullDescription: `We bring a sector-focused approach to healthcare M&A and investment. Our team advises on hospital acquisitions, pharmaceutical regulations, and medical technology investments.

From structuring deals to conducting specialized due diligence, we ensure compliance with Indonesia’s strict healthcare regulations, enabling our clients to navigate growth opportunities in this critical sector with confidence.`
    },
    {
      id: "hospitality",
      title: "Hospitality & Tourism",
      shortDescription: "Elevating hospitality investments through sound legal structures.",
      fullDescription: `DITRA provides tailored legal services for the hospitality industry. We assist owners, operators, and investors in hotel management agreements, asset acquisitions, and joint ventures.

Our deep sector knowledge allows us to address the unique challenges of tourism developments, ensuring that our clients’ assets are protected and their commercial objectives are met in Indonesia’s competitive hospitality market.`
    },
    {
      id: "consumer-goods",
      title: "Consumer Goods (FMCG)",
      shortDescription: "Supporting market leaders in distribution, compliance, and expansion.",
      fullDescription: `We advise major players in the Fast-Moving Consumer Goods (FMCG) sector on M&A, foreign direct investment, and regulatory compliance.

Our team understands the supply chain and distribution complexities of the Indonesian market, providing strategic guidance on market entry, product registration, and corporate restructuring to optimize operational efficiency.`
    },
    {
      id: "carbon-markets",
      title: "Carbon Markets & Climate Finance",
      shortDescription: "Pioneering legal frameworks for carbon trading and environmental assets.",
      fullDescription: `We are at the forefront of environmental law, representing clients in carbon trading, forestry projects, and climate finance. Our strong relationships with regulatory authorities enable us to provide effective guidance on the evolving carbon exchange mechanisms.

We advise on carbon project development, emissions reduction purchase agreements (ERPAs), and regulatory compliance, helping clients achieve their sustainability goals while unlocking new revenue streams.`
    }
  ],
};

export const ID: Translations = {
  nav: {
    home: 'Beranda',
    practices: 'Layanan',
    people: 'Tim Kami',
    insights: 'Wawasan',
    careers: 'Karir',
    contact: 'Hubungi',
  },
  hero: {
    title1: 'Visi',
    title2: 'Strategis,',
    title3: 'Kepercayaan Utuh.',
    subtitle: 'Menavigasi kompleksitas hukum Indonesia dengan standar internasional dan pendekatan visioner.',
    cta1: 'Bermitra Dengan Kami',
    cta2: 'Keahlian Kami',
  },
  home: {
    firmTitle: 'Tentang Firma',
    firmSubtitle: 'Agilitas modern. Keunggulan tradisional.',
    firmDesc: 'DITRA adalah kemitraan hukum terkemuka yang dibangun di atas pengalaman puluhan tahun. Kami menggabungkan kelincahan firma butik modern dengan kecanggihan yang diperlukan untuk transaksi lintas batas yang kompleks, bertindak sebagai arsitek tepercaya bagi keputusan bisnis paling kritis klien kami.',
    meetTeam: 'Temui Partner Kami',
    expertiseTitle: 'Keahlian',
    expertiseSubtitle: 'Area Praktik',
    viewAll: 'Lihat Semua Layanan',
    quote: '"Kami tidak hanya menafsirkan hukum; kami memanfaatkannya untuk membangun keuntungan komersial yang berkelanjutan bagi klien kami."',
    quoteAuthor: 'Ditra Law Partnership',
    interiorQuote: '"Dua dekade keunggulan dalam strategi korporasi."',
    insightsTitle: 'Perspektif',
    insightsSubtitle: 'Analisis Hukum',
    readMore: 'Baca Analisis',
  },
  practices: {
    capabilities: 'Kapabilitas',
    title: 'Praktik & Keahlian',
    subtitle: 'Solusi hukum komprehensif yang disesuaikan dengan tantangan unik lanskap bisnis Indonesia yang dinamis.',
    index: 'Indeks Praktik',
  },
  people: {
    team: 'Tim Kami',
    title: 'Profesional Kami',
    subtitle: 'Kolektif pemikir hukum berpengalaman yang didedikasikan untuk kesuksesan komersial dan presisi regulasi.',
    readBio: 'Lihat Profil',
    bio: {
      biography: 'Biografi Profesional',
      education: 'Pendidikan',
      admissions: 'Afiliasi & Izin',
      languages: 'Bahasa',
    }
  },
  insights: {
    title: 'Intelijen Pasar',
    subtitle: 'Analisis dan komentar mengenai perkembangan regulasi terbaru dan tren pasar.',
    filterAll: 'Semua Topik',
  },
  careers: {
    title: 'Karir di DITRA',
    subtitle: 'Kami mencari talenta hukum luar biasa untuk membentuk masa depan firma kami.',
    cultureTitle: 'Budaya Kami',
    cultureDesc: 'Di DITRA, kami menjunjung tinggi budaya ketelitian intelektual dan keunggulan kolaboratif. Kami berkomitmen pada bimbingan dan pertumbuhan profesional, menawarkan lingkungan di mana pengacara ambisius dapat berkembang sambil memberikan layanan terbaik.',
    openingsTitle: 'Peluang Saat Ini',
    noOpenings: 'Saat ini belum ada posisi terbuka, namun kami menyambut pernyataan minat dari kandidat berkualitas tinggi.',
    apply: 'Lamar Sekarang',
  },
  contact: {
    getInTouch: 'Hubungi Kami',
    title: 'Kontak',
    form: {
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      subject: 'Subjek',
      message: 'Pesan',
      send: 'Kirim Pertanyaan',
      sending: 'Mengirim...',
      sent: 'Terima kasih. Pertanyaan Anda telah diterima.',
      error: 'Pengiriman gagal. Silakan coba lagi.',
    },
    office: {
      title: 'Kantor Jakarta',
      address: 'Alamat',
      email: 'Email',
      phone: 'Telepon',
      viewMap: 'Lihat di Google Maps',
    },
  },
  footer: {
    slogan: 'Visi Strategis.\nDibangun atas Kepercayaan.',
    office: 'Kantor',
    links: 'Navigasi',
    insights: 'Wawasan',
    subscribe: 'Berlangganan berita hukum.',
    subscribed: 'Berhasil berlangganan.',
    rights: 'DITRA Law Partnership.',
    designed: 'Designed for Excellence.',
    privacy: 'Kebijakan Privasi',
  },
  search: {
    placeholder: 'Cari layanan, profesional, atau wawasan...',
    noResults: 'Tidak ada hasil ditemukan.',
    practices: 'Area Praktik',
    people: 'Profesional',
  },
  cookie: {
    text: 'Kami menggunakan cookie untuk mengoptimalkan pengalaman digital Anda dan menganalisis lalu lintas situs.',
    accept: 'Terima',
  },
  notFound: {
    title: 'Halaman Tidak Ditemukan',
    desc: 'Sumber daya yang Anda cari tidak tersedia atau telah dipindahkan.',
    button: 'Kembali ke Beranda',
  },
  practicesList: [
    {
      id: "ma",
      title: "Merger & Akuisisi",
      shortDescription: "Merancang transaksi bernilai tinggi dan konsolidasi strategis di seluruh wilayah.",
      fullDescription: `DITRA berada di garis depan M&A Indonesia, menasihati perusahaan multinasional dan entitas domestik terkemuka dalam transaksi lintas batas yang kompleks. Keahlian kami mencakup akuisisi profil tinggi untuk korporasi Indonesia dan investasi masuk untuk klien di seluruh Australia, Tiongkok Raya, Jepang, dan Asia Tenggara.

Kami menyediakan layanan penasihat ujung-ke-ujung yang mencakup pengambilalihan swasta dan publik, skema pengaturan, pembelian ekuitas swasta, uji tuntas, dan kepatuhan regulasi. Kami unggul dalam industri yang sangat diatur, di mana pemahaman mendalam kami tentang lanskap komersial dan politik memberikan nilai nyata pada struktur kesepakatan.`
    },
    {
      id: "capital-market",
      title: "Pasar Modal",
      shortDescription: "Menavigasi pasar publik, IPO, dan struktur utang yang kompleks dengan presisi.",
      fullDescription: `Kami memiliki keahlian mendalam baik di Pasar Modal Ekuitas (ECM) maupun Pasar Modal Utang (DCM), dengan rekam jejak yang kuat dalam Penawaran Umum Perdana (IPO) dan rights issue. Tim kami membimbing emiten dan penjamin emisi melalui seluk-beluk penggalangan modal, memastikan kepatuhan ketat terhadap peraturan OJK sambil mengoptimalkan hasil komersial.

Keanggotaan Partner kami di HKHPM (Himpunan Konsultan Hukum Pasar Modal) menegaskan kemampuan kami untuk memberikan panduan strategis tingkat tinggi mengenai kerangka kerja pasar modal Indonesia yang terus berkembang.`
    },
    {
      id: "banking-finance",
      title: "Perbankan & Keuangan",
      shortDescription: "Menyusun struktur modal yang mendorong pertumbuhan bagi pemberi pinjaman dan peminjam.",
      fullDescription: `DITRA menasihati lembaga keuangan domestik dan internasional utama dalam berbagai masalah perbankan. Tim kami memiliki rekam jejak yang tangguh dalam pembiayaan proyek, pinjaman sindikasi, dan kepatuhan regulasi.

Kami mewakili peminjam, firma ekuitas swasta, dan konglomerasi perusahaan dalam pembiayaan lintas batas, serta semakin banyak menangani transaksi domestik di bawah hukum Indonesia menggunakan dokumentasi berstandar internasional.`
    },
    {
      id: "employment",
      title: "Ketenagakerjaan & Hubungan Industrial",
      shortDescription: "Menyelaraskan dinamika tenaga kerja dengan ketelitian regulasi yang ketat.",
      fullDescription: `Menavigasi lanskap ketenagakerjaan Indonesia memerlukan keseimbangan antara kepatuhan teknis dan strategi praktis. Kami menawarkan layanan komprehensif di seluruh spektrum hukum ketenagakerjaan, mulai dari menyusun perjanjian eksekutif yang kompleks hingga menegosiasikan perjanjian kerja bersama.

Kami memberikan nasihat strategis tentang hak pemutusan hubungan kerja, kewajiban pesangon, dan penyelesaian perselisihan hubungan industrial, memastikan klien kami mempertahankan tenaga kerja yang stabil dan patuh.`
    },
    {
      id: "vc-growth",
      title: "Modal Ventura & Pertumbuhan Tinggi",
      shortDescription: "Menjembatani kesenjangan antara pendiri ambisius dan modal strategis.",
      fullDescription: `DITRA adalah mitra tepercaya bagi ekosistem ventura. Kami memiliki pemahaman mendalam tentang lanskap VC, menasihati firma modal ventura, dana ekuitas swasta, dan unit ventura korporat, serta startup dengan pertumbuhan tinggi melalui semua tahap penggalangan dana.

Latar belakang internasional partner kami membekali kami untuk menangani penataan ekuitas yang canggih, negosiasi term sheet, dan strategi keluar (exit), memastikan bahwa inovasi didukung oleh fondasi hukum yang kokoh.`
    },
    {
      id: "real-estate",
      title: "Real Estat & Properti",
      shortDescription: "Memaksimalkan nilai aset dalam pengembangan properti dan infrastruktur.",
      fullDescription: `Kami menasihati transaksi real estat utama di sektor perumahan, komersial, dan industri. Tim kami mewakili pengembang, investor, dan penyewa korporat dalam akuisisi, pelepasan, dan pengaturan sewa.

Kami bekerja sama dengan klien untuk menavigasi hukum pembebasan lahan, peraturan zonasi, dan kontrak konstruksi, memastikan eksekusi transaksi yang mulus dan mitigasi risiko di pasar properti Indonesia.`
    },
    {
      id: "mining",
      title: "Pertambangan & Sumber Daya Alam",
      shortDescription: "Nasihat strategis untuk eksplorasi, produksi, dan akuisisi sumber daya.",
      fullDescription: `Kami membawa keahlian khusus ke sektor pertambangan, mencakup siklus hidup penuh proyek pertambangan—mulai dari eksplorasi dan pengembangan tambang hingga perjanjian offtake dan divestasi.

Pengacara kami telah berhasil menasihati transaksi yang melibatkan batubara, nikel, emas, dan tembaga. Kami memiliki pengetahuan mendalam tentang pergeseran regulasi dalam industri pertambangan, membimbing korporasi besar dan penjelajah junior melalui perizinan, kepatuhan, dan tantangan operasional.`
    },
    {
      id: "renewable-energy",
      title: "Energi Terbarukan",
      shortDescription: "Mendukung transisi energi dengan kerangka hukum yang kuat.",
      fullDescription: `DITRA berkomitmen untuk masa depan energi. Kami menasihati akuisisi, pengembangan, dan pembiayaan proyek energi terbarukan, termasuk tenaga surya, hidro, dan biomassa.

Tim kami mahir dalam menyusun perjanjian pembelian tenaga listrik (PPA) dan menavigasi kompleksitas regulasi sektor terbarukan di Indonesia, membantu klien memanfaatkan pergeseran menuju sumber energi berkelanjutan.`
    },
    {
      id: "healthcare",
      title: "Kesehatan & Ilmu Hayati",
      shortDescription: "Menavigasi persimpangan inovasi medis dan regulasi bisnis.",
      fullDescription: `Kami membawa pendekatan berfokus pada sektor untuk M&A dan investasi kesehatan. Tim kami menasihati akuisisi rumah sakit, regulasi farmasi, dan investasi teknologi medis.

Dari penataan kesepakatan hingga melakukan uji tuntas khusus, kami memastikan kepatuhan terhadap peraturan kesehatan Indonesia yang ketat, memungkinkan klien kami untuk menavigasi peluang pertumbuhan di sektor kritis ini dengan percaya diri.`
    },
    {
      id: "hospitality",
      title: "Perhotelan & Pariwisata",
      shortDescription: "Meningkatkan investasi perhotelan melalui struktur hukum yang baik.",
      fullDescription: `DITRA menyediakan layanan hukum yang disesuaikan untuk industri perhotelan. Kami membantu pemilik, operator, dan investor dalam perjanjian manajemen hotel, akuisisi aset, dan usaha patungan.

Pengetahuan sektor kami yang mendalam memungkinkan kami untuk mengatasi tantangan unik pengembangan pariwisata, memastikan bahwa aset klien kami terlindungi dan tujuan komersial mereka terpenuhi di pasar perhotelan Indonesia yang kompetitif.`
    },
    {
      id: "consumer-goods",
      title: "Barang Konsumen (FMCG)",
      shortDescription: "Mendukung pemimpin pasar dalam distribusi, kepatuhan, dan ekspansi.",
      fullDescription: `Kami menasihati pemain utama di sektor Barang Konsumen Bergerak Cepat (FMCG) mengenai M&A, investasi asing langsung, dan kepatuhan regulasi.

Tim kami memahami kompleksitas rantai pasokan dan distribusi pasar Indonesia, memberikan panduan strategis tentang entri pasar, pendaftaran produk, dan restrukturisasi perusahaan untuk mengoptimalkan efisiensi operasional.`
    },
    {
      id: "carbon-markets",
      title: "Pasar Karbon & Keuangan Iklim",
      shortDescription: "Merintis kerangka hukum untuk perdagangan karbon dan aset lingkungan.",
      fullDescription: `Kami berada di garis depan hukum lingkungan, mewakili klien dalam perdagangan karbon, proyek kehutanan, dan keuangan iklim. Hubungan kuat kami dengan otoritas regulasi memungkinkan kami memberikan panduan efektif tentang mekanisme pertukaran karbon yang berkembang.

Kami menasihati pengembangan proyek karbon, perjanjian pembelian pengurangan emisi (ERPA), dan kepatuhan regulasi, membantu klien mencapai tujuan keberlanjutan mereka sambil membuka aliran pendapatan baru.`
    }
  ],
};