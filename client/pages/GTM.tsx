import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function GTM() {
  const ogImage =
    "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description =
    "AI-powered GTM strategy consulting that leverages platforms like SureRev to define positioning, messaging, and competitive strategy. Build aligned GTM plans that accelerate time-to-market.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Powered GTM Strategy Consulting",
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "VerityAscent",
      url: "https://verityascent.com",
    },
    areaServed: "US",
    serviceType: [
      "GTM Strategy Development",
      "Product Positioning",
      "Competitive Intelligence",
      "Messaging Framework",
      "Team Alignment",
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="AI-Powered GTM Strategy Consulting | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/gtm"
        keywords="GTM strategy, go-to-market, AI positioning, product strategy, competitive positioning, SureRev, messaging, product-market fit"
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 flex flex-col items-center gap-3 bg-gradient-to-r from-[#00C9C9] to-[#00A6A6]">
          <div className="flex flex-col items-center w-full gap-6">
            <h1 className="text-[#F6F8FA] text-center font-sora text-3xl md:text-4xl lg:text-[56px] font-bold leading-[65px] md:leading-[65px] lg:leading-[65px]">
              AI-Powered GTM Strategy That Drives Growth
            </h1>
            <p className="text-white text-center font-sora text-xl md:text-2xl lg:text-[30px] font-bold max-w-4xl">
              Define winning product positioning, competitive messaging, and aligned GTM plans using advanced AI tools. Move from uncertainty to clarity in weeks, not months.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full md:w-auto mt-6 md:px-24">
              <a
                href="https://calendly.com/verityascent/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-9 py-9 rounded-2xl border-2 border-[#E4F4F3] text-[#F9FAFB] text-center font-sora text-2xl md:text-[30px] font-bold"
              >
                Book a Strategy Call
              </a>
              <a
                href="/Matthew Lee Resume.pdf"
                download="Matthew Lee Resume.pdf"
                className="w-full md:w-auto px-9 py-9 rounded-2xl border-2 border-[#E4F4F3] text-[#F9FAFB] text-center font-sora text-2xl md:text-[30px] font-bold"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12">
          <p className="text-gray-600 text-lg text-center md:text-left">
            Building a winning GTM strategy doesn't have to be a months-long guessing game. By leveraging AI-powered platforms like SureRev combined with proven strategic frameworks, I help organizations rapidly define their ideal customer profiles, craft differentiated positioning, and create compelling messaging that resonates with buyers. The result: faster time-to-market, better cross-functional alignment, and a playbook your entire team can execute on.
          </p>
        </section>

        {/* Why GTM Fails Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Why Traditional GTM Planning Falls Short
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Too Much Time
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Months of research, meetings, and iteration
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Misalignment
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Sales, marketing, and product teams working from different playbooks
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Weak Execution
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Positioning and messaging don't translate to revenue growth
              </p>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 text-center font-sora text-3xl md:text-[40px] font-bold">
            The AI-Powered Approach
          </h2>
          <p className="text-gray-600 text-center font-sora text-xl md:text-2xl font-semibold max-w-4xl">
            What if you could compress months of GTM work into weeks? By combining advanced AI platforms with strategic expertise, we rapidly move from ambiguity to clarity.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Clear ICP definition and account targeting
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Differentiated product positioning
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Compelling buyer-centric messaging
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Cross-functional alignment and buy-in
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Competitive intelligence and analysis
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00B279"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Executable sales enablement assets
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md h-fit">
              <p className="text-gray-600 text-center text-lg font-sora font-semibold">
                AI tools like SureRev accelerate the GTM process by 40-60 hours. But the real magic happens when you combine them with strategic expertise—someone who understands market dynamics, competitive positioning, and how to translate analysis into revenue-generating actions.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Platforms Section */}
        <section className="w-full px-6 md:px-24 lg:px-[180px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            AI Platforms I Leverage
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                SureRev
              </h3>
              <p className="text-gray-600 text-center text-lg">
                AI-powered GTM OS for strategy, positioning, messaging, and competitive intelligence
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Strategic Frameworks
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Proven GTM methodologies combined with AI acceleration for faster results
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            The GTM Strategy Process
          </h2>

          <div className="w-full max-w-4xl">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-primary text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">
                    Discovery & Analysis
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Deep dive into your market, customers, competitors, and product to inform strategy
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-primary text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">
                    AI-Powered Strategy Development
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Use SureRev and other AI tools to rapidly model ICPs, test positioning, and generate messaging variations
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-primary text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">
                    Alignment & Refinement
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Work with your cross-functional teams to align on strategy and refine based on feedback
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-primary text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">
                    Execution & Enablement
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Create sales enablement assets, messaging playbooks, and training to drive consistent execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Ready to Define Your Winning GTM Strategy?
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-[1004px] w-full">
            Let's discuss how AI-powered GTM strategy can accelerate your time-to-market and drive stronger alignment across your teams.
          </p>
          <a
            href="https://calendly.com/verityascent/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-6 rounded-2xl bg-orange-primary text-white font-sora text-xl md:text-2xl font-semibold"
          >
            Schedule a Strategy Call
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
