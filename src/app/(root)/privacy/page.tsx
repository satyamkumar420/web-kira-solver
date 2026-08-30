import { PolicyPage } from "@/components/ui/policy-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your privacy is important to us. This Privacy Policy explains how Kira Solver collects, uses, and protects your personal information when you use our AI-powered interview assistant.",
};

const PrivacyPolicyPage = () => {
  return (
    <PolicyPage title="Privacy Policy">
      <div className="space-y-8">
        <p className="text-sm text-muted-foreground">
          Last Updated: <time dateTime="2023-10-01">August 15, 2025</time>
        </p>

        <section>
          <h2 className="!mt-0">1. Introduction</h2>
          <p>
            Welcome to Kira Solver. We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our desktop application (the
            &quot;Service&quot;). Please read this policy carefully. If you do
            not agree with the terms of this privacy policy, please do not
            access the service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect via the Service includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name and email address, that you
              voluntarily give to us when you register for an account.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect usage
              information when you access the Service, such as the features you
              use, the actions you take, and the time, frequency, and duration
              of your activities. This data is anonymized and used to improve
              the Service.
            </li>
            <li>
              <strong>Screenshots:</strong> When you use the Code Solver or MCQ
              Solver features, you provide us with screenshots. These
              screenshots are processed by our AI to provide solutions and are
              not stored on our servers long-term. They are deleted after
              processing.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Service to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your transactions and manage your credit balance.</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Service.
            </li>
            <li>Provide and deliver the products and services you request.</li>
            <li>
              Respond to your comments, questions, and provide customer service.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Disclosure of Your Information</h2>
          <p>
            We do not share, sell, rent, or trade your information with third
            parties for their commercial purposes. We may share information we
            have collected about you in certain situations:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us or on
              our behalf, including payment processing, data analysis, and email
              delivery.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
          <h2>6. Your Data Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You can manage your account information through your settings page
            within the application. If you wish to delete your account and all
            associated data, you can do so from the settings page.
          </p>
        </section>

        <section>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for use by children under the age of 13.
            We do not knowingly collect personal information from children under
            13. If we become aware that a child under 13 has provided us with
            personal information, we will take steps to delete such information.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by updating the &quot;Last Updated&quot; date of
            this Privacy Policy. You are encouraged to periodically _ review
            this Privacy Policy to stay informed of our updates.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            reach out via our official GitHub repository.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
};

export default PrivacyPolicyPage;
