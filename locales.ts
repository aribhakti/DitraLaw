import { Translations } from './types';

export const EN: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    people: 'Team',
    insights: 'Insights',
    careers: 'Careers',
    contact: 'Contact',
  },
  hero: {
    title1: 'Focused on Solutions,',
    title2: 'Built on Trust.',
    subtitle: 'Navigating the complexities of Indonesian law with international standards and a forward-thinking approach.',
    cta1: 'Partner With Us',
    cta2: 'Our Services',
  },
  home: {
    firmTitle: 'The Firm',
    firmSubtitle: 'Local Firm, International Standards: DITRA\'s Commitment to Quality.',
    firmDesc: 'DITRA is a local law firm led by lawyers with nearly twenty years of experience in corporate and commercial law, which uphold international standards to ensure its clients receive high-quality legal services at competitive costs. The firm combines the dedicated service of a specialized practice with the technical expertise required for complex domestic and cross-border transactions. We act as strategic partners to our clients’ most important business decisions.',
    meetTeam: 'Meet Our Team',
    clientServicesTitle: 'Client Services',
    clientServicesSubtitle: 'Practice Areas and Expertise',
    viewAll: 'View All Our Services',
    insightsTitle: 'News & Insights',
    insightsSubtitle: 'News & Insights',
    readMore: 'Read Article',
  },
  services: {
    title: 'Services',
    subtitle: 'At DITRA, we offer comprehensive legal services across a wide range of practice areas and industries. Our team is dedicated to delivering innovative, client-focused solutions tailored to the unique challenges and opportunities in today’s dynamic legal and business landscape.',
    mainTitle: 'Practice Areas and Expertise',
    practiceAreasHeader: 'Practice Areas',
    expertiseHeader: 'Expertise',
    index: 'Services Index',
  },
  people: {
    team: 'The Team',
    title: 'Our People',
    subtitle: 'Our team of experienced lawyers combines deep legal expertise with practical insights into Indonesia’s business and regulatory landscape. Meet our key contacts and discover how their expertise drives client success.',
    readBio: 'View Profile',
    bio: {
      overview: 'Overview',
      education: 'Education',
      qualifications: 'Qualifications',
      languages: 'Languages',
      memberships: 'Membership',
    },
    associates: 'Associates'
  },
  insights: {
    title: 'News & Insights',
    subtitle: 'At DITRA, we are committed to sharing valuable legal insights through our regular publications. Our team continuously analyzes legal developments, industry trends and key issues to deliver-in depth articles, reports and thought leadership pieces.',
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
    slogan: 'Focused on Solutions,\nBuilt on Trust.',
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
    placeholder: 'Search services, professionals, or insights...',
    noResults: 'No matches found.',
    services: 'Services',
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
  
  practiceAreas: [
    {
      id: "corporate-commercial",
      title: "Corporate and Commercial",
      shortDescription: "Comprehensive solutions for business operations.",
      fullDescription: `Our team provides comprehensive, solutions-focused advice on all aspects of doing business in Indonesia, from initial investment to day-to-day operations.

We assist domestic and foreign investors with the structuring and corporate aspects of their investments and company establishment in Indonesia (PT PMA), regulatory licensing, corporate compliance and commercial matters, ensuring every step meets local formalities. By combining international standard documentation with excellent relationships with governmental authorities typically involved in such process and reputable notaries, we deliver practical advice that is easy to understand and implement.`,
      // Image: Abstract office building glass
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "ma",
      title: "Mergers & Acquisitions",
      shortDescription: "Advising on high-profile domestic and cross-border transactions.",
      fullDescription: `We specialize in Indonesian M&A with extensive expertise advising multinational corporations and leading Indonesian entities on high-profile domestic and cross-border transactions across the region. We provide a full range of integrated services, including advice on transaction structuring, legal due diligence exercise, preparation of sale and purchase agreements, shareholders agreement and completion. Our team has a proven track record of handling inbound acquisitions for clients from key markets such as Australia, China, Hong Kong, Japan, Malaysia and Singapore, ensuring every deal is grounded in technical precision and practical business insight.

Recognizing that M&A transactions are highly time-sensitive, we provide flexible and responsive support to ensure rapid turnaround times. We navigate the complexities of highly regulated industries by providing end-to-end assistance with regulatory filings, internal corporate approvals and compliance with Indonesia’s legal regimes. By bridging the gap between international standards and local practice, we act as trusted partners to corporate clients and financial advisors, delivering a seamless service that covers everything from initial formation to the final completion of the deal.`,
      // Image: Handshake or abstract connection
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0ce88e3?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "capital-markets",
      title: "Capital Markets",
      shortDescription: "Navigating public markets, IPOs and debt structures.",
      fullDescription: `DITRA has extensive experience in both Equity Capital Markets (ECM) and Debt Capital Markets (DCM), with particular expertise in initial public offerings (IPOs) and rights issues. Our team has successfully guided clients through the complexities of capital raising, ensuring compliance with Indonesian regulations and addressing market challenges to deliver optimal results. We provide end-to-end support for our clients, from structuring and documentation to investor relations and market positioning.

Our Partner is also a member of the HKHSK (Himpunan Konsultan Hukum Sektor Keuangan), further enhancing our firm’s ability to offer high-level insights and strategic guidance on capital markets transactions in Indonesia. This membership connects DITRA with a strong network of market professionals, ensuring that our clients benefit from up-to-date regulatory knowledge and industry trends.`,
      // Image: Financial chart or stock exchange building abstract
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "banking-finance",
      title: "Banking & Finance",
      shortDescription: "Structuring financing solutions for lenders and borrowers.",
      fullDescription: `DITRA has extensive experience in advising both domestic and international investors on a wide array of banking and finance matters in Indonesia.

Our team has a strong track record in financing arrangements, regulatory compliance and structuring financial transactions. We have represented borrowers, private equity firms and corporate groups in cross-border financings and are increasingly handling domestic transactions under Indonesian law, utilizing international-standard documentation.

With deep expertise in Indonesian banking regulations and legal frameworks, we help clients navigate complex financial landscapes while ensuring the successful execution of high-stakes transactions. Our team collaborates with corporate clients to structure deals, mitigate risks, and maintain compliance with current laws and regulations.`,
      // Image: Modern banking architecture
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "employment",
      title: "Employment",
      shortDescription: "Nuanced understanding of employment regulations.",
      fullDescription: `Navigating employment laws in Indonesia demands a nuanced understanding of both technical regulations and practical implementation. DITRA is known for providing clear, commercial and highly practical advice across all aspects of employment. Our team of experienced lawyers offers comprehensive legal services across wide aspects of employment law and industrial relations in Indonesia, from employment agreements to developing company policies and negotiating collective labor agreements.

We act as strategic partners to our clients, advising extensively on both the legal and practical aspects of the employment lifecycle, including termination rights, severance obligations and settlement agreements.`,
      // Image: Office meeting or people collaboration
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  expertise: [
    {
      id: "joint-venture",
      title: "Joint Venture",
      shortDescription: "Structuring complex joint ventures and partnerships.",
      fullDescription: `DITRA specializes in structuring complex joint ventures, bridging diverse interests into cohesive and legally sound partnerships. We provide end-to-end support for domestic and cross-border collaborations, from initial partner due diligence and development of governance frameworks to the negotiation of shareholder agreements and management structures.

We bring a deep understanding of the critical mechanics that define a successful partnership, including minority protection rights, non-compete covenants, deadlock resolutions and clear exit mechanisms. By balancing operational control with risk-sharing and regulatory compliance, we ensure that our clients' commercial interests are protected throughout the entire lifecycle of the joint venture.`,
      // Image: Two buildings connecting or abstract knot
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "soes",
      title: "SOEs and Public Authorities",
      shortDescription: "Navigating requirements of State-Owned Enterprises.",
      fullDescription: `DITRA offers a sophisticated depth of expertise in navigating the unique legal and administrative requirements of State-Owned Enterprises (SOEs) and public agencies.

With over 15 years of our team experience in building strong and continuous relationships with various institutions and agencies, including government bodies, non-government organizations and SOEs along with their subsidiaries, our firm serves as a strategic bridge between public interest mandates and commercial objectives. These ongoing collaborations ensure that we consistently receive up-to-date insights, which serve as a key foundation in navigating Indonesia’s evolving regulatory landscape.

Our commitment to understanding clients’ needs and delivering relevant, actionable guidance has strengthened DITRA’s reputation as a trusted partner. Our role goes beyond legal support; we are committed to the success and sustainability of our clients’ businesses in Indonesia, helping them confidently address the complexities of their legal and business challenges.`,
      // Image: Government building or formal architecture
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e090?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "construction",
      title: "Construction",
      shortDescription: "Deep regulatory expertise with transaction-driven approach.",
      fullDescription: `DITRA advises domestic and international clients on complex construction projects, combining deep regulatory expertise with a commercial, transaction-driven approach. We support the full project lifecycle, from land acquisition and due diligence to development structuring, construction execution and final disposition.

Our team specializes in high-stakes projects across the commercial, industrial, residential and hospitality sectors. We are particularly adept at navigating the unique legal requirements of construction-based cooperation schemes, ensuring commercial objectives align with Indonesia’s administrative and regulatory frameworks.`,
      // Image: Construction details or architectural blueprints
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "vc-growth",
      title: "VC & Growth Companies",
      shortDescription: "Guiding investors and startups through the growth lifecycle.",
      fullDescription: `Our team has a deep understanding of the venture capital landscape, having worked with a wide range of investors, including venture capital firms, private equity funds, and corporate investors, as well as fast-growing startups across various fundraising stages. We guide clients through the entire investment lifecycle, from initial seed funding to later-stage investments.

Our partners’ extensive background and prior experience at an international law firm have equipped them with a deep understanding of the nuances of venture capital transactions. This enables us to offer sound legal guidance on equity structuring, term sheets shareholder agreements, regulatory compliance and exit strategies.

With a strong grasp of the challenges and opportunities in Indonesia’s venture capital space, DITRA serves as a trusted advisor for investors and startups navigating the complexities of the ecosystem.`,
      // Image: Modern tech office or upward graph abstract
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "insurance",
      title: "Insurance",
      shortDescription: "Specialized counsel for insurance strategy and M&A.",
      fullDescription: `Our team provides specialized legal counsel at the intersection of corporate strategy and insurance regulation and has extensive experience in advising on mergers and acquisitions within the insurance sector. Our expertise is rooted in an international law firm pedigree, allowing us to navigate the complexities of insurance M&A transactions effectively.

We have advised a broad range of clients, including insurance companies, private equity firms and multinational corporations, on transaction structuring, regulatory due diligence, acquisitions, regulatory compliance and integration processes.

This experience positions DITRA as a trusted advisor for clients seeking strategic guidance in the competitive and highly regulated insurance industry.`,
      // Image: Umbrella or protection abstract
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "real-estate",
      title: "Real Estate & Property",
      shortDescription: "End-to-end support for real estate mandates.",
      fullDescription: `DITRA has significant experience advising on corporate transactions across various sectors, including real estate and property. Representing clients on both the buy-side and sell-side, our team works closely with stakeholders to understand their objectives, maximize sales proceeds, and negotiate optimal deal terms. From overseeing due diligence to ensuring a seamless closing, we provide end-to-end support for real estate and property mandates.

Our team acts for prominent property owners such as developers, corporate property users, as well as tourism and hotel groups. With deep knowledge of the Indonesian real estate market and regulatory landscape, we deliver strategic, tailored legal advice that drives successful and compliant transactions.`,
      // Image: Modern apartment or building facade
      image: "https://images.unsplash.com/photo-1460317442991-0ec2aa72af41?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "mining",
      title: "Mining",
      shortDescription: "Expertise spanning the full mining project lifecycle.",
      fullDescription: `We bring specialized expertise in mining M&A, with extensive experience spanning the full project lifecycle, from exploration and mine development to the acquisition and disposal of mining assets. Our team advises on complex operational and regulatory issues, including mining contracts, procurement and sales and marketing arrangements.

Having previously worked at leading international law firms, our lawyers have successfully navigated high-stakes transactions involving a diverse range of minerals, including nickel, coal, gold, copper and iron ore.

Their expertise enables them to lead the team in serving a broad spectrum of clients, from major mining corporations and junior explorers to multinational companies and investors. By bridging the gap between global standards and Indonesia’s complex regulatory framework, DITRA serves as a trusted advisor in this highly competitive sector.`,
      // Image: Aerial mining view or texture
      image: "https://images.unsplash.com/photo-1518709414768-a88986a45e5d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      shortDescription: "Acquisition and development of renewable energy projects.",
      fullDescription: `We offer comprehensive legal services for the acquisition, restructuring and development of renewable energy projects in Indonesia. Our team brings deep expertise to the sector, navigating the complexities of renewable asset portfolios and the specific regulatory frameworks governing green energy. We are adept at structuring and documenting arrangements tailored to the unique technical and commercial requirements of the energy sector.

We take a pragmatic, results-driven approach to help clients navigate Indonesia’s complex regulatory landscape. By focusing on strategic outcomes, we ensure each transaction aligns with our clients’ objectives while proactively addressing the local challenges of Indonesia’s evolving environmental and energy policies.`,
      // Image: Solar panels or wind turbine abstract
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      shortDescription: "Healthcare-focused approach to corporate M&A.",
      fullDescription: `DITRA brings a specialized, healthcare-focused approach to corporate M&A, advising on significant domestic and cross-border transactions. Our core team has a proven track record of supporting high-profile mandates, overseeing every stage of the investment process, from initial structuring and legal due diligence to documentation, negotiation and closing.

Our deep understanding of Indonesia’s unique regulatory landscape and industry-specific challenges ensures seamless execution and full compliance with local laws. By combining sector-specific technicality with practical commercial solutions, we enable our clients to navigate investments and growth opportunities in the healthcare space with confidence.`,
      // Image: Clean, white/blue abstract or lab
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "hospitality",
      title: "Hospitality",
      shortDescription: "Tailored services for Indonesia's hospitality sector.",
      fullDescription: `DITRA provides comprehensive legal services tailored to the unique demands of Indonesia’s hospitality sector. Combining deep industry knowledge with a results-driven approach, we help clients navigate complex regulatory challenges and capitalize on emerging growth opportunities. Our expertise spans the full project lifecycle, including foreign investment structuring, joint ventures and the development of hospitality projects.

We work closely with our clients to ensure compliance with Indonesia’s legal and regulatory landscape. From structuring deals and drafting agreements to conducting due diligence, we provide practical, results-driven legal solutions. Our team has extensive experience advising hotels, resorts and tourism-related businesses, equipping us to address industry-specific challenges effectively. At DITRA, we focus on helping clients achieve their business goals while mitigating risks in Indonesia’s dynamic hospitality sector.`,
      // Image: Luxury hotel interior or pool abstract
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "consumer-retail",
      title: "Consumer and Retail",
      shortDescription: "Strategic guidance for the FMCG industry.",
      fullDescription: `DITRA offers extensive experience advising on high-stakes M&A and foreign investments within Indonesia’s Fast-Moving Consumer Goods (FMCG) industry. Our team provides strategic guidance on deal structuring, regulatory compliance and transaction execution, ensuring every mandate is optimized for the local market.

Our team advised both local and international clients in the acquisition, merger and restructuring of FMCG businesses across the food and beverage, personal care and general consumer product segments. By combining a deep understanding of market trends with specialized knowledge of Indonesian consumer law, we deliver tailored, practical solutions that help our clients navigate sector specific challenges and achieve their commercial objectives effectively.`,
      // Image: Abstract shopping or retail space
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "manufacturing",
      title: "Manufacturing and Industry",
      shortDescription: "Practical support for industrial growth and expansion.",
      fullDescription: `DITRA advises domestic and international manufacturing and industrial clients, combining deep sector knowledge with a practical, commercially focused approach. We support our clients in achieving growth through strategic M&A, operational expansion and innovation driven investment.

Our expertise spans the full industrial lifecycle, including corporate transactions, regulatory and environmental compliance and industrial relations. We also provide specialized support in intellectual property, technology, real estate planning, and competition issues. With a broad reach across diverse manufacturing sectors, DITRA ensures that our clients’ operations remain compliant and competitive within Indonesia’s complex industrial landscape.`,
      // Image: Factory floor or industrial machinery
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "carbon-markets",
      title: "Carbon Markets",
      shortDescription: "Expertise in climate change, forestry, and carbon projects.",
      fullDescription: `We have extensive experience representing clients on matters related to climate change, forestry, carbon and environmental infrastructure. Our strong relationships with key Indonesian institutions and regulatory authorities enable us to provide effective support and guidance throughout the regulatory and bureaucratic processes in Indonesia.

Our team has partnered with a wide range of stakeholders, including research groups, NGOs, and private sector leaders, to develop and implement large-scale carbon projects. We advise on every facet of the carbon lifecycle, including landlord arrangements, the acquisition of carbon businesses, offtake and trading agreements, regulatory compliance, and green financing. By combining technical environmental knowledge with legal precision, we help clients navigate the complexities of Indonesia’s emerging carbon businesses.`,
      // Image: Forest or nature abstract
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop"
    }
  ]
};