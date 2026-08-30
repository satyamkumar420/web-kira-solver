import { PolicyPage } from "@/components/ui/policy-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Kira Solver. Understand the rules and guidelines for using our AI-powered interview assistant.",
};

const TermsOfServicePage = () => {
  return (
    <PolicyPage title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="!mt-0">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Kira Solver (the &quot;Service&quot;), you
            agree to be bound by these Terms of Service (&quot;Terms&quot;). If
            you do not agree to all of these Terms, do not use the Service.
            These Terms apply to all users of the Service, including new users
            who receive free promotional credits.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Kira Solver is a desktop application that provides AI-powered
            assistance for technical interviews. Key features include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dual-Mode Code Solver:</strong> Offers brute-force and
              optimized solutions for coding problems from screenshots.
            </li>
            <li>
              <strong>MCQ Screenshot Solver:</strong> Analyzes and answers
              multiple-choice questions from screenshots.
            </li>
            <li>
              <strong>Live Interview AI Chat:</strong> Provides real-time
              answers to technical and behavioral questions.
            </li>
            <li>
              <strong>Undetectable Mode:</strong> Designed to be invisible to
              screen sharing and proctoring software.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. User Accounts and Credits</h2>
          <p>
            To access certain features of the Service, you may be required to
            create an account. You are responsible for maintaining the
            confidentiality of your account information.
          </p>
          <p>
            The Service operates on a credit system. Credits can be purchased
            through our available plans.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Credit Usage:</strong> 1 credit is deducted for each
              screenshot analysis (Coding or MCQ). 0.5 credits are deducted for
              each AI chat reply.
            </li>
            <li>
              <strong>Credit Expiration:</strong> Credits purchased under the
              Pro Plan expire after 3 months. Credits from the Pro Plus Plan
              expire after 6 months. Free promotional credits do not expire
              until they are used.
            </li>
            <li>
              <strong>No Refunds:</strong> All credit purchases are final and
              non-refundable.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. User Conduct and Responsibilities</h2>
          <p>
            You agree to use the Service in a manner that is ethical and in
            compliance with all applicable laws and regulations. You agree not
            to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the Service for any illegal or unauthorized purpose.</li>
            <li>
              Misrepresent your identity or skills during an interview or any
              other assessment.
            </li>
            <li>
              Share, resell, or distribute your account or credits to any third
              party.
            </li>

            <li>
              Use the service in a way that violates academic integrity or any
              other code of conduct to which you are subject.
            </li>
          </ul>
          <p>
            Kira Solver is intended to be a tool to assist and guide you. It is
            your responsibility to understand the solutions provided and to use
            the information ethically.
          </p>
        </section>

        <section>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. Kira Solver makes no warranties, expressed or
            implied, regarding the accuracy, reliability, or completeness of the
            solutions provided. While we strive for 100% accuracy, we do not
            guarantee that the answers provided will be correct in all cases.
            You use the Service at your own risk.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Kira Solver, its affiliates, or its licensors be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of the Service. This includes, but is not limited to, failing an
            interview, loss of job opportunities, or any academic or
            professional penalties.
          </p>
        </section>

        <section>
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access
            to the Service at our sole discretion, without prior notice, for
            conduct that we believe violates these Terms or is otherwise harmful
            to other users of the Service, us, or third parties.
          </p>
        </section>

        <section>
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify you of any changes by posting the new Terms on this page.
            Your continued use of the Service after any such changes constitutes
            your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please reach out via
            our official GitHub repository.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
};

export default TermsOfServicePage;
