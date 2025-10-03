import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-9 md:py-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 bg-[rgba(168,220,219,0.5)]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/66222ed966fd45c1c4d79deaf7dc3c373ef42828?width=838"
            alt="LMScheckout Platform"
            className="w-full md:w-[419px] h-auto md:h-[335px] rounded-xl object-cover border-0 outline-none ring-0 shadow-none"
          />
          <div className="flex flex-col justify-center items-start gap-4 max-w-[740px]">
            <h1 className="text-gray-600 font-sora text-3xl md:text-4xl lg:text-[56px] font-bold !leading-[65px]">
              LMScheckout: Enterprise Course Commerce Platform
            </h1>
            <h2 className="text-gray-600 font-sora text-xl md:text-2xl font-semibold">
              UI/UX Design Case Study
            </h2>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-center gap-7">
          <h2 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
            Design Process & Methodology
          </h2>
          <div className="text-gray-600 space-y-4">
            <h3 className="font-sora text-xl md:text-2xl font-bold">
              Discovery & Research Phase
            </h3>
            <p className="text-base md:text-lg">
              Conducted comprehensive research across 30+ organizations to
              understand the fragmented course commerce landscape. Engaged with
              stakeholders from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>
                Higher Education Institutions struggling with rigid, outdated
                payment systems that couldn't handle complex pricing models
                (in-state/out-of-state, early bird, alumni discounts)
              </li>
              <li>
                Non-profit Organizations needing donation integration alongside
                course fees and membership-based pricing
              </li>
              <li>
                Professional Associations requiring sophisticated
                member/non-member pricing tiers and continuing education credit
                tracking
              </li>
              <li>
                SaaS Companies seeking to monetize product training and
                certification programs
              </li>
              <li>
                Corporate Training Providers demanding enterprise invoicing,
                purchase orders, and bulk enrollment capabilities
              </li>
            </ul>
            <p className="text-sm md:text-base">
              <span className="font-bold">Key insight:</span> Organizations were
              forcing course sales through generic e-commerce platforms or
              expensive custom builds, resulting in manual enrollment processes,
              poor user experience, and significant revenue leakage.
              Off-the-shelf ecommerce platforms like Shopify and BigCommerce
              lacked intelligent integrations with LMS platforms to automate
              enrollments post sale. The market desperately needed a
              purpose-built solution that understood the unique requirements of
              selling educational content and could support on-demand, live
              in-person or time-based courses without intense customization.
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Architecture & Multi-Tenant Design Strategy
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start gap-9">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0a1abc0caf18a8b6749322d4e8b0a4816cdbc42e?width=2480"
            alt="Architecture Diagram"
            className="w-full h-auto"
          />
          <div className="text-gray-900 space-y-4">
            <p className="text-base md:text-lg">
              Designed a revolutionary three-layer architecture that balanced
              standardization with customization:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Platform Layer (Consistent across all tenants)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Core commerce engine handling transactions, tax calculation,
                  and payment processing
                </li>
                <li>
                  Universal integration framework for LMS and CRM connections
                </li>
                <li>
                  Security and compliance infrastructure (PCI DSS, GDPR, FERPA)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Configuration Layer (Tenant-specific settings)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Visual brand customization (colors, fonts, logos, layouts)
                </li>
                <li>
                  Business rule engine for pricing, discounts, and access
                  control
                </li>
                <li>Category and label taxonomy for course organization</li>
                <li>Payment gateway selection and configuration</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Experience Layer (End-user facing)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Responsive storefront with tenant branding</li>
                <li>Intelligent course catalog with faceted search</li>
                <li>Streamlined checkout flow with saved payment methods</li>
                <li>Self-service account management portal</li>
              </ul>
            </div>

            <p className="text-sm md:text-base">
              Created detailed user flows for 15 distinct personas across two
              primary user types:
              <br />
              <span className="font-bold">Administrators:</span> Course
              managers, finance teams, marketing managers, IT administrators
              <br />
              <span className="font-bold">Purchasers:</span> Individual
              learners, corporate buyers, group coordinators, international
              students
            </p>

            <h3 className="font-bold text-base md:text-lg">
              Design System & Bootstrap Framework Implementation
            </h3>
            <p className="text-sm md:text-base">
              Leveraged Bootstrap's responsive grid system while creating custom
              components for educational commerce:
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Photoshop Design Architecture
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Developed a comprehensive layer-based component library in
                  Photoshop with smart objects for reusable elements
                </li>
                <li>
                  Created 12-column grid templates at 5 breakpoints (xs: 576px,
                  sm: 768px, md: 992px, lg: 1200px, xl: 1400px)
                </li>
                <li>
                  Established organized layer groups with consistent naming
                  conventions matching Bootstrap classes
                </li>
                <li>
                  Built style guides with character and paragraph styles for
                  typography consistency
                </li>
                <li>
                  Utilized adjustment layers for non-destructive theme
                  variations
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Illustrator Asset Creation
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Designed 300+ vector icons optimized for web with consistent
                  24px grid
                </li>
                <li>
                  Created scalable logos and graphics with multiple export
                  formats (SVG, PNG, WebP)
                </li>
                <li>
                  Developed illustration systems for empty states, onboarding,
                  and success messages
                </li>
                <li>
                  Built data visualization components for analytics dashboards
                </li>
                <li>
                  Established symbol libraries for consistent UI elements across
                  designs
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Bootstrap Customization & Theme Architecture
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Extended Bootstrap's Sass variables for tenant-specific
                  theming
                </li>
                <li>
                  Created 30+ custom Bootstrap components tailored for course
                  commerce
                </li>
                <li>
                  Designed responsive utility classes beyond Bootstrap defaults
                </li>
                <li>
                  Implemented CSS custom properties for runtime theme switching
                </li>
                <li>
                  Built theme templates leveraging Bootstrap's theming
                  capabilities
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Responsive Design Specifications
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Mobile-First Approach: Designed at 375px base, scaling up
                  through breakpoints
                </li>
                <li>
                  Fluid Grid Layouts: Utilized Bootstrap's container-fluid for
                  full-width designs
                </li>
                <li>
                  Adaptive Components: Created multiple component variations per
                  breakpoint
                </li>
                <li>
                  Touch-Optimized: Ensured 44px minimum touch targets on mobile
                </li>
                <li>
                  Progressive Enhancement: Core functionality at smallest
                  breakpoint, enhanced features at larger sizes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Collaboration Section */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Technical Collaboration (CakePHP & Postgres SQL)
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start">
          <div className="text-gray-600 space-y-4">
            <p className="text-base md:text-lg">
              Worked closely with development team to ensure designs aligned
              with technical architecture:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                CakePHP Template Structure
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Designed modular view elements that mapped to CakePHP's
                  element structure
                </li>
                <li>
                  Created layout templates corresponding to CakePHP layout files
                </li>
                <li>Specified component states for CakePHP's view cells</li>
                <li>
                  Documented form designs optimized for CakePHP's FormHelper
                </li>
                <li>
                  Established naming conventions matching CakePHP's conventions
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                PostgreSQL Data Visualization
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Designed dashboard interfaces that efficiently displayed
                  complex PostgreSQL queries
                </li>
                <li>
                  Created reporting layouts optimized for PostgreSQL's
                  aggregation capabilities
                </li>
                <li>
                  Built search interfaces leveraging PostgreSQL's full-text
                  search
                </li>
                <li>
                  Designed filtering systems utilizing PostgreSQL's JSONB
                  capabilities for flexible schemas
                </li>
                <li>
                  Specified pagination patterns for large dataset handling
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Design Handoff Process</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Exported pixel-perfect PSDs with organized layers matching
                  CakePHP view structure
                </li>
                <li>
                  Provided detailed redlines in Illustrator with spacing,
                  sizing, and color specifications
                </li>
                <li>
                  Created Bootstrap HTML/CSS prototypes as reference
                  implementations
                </li>
                <li>Delivered sliced assets optimized for web performance</li>
                <li>
                  Maintained version-controlled design files synchronized with
                  development sprints
                </li>
              </ul>
            </div>

            <h3 className="font-bold text-base md:text-lg mt-6">
              White-Label Configuration Interface
            </h3>
            <p className="text-sm md:text-base">
              Designed administrative tools enabling non-technical users to
              customize their storefronts:
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-base">Visual Theme Builder</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Color Palette Editor: Photoshop mockups showing real-time
                  preview
                </li>
                <li>Typography Selector: Bootstrap-compatible font stacks</li>
                <li>
                  Layout Composer: Drag-and-drop interface using Bootstrap's
                  grid
                </li>
                <li>
                  Logo Uploader: Smart cropping and sizing for various
                  placements
                </li>
                <li>
                  CSS Override Editor: Advanced users could add custom styles
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">Component Configuration</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Designed interfaces for toggling Bootstrap components on/off
                </li>
                <li>
                  Created visual controls for adjusting Bootstrap utilities
                  (spacing, borders, shadows)
                </li>
                <li>
                  Built preview system showing changes across device sizes
                </li>
                <li>Implemented accessibility checker for color contrast</li>
              </ul>
            </div>

            <h3 className="font-bold text-base md:text-lg mt-6">
              Integration Design & Workflow Automation
            </h3>
            <p className="text-sm md:text-base">
              Designed seamless integration touchpoints that eliminated manual
              processes:
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-base">LMS Integration Interface</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Visual mapping tool connecting LMScheckout products to LMS
                  courses
                </li>
                <li>
                  Enrollment rule builder with conditional logic (immediate,
                  delayed, prerequisite-based)
                </li>
                <li>Bulk enrollment management dashboard</li>
                <li>Real-time sync status monitoring</li>
                <li>Error handling with automatic retry logic</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Salesforce Integration Architecture
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Bi-directional data flow design for leads, contacts, and
                  opportunities
                </li>
                <li>
                  Custom object mapping for course products and enrollments
                </li>
                <li>Automated campaign attribution for marketing ROI</li>
                <li>
                  Revenue recognition workflows for subscription-based courses
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base">
                Payment Gateway Abstraction
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Unified checkout experience across Stripe, PayPal,
                  Authorize.net, and others
                </li>
                <li>
                  Smart payment method recommendations based on transaction type
                </li>
                <li>Stored payment token management with PCI compliance</li>
                <li>Subscription and payment plan configuration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Category & Access Control */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Category & Access Control System
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start">
          <div className="text-gray-600 space-y-4">
            <p className="text-base md:text-lg">
              Engineered a sophisticated taxonomy system that solved complex
              visibility requirements:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Multi-Dimensional Categorization
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Hierarchical categories (up to 5 levels deep)</li>
                <li>
                  Cross-cutting labels for attributes (difficulty, duration,
                  certification)
                </li>
                <li>
                  Dynamic collections based on rules (New, Popular, Expiring
                  Soon)
                </li>
                <li>Custom taxonomies per tenant</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Access Control Matrix</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Role-based visibility (public, member, premium, custom roles)
                </li>
                <li>Time-based access (early access, embargo periods)</li>
                <li>Geographic restrictions for compliance</li>
                <li>Prerequisite course requirements</li>
                <li>Bundle and pathway configurations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prototyping & Usability Testing */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Prototyping & Usability Testing
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start">
          <div className="text-gray-600 space-y-4">
            <p className="text-base md:text-lg">
              Conducted extensive testing across multiple phases:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Alpha Testing (Pre-launch)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Created clickable prototypes using Bootstrap HTML/CSS</li>
                <li>50+ hours of moderated usability testing</li>
                <li>
                  A/B testing on checkout flow variations achieving 34%
                  conversion improvement
                </li>
                <li>Card sorting exercises for optimal category structures</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Beta Program (Soft launch)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>10 pilot customers across different sectors</li>
                <li>500+ end-user transactions monitored</li>
                <li>Iterative improvements based on real-world usage</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Post-Launch Optimization</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Heatmap analysis revealing interaction patterns</li>
                <li>Funnel analysis identifying drop-off points</li>
                <li>Continuous multivariate testing on product pages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Design Innovations */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Key Design Innovations
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start">
          <div className="text-gray-600 space-y-4">
            <div className="space-y-3">
              <h3 className="font-bold text-base">Smart Checkout Flow</h3>
              <p className="text-sm md:text-base">
                Designed an adaptive checkout that morphs based on context:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Single course: Streamlined 2-step process</li>
                <li>Multiple courses: Shopping cart with bulk actions</li>
                <li>Subscription: Recurring billing configuration</li>
                <li>Corporate: PO and invoicing options</li>
                <li>International: Currency conversion and tax handling</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Responsive Catalog System</h3>
              <p className="text-sm md:text-base">
                Created an intelligent course catalog that adapts to content
                volume:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>&lt;10 courses: Showcase layout with rich media</li>
                <li>10-50 courses: Filterable grid with quick view</li>
                <li>50-500 courses: Faceted search with advanced filters</li>
                <li>500+ courses: AI-powered recommendations and search</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">
                Mobile-First Administration
              </h3>
              <p className="text-sm md:text-base">
                Designed administrative interfaces optimized for mobile devices
                using Bootstrap's responsive utilities:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>Course publication on-the-go</li>
                <li>Order management from phones</li>
                <li>Real-time enrollment notifications</li>
                <li>Quick price adjustments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Measurable Outcomes */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Measurable Outcomes
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start">
          <div className="text-gray-600 space-y-4">
            <p className="text-base md:text-lg">
              From launch through first year of profitability:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Platform Metrics</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>30+ organizations onboarded in first 12 months</li>
                <li>$500k ARR processed in first year</li>
                <li>50k+ course enrollments automated</li>
                <li>99.98% uptime maintained</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">User Experience Metrics</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  68% improvement in checkout conversion vs. previous solutions
                </li>
                <li>4.8/5 user satisfaction score across 100+ reviews</li>
                <li>73% reduction in support tickets related to enrollment</li>
                <li>
                  89% of administrators successfully configured platform without
                  support
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Business Impact</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  18-month path to profitability (6 months ahead of projection)
                </li>
                <li>
                  127% net revenue growth in year two indicating strong
                  product-market fit
                </li>
                <li>23% revenue growth impact from additional services</li>
                <li>Company acquired at a 10X ROI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reflection & Impact */}
        <div className="w-full flex justify-center items-center h-[200px] border-b border-gray-200 bg-gray-50 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[30px] font-bold px-4">
            Reflection & Impact
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 flex flex-col items-start gap-9">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e9270be75c5c7c77cc6938a664134ffa37bb87be?width=2480"
            alt="Reflection Image"
            className="w-full h-auto"
          />
          <div className="text-gray-600 space-y-4">
            <p className="text-base md:text-lg">
              LMScheckout demonstrates my ability to design complex,
              enterprise-grade platforms using established frameworks while
              pushing creative boundaries. Working within Bootstrap's
              constraints while creating a unique, customizable experience
              taught me the value of systematic design thinking. The
              Photoshop-to-CakePHP workflow I established became a model for
              efficient design-to-development handoff.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-base md:text-lg">
                The success stemmed from:
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Mastery of Bootstrap's responsive framework to create flexible
                  layouts
                </li>
                <li>
                  Efficient use of Photoshop and Illustrator for scalable design
                  systems
                </li>
                <li>
                  Deep understanding of CakePHP's MVC architecture in design
                  decisions
                </li>
                <li>
                  Optimization of designs for PostgreSQL's powerful data
                  capabilities
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base md:text-lg">
                This project showcases my expertise in:
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                <li>
                  Enterprise design using established frameworks (Bootstrap)
                </li>
                <li>Professional design tools (Photoshop, Illustrator)</li>
                <li>Technical collaboration with CakePHP developers</li>
                <li>Database-conscious interface design</li>
                <li>Multi-tenant architecture visualization</li>
                <li>Scaling design from concept to profitability</li>
              </ul>
            </div>

            <p className="text-base md:text-lg">
              LMScheckout has become the preferred course commerce platform for
              organizations seeking to professionalize their online education
              delivery, validating that thoughtful design within technical
              constraints can create exceptional user experiences.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
