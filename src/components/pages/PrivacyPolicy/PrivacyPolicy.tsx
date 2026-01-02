import React from "react";

const PrivacyPolicy: React.FC = () => {
  console.log('PrivacyPolicy rendered');

  return (
    <main className="self-stretch flex flex-col items-start justify-start p-8 max-w-3xl mx-auto text-black1">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

      <p className="mb-4">Last updated: January 2, 2026</p>

      <p className="mb-6">
        This Privacy Policy explains how Codesk Innovations Private Limited
        ("Codesk", "we", "us", "our"), a company registered in Nepal, collects,
        uses, discloses, and protects personal information in connection with our
        website, services, and messaging integrations such as WhatsApp. This
        policy is intended to meet requirements for WhatsApp Business Account
        (WABA) verification and for general transparency to our users.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Data we collect</h2>
      <p className="mb-4">
        We collect the personal data you provide directly to us, including but
        not limited to your name, email address, phone number, billing details,
        and any messages or content you send to us via messaging platforms.
        We also collect information automatically, such as usage analytics,
        device information, IP addresses, and cookies. When you interact via
        messaging platforms, we may receive metadata (timestamps, message IDs,
        sender/recipient identifiers) and message content as needed to provide
        services.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Use of WhatsApp and messaging data</h2>
      <p className="mb-4">
        We use WhatsApp (and other messaging services) to provide customer
        support, send transactional notifications (e.g., order or booking
        confirmations), and to communicate important account information. We
        rely on third-party messaging providers, including Meta (WhatsApp), to
        deliver these messages. Message content and metadata may be processed
        and stored by those providers as described in their policies.
      </p>

      <p className="mb-4">
        We only process messaging content to the extent necessary to deliver
        requested services, to respond to support requests, and to meet legal
        or contractual obligations. You will receive messages only when you
        opt in (for example by providing your phone number and consenting to
        communications) or when messages are necessary for service delivery.
        You can opt out of marketing messages at any time by following the
        instructions in the message or by contacting us at
        <a href="mailto:support@codeskinnovations.com.np" className="ml-1 text-black1 hover:underline">support@codeskinnovations.com.np</a>.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. How we handle and protect data</h2>
      <p className="mb-4">
        We implement administrative, technical, and physical safeguards to
        protect personal information appropriate to the sensitivity of the data.
        Access is limited to authorized employees and service providers who have
        legitimate business needs. We use industry-standard encryption for data
        in transit, and where applicable, for data at rest.
      </p>

      <p className="mb-4">
        We may share personal data with third-party service providers (for
        example, payment processors, analytics providers, hosting providers,
        and messaging platforms) under contracts that require them to maintain
        data security and confidentiality. We do not sell personal data to
        third parties.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data retention and deletion</h2>
      <p className="mb-4">
        We retain personal data only as long as necessary to provide services,
        comply with our legal obligations, resolve disputes, and enforce our
        agreements. For messaging records used for customer support and
        transactional purposes, retention periods may vary depending on the
        service; typically we retain such records for up to 24 months unless a
        longer period is required by law or necessary for ongoing support.
        You may request deletion or correction of your data by contacting us
        (see Contact section below); we will respond in accordance with
        applicable law and our obligations.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Cross-border transfers</h2>
      <p className="mb-4">
        Your data may be processed and stored in Nepal or in other countries
        where our service providers operate. We take steps to ensure that any
        international transfers are conducted under appropriate safeguards and
        in compliance with applicable legal requirements.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Children's privacy</h2>
      <p className="mb-4">
        Our services are not directed at children under the age of 13 (or
        higher age where local law requires parental consent). We do not
        knowingly collect personal data from children without parental
        consent. If you believe we have collected data from a child in
        violation of this policy, please contact us and we will take steps to
        remove the information.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Your rights</h2>
      <p className="mb-4">
        You have the right to request access to, correct, or delete your
        personal information, and to object to or restrict certain processing
        (where applicable). To make a request, contact us at the details
        below. We will verify requests as necessary and respond in line with
        applicable laws.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Contact & Data Protection</h2>
      <p className="mb-4">
        For privacy-related inquiries, to exercise your rights, or for any
        questions about this policy, contact:
      </p>
      <p className="mb-2">
        Codesk Innovations Private Limited
        <br />
        Ward No. 16, Kathmandu Metropolitan, Bagmati 44600, Nepal
        <br />
        Email: <a href="mailto:support@codeskinnovations.com.np" className="text-black1 hover:underline">support@codeskinnovations.com.np</a>
        <br />
        Phone: <a href="tel:+9779868296800" className="text-nero hover:underline">+977 9868 296800</a>
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Changes to this policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. If we make
        material changes, we will post the updated policy and update the
        "Last updated" date at the top of this page. Continued use of our
        services after such changes indicates your acceptance of the revised
        policy.
      </p>

      <p className="text-sm text-black1/70">
        Note: This Privacy Policy is provided to support WhatsApp Business
        Account (WABA) verification requirements. For WABA verification, WhatsApp
        requires a publicly accessible privacy policy at <code className="mx-1">/privacy-policy</code>
        that explicitly explains messaging data usage and how user data is
        handled.
      </p>
    </main>
  );
};

export default PrivacyPolicy;
