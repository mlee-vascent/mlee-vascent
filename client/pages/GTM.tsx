import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function GTM() {
  const ogImage =
    "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description =
    "Design and implement scalable GTM systems that book more qualified meetings: buyer-intent data, LinkedIn automation, email sequencing, and AI-powered outreach to drive predictable growth.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="AI‑Powered Outreach & Go‑To‑Market Systems | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/gtm"
      />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 flex flex-col items-center gap-3 bg-gradient-to-r from-[#00C9C9] to-[#00A6A6]">
          <div className="flex flex-col items-center w-full gap-6">
            <h1 className="text-[#F6F8FA] text-center font-sora text-3xl md:text-4xl lg:text-[56px] font-bold leading-[65px] md:leading-[65px] lg:leading-[65px]">
              Scale Your Pipeline with AI-Powered Outreach
            </h1>
            <p className="text-white text-center font-sora text-xl md:text-2xl lg:text-[30px] font-bold max-w-4xl">
              Go-to-market strategy and automated outreach systems designed to
              book more meetings, close more deals, and grow revenue without
              adding headcount.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full md:w-auto mt-6 md:px-24">
              <a
                href="https://calendly.com/verityascent/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-9 py-9 rounded-2xl border-2 border-[#E4F4F3] text-[#F9FAFB] text-center font-sora text-2xl md:text-[30px] font-bold"
              >
                Book a Consultation
              </a>
              <a
                href="https://drive.google.com/file/d/1O24y3Cj6QdDbRQyWsJO5-DKYb4Us4069/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
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
            At VerityAscent, I help growing businesses and startups bring their
            products to market faster and more effectively by combining proven
            go-to-market strategy with modern AI-powered outreach automation. My
            focus is simple: create predictable sales pipelines by setting up
            systems that generate meetings, nurture prospects, and convert
            opportunities all while freeing up your team to focus on closing
            deals.
          </p>
        </section>

        {/* Why Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Why Manual Prospecting Doesn't Work Anymore
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Slow & Expensive
              </h3>
              <p className="text-gray-600 text-center text-lg">
                SDR time wasted on manual tasks
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Inconsistent Results
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Pipeline depends on luck
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
                Scaling Challenges
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Growth stalls without automation
              </p>
            </div>
          </div>
        </section>

        {/* Smarter Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 text-center font-sora text-3xl md:text-[40px] font-bold">
            A Smarter Way to Reach Your Market
          </h2>
          <p className="text-gray-600 text-center font-sora text-xl md:text-2xl font-semibold max-w-4xl">
            By combining go-to-market strategy with AI-powered outreach tools,
            we help you create predictable, scalable sales pipelines that drive
            consistent revenue growth.
          </p>
        </section>

        {/* Diagram Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8e9bc4cd4887240bcdf7bde27c3e40da35b7d603?width=2880"
          alt="Go-to-market process diagram"
          className="w-full h-auto"
        />

        {/* Implement Section */}
        <section className="w-full px-6 md:px-24 lg:px-[180px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            I Implement the Tools That Drive Growth
          </h2>

          {/* Row 1 */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Trigify
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Actionable LinkedIn Signals
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                RB2B
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Cold Website Signals
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Buyer Intent
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Keyword Search Signals
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Clay
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Data Enrichment & Automation
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                HeyReach
              </h3>
              <p className="text-gray-600 text-center text-lg">
                LinkedIn Outreach & Nurturing
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Reply
              </h3>
              <p className="text-gray-600 text-center text-lg">
                LinkedIn & Email Sequencing
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Instantly
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Email Warmup & Sending
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Apollo
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Data Enrichment & Sequencing
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <h3 className="text-gray-600 font-sora text-2xl md:text-[30px] font-bold">
                Outreach
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Enterprise Sales Automation
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 bg-[#F6F8FA] flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            What You'll Get!
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  More qualified meetings booked
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
                  Predictable pipeline growth
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
                  Reduced manual prospecting effort
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
                  Higher ROI from outreach campaigns
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-md">
              <p className="text-gray-600 text-center text-lg">
                "Once we ramped up the outreach automation combined with the
                buyer intent data, we actually had to pause things in order to
                change our entire sales enablement strategy so our AE's could
                better manage their time in qualified meetings!"
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 font-sora text-3xl md:text-[40px] font-bold text-center">
            Ready To Scale Your Pipeline?
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-[1004px] w-full">
            Let's design your automated outreach engine and start booking more
            meetings this month.
          </p>
          <a
            href="https://calendly.com/verityascent/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-6 rounded-2xl bg-orange-primary text-white font-sora text-xl md:text-2xl font-semibold"
          >
            Book A Consultation
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
