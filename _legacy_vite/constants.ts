import { PracticeArea, Lawyer, ContactInfo, Insight } from './types';

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
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
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
    name: "Associates",
    role: "Legal Team",
    phone: "+6221 509 046428",
    email: "info@ditralaw.com",
    // Team meeting/Collaboration abstract image
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    bio: "Our team of dedicated associates supports all practice areas. Detailed profiles coming soon.",
    education: [],
    qualifications: [],
    languages: ["Indonesian", "English"]
  }
];

export const PRACTICES: PracticeArea[] = [];

export const INSIGHTS: Insight[] = [
  {
    id: "evolution-ma-sea",
    title: "The Evolution of M&A in Southeast Asia",
    date: "Jan 12, 2026",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Exploring the shifting landscape of mergers and acquisitions in the region, driven by digital transformation and cross-border opportunities.",
    content: `
      <p>The Southeast Asian M&A landscape is undergoing a significant transformation, driven by a convergence of economic recovery, digital acceleration, and shifting geopolitical dynamics. As Indonesia solidifies its position as a key economic engine in the region, the nature of corporate transactions is evolving.</p>
      
      <h3>Key Trends Driving M&A</h3>
      <p>Several factors are contributing to the robust deal flow we are witnessing:</p>
      <ul>
        <li><strong>Digital Economy Growth:</strong> The rapid digitalization of Southeast Asia's economy is fueling consolidation in the tech sector, with fintech and e-commerce leading the charge.</li>
        <li><strong>Supply Chain Realignment:</strong> Global manufacturers are diversifying their supply chains, making Indonesia an attractive destination for industrial investment and acquisition.</li>
        <li><strong>ESG Considerations:</strong> Environmental, Social, and Governance (ESG) criteria are increasingly influencing deal valuations and due diligence processes.</li>
      </ul>

      <h3>Regulatory Outlook</h3>
      <p>The regulatory framework in Indonesia continues to adapt to support this growth. Recent improvements in the ease of doing business, combined with clearer guidelines on foreign investment, are boosting investor confidence. However, navigating the local nuances remains critical for successful deal execution.</p>

      <p>At DITRA, we advise clients to take a proactive approach to regulatory compliance and cultural integration to maximize value from cross-border transactions.</p>
    `
  },
  {
    id: "carbon-trading-regulations",
    title: "Carbon Trading Regulations in Indonesia",
    date: "Jan 05, 2026",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    excerpt: "New compliance frameworks are emerging for environmental assets. Understanding the impact on industrial sectors.",
    content: `
      <p>Indonesia has taken a major step forward in its commitment to climate action with the introduction of comprehensive carbon trading regulations. These new frameworks establish a cap-and-trade system and a carbon offset mechanism, creating a marketplace for carbon units.</p>

      <h3>The Carbon Exchange</h3>
      <p>The launch of the Carbon Exchange represents a pivotal moment. It provides a transparent platform for trading carbon credits, allowing businesses to monetize their emissions reductions. For companies in energy, forestry, and manufacturing, this presents both a compliance obligation and a commercial opportunity.</p>

      <h3>Implications for Industry</h3>
      <p>Businesses must now integrate carbon management into their strategic planning. This involves:</p>
      <ul>
        <li>Calculating baseline emissions.</li>
        <li>Assessing potential liabilities under the carbon tax regime.</li>
        <li>Exploring opportunities for generating carbon credits through sustainable practices.</li>
      </ul>
      <p>Compliance is not just about avoiding penalties; it is about positioning for long-term sustainability and competitiveness in a green global economy.</p>
    `
  },
  {
    id: "employment-law-remote",
    title: "Employment Law Changes for Remote Work",
    date: "Dec 18, 2025",
    category: "Employment",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Navigating the omnibus law amendments regarding flexible work arrangements and cross-border teams.",
    content: `
      <p>The post-pandemic era has permanently altered the workplace, leading to legal reforms that address flexible work arrangements. Indonesia's evolving employment laws are now recognizing and regulating remote work, work-from-home (WFH), and hybrid models.</p>

      <h3>New Flexibility Provisions</h3>
      <p>Recent amendments clarify the rights and obligations of employers and employees in remote settings. Key areas include:</p>
      <ul>
        <li><strong>Working Hours and Overtime:</strong> Clearer definitions of working hours to prevent burnout and ensure fair compensation.</li>
        <li><strong>Data Privacy:</strong> Enhanced protections for company data accessed from remote locations.</li>
        <li><strong>Equipment and Support:</strong> Obligations for employers to provide necessary tools for remote work.</li>
      </ul>

      <h3>Cross-Border Teams</h3>
      <p>The rise of "digital nomads" and cross-border remote teams introduces complex tax and immigration issues. Companies employing staff in Indonesia from abroad, or vice versa, must carefully structure their employment contracts to avoid permanent establishment risks and ensure tax compliance.</p>
    `
  },
  {
    id: "idx-regulation-2025",
    title: "Indonesia Updates Stock Exchange Disclosure Framework Through IDX Regulation No. I-E of 2025",
    date: "Dec 29, 2025",
    category: "Capital Markets",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    excerpt: "On 12 December 2025, IDX issued a new Regulation No. I-E on Disclosure Obligations replacing the previous framework issued in 2022. The regulation aligns reporting mechanisms with OJK frameworks.",
    content: "<p>Full analysis of IDX Regulation No. I-E coming soon.</p>"
  },
  {
    id: "mining-memr-18-2025",
    title: "New Implementation Guidelines for Mineral and Coal Mining Under MEMR Regulation No. 18 of 2025",
    date: "Dec 05, 2025",
    category: "Mining",
    image: "https://images.unsplash.com/photo-1579541579240-a33777555d8f?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "The Minister of Energy and Mineral Resources enacted MR 18/2025 to implement regulatory frameworks set out under GR 39/2025, revising eligibility criteria for WIUP auctions.",
    content: "<p>Full analysis of MEMR Regulation No. 18 of 2025 coming soon.</p>"
  },
  {
    id: "soe-law-16-2025",
    title: "Indonesia Updates State-Owned Enterprises Legal Framework Through Law No. 16 of 2025",
    date: "Nov 10, 2025",
    category: "SOE",
    image: "https://images.unsplash.com/photo-1628190201777-62f790299d9d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "The Indonesian Government enacted Law 16/2025, the fourth amendment to the SOE Law, enhancing governance, efficiency and competitiveness of SOEs.",
    content: "<p>Full analysis of Law No. 16 of 2025 coming soon.</p>"
  },
  {
    id: "mining-gr-39-2025",
    title: "Indonesia’s New Mining Framework: Key Insights into GR No. 39 of 2025",
    date: "Oct 29, 2025",
    category: "Mining",
    image: "https://images.unsplash.com/photo-1618388428806-3af443210b42?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "Government Regulation 39/2025 aligns the mineral and coal mining framework with the latest Mining Law amendment, introducing detailed priority rights mechanisms.",
    content: "<p>Full analysis of GR No. 39 of 2025 coming soon.</p>"
  },
  {
    id: "bkpm-reg-5-2025",
    title: "Indonesia's Latest Regime on Risk-Based Business Licensing System Under BKPM Regulation No. 5/2025",
    date: "Oct 22, 2025",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "BKPM issued MR 5/2025 to clarify provisions on business licensing and investment under GR 28/2025, effectively replacing three previous BKPM regulations.",
    content: "<p>Full analysis of BKPM Regulation No. 5/2025 coming soon.</p>"
  },
  {
    id: "trade-reg-16-2025",
    title: "Indonesia Introduces New Import Policy Regime Under Ministry of Trade Regulation No. 16 of 2025",
    date: "Aug 18, 2025",
    category: "Trade",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "MOTR 16/2025 becomes Indonesia’s new import regulatory framework, aimed at simplifying licensing procedures and strengthening compliance oversight.",
    content: "<p>Full analysis of Ministry of Trade Regulation No. 16 of 2025 coming soon.</p>"
  },
  {
    id: "gr-28-2025",
    title: "Indonesia’s New Risk Based-Licensing Regime (GR 28/2025)",
    date: "Jul 21, 2025",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "A comprehensive update to the risk-based business licensing framework, aiming to enhance legal certainty and streamline regulatory processes via the OSS system.",
    content: "<p>Full analysis of GR 28/2025 coming soon.</p>"
  },
  {
    id: "land-rights-mr-5-2025",
    title: "Significant Amendments to Land Rights Regime Under Ministerial Regulation No. 5 of 2025",
    date: "Jun 22, 2025",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "MR 5/2025 develops Indonesia’s land rights regime by refining key reforms, clarifying delegation of authority, and providing certainty on land right renewals.",
    content: "<p>Full analysis of Ministerial Regulation No. 5 of 2025 coming soon.</p>"
  },
  {
    id: "ojk-9-2025",
    title: "OJK Mandates Dematerialization of Physical Shares and Regulates Unclaimed Assets (POJK 9/2025)",
    date: "Jun 16, 2025",
    category: "Capital Markets",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "OJK's new regulation mandates full dematerialization of equity securities within 5 years and establishes a framework to manage unclaimed assets in the capital market.",
    content: "<p>Full analysis of POJK 9/2025 coming soon.</p>"
  }
];