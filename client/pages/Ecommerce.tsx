import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Ecommerce() {
  const ogImage =
    "https://api.builder.io/api/v1/image/assets/TEMP/66222ed966fd45c1c4d79deaf7dc3c373ef42828?width=1200";
  const description =
    "LMScheckout case study: enterprise course commerce platform design — multi-tenant architecture, Bootstrap design system, and measurable outcomes.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Ecommerce Case Study — LMScheckout | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/ecommerce"
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
                LMScheckout
              </h1>
              <p className="text-gray-500 text-xl md:text-2xl font-light">
                Enterprise Course Commerce Platform
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Led the end-to-end design of a revolutionary white-label ecommerce platform that automates course sales and enrollments across diverse sectors, from higher education to corporate training.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Industry</p>
                  <p className="text-gray-600 font-semibold">EdTech</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Role</p>
                  <p className="text-gray-600 font-semibold">Design Lead</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Timeline</p>
                  <p className="text-gray-600 font-semibold">18 months</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 w-full aspect-square flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F44df82f57f53430eaee856f92863f33e?format=webp&width=800&height=1200"
                alt="LMScheckout Platform"
                className="w-full h-full object-cover"
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
                Organizations were forcing course sales through generic e-commerce platforms or expensive custom builds, resulting in manual enrollment processes, poor user experience, and significant revenue leakage.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600"><span className="font-semibold">30+ organizations</span> researched to understand pain points</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600"><span className="font-semibold">Multiple verticals</span> including higher ed, nonprofits, corporate training</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600">Market needed a <span className="font-semibold">purpose-built solution</span> for educational commerce</p>
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
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Multi-Tenant Architecture</h3>
                <p className="text-gray-600">Three-layer design balancing standardization with customization across all tenant organizations</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Design System</h3>
                <p className="text-gray-600">Bootstrap-based component library with 30+ custom components tailored for course commerce</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Smart Integration</h3>
                <p className="text-gray-600">Automated workflows connecting storefronts to LMS, CRM, and payment systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Deep Dive */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Architecture & Design</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a1abc0caf18a8b6749322d4e8b0a4816cdbc42e?width=2480"
              alt="Architecture Diagram"
              className="w-full h-auto rounded-2xl border border-gray-200"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">Platform Layer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Core commerce engine</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>LMS/CRM integration</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Security infrastructure</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">Configuration Layer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Brand customization</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Business rules</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Payment setup</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">Experience Layer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Responsive storefront</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Smart catalog</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Account management</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Innovations */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100/30 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Key Innovations</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Adaptive Checkout</h3>
                <p className="text-gray-600 mb-4">Morphs based on context to streamline conversion:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Single course: 2-step flow</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Multiple courses: Shopping cart</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Corporate: PO handling</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>International: Tax & currency</span></li>
                </ul>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-orange-primary font-semibold text-lg">68% conversion improvement</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Smart Catalog</h3>
                <p className="text-gray-600 mb-4">Scales intelligently with content volume:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>&lt;10 courses: Showcase</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>10-50: Filterable grid</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>50-500: Faceted search</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>500+: AI recommendations</span></li>
                </ul>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-orange-primary font-semibold text-lg">30+ organizations onboarded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Measurable Results</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 p-6 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-xl border border-blue-200">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">$500k</p>
                <p className="text-gray-600 font-semibold">ARR Year 1</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-gradient-to-br from-green-50 to-green-100/30 rounded-xl border border-green-200">
                <p className="text-3xl md:text-4xl font-bold text-green-600">50k+</p>
                <p className="text-gray-600 font-semibold">Course Enrollments</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-xl border border-purple-200">
                <p className="text-3xl md:text-4xl font-bold text-purple-600">4.8/5</p>
                <p className="text-gray-600 font-semibold">User Satisfaction</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-xl border border-orange-200">
                <p className="text-3xl md:text-4xl font-bold text-orange-600">10X</p>
                <p className="text-gray-600 font-semibold">ROI on Exit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Design Process</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">1</div>
                  <div className="w-1 h-24 bg-orange-primary mt-4 hidden md:block"></div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">Research & Discovery</h3>
                  <p className="text-gray-600">Conducted comprehensive research across 30+ organizations across higher education, nonprofits, associations, SaaS companies, and corporate training.</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">2</div>
                  <div className="w-1 h-24 bg-orange-primary mt-4 hidden md:block"></div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">Architecture Design</h3>
                  <p className="text-gray-600">Designed three-layer architecture with platform, configuration, and experience layers supporting 15 distinct user personas.</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">3</div>
                  <div className="w-1 h-24 bg-orange-primary mt-4 hidden md:block"></div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">System Design</h3>
                  <p className="text-gray-600">Created comprehensive design system leveraging Bootstrap with 30+ custom components, responsive utilities, and theme architecture.</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">4</div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">Testing & Optimization</h3>
                  <p className="text-gray-600">Conducted 50+ hours of usability testing, A/B tested checkout flows, and iterated based on real-world usage from 10 pilot customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">What This Taught Me</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              LMScheckout demonstrated my ability to design complex, enterprise-grade platforms using established frameworks while pushing creative boundaries. Working within Bootstrap's constraints while creating a unique, customizable experience taught me the value of systematic design thinking. The success came from mastery of responsive frameworks, efficient handoff workflows, deep technical collaboration, and understanding how to optimize designs for the underlying database architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-blue-900 font-sora text-xl font-bold">Design Expertise</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Enterprise design systems</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Multi-tenant architecture</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Responsive scaling</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-green-900 font-sora text-xl font-bold">Technical Collaboration</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex gap-2"><span className="text-green-600 font-bold">→</span><span>CakePHP integration</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold">→</span><span>PostgreSQL optimization</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold">→</span><span>Framework mastery</span></li>
                </ul>
              </div>
            </div>
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
              to="/mobile-app"
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
