import React from "react";

const Terms: React.FC = () => {
  return (
    <main className="self-stretch flex flex-col items-start justify-start p-8 max-w-3xl mx-auto text-black1">
      <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>

      <p className="mb-4">Last updated: January 2, 2026</p>

      <p className="mb-6">
        These Terms of Service ("Terms") govern your access to and use of the
        products and services provided by Codesk Innovations Private Limited
        ("Codesk", "we", "us", "our"). By accessing or using our services,
        you agree to be bound by these Terms. If you do not agree, please do
        not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Use of services</h2>
      <p className="mb-4">
        Subject to your compliance with these Terms, Codesk grants you a
        limited, non-exclusive, non-transferable license to access and use our
        services. You agree to use the services only for lawful purposes and in
        a manner consistent with any applicable guidelines and respect for
        others.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Accounts and authentication</h2>
      <p className="mb-4">
        When you create an account you must provide accurate and complete
        information. You are responsible for maintaining the confidentiality
        of your account credentials and for all activity that occurs under your
        account. Notify us immediately if you suspect unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Messaging and WhatsApp usage</h2>
      <p className="mb-4">
        You may receive communications from us via third-party messaging
        services (including WhatsApp) for customer support and transactional
        messages. By providing your phone number and opting in, you consent to
        receiving such messages. Messaging providers may store message content
        and metadata as necessary to deliver the service.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. User obligations</h2>
      <p className="mb-4">
        You must not misuse the services by introducing viruses, spam, or other
        malicious content, or by attempting to gain unauthorized access to our
        systems. You are responsible for the content you share and must have
        the necessary rights for any content you provide.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Intellectual property</h2>
      <p className="mb-4">
        All content, trademarks, and intellectual property rights in the
        services are owned or licensed by Codesk unless otherwise stated. You
        are granted no right or license to use such intellectual property
        except as expressly provided in these Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Termination and suspension</h2>
      <p className="mb-4">
        We may suspend or terminate your access to the services for violations
        of these Terms, at our discretion, including for illegal or abusive
        behavior. On termination, any licenses granted to you will end and we
        may delete or restrict access to your account and content as permitted
        by applicable law.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Disclaimers and limitation of liability</h2>
      <p className="mb-4">
        Our services are provided "as is" and "as available" without warranties
        of any kind. To the maximum extent permitted by law, Codesk disclaims
        all warranties and will not be liable for indirect, incidental, or
        consequential damages arising out of your use of the services.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold Codesk harmless from any claims,
        liabilities, damages, and expenses arising from your violation of these
        Terms or your use of the services.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Governing law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Nepal. Any dispute arising from
        these Terms shall be subject to the exclusive jurisdiction of the
        courts located in Nepal unless otherwise agreed in writing.
      </p>

      <h2 className="text-xl font-semibold mb-2">10. Changes to these Terms</h2>
      <p className="mb-4">
        We may update these Terms occasionally. Material changes will be
        communicated via the website or email, and the "Last updated" date at
        the top of this page will be revised. Continued use after changes
        indicates acceptance of the updated Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
      <p className="mb-4">
        For questions about these Terms, contact:
        <br />
        Codesk Innovations Private Limited
        <br />
        Ward No. 16, Kathmandu Metropolitan, Bagmati 44600, Nepal
        <br />
        Email: <a href="mailto:support@codeskinnovations.com.np" className="text-black1 hover:underline">support@codeskinnovations.com.np</a>
      </p>
    </main>
  );
};

export default Terms;
