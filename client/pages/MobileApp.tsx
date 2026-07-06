import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function MobileApp() {
  const ogImage =
    "https://api.builder.io/api/v1/image/assets/TEMP/2eb26e41379558561607d4d8396fcab00e19366b?width=800";
  const description =
    "Fitleaguer mobile app case study: league management, gamification, and AI-enhanced design-to-dev workflows.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo
        title="Mobile App Case Study — Fitleaguer | VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/mobile-app"
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
                Fitleaguer
              </h1>
              <p className="text-gray-500 text-xl md:text-2xl font-light">
                Fitness League Management & Gamification App
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Designed a mobile-first platform that transforms how fitness professionals monetize expertise through organized competition while maintaining community engagement.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Type</p>
                  <p className="text-gray-600 font-semibold">Mobile App</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Role</p>
                  <p className="text-gray-600 font-semibold">Design Lead</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Status</p>
                  <p className="text-gray-600 font-semibold">In Stealth</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Fd55596ad7b7a40bb98d73b95ea3a3697?format=webp&width=800&height=1200"
                alt="Fitleaguer Mobile App"
                className="h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">App Experience</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Ff29af523f052408bb259a47f1b12ca99?format=webp&width=800&height=1200"
                  alt="Fitleaguer League Management"
                  className="h-[500px] w-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F6519784fd7664bf795e7df544d40094d?format=webp&width=800&height=1200"
                  alt="Fitleaguer Activity Feed"
                  className="h-[500px] w-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Fd627a3f9ca8443b89ef235014f9a57e3?format=webp&width=800&height=1200"
                  alt="Fitleaguer Create League"
                  className="h-[500px] w-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Ff77a06e931af415bb16c3245085703b2?format=webp&width=800&height=1200"
                  alt="Fitleaguer Find Competition"
                  className="h-[500px] w-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
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
                Fitness professionals had built engaged communities but lacked platforms to monetize their expertise through organized competition. Personal trainers, gym owners, and fitness influencers needed a solution to earn revenue while maintaining client engagement.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600"><span className="font-semibold">20+ professionals</span> interviewed across fitness industry</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600">Critical gap in <span className="font-semibold">monetization solutions</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-primary font-bold text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-600">Need for <span className="font-semibold">B2B2C marketplace</span> structure</p>
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
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Mobile-First Design</h3>
                <p className="text-gray-600">Complex component system with variants and properties built in Figma for rapid prototyping and engineering handoff</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">AI Workflows</h3>
                <p className="text-gray-600">Integrated Figma with MCP server and Claude for accelerated design-to-engineering handoff workflow</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">B2B2C Marketplace</h3>
                <p className="text-gray-600">Dual-sided platform enabling league organizers and participants with distinct user experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Segments */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Dual User Segments</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6 p-8 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-blue-900 font-sora text-2xl font-bold">League Organizers</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-blue-800">Personal trainers & coaches</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-blue-800">Gym owners & facilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-blue-800">Fitness influencers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-blue-800">Association leaders</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 p-8 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-green-900 font-sora text-2xl font-bold">Participants</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-green-800">Personal training clients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-green-800">Community members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-green-800">Influencer followers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-green-800">League competitors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100/30 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Design Features</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">Complex Components</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Variant-driven component library</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Dynamic property binding</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Reusable pattern blocks</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Automated documentation</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-200">
                <h3 className="text-gray-600 font-sora text-2xl font-bold">User Workflows</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>League creation & setup</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Entry management</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Leaderboard & rankings</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary font-bold">→</span><span>Payment & commission</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Design System & Architecture</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">Figma Mastery</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Complex component variants</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Responsive prototypes</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Animation specifications</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Design tokens system</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">MCP Integration</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>AI-powered code gen</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Automated handoff</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Reduced iteration</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Faster development</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-600 font-sora text-xl font-bold">React Native Optimization</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Native performance</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Platform-specific variants</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Gesture handling</span></li>
                  <li className="flex gap-2"><span className="text-orange-primary">•</span><span>Offline capabilities</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">Measurable Impact</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-2xl font-bold text-blue-600">300%</p>
                <p className="text-gray-600 font-semibold text-sm">Headcount Reduction</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-2xl font-bold text-green-600">50%</p>
                <p className="text-gray-600 font-semibold text-sm">Faster Handoff</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-white rounded-xl border border-gray-200">
                <p className="text-2xl font-bold text-purple-600">In Beta</p>
                <p className="text-gray-600 font-semibold text-sm">Actively Growing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 border-t border-gray-200">
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
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">User Research</h3>
                  <p className="text-gray-600">Interviewed 20+ fitness professionals to understand monetization challenges and user needs across segments</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">2</div>
                  <div className="w-1 h-24 bg-orange-primary mt-4 hidden md:block"></div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">Design System Creation</h3>
                  <p className="text-gray-600">Built comprehensive Figma design system with complex components, variants, and properties for rapid iteration</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">3</div>
                  <div className="w-1 h-24 bg-orange-primary mt-4 hidden md:block"></div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">AI-Powered Handoff</h3>
                  <p className="text-gray-600">Integrated MCP server for Claude AI-enhanced code generation reducing development overhead by 300%</p>
                </div>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-primary text-white font-sora font-bold text-xl flex items-center justify-center">4</div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-gray-600 font-sora text-2xl font-bold">Beta Testing & Iteration</h3>
                  <p className="text-gray-600">Continuous user feedback loops with league organizers and participants to refine experience and monetization model</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="w-full px-6 md:px-24 lg:px-[200px] py-16 md:py-24 bg-blue-50 border-t border-gray-200">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-600 font-sora text-4xl font-bold">What This Project Demonstrated</h2>
              <div className="w-12 h-1 bg-orange-primary rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Fitleaguer showcases my ability to work in early-stage, high-uncertainty environments where product scope evolves rapidly. Building a complex mobile marketplace required mastery of modern design tools, understanding of commerce mechanics, and the ability to communicate vision to technical teams. The MCP server integration demonstrates my forward-thinking approach to leveraging AI for accelerating design-to-development workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-blue-200">
                <h3 className="text-blue-900 font-sora text-xl font-bold">Mobile Expertise</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>React Native optimization</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Complex state management</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Touch-optimized interactions</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-blue-200">
                <h3 className="text-blue-900 font-sora text-xl font-bold">AI Integration</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>MCP server architecture</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>AI-assisted code generation</span></li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span><span>Workflow acceleration</span></li>
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
              to="/salesforce"
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
