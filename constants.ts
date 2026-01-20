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
    // Professional male portrait
    image: "https://fshhzvdr1jy25963.public.blob.vercel-storage.com/Adhika%20Aditya.webp",
    bio: `Aditya is a Partner at DITRA with nearly two decades of experience in the legal industry. Before establishing DITRA, he spent over 15 years at an international law firm, where he built a strong reputation advising both local and international corporations on complex corporate transactions.

Throughout his career, he has built a solid reputation for advising both local and international corporations on various corporate transactions, including mergers and acquisitions, divestment, joint ventures, fundraisings, foreign investments, company restructuring as well as private equity and venture capital style transactions.

He has worked across a wide range of industries, including healthcare, retail, manufacturing, FMCG, fintech (covering payments, equity crowdfunding, e-money, e-wallets, peer-to-peer lending, and digital banking), digital and technology startups, natural resources, and real estate.

Aditya also has significant experience in financing and is well-versed in equity capital markets.`,
    education: [
      "S.H., University of Trisakti"
    ],
    qualifications: [
      "Licensed to practice law as an advocate by the Indonesian Bar Association (PERADI)",
      "A registered capital market legal counsel at the Financial Services Authority (OJK)"
    ],
    memberships: [
      "A member of the Financial Sector Legal Counsel Bar Association (HKHSK)"
    ],
    languages: ["Indonesian", "English"]
  },
  {
    name: "Adhi Wardhana",
    role: "Of Counsel",
    phone: "+6221 509 046428",
    email: "adhi.wardhana@ditralaw.com",
    // Professional male portrait, slightly different setting
    image: "https://fshhzvdr1jy25963.public.blob.vercel-storage.com/Adhi%20Wardhana.webp",
    bio: `Adhi is an Of Counsel at DITRA with more than 15 years of combined experience in an international law firm, as an in-house counsel, and in civil society organizations. His expertise focuses on corporate and commercial matters, capital market transactions (including IPOs, rights issues, and private placements), and foreign direct investment. Beyond his legal experience, he has built a strong network and profound understanding of Indonesia’s policy landscape, particularly in carbon markets, forestry, climate change, and palm oil governance.

Adhi has extensive experience in equity capital markets and has advised clients across various industries, including technology, media, and telecommunications (TMT), manufacturing, the digital economy, and natural resources.`,
    education: [
      "S.H., University of Padjadjaran"
    ],
    qualifications: [
      "Licensed to practice law as an advocate by the Indonesian Bar Association (PERADI)"
    ],
    languages: ["Indonesian", "English"]
  },
  {
    name: "Michael Ho",
    role: "Associate",
    phone: "+6221 509 046428",
    email: "michael.ho@ditralaw.com",
    image: "https://fshhzvdr1jy25963.public.blob.vercel-storage.com/Michael%20Ho%20LinkedIn.webp",
    bio: `Michael is a Trainee Associate at Ditra with experiences on various corporate matters.

Throughout his career, Michael has assisted on multiple corporate matters, including mergers and acquisitionns, fundraising, foreign investmennts, company restructurinng as well as asset transactions.

Michael’s experience spans across various industries, including shipping sector, manufacturing sectors, retail, state-owned enterprise and capital market sectors.`,
    education: [
      "S.H., University of Indonesia"
    ],
    languages: ["Indonesian", "English"]
  }
];

export const PRACTICES: PracticeArea[] = [];