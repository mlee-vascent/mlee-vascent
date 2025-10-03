import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Portfolio() {
  const ogImage =
    "https://api.builder.io/api/v1/image/assets/TEMP/cfc7b32d3bd84e2431b8ac9f31332e7430c2402d?width=1200";
  const description =
    "Portfolio of UI/UX design and GTM case studies by Matt Lee: mobile apps, ecommerce platforms, Salesforce ISV products, and corporate websites.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Portfolio — UI/UX & GTM Case Studies | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/portfolio"
      />
      <Header />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full px-6 md:px-12 lg:px-0 py-7 md:py-7 lg:py-7 flex flex-col items-center gap-6 md:gap-12 shadow-md overflow-hidden border-b border-teal-300">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/cfc7b32d3bd84e2431b8ac9f31332e7430c2402d?width=2880')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12">
            <h1
              className="text-gray-600 font-sora text-4xl md:text-5xl lg:text-[56px] font-bold text-center"
              style={{ textShadow: "1px 4px 4px rgba(255, 255, 255, 0.90)" }}
            >
              Portfolio
            </h1>
            <SocialLinks />
          </div>
        </section>

        {/* Mobile/Fitleaguer */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 md:py-0 lg:py-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto md:px-12">
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold">
              Mobile
            </h3>
            <Link to="/mobile-app">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a5adbe45e624f8ee20f1574359c4a9e64824bcdb?width=590"
                alt="Mobile project"
                className="w-[295px] h-[295px] rounded-full border-0 ring-0 outline-none shadow-none hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-1 max-w-[451px] flex flex-col gap-6">
            <h2 className="text-gray-600 font-sora text-2xl font-semibold">
              Fitleaguer: Fitness League Management & Gamification App
            </h2>
            <p className="text-gray-600 text-lg">UI/UX Design Case Study</p>
            <p className="text-gray-600 text-base font-normal">
              Project Overview:
            </p>
            <p className="text-gray-600 text-sm">
              Leading the end-to-end design of Fitleaguer, a pre-seed
              competitive fitness platform currently in stealth mode. The
              challenge is creating an engaging experience that seamlessly
              blends fitness tracking, competitive gaming, and financial
              transactions while building a B2B2C marketplace that empowers
              fitness professionals to monetize their communities through
              organized competition.
            </p>
            <Link
              to="/mobile-app"
              className="px-4 py-4 rounded-xl bg-orange-primary text-white text-lg self-start text-center"
            >
              Read More
            </Link>
          </div>
        </section>

        {/* Ecommerce/LMScheckout */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 md:py-0 lg:py-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto md:px-12">
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold">
              Ecommerce
            </h3>
            <Link to="/ecommerce">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/56cd0093b869dd4913d08def33d1e228a2fd03c8?width=590"
                alt="Ecommerce project"
                className="w-[295px] h-[295px] rounded-full border-0 ring-0 outline-none shadow-none hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-1 max-w-[451px] flex flex-col gap-6">
            <h2 className="text-gray-600 font-sora text-2xl font-semibold">
              LMScheckout: Enterprise Course Ecommerce Platform
            </h2>
            <p className="text-gray-600 text-lg">UI/UX Design Case Study</p>
            <p className="text-gray-600 text-base font-normal">
              Project Overview:
            </p>
            <p className="text-gray-600 text-sm">
              Led the end-to-end design of LMScheckout, a multi-tenant ecommerce
              platform that revolutionizes how organizations sell and deliver
              online courses, from initial concept through launch and
              profitability. The challenge was creating a white-label solution
              flexible enough to serve diverse sectors, higher education,
              non-profits, associations, SaaS companies, and corporate training,
              while maintaining seamless integration with existing LMS and CRM
              ecosystems.
            </p>
            <Link
              to="/ecommerce"
              className="px-4 py-4 rounded-xl bg-orange-primary text-white text-lg self-start text-center"
            >
              Read More
            </Link>
          </div>
        </section>

        {/* Salesforce/EnlightenCRM */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 md:py-0 lg:py-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto md:px-12">
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold">
              Salesforce ISV
            </h3>
            <Link to="/salesforce">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d699e84979aa8f2a0f419fa76a75792fce7bbf68?width=590"
                alt="Salesforce project"
                className="w-[295px] h-[295px] rounded-full border-0 ring-0 outline-none shadow-none hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-1 max-w-[451px] flex flex-col gap-6">
            <h2 className="text-gray-600 font-sora text-2xl font-semibold">
              EnlightenCRM: Salesforce-Native Learning Management Solution
            </h2>
            <p className="text-gray-600 text-lg">UI/UX Design Case Study</p>
            <p className="text-gray-600 text-base font-normal">
              Project Overview:
            </p>
            <p className="text-gray-600 text-sm">
              Led design of EnlightenCRM, a native Salesforce learning
              management solution that transforms how organizations deliver
              training directly within their CRM ecosystem, from ideation
              through strategic customer collaboration and ultimately to
              AppExchange certification and market success. The challenge was
              creating a seamless learning experience that felt native to
              Salesforce while maintaining continuity with existing LMS
              capabilities for sales enablement and partner education.
            </p>
            <Link
              to="/salesforce"
              className="px-4 py-4 rounded-xl bg-orange-primary text-white text-lg self-start text-center"
            >
              Read More
            </Link>
          </div>
        </section>

        {/* Corporate Website/Envisiontel */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 md:py-0 lg:py-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 w-full md:w-auto md:px-12">
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold">
              Corporate Website
            </h3>
            <Link to="/portfolio/website">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9619c109db62dd801d49ac16c6a0030ae285f65a?width=590"
                alt="Corporate Website project"
                className="w-[295px] h-[295px] rounded-full border-0 ring-0 outline-none shadow-none hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-1 max-w-[451px] flex flex-col gap-6">
            <h2 className="text-gray-600 font-sora text-2xl font-semibold">
              Envisiontel Corporate Website: WordPress Design & Deployment
            </h2>
            <p className="text-gray-600 text-lg">UI/UX Design Case Study</p>
            <p className="text-gray-600 text-base font-normal">
              Project Overview:
            </p>
            <p className="text-gray-600 text-sm">
              Led the complete design and development of www.envisiontel.com, a
              comprehensive WordPress-based corporate website for an eLearning
              content and SaaS technology company. The challenge was creating a
              digital presence that effectively communicated dual value
              propositions, custom eLearning content development services and
              SaaS-based proprietary learning management software, while
              establishing Envisiontel as a trusted partner for organizations
              building effective online training programs.
            </p>
            <Link
              to="/portfolio/website"
              className="px-4 py-4 rounded-xl bg-orange-primary text-white text-lg self-start text-center"
            >
              Read More
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
