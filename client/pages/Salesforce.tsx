import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Salesforce() {
  const ogImage =
    "https://api.builder.io/api/v1/image/assets/TEMP/2cfd9ed00d56763a050a99c331e77e43f45d11ed?width=1200";
  const description =
    "EnlightenCRM case study: Salesforce‑native learning management solution—embedded training, analytics, and partner enablement.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Salesforce ISV Case Study — EnlightenCRM | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/salesforce"
      />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex flex-col gap-8 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-8 rounded-full bg-orange-primary"></div>
                <span className="text-orange-primary font-semibold uppercase tracking-wider text-sm">Case Study</span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-gray-600 font-sora text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  EnlightenCRM
                </h1>
                <p className="text-gray-500 text-lg md:text-xl font-light">
                  Salesforce-Native Learning Management Solution
                </p>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                Designed a native Salesforce learning platform that transforms how organizations deliver training directly within their CRM ecosystem while maintaining continuity with existing LMS capabilities.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Type</p>
                  <p className="text-gray-600 text-sm md:text-base font-semibold">Salesforce ISV</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Role</p>
                  <p className="text-gray-600 text-sm md:text-base font-semibold">Design Lead</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Status</p>
                  <p className="text-gray-600 text-sm md:text-base font-semibold">Certified</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 w-full aspect-square flex items-center justify-center p-6 md:p-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2cfd9ed00d56763a050a99c331e77e43f45d11ed?width=838"
                alt="EnlightenCRM Salesforce"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-32 border-t border-gray-200">
          <div className="flex flex-col gap-12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">The Challenge</h2>
              <div className="w-12 h-1.5 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                Organizations struggled with fragmented training ecosystems where learning management systems existed separately from their CRM platforms, creating data silos and reducing sales enablement effectiveness.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600 text-base">Enterprise sales teams needed <span className="font-semibold">integrated training</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600 text-base"><span className="font-semibold">Partner certification</span> required streamlining</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600 text-base">Native Salesforce design needed <span className="font-semibold">special expertise</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-32 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col gap-12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">The Solution</h2>
              <div className="w-12 h-1.5 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Native Integration</h3>
                <p className="text-gray-600 text-base">Built directly within Salesforce using Visualforce and Lightning components for seamless CRM integration</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Sales Enablement</h3>
                <p className="text-gray-600 text-base">Streamlined partner certification and sales training with built-in progress tracking and analytics</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">LMS Integration</h3>
                <p className="text-gray-600 text-base">Seamless connections with Canvas, Moodle, and Bridge for flexible learning ecosystem</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-32 border-t border-gray-200">
          <div className="flex flex-col gap-12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">Design Focus</h2>
              <div className="w-12 h-1.5 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="text-purple-900 font-sora text-2xl font-bold">Salesforce UX Patterns</h3>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">✓</span><span>Salesforce Lightning design system</span></li>
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">✓</span><span>Visualforce optimization</span></li>
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">✓</span><span>AppExchange certification</span></li>
                  <li className="flex gap-2"><span className="text-purple-600 font-bold">✓</span><span>Native lookups & relationships</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-blue-900 font-sora text-2xl font-bold">Training Workflows</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Course enrollment</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Progress tracking</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Certification management</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Reporting dashboard</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-32 bg-gradient-to-br from-orange-50 to-orange-100/30 border-t border-gray-200">
          <div className="flex flex-col gap-12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">Business Outcomes</h2>
              <div className="w-12 h-1.5 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
              <div className="flex flex-col gap-2 p-4 md:p-6 bg-white rounded-xl border border-gray-200 min-h-[120px] md:min-h-[140px] justify-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600 leading-tight break-words">50%</p>
                <p className="text-gray-600 font-semibold text-xs md:text-sm line-clamp-2">Training Efficiency</p>
              </div>
              <div className="flex flex-col gap-2 p-4 md:p-6 bg-white rounded-xl border border-gray-200 min-h-[120px] md:min-h-[140px] justify-center">
                <p className="text-lg md:text-3xl font-bold text-green-600 leading-tight whitespace-nowrap">Enterprise</p>
                <p className="text-gray-600 font-semibold text-xs md:text-sm line-clamp-2">Fortune 500 Clients</p>
              </div>
              <div className="flex flex-col gap-2 p-4 md:p-6 bg-white rounded-xl border border-gray-200 min-h-[120px] md:min-h-[140px] justify-center">
                <p className="text-lg md:text-3xl font-bold text-purple-600 leading-tight whitespace-nowrap">AppExchange</p>
                <p className="text-gray-600 font-semibold text-xs md:text-sm line-clamp-2">Certified</p>
              </div>
              <div className="flex flex-col gap-2 p-4 md:p-6 bg-white rounded-xl border border-gray-200 min-h-[120px] md:min-h-[140px] justify-center">
                <p className="text-2xl md:text-3xl font-bold text-orange-600 leading-tight break-words">1000+</p>
                <p className="text-gray-600 font-semibold text-xs md:text-sm line-clamp-2">Partner Users</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-32 border-t border-gray-200">
          <div className="flex flex-col gap-8 max-w-5xl">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold">Key Learnings</h2>
              <div className="w-12 h-1.5 bg-orange-primary rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              EnlightenCRM demonstrated my ability to work within platform constraints while creating innovative solutions. Mastering Salesforce's design patterns, understanding Visualforce limitations, and designing for both administrators and end-users required deep technical knowledge and strategic thinking about enterprise workflows.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-20 md:py-28 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition-colors text-center"
            >
              ← Back to Portfolio
            </Link>
            <Link
              to="/portfolio/website"
              className="px-6 py-3 rounded-xl bg-orange-primary text-white font-semibold hover:bg-orange-600 transition-colors text-center"
            >
              Next Case Study →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
