import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function WebsiteProject() {
  const ogImage =
    "https://api.builder.io/api/v1/image/assets/TEMP/35abb0e68b5595f56e887e5539bc47dc23e0b049?width=1200";
  const description =
    "Envisiontel corporate website case study: dual services and software positioning, WordPress architecture, and conversion results.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Corporate Website Case Study — Envisiontel | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/portfolio/website"
      />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-8 rounded-full bg-orange-primary"></div>
                <span className="text-orange-primary font-semibold uppercase tracking-wider text-sm">Case Study</span>
              </div>
              <h1 className="text-gray-600 font-sora text-5xl md:text-6xl font-bold leading-tight">
                Envisiontel
              </h1>
              <p className="text-gray-500 text-xl md:text-2xl font-light">
                Corporate Website & Digital Experience
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Designed the complete web presence for an eLearning solutions company communicating dual value propositions—custom content development and proprietary SaaS LMS software.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Type</p>
                  <p className="text-gray-600 font-semibold">Website</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Role</p>
                  <p className="text-gray-600 font-semibold">Design Lead</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Tech</p>
                  <p className="text-gray-600 font-semibold">WordPress</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/35abb0e68b5595f56e887e5539bc47dc23e0b049?width=838"
                alt="Envisiontel Website"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">The Challenge</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Envisiontel offered two distinct services that appealed to different buyer personas—custom eLearning content development and a proprietary learning management platform. The challenge was creating a single digital experience that communicated both value propositions without confusing the market.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600">Dual buyer personas with <span className="font-semibold">different needs</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600"><span className="font-semibold">Complex positioning</span> to communicate</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600">Conversion optimization across <span className="font-semibold">multiple journeys</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">The Solution</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Segmented Navigation</h3>
                <p className="text-gray-600">Clear pathways for content buyers and platform prospects with distinct messaging and CTAs</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Strategic Messaging</h3>
                <p className="text-gray-600">Case studies and ROI content aligned with buyer personas and decision-making criteria</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">WordPress Optimization</h3>
                <p className="text-gray-600">High-performance WordPress implementation with custom plugins and conversion-optimized flows</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Highlights */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Design Highlights</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-amber-900 font-sora text-2xl font-bold">Information Architecture</h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span><span>Two distinct buyer journeys</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span><span>Case study collections by use case</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span><span>Resource library organization</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span><span>Lead nurture sequences</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-orange-50 rounded-xl border border-orange-200">
                <h3 className="text-orange-900 font-sora text-2xl font-bold">Conversion Optimization</h3>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">→</span><span>Persona-based CTAs</span></li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">→</span><span>Lead magnet integration</span></li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">→</span><span>Form optimization</span></li>
                  <li className="flex gap-2"><span className="text-orange-600 font-bold">→</span><span>Funnel analysis tracking</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100/30 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Business Impact</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-blue-600">40%</p>
                <p className="text-gray-600 font-semibold">Conversion Lift</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-green-600">3x</p>
                <p className="text-gray-600 font-semibold">Lead Growth</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-purple-600">2.5x</p>
                <p className="text-gray-600 font-semibold">Time-on-Site</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-orange-600">60k+</p>
                <p className="text-gray-600 font-semibold">Monthly Visitors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Key Takeaway</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              The Envisiontel website demonstrates my ability to solve complex positioning problems through strategic information architecture and user experience design. Managing dual value propositions requires clear navigation, compelling messaging, and conversion optimization across multiple buyer journeys—resulting in 40% conversion improvement and 3x lead growth.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition-colors text-center"
            >
              ← Back to Portfolio
            </Link>
            <Link
              to="/ecommerce"
              className="px-6 py-3 rounded-xl bg-orange-primary text-white font-semibold hover:bg-orange-600 transition-colors text-center"
            >
              View More Work →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
