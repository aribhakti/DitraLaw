import { PracticeArea, Lawyer, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  address: [
    "Jakarta Mori Tower Level 18",
    "Jl. Jend. Sudirman Kav. 40-41",
    "Bendungan Hilir, Jakarta 10210",
    "Indonesia"
  ],
  email: "info@ditralaw.com",
  phone: "+6221 509 046428",
  fax: "+6221 509 04801"
};

export const LAWYERS: Lawyer[] = [
  {
    name: "Adhika Aditya",
    role: "Partner",
    phone: "+6221 509 046428",
    email: "adhika.aditya@ditralaw.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    bio: `Aditya is a Partner at DITRA with nearly two decades of experience in the legal industry. Before establishing DITRA, he spent over 15 years at an international law firm, where he built a strong reputation advising both local and international corporations on complex corporate transactions.

Throughout his career, he has built a solid reputation for advising both local and international corporations on various corporate transactions, including mergers and acquisitions, divestment, joint ventures, fundraisings, foreign investments, company restructuring as well as private equity and venture capital style transactions.

He has worked across a wide range of industries, including healthcare, retail, manufacturing, FMCG, fintech (covering payments, equity crowdfunding, e-money, e-wallets, peer-to-peer lending, and digital banking), digital and technology startups, natural resources, and real estate.

Aditya also has significant experience in financing and is well-versed in equity capital markets.`,
    education: [
      "S.H., University of Trisakti"
    ],
    admissions: [
      "Licensed to practice law as an advocate by the Indonesian Bar Association (PERADI)",
      "A member of the Financial Sector Legal Counsel Bar Association (HKHSK)",
      "A registered capital market legal counsel at the Financial Services Authority (OJK)"
    ],
    languages: ["Indonesian", "English"]
  },
  {
    name: "Adhi Wardhana",
    role: "Of Counsel",
    phone: "+6221 509 046428",
    email: "adhi.wardhana@ditralaw.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    bio: `Adhi is an Of Counsel at DITRA with more than 15 years of combined experience in an international law firm, as an in-house counsel, and in civil society organizations. His expertise focuses on corporate and commercial matters, capital market transactions (including IPOs, rights issues, and private placements), and foreign direct investment. Beyond his legal experience, he has built a strong network and profound understanding of Indonesia’s policy landscape, particularly in carbon markets, forestry, climate change, and palm oil governance.

Adhi has extensive experience in equity capital markets and has advised clients across various industries, including technology, media, and telecommunications (TMT), manufacturing, the digital economy, and natural resources.`,
    education: [
      "S.H., University of Padjadjaran"
    ],
    admissions: [
      "Licensed to practice law as an advocate by the Indonesian Bar Association (PERADI)"
    ],
    languages: ["Indonesian", "English"]
  }
];

// NOTE: The practice area descriptions are now fully managed in locales.ts to support internationalization.
// The PRACTICES array here is kept for structure if needed elsewhere, but UI uses useLang().t.practicesList
export const PRACTICES: PracticeArea[] = [];