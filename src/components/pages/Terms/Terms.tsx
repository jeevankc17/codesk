import React from "react";

const Terms: React.FC = () => {
  return (
    <main className="self-stretch flex flex-col items-start justify-start p-8 max-w-3xl mx-auto text-black1">
      <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>

      <p className="mb-4">Last updated: January 2, 2026</p>

      <p className="mb-6">
        Welcome to Codesk Innovations Private Limited ("Codesk", "we", "us", "our"). 
        These Terms and Conditions ("Terms") govern your use of our website, products, 
        services, and communication channels, including WhatsApp. By accessing or 
        using our services, you agree to these Terms. If you do not agree, do not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Scope of Services</h2>
      <p className="mb-4">
        Codesk provides software development, technology consulting, and related digital services. 
        We do not provide, resell, operate, or manage WhatsApp messaging services, automation platforms, 
        bulk messaging, or marketing campaigns on behalf of third parties. WhatsApp is used solely 
        as a communication channel for direct customer inquiries and support related to our own services.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our website or services, you agree to comply with these Terms. You must not use our services 
        for unlawful purposes, to violate any applicable laws, or to infringe the rights of others.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
      <p className="mb-4">
        If you create an account or submit information to Codesk, you must provide accurate and complete information. 
        You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs 
        under your account. Notify us immediately if you suspect any unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Messaging and Communication</h2>
      <p className="mb-4">
        By providing your contact information and opting in, you consent to receive service-related communications 
        via WhatsApp or similar messaging platforms. These messages are strictly for transactional, support, 
        or inquiry purposes. We do not send unsolicited bulk messages or marketing campaigns. 
      </p>
      <p className="mb-4">
        Third-party messaging providers, such as Meta (WhatsApp), may process message content and metadata 
        as required to deliver services. Codesk is not responsible for the availability, operation, or compliance 
        of third-party messaging platforms.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. User Obligations</h2>
      <p className="mb-4">
        You agree not to misuse our services or website. This includes, but is not limited to:
        unauthorized access attempts, introducing malware, scraping data without permission, 
        abusing communication channels, or engaging in fraudulent, deceptive, or harmful activities.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content, software, logos, trademarks, and intellectual property displayed or used on our website 
        and services are owned by or licensed to Codesk. No rights or licenses are granted except as explicitly stated.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, Codesk shall not be liable for any indirect, incidental, 
        special, or consequential damages arising from the use or inability to use our services. 
        Services are provided "as is" without warranties of any kind.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access to our services at our discretion if you violate these Terms, 
        engage in unlawful activity, or act abusively. Upon termination, any licenses granted to you will end immediately.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold Codesk harmless from any claims, damages, losses, liabilities, and expenses 
        arising from your violation of these Terms or misuse of our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Nepal. Any disputes arising from these Terms shall be subject to the 
        exclusive jurisdiction of the courts located in Nepal.
      </p>

      <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Material changes will be reflected by updating the "Last updated" date. 
        Continued use of our services after changes indicates acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
      <p className="mb-4">
        For questions regarding these Terms, please contact:
        <br />
        Codesk Innovations Private Limited
        <br />
        Ward No. 16, Kathmandu Metropolitan, Bagmati 44600, Nepal
        <br />
        Email: <a href="mailto:support@codeskinnovations.com.np" className="text-black1 hover:underline">support@codeskinnovations.com.np</a>
        <br />
        Phone: <a href="tel:+9779868296800" className="text-black1 hover:underline">+977 9868 296800</a>
      </p>
    </main>
  );
};

export default Terms;
