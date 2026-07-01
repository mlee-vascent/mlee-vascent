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

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-28 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
            <h1 className="text-gray-600 font-sora text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Featured Work
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl font-light">
              A collection of strategic product design, GTM strategy, and user experience projects that drive growth
            </p>
          </div>
          <div className="pt-4">
            <SocialLinks />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Card 1: Mobile App */}
            <Link
              to="/mobile-app"
              className="group flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 aspect-square">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a5adbe45e624f8ee20f1574359c4a9e64824bcdb?width=590"
                  alt="Fitleaguer Mobile App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-sora font-semibold text-lg">View Case Study →</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex gap-2 items-center">
                  <span className="text-orange-primary font-semibold text-sm uppercase tracking-wider">Mobile App</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-primary"></div>
                  <span className="text-gray-500 text-sm">UI/UX Design</span>
                </div>
                <h2 className="text-gray-600 font-sora text-2xl md:text-3xl font-bold leading-tight group-hover:text-orange-primary transition-colors">
                  Fitleaguer
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Building an engaging fitness gamification platform that seamlessly blends tracking, competition, and commerce in a B2B2C marketplace.
                </p>
              </div>
            </Link>

            {/* Card 2: Ecommerce */}
            <Link
              to="/ecommerce"
              className="group flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 aspect-square">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/56cd0093b869dd4913d08def33d1e228a2fd03c8?width=590"
                  alt="LMScheckout Ecommerce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-sora font-semibold text-lg">View Case Study →</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex gap-2 items-center">
                  <span className="text-orange-primary font-semibold text-sm uppercase tracking-wider">Ecommerce</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-primary"></div>
                  <span className="text-gray-500 text-sm">Platform Design</span>
                </div>
                <h2 className="text-gray-600 font-sora text-2xl md:text-3xl font-bold leading-tight group-hover:text-orange-primary transition-colors">
                  LMScheckout
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Enterprise course commerce platform serving diverse sectors with flexible multi-tenant architecture and seamless integrations.
                </p>
              </div>
            </Link>

            {/* Card 3: Salesforce */}
            <Link
              to="/salesforce"
              className="group flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 aspect-square">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d699e84979aa8f2a0f419fa76a75792fce7bbf68?width=590"
                  alt="EnlightenCRM Salesforce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-sora font-semibold text-lg">View Case Study →</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex gap-2 items-center">
                  <span className="text-orange-primary font-semibold text-sm uppercase tracking-wider">Salesforce ISV</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-primary"></div>
                  <span className="text-gray-500 text-sm">Native Design</span>
                </div>
                <h2 className="text-gray-600 font-sora text-2xl md:text-3xl font-bold leading-tight group-hover:text-orange-primary transition-colors">
                  EnlightenCRM
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Salesforce-native learning management solution that transforms enterprise training while maintaining CRM ecosystem continuity.
                </p>
              </div>
            </Link>

            {/* Card 4: Corporate Website */}
            <Link
              to="/portfolio/website"
              className="group flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 aspect-square">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9619c109db62dd801d49ac16c6a0030ae285f65a?width=590"
                  alt="Envisiontel Website"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-sora font-semibold text-lg">View Case Study →</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex gap-2 items-center">
                  <span className="text-orange-primary font-semibold text-sm uppercase tracking-wider">Website</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-primary"></div>
                  <span className="text-gray-500 text-sm">WordPress Design</span>
                </div>
                <h2 className="text-gray-600 font-sora text-2xl md:text-3xl font-bold leading-tight group-hover:text-orange-primary transition-colors">
                  Envisiontel
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Comprehensive corporate website communicating dual value propositions for custom eLearning services and SaaS learning platform.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24">
          <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">
                Ready to Transform Your Product?
              </h2>
              <p className="text-gray-500 text-lg md:text-xl">
                Let's discuss how strategic design and GTM expertise can accelerate your growth.
              </p>
            </div>
            <a
              href="https://calendly.com/verityascent/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-orange-primary text-white font-sora text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
