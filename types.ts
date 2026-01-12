export interface PracticeArea {
  id: string;
  title: string;
  shortDescription?: string;
  fullDescription: string;
  image: string;
}

export interface Lawyer {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  education?: string[];
  qualifications?: string[];
  languages?: string[];
  memberships?: string[];
}

export interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
  fax: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export interface Insight {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    people: string;
    insights: string;
    careers: string;
    contact: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  home: {
    firmTitle: string;
    firmSubtitle: string;
    firmDesc: string;
    meetTeam: string;
    clientServicesTitle: string;
    clientServicesSubtitle: string;
    viewAll: string;
    insightsTitle: string;
    insightsSubtitle: string;
    readMore: string;
  };
  services: {
    title: string;
    subtitle: string;
    mainTitle: string;
    practiceAreasHeader: string;
    expertiseHeader: string;
    index: string;
  };
  people: {
    team: string;
    title: string;
    subtitle: string;
    readBio: string;
    bio: {
      overview: string;
      education: string;
      qualifications: string;
      languages: string;
      memberships: string;
    };
    associates: string;
  };
  insights: {
    title: string;
    subtitle: string;
    filterAll: string;
  };
  careers: {
    title: string;
    subtitle: string;
    cultureTitle: string;
    cultureDesc: string;
    openingsTitle: string;
    noOpenings: string;
    apply: string;
  };
  contact: {
    getInTouch: string;
    title: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      sent: string;
      error: string;
    };
    office: {
      title: string;
      address: string;
      email: string;
      phone: string;
      viewMap: string;
    };
  };
  footer: {
    slogan: string;
    office: string;
    links: string;
    insights: string;
    subscribe: string;
    subscribed: string;
    rights: string;
    designed: string;
    privacy: string;
  };
  search: {
    placeholder: string;
    noResults: string;
    services: string;
    people: string;
  };
  cookie: {
    text: string;
    accept: string;
  };
  notFound: {
    title: string;
    desc: string;
    button: string;
  };
  practiceAreas: PracticeArea[];
  expertise: PracticeArea[];
}