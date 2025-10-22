import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Tools() {
  const ogImage =
    "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description =
    "Reduce your IT costs and buy the right platforms. Get independent guidance aligned with your business outcomes, not vendor quotas.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="IT Procurement & Cost Optimization | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/tools"
      />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 flex flex-col items-center gap-3 bg-gradient-to-r from-[#00C9C9] to-[#00A6A6]">
          <div className="flex flex-col items-center w-full gap-6">
            <h1 className="text-[#F6F8FA] text-center font-sora text-3xl md:text-4xl lg:text-[56px] font-bold leading-[65px] md:leading-[65px] lg:leading-[65px]">
              Reduce Your IT Costs. Buy the Right Platforms.
            </h1>
            <p className="text-white text-center font-sora text-xl md:text-2xl lg:text-[30px] font-bold max-w-4xl">
              Your independent guide to enterprise technology procurement without
              pressure from direct reps. Leveraging AVANT's market insights to
              align technology decisions with your business outcomes.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full md:w-auto mt-6 md:px-24">
              <a
                href="https://calendly.com/verityascent/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-9 py-9 rounded-2xl border-2 border-[#E4F4F3] text-[#F9FAFB] text-center font-sora text-2xl md:text-[30px] font-bold"
              >
                Schedule Your Free Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* Why You Need Me Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Why You Need An Independent Advisor
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold mb-4">
                  The Vendor Pressure Problem
                </h3>
                <ul className="text-gray-600 text-lg space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>Sales quotas driving biased recommendations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>Too many overlapping platform options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>
                      Hidden cost escalations (licensing, services, migration)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>Confusion around contract terms and benchmarking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold mb-4">
                  What I Bring
                </h3>
                <ul className="text-gray-600 text-lg space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>
                      An independent voice aligned with your business outcomes
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>
                      Deep access to AVANT's tools, data and provider comparisons
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>
                      Focus on reducing IT spend and selecting the right platform
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-primary font-bold">•</span>
                    <span>
                      Transparent guidance: cost comparisons, contract analysis,
                      migration strategy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Services Offered
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl font-bold">
                Cost & Spend Assessment
              </h3>
              <ul className="text-gray-600 text-base space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Review your current IT/Cloud/telecom spend</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Identify hidden costs, redundancies or overlapping licenses</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Benchmark your spend against market trends</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl font-bold">
                Platform & Provider Vetting
              </h3>
              <ul className="text-gray-600 text-base space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Define your business and technology needs</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Compare multiple vendors side-by-side using AVANT's data</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Vendor-agnostic recommendations based on business fit</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl font-bold">
                Contract Negotiation Support
              </h3>
              <ul className="text-gray-600 text-base space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Translate vendor contracts into plain language</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Negotiate with vendors on your behalf</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Secure the best pricing and terms</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl font-bold">
                Implementation & Migration Planning
              </h3>
              <ul className="text-gray-600 text-base space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Develop deployment and cut-over roadmap</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Identify and mitigate migration risks</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Ensure scalability without legacy cost lock-in</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 bg-white shadow-md md:col-span-2">
              <h3 className="text-gray-600 font-sora text-2xl font-bold">
                Ongoing Optimization & Governance
              </h3>
              <ul className="text-gray-600 text-base space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Regular reviews of platform performance and costs</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Recommendations for optimization and renegotiation</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Governance framework to prevent wasted spend</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Why Work With Us
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-primary text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 font-sora text-lg font-bold mb-2">
                  Access to AVANT's Toolkit
                </h3>
                <p className="text-gray-600 text-base">
                  Real-time pricing quotes, provider comparisons, market data and
                  more, all at your fingertips.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-primary text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 font-sora text-lg font-bold mb-2">
                  Vendor-Agnostic Advice
                </h3>
                <p className="text-gray-600 text-base">
                  Your interest is reducing cost and selecting fit, not moving
                  product.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-primary text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 font-sora text-lg font-bold mb-2">
                  Expert Support Built In
                </h3>
                <p className="text-gray-600 text-base">
                  Engineers, channel managers and partner support are part of the
                  AVANT model.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-primary text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 font-sora text-lg font-bold mb-2">
                  Skip the Pressure
                </h3>
                <p className="text-gray-600 text-base">
                  Make decisions in a calm, informed way without vendor push-sales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-primary text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 font-sora text-lg font-bold mb-2">
                  Long-Term Value
                </h3>
                <p className="text-gray-600 text-base">
                  Plan for growth, change and future-proofing — not just a one-time
                  deal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Who It's For
          </h2>

          <p className="text-gray-600 text-lg text-center max-w-3xl mb-8">
            This service is ideal for mid-sized companies and organizations facing
            high cost or confusion around cloud, telecom, or UC platforms.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-[#F6F8FA]">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="text-gray-600 font-sora font-bold mb-2">
                  Mid-sized Companies
                </h3>
                <p className="text-gray-600 text-sm">
                  50–500 users with growing or complex IT/telecom environments
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-[#F6F8FA]">
              <span className="text-2xl">🔄</span>
              <div>
                <h3 className="text-gray-600 font-sora font-bold mb-2">
                  Renewal Period
                </h3>
                <p className="text-gray-600 text-sm">
                  Businesses entering renewal or considering vendor/platform change
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-[#F6F8FA]">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="text-gray-600 font-sora font-bold mb-2">
                  Cost Reduction Goals
                </h3>
                <p className="text-gray-600 text-sm">
                  Organizations facing high cost or confusion around platforms
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-[#F6F8FA]">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="text-gray-600 font-sora font-bold mb-2">
                  IT/Finance Leaders
                </h3>
                <p className="text-gray-600 text-sm">
                  Who want expedited decisions with less vendor friction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Areas of Expertise
          </h2>

          {/* UCaaS */}
          <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold">
                UCaaS
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Unified Communications as a Service (UCaaS) solutions enable remote teams to collaborate seamlessly. I help you evaluate providers, negotiate contracts, and implement systems that replace legacy PBX infrastructure with modern, scalable platforms.
              </p>
              <p className="text-gray-600 text-base font-semibold">
                UCaaS Benefits: No hardware costs, remote functionality, create users in seconds, web-based portal and control
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F7dd23bfda09448f39c9757d49168ad92?format=webp&width=800"
                alt="UCaaS Providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CCaaS */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold">
                CCaaS
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Contact Center as a Service (CCaaS) solutions provide on-demand scalability and global reach for customer interactions. I guide you through vendor selection, integration planning, and cost optimization to ensure your contact center supports growth without hardware investment.
              </p>
              <p className="text-gray-600 text-base font-semibold">
                CCaaS Benefits: No hardware costs, built-in HA and DR, remote functionality, web-based portal and control
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Fb2171e29b8114b70ae106d6cf47d6942?format=webp&width=800"
                alt="CCaaS Providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Security */}
          <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold">
                Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Security is critical to protecting your business from evolving threats. I help you develop a comprehensive security framework aligned with NIST Cybersecurity standards, select the right security providers, and implement controls that prevent breaches before they become costly.
              </p>
              <p className="text-gray-600 text-base font-semibold">
                NIST Framework: Identify, Protect, Detect, Respond, Recover
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F4abaf748beae4cd28184f791136d89fb?format=webp&width=800"
                alt="Security Providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Connectivity */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold">
                Connectivity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Global connectivity solutions — DIA, broadband, layer 2, dark fiber, wireless, and IoT — form the foundation of modern enterprise operations. I help you select providers that deliver cost savings, increased speeds, and the flexibility your business needs as it evolves.
              </p>
              <p className="text-gray-600 text-base font-semibold">
                Connectivity Solutions: Cost savings, upgraded technology, increased speeds, and flexibility
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F4d97db426276417ebdaa4cbc16c77084?format=webp&width=800"
                alt="Connectivity Providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cloud & Colo */}
          <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold">
                Cloud & Colo
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cloud computing and colocation services enable hyperscale IT infrastructure without the burden of on-premise hardware. I guide you through vendor selection, cost optimization, and migration planning to ensure your cloud and colocation strategy supports growth and scalability.
              </p>
              <p className="text-gray-600 text-base font-semibold">
                Cloud & Colo Benefits: Scalability, global reach, flexibility, reduced capital expenditure
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F3389a795ac2844bd9eeab498eda413f4?format=webp&width=800"
                alt="Cloud & Colo Providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Ready to Take Control of Your IT Spend?
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-3xl">
            Let's map your cost-savings, define the right platforms and structure
            a vendor-agnostic decision path. Schedule your free 30-minute call
            today.
          </p>
          <a
            href="https://calendly.com/verityascent/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-6 rounded-2xl bg-orange-primary text-white font-sora text-xl md:text-2xl font-semibold"
          >
            Schedule Your Discovery Call
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
