import { PolicyPage } from "@/components/ui/policy-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kira Solver",
  description:
    "Learn more about Kira Solver, the ultimate AI-powered assistant for acing technical interviews. Discover our mission, our team, and our commitment to helping you succeed.",
};

const AboutUsPage = () => {
  return (
    <PolicyPage title="About Us">
      <div className="space-y-8">
        <section>
          <h2 className="!mt-0">Our Mission</h2>
          <p>
            At Kira Solver, our mission is to empower developers, engineers, and
            tech enthusiasts to confidently navigate and excel in the most
            challenging technical interviews. We believe that the pressure of a
            live interview should not stand in the way of showcasing true
            talent. That&apos;s why we built the ultimate AI-powered assistant,
            designed to be your secret weapon for success.
          </p>
          <p>
            We are committed to providing an undetectable, real-time support
            system that helps you solve complex coding problems, dissect
            multiple-choice questions, and articulate your thoughts with clarity
            and precision. Our goal is to level the playing field, giving every
            candidate the best possible chance to land their dream job.
          </p>
        </section>

        <section>
          <h2>What is Kira Solver?</h2>
          <p>
            Kira Solver is a sophisticated desktop application built for
            Windows, macOS, and Linux. It&apos;s more than just a tool;
            it&apos;s your personal interview copilot. Here’s what makes Kira
            Solver unique:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dual-Mode Code Solver:</strong> For any coding challenge,
              Kira provides both a brute-force and a highly optimized solution.
              Each comes with a detailed thought process and complexity
              analysis, helping you understand the trade-offs and impress your
              interviewers.
            </li>
            <li>
              <strong>MCQ Screenshot Solver:</strong> Instantly solve
              multiple-choice questions from a single screenshot. Our AI not
              only provides the correct answers but also explains why each
              option is right or wrong.
            </li>
            <li>
              <strong>Live Interview AI Chat:</strong> Stuck on a question? Our
              discreet AI chat offers real-time answers to any technical or
              behavioral question, ensuring you&apos;re never caught off-guard.
            </li>
            <li>
              <strong>Complete Undetectability:</strong> We prioritize your
              privacy and security. Kira Solver operates in the background with
              features like &apos;invisible mode&apos; to remain undetectable by
              proctoring software.
            </li>
          </ul>
        </section>

        <section>
          <h2>Our Story</h2>
          <p>
            Kira Solver was born from a simple realization: technical interviews
            are tough, and the online format has only amplified the pressure. As
            experienced engineers who have been on both sides of the hiring
            table, we saw countless talented candidates struggle to perform
            their best under stress. We wanted to create a tool that could
            provide a safety net, a confidence booster, and a source of
            on-the-spot knowledge.
          </p>
          <p>
            After months of development, leveraging the latest in AI and machine
            learning, we launched Kira Solver. Our focus has always been on
            creating a product that is not only powerful but also ethical and
            responsible. We are dedicated to helping you showcase your skills,
            not replace them.
          </p>
        </section>

        <section>
          <h2>Our Commitment to You</h2>
          <p>
            Your success is our success. We are continuously improving Kira
            Solver, adding new features, and refining our AI models to ensure
            you have the best possible tool at your disposal. We are committed
            to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Accuracy:</strong> Providing correct and well-explained
              solutions you can trust.
            </li>
            <li>
              <strong>Privacy:</strong> Protecting your data and ensuring your
              anonymity during interviews.
            </li>
            <li>
              <strong>Support:</strong> Offering responsive and helpful customer
              support to address any questions or concerns.
            </li>
          </ul>
          <p className="mt-4">
            Thank you for choosing Kira Solver. We can&amp;apos;t wait to be a
            part of your journey to career success.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
};

export default AboutUsPage;
