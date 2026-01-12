import React, { useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';
import { useLang } from '../providers';

const Privacy: React.FC = () => {
  const { t } = useLang();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-primary min-h-screen pt-24 transition-colors duration-300">
      <SEO 
        title={t.footer.privacy}
        description="Privacy Policy for DITRA Law Partnership."
      />

      <div className="bg-surface dark:bg-surface-dark py-20 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-secondary text-sm font-bold tracking-widest uppercase">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
        <div className="prose prose-lg prose-gray dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-p:font-light prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:font-light prose-li:text-gray-600 dark:prose-li:text-gray-400">
          <p>
            Ditra Law Partnership (“Ditra“) is committed to safeguarding the confidentiality, integrity and security of personal data. This Privacy Policy outlines how Ditra collects, processes, uses, stores, and discloses personal data in connection with any interaction with Ditra, including the use of Ditra’s services, platforms, communications and other engagements. All data handling activities are conducted in compliance with applicable data protection laws and regulations in Indonesia.
          </p>
          <p>
            By accessing Ditra services, communicating with Ditra, or submitting any personal data, all users, clients and external parties acknowledge and consent to the practices described in this Privacy Policy. Individuals who do not agree with the terms outlined herein are advised not to submit personal data to Ditra. For any questions or concerns regarding this Privacy Policy, contact Ditra at <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary no-underline hover:underline">{CONTACT_INFO.email}</a>.
          </p>

          <h3>Scope of Privacy Policy</h3>
          <p>This Privacy Policy governs all instances where Ditra collects, receives, uses or processes personal data from clients, counterparties, service providers, website visitors and other external parties. Situations covered include, but are not limited to:</p>
          <ul>
            <li>Submission of personal data to Ditra, whether solicited or unsolicited.</li>
            <li>Engagement of Ditra for legal, consultancy or professional services.</li>
            <li>Involvement in legal matters where Ditra acts on behalf of a client and the data subject is a party to or otherwise connected with the matter.</li>
            <li>Participation in transactions, cases or regulatory proceedings involving Ditra clients.</li>
            <li>Completion of any application, registration or subscription forms issued by Ditra.</li>
            <li>Attendance at Ditra-hosted or sponsored seminars, workshops or events.</li>
            <li>Access or interaction with Ditra’s websites, online tools or digital communication platforms.</li>
            <li>Receipt of Ditra newsletters, bulletins or marketing communications.</li>
            <li>Conduct of publicly available data searches or verification activities as part of Ditra’s risk management, due diligence or business development processes.</li>
          </ul>

          <h3>Collected Data</h3>
          <p>Ditra collect various categories of personal data that identify you, which may include your name, contact information such as phone number and email address, financial information, and other similar details. In addition, Ditra may automatically gather certain non-personal data, including your IP address, browser type, operating system and other technical information. This data is used to improve your experience on Ditra website and for analytical and statistical purposes (collectively referred to as “Personal Data”).</p>
          <p>Ditra collect Personal Data through multiple channels, including:</p>
          <ul>
            <li>Direct submission by the data subject, either physically, electronically or through verbal communication.</li>
            <li>Collection during the course of providing legal, advisory or consultancy services.</li>
            <li>Use of Ditra’s websites, digital platforms and electronic communication tools.</li>
            <li>Participation in Ditra’s training programs, webinars or professional forums.</li>
            <li>Open-source and publicly available information, including government databases and registries.</li>
            <li>Third-party service providers, business partners and professional contacts in accordance with lawful data sharing arrangements.</li>
          </ul>

          <h3>Use of Information</h3>
          <p>Personal data collected by Ditra may be used for the following purposes:</p>
          <ul>
            <li>To deliver legal, consultancy and professional services to clients.</li>
            <li>To manage, administer and develop client relationships and engagements.</li>
            <li>To fulfill contractual, legal and regulatory obligations, including anti-money laundering and sanctions screening requirements.</li>
            <li>To conduct client onboarding, background checks and conflict of interest assessments.</li>
            <li>To communicate with clients, counterparties, authorities and other relevant parties.</li>
            <li>To ensure the functionality, security and integrity of Ditra’s digital infrastructure.</li>
            <li>To analyze service usage patterns for operational improvements and user experience optimization.</li>
            <li>To maintain internal records, audit trails and risk management documentation.</li>
            <li>To comply with applicable laws, regulations, professional standards and internal policies.</li>
            <li>To establish, exercise or defend legal claims or rights.</li>
            <li>To conduct research, data analytics and service development initiatives.</li>
            <li>Where legally permitted, to deliver marketing and promotional communications consistent with applicable consent requirements.</li>
          </ul>

          <h3>Data Subject Rights</h3>
          <p>Subject to applicable laws and limitations, data subjects may exercise the following rights in relation to their personal data held by Ditra:</p>
          <ul>
            <li>Right to access personal data and obtain information regarding its processing.</li>
            <li>Right to request rectification of inaccurate or incomplete personal data.</li>
            <li>Right to request deletion of personal data, subject to overriding legal or regulatory obligations.</li>
            <li>Right to request restriction of processing in specified circumstances.</li>
            <li>Right to data portability, where applicable, by obtaining personal data in a structured, machine-readable format.</li>
            <li>Right to object to certain types of processing, including direct marketing.</li>
            <li>Right to withdraw consent at any time where processing is based on consent.</li>
          </ul>
          <p>
            Requests to exercise any of the above rights should be submitted in writing to {CONTACT_INFO.email}. Ditra reserves the right to verify the identity of the requester and to apply statutory exemptions where permitted.
          </p>

          <h3>Disclosure and Transfer of Personal Data</h3>
          <p>Ditra may disclose or transfer personal data to the following categories of recipients, strictly on a need-to-know basis and in compliance with applicable law:</p>
          <ul>
            <li>Third-party service providers engaged for operational, administrative or professional support, subject to binding confidentiality obligations.</li>
            <li>Courts, tribunals, law enforcement agencies, regulatory authorities and other government bodies, where required by law or legal process.</li>
            <li>Co-counsel, expert witnesses, consultants and other professionals engaged for specific legal matters, subject to appropriate confidentiality undertakings.</li>
            <li>Counterparties and their advisors in legal proceedings, as necessary to advance client interests or comply with procedural rules.</li>
            <li>Any other party, where the data subject’s explicit consent has been obtained or where such disclosure is permitted or required under applicable law.</li>
          </ul>
          <p>Where cross-border data transfers are involved, Ditra will implement adequate safeguards in accordance with Indonesian data protection laws and international best practices.</p>

          <h3>Retention and Security</h3>
          <p>
            Ditra retains personal data only for as long as necessary to fulfil the purposes for which it was collected, to comply with legal and regulatory obligations or in accordance with Ditra’s internal data retention policies. When personal data is no longer required, Ditra will take appropriate steps to securely delete, anonymize or otherwise render such data inaccessible and unusable.
          </p>
          <p>
            Ditra implements robust administrative, technical and physical safeguards to protect personal data against unauthorized access, loss, misuse, alteration or disclosure. Security measures include, but are not limited to, encryption, access controls, intrusion detection, secure storage and regular vulnerability assessments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;