"use client";

export default function PrivacyPage() {
    return (
        
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="text-lg space-y-4">
                <p>
                    Effective Date: 1/4/2025
                </p>

                <p>
                    Welcome to Chat Transact! Your privacy is important to us, and we are committed to protecting it. This Privacy Policy explains how we collect, use, and share information about you when you use our app and services. By using Chat Transact, you agree to the practices described in this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p>
                    We collect information to provide and improve our services. This includes:
                </p>

                <h3 className="text-xl font-semibold">a. Information You Provide Directly</h3>
                <ul className="list-disc list-inside">
                    <li>Account Information: When you register, we collect your name, email address, phone number, and business details.</li>
                    <li>WhatsApp Integration: We collect information necessary to link your WhatsApp Business Account, such as your WhatsApp Business Number and API credentials.</li>
                    <li>Customer Data: Messages and attachments exchanged between you and your customers through Chat Transact.</li>
                </ul>

                <h3 className="text-xl font-semibold">b. Automatically Collected Information</h3>
                <ul className="list-disc list-inside">
                    <li>Usage Data: Information about how you use our app, such as features accessed, interaction timestamps, and device details.</li>
                    <li>Log Data: Logs of API calls and system events to monitor and troubleshoot performance.</li>
                    <li>Cookies and Similar Technologies: To enhance your experience, we may use cookies and similar tools for authentication and analytics.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p>
                    We use the information we collect to:
                </p>
                <ul className="list-disc list-inside">
                    <li>Provide and maintain the Chat Transact platform.</li>
                    <li>Facilitate communication between you and your customers.</li>
                    <li>Authenticate and secure your account.</li>
                    <li>Improve our services and user experience.</li>
                    <li>Respond to your inquiries and provide customer support.</li>
                    <li>Send important updates, notifications, and service-related communications.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">3. How We Share Your Information</h2>
                <p>
                    We do not sell your data. However, we may share your information in the following ways:
                </p>
                <ul className="list-disc list-inside">
                    <li>With Third-Party Service Providers: To integrate with WhatsApp’s Business API and provide functionalities like real-time messaging and notifications.</li>
                    <li>For Legal Compliance: To comply with legal obligations, enforce our terms of service, or respond to lawful requests from authorities.</li>
                    <li>With Your Consent: If you explicitly authorize us to share your data with third parties.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">4. Your Rights and Choices</h2>
                <p>
                    You have rights over your personal data, including:
                </p>
                <ul className="list-disc list-inside">
                    <li>Access and Correction: Request access to or correction of your personal data.</li>
                    <li>Data Portability: Request a copy of your data in a portable format.</li>
                    <li>Deletion: Request the deletion of your personal data, subject to legal and contractual obligations.</li>
                    <li>Opt-Out: Opt-out of receiving non-essential communications from us.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
                <p>
                    We take appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside">
                    <li>Encryption of sensitive data in transit and at rest.</li>
                    <li>Access controls to ensure only authorized personnel can access your data.</li>
                    <li>Regular security audits and monitoring.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">6. Data Retention</h2>
                <p>
                    We retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Messages and other communication data are stored for the duration of your use of Chat Transact and deleted upon your account termination.
                </p>

                <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> hello@hybrid-tec.com<br />
                    <strong>Address:</strong> Apapa, Lagos, Nigeria
                </p>
            </div>
        </div>
    );
}
