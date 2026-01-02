import React from "react";

const PrivacyPolicy: React.FC = () => {
  console.log("PrivacyPolicy rendered");

  return (
    <main className="self-stretch flex flex-col items-start justify-start p-8 max-w-3xl mx-auto text-black1">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

      <p className="mb-4">Last updated: January 2, 2026</p>

      <p className="mb-6">
        This Privacy Policy explains how Codesk Innovations Private Limited
        ("Codesk", "we", "us", "our"), a company registered in Nepal, collects,
        uses, and protects personal information when you visit our website or
        communicate with us.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information that you voluntarily provide to us, such as your
        name, email address, phone number, and any information you share when
        contacting us for inquiries or support.
      </p>
      <p className="mb-4">
        We may also collect limited technical information automatically, such as
        IP address, browser type, and basic usage data through cookies or
        analytics tools, solely to improve website performance and security.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        2. Use of WhatsApp and Messaging
      </h2>
      <p className="mb-4 font-medium">
        Codesk Innovations Private Limited does not provide, resell, or operate
        WhatsApp messaging services, automation platforms, bulk messaging, or
        campaign services for third parties.
      </p>
      <p className="mb-4">
        WhatsApp is used only as a communication channel for direct customer
        inquiries and customer support related to our own services.
      </p>
      <p className="mb-4">
        If you contact us via WhatsApp, we use your message solely to respond to
        your inquiry or provide support. We do not send unsolicited messages and
        communicate only with users who initiate contact with us or explicitly
        request communication.
      </p>
      <p className="mb-4">
        You may stop communicating with us on WhatsApp at any time by
        discontinuing the conversation or by contacting us through other
        available support channels.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        3. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use personal information only for legitimate business purposes,
        including responding to inquiries, providing customer support,
        improving our website and services, and complying with legal or
        regulatory obligations.
      </p>
      <p className="mb-4">
        We do not use personal information for unsolicited marketing or
        promotional messaging.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        4. Data Protection and Security
      </h2>
      <p className="mb-4">
        We take reasonable administrative and technical measures to protect
        personal information against unauthorized access, loss, or misuse.
        Access to personal data is limited to authorized personnel who require
        it for legitimate business purposes.
      </p>
      <p className="mb-4">
        We do not sell or rent personal information to third parties.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
      <p className="mb-4">
        We retain personal information only for as long as necessary to respond
        to inquiries, provide support, or comply with applicable legal
        obligations. Information is not retained longer than reasonably
        required for these purposes.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Sharing of Information</h2>
      <p className="mb-4">
        We may share limited personal information with trusted service providers
        (such as website hosting or email services) only to the extent necessary
        to operate our business. These providers are required to maintain data
        security and confidentiality.
      </p>
      <p className="mb-4">
        We do not share WhatsApp conversations or personal information with
        other customers or unrelated third parties.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are not directed toward children under the age of 13. We do
        not knowingly collect personal information from children. If such
        information is identified, we will take appropriate steps to remove it.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
      <p className="mb-4">
        You may request access to, correction of, or deletion of your personal
        information by contacting us using the details below. We will respond in
        accordance with applicable laws.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
      <p className="mb-4">
        For privacy-related questions or requests, contact:
      </p>
      <p className="mb-4">
        <strong>Codesk Innovations Private Limited</strong>
        <br />
        Ward No. 16, Kathmandu Metropolitan
        <br />
        Bagmati 44600, Nepal
        <br />
        Email:{" "}
        <a
          href="mailto:support@codeskinnovations.com.np"
          className="text-black1 hover:underline"
        >
          support@codeskinnovations.com.np
        </a>
        <br />
        Phone:{" "}
        <a
          href="tel:+9779868296800"
          className="text-black1 hover:underline"
        >
          +977 9868 296800
        </a>
      </p>

      <h2 className="text-xl font-semibold mb-2">
        10. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any updates will be
        posted on this page with the revised effective date. Continued use of
        our website after changes indicates acceptance of the updated policy.
      </p>
    </main>
  );
};

export default PrivacyPolicy;
