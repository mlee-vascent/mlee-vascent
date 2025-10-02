import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-9 lg:px-[100px] py-9 md:py-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 bg-gray-200">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2eb26e41379558561607d4d8396fcab00e19366b?width=452"
            alt="Fitleaguer Mobile App"
            className="w-full md:w-[226px] h-auto md:h-[429px] rounded-xl object-cover border-0 outline-none ring-0 shadow-none"
          />
          <div className="flex flex-col justify-center items-start gap-4 max-w-[740px]">
            <h1 className="text-gray-600 font-sora text-3xl md:text-4xl lg:text-[56px] font-bold !leading-[65px]">
              Fitleaguer: Fitness League Management & Gamification App
            </h1>
            <h2 className="text-gray-600 font-sora text-xl md:text-2xl font-semibold">
              UI/UX Design Case Study
            </h2>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col items-center gap-12">
          <h2 className="text-gray-600 text-center font-sora text-2xl md:text-[30px] font-bold">
            Design Process & Methodology
          </h2>

          <div className="w-full space-y-6">
            <h3 className="text-gray-600 font-sora text-xl md:text-2xl font-bold">
              Discovery & Research Phase
            </h3>
            <p className="text-gray-600 text-base">
              Conducted extensive stakeholder research with 20+ fitness industry
              professionals to understand the monetization challenges facing the
              fitness ecosystem. Interviewed athletic trainers struggling to
              retain clients, personal coaches seeking additional revenue
              streams, fitness influencers looking to provide tangible value
              beyond content and association leaders seeking better ways to
              engage members.
            </p>
            <p className="text-gray-600 text-base">
              Key insights revealed a critical market gap: fitness professionals
              had built engaged communities but lacked platforms to monetize
              their expertise through organized competition. Youth sport leagues
              needed fundraising alternatives, while non-profit organizations
              sought innovative ways to promote member engagement while
              increasing fund raising goals.
            </p>

            <h3 className="text-gray-600 font-sora text-xl md:text-2xl font-bold mt-6">
              Research findings identified dual user segments:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
              <li>
                <span className="font-bold">League Organizers:</span> Personal
                trainers, gym owners, influencers, and coaches who could create
                branded competitions, set entry fees, and earn commission while
                maintaining client engagement between sessions
              </li>
              <li>
                <span className="font-bold">Participants:</span> Their clients,
                followers, and community members seeking structured motivation
                and peer accountability
              </li>
            </ul>
            <p className="text-gray-600 text-base mt-3">
              This B2B2C model insight fundamentally shaped the platform
              architecture, creating tools for fitness professionals to launch
              custom competitions, manage prize pools, and track participant
              engagement, essentially providing a white-label competition
              infrastructure that leverages their existing authority and
              relationships.
            </p>
          </div>
        </section>

        {/* Component Architecture Section */}
        <div className="w-full flex justify-center items-center h-[200px] bg-gray-200 shadow-sm">
          <h2 className="text-gray-600 text-center font-sora text-2xl md:text-[40px] font-bold px-4">
            Component Architecture & Design System
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col items-center gap-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bddd8f82fa802c2aa9d4564d2c0951b581935716?width=2480"
            alt="Component Architecture"
            className="w-full h-auto"
          />

          <div className="w-full space-y-6 text-gray-600">
            <p className="text-base">
              Developed an advanced component-based design system that has
              become the cornerstone of our development efficiency:
            </p>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                Variant-Driven Component Library
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  Created 45+ master components with 200+ variants handling all
                  possible states and contexts
                </li>
                <li>
                  Each component features adjustable properties including size
                  (S/M/L/XL), state (default/hover/active/disabled), theme
                  (light/dark), and context-specific configurations
                </li>
                <li>
                  Implemented smart component nesting where child components
                  automatically inherit parent properties, reducing redundant
                  specifications
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                Auto-Layout Mastery
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  Engineered components using advanced auto-layout with
                  responsive breakpoints built directly into Figma components
                </li>
                <li>
                  Created fluid spacing tokens that automatically adjust based
                  on viewport, eliminating the need for multiple
                  mobile/tablet/desktop versions
                </li>
                <li>
                  Developed intelligent padding systems that maintain visual
                  hierarchy across all component sizes
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                Property-Based Customization
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  Designed components with 5-10 configurable properties per
                  master component
                </li>
                <li>
                  Boolean toggles for optional elements (icons, badges,
                  secondary text)
                </li>
                <li>
                  Dropdown selections for variants
                  (primary/secondary/success/danger)
                </li>
                <li>Text and number inputs for dynamic content</li>
                <li>
                  This approach reduced unique component creation from 500+
                  screens to 45 master components with infinite configurations
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                AI-Enhanced Development Workflow
              </h3>
              <p className="text-base">
                Pioneered the integration of cutting-edge AI tools to bridge
                design-to-development gap:
              </p>

              <h4 className="font-bold text-base">
                MCP Server Plugin Implementation
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  Configured custom MCP (Model Context Protocol) server plugins
                  that parse Figma component schemas
                </li>
                <li>
                  Trained models on our design token system to generate React
                  Native code that perfectly matches design specifications
                </li>
                <li>
                  Created automated pipelines that convert Figma components to
                  production-ready code with proper TypeScript interfaces
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                Component Code Generation
              </h3>
              <p className="text-base">
                Each Figma component automatically generates:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>React Native component with all variants</li>
                <li>TypeScript prop interfaces matching Figma properties</li>
                <li>Styled-components with design tokens</li>
                <li>Storybook documentation</li>
                <li>Unit test templates</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-sora text-xl md:text-2xl font-bold">
                Development Time Reduction: 50%
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Traditional handoff: 40 hours/week development time</li>
                <li>With our system: 20 hours/week development time</li>
                <li>Eliminated back-and-forth on specifications</li>
                <li>Zero design-to-code interpretation errors</li>
                <li>Automatic generation of edge cases and states</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feedback & Iteration Section */}
        <div className="w-full flex justify-center items-center h-[200px] bg-gray-200 shadow-sm">
          <h2 className="text-gray-700 text-center font-sora text-2xl md:text-[40px] font-bold px-4">
            Feedback & Iteration Learnings
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col items-start gap-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d5d9843de8ba49f80cf5efdb3c323f5cf525a9f8?width=2480"
            alt="Feedback and Iteration"
            className="w-full h-auto"
          />

          <div className="w-full space-y-6 text-gray-600">
            <h3 className="font-sora text-xl md:text-2xl font-bold">
              Stakeholder Validation & Iteration
            </h3>
            <p className="text-base md:text-lg">
              Conducted bi-weekly validation sessions with our discovery cohort
              of fitness professionals:
            </p>

            <div className="space-y-3 text-base">
              <p>
                <span className="font-bold">Personal Trainers & Coaches</span>{" "}
                praised the league creation tools, requesting additional
                customization options for competition rules which we
                incorporated through configurable rule templates.
              </p>
              <p>
                <span className="font-bold">Fitness Influencers</span> validated
                the social sharing mechanisms and suggested integrated content
                creation tools, leading to our development of competition
                highlight generators.
              </p>
              <p>
                <span className="font-bold">Youth Sport Organizations</span>{" "}
                confirmed the fundraising potential, inspiring our tiered
                commission structure and transparent financial reporting
                dashboard.
              </p>
              <p>
                Elite Athletes provided feedback on performance metrics,
                resulting in our adaptive metric system that adjusts based on
                sport type and competition level.
              </p>
              <p>
                <span className="font-bold">Associations</span> validated tools
                that could engage members and drive participation in fund
                raisers through gamified exercise and social media integrations.
              </p>
            </div>

            <h3 className="font-sora text-xl md:text-2xl font-bold mt-8">
              Advanced Prototyping & Testing
            </h3>
            <p className="text-base md:text-lg">
              Built sophisticated prototypes using Figma's advanced features:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-base">Interactive Variables</h4>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>
                    Implemented complex state management using Figma variables
                  </li>
                  <li>
                    Created realistic data flows showing live competition
                    updates
                  </li>
                  <li>
                    Simulated real-time leaderboard changes and point
                    calculations
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base">
                  Conditional Interactions
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>
                    Designed branching user flows based on user type (organizer
                    vs. participant)
                  </li>
                  <li>
                    Created dynamic onboarding that adapts based on user goals
                  </li>
                  <li>
                    Implemented progressive disclosure patterns that reveal
                    features based on user engagement
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base">
                  Component Stress Testing
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>
                    Tested components with extreme data cases (long names, large
                    numbers, multiple badges)
                  </li>
                  <li>Validated responsive behavior across 8 breakpoints</li>
                  <li>Ensured accessibility compliance at component level</li>
                </ul>
              </div>
            </div>

            <h3 className="font-sora text-xl md:text-2xl font-bold mt-8">
              Key Technical Innovations
            </h3>
            <p className="text-base md:text-lg">
              Variant Architecture Examples
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-base">
                  Competition Card Component
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>4 size variants (compact/standard/expanded/featured)</li>
                  <li>
                    9 activity type states (road bike, gravel bike, mountain
                    bike, running, walking, hiking, trail running, simming)
                  </li>
                  <li>3 participation states (not joined/joined/leading)</li>
                  <li>
                    5 athlete level modes (rookie, beginner, intermediate,
                    expert, elite)
                  </li>
                  <li>
                    5 organizer level modes (initiator, builder, strategist,
                    champion, legend)
                  </li>
                  <li>
                    5 league type modes (head to head, tournament, bracket,
                    leaderboard, fundraiser)
                  </li>
                  <li>
                    Total: hundreds of possible combinations from 1 master
                    component
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base">
                  Activity Button Component
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>3 hierarchy levels (primary/secondary/tertiary)</li>
                  <li>4 states (default/hover/active/disabled)</li>
                  <li>2 layouts (icon+label/label only)</li>
                  <li>8 activity types with unique icons and colors</li>
                  <li>
                    Boolean properties for: loading state, notification badge,
                    completion checkmark
                  </li>
                  <li>Total: 192+ configurations from 1 master component</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base">Design Token System</h4>
                <p className="text-base mt-2">
                  Established a mathematical token system that scales perfectly:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-base mt-2">
                  <li>
                    Spacing: 4px base unit with multipliers (0.25x, 0.5x, 1x,
                    1.5x, 2x, 3x, 4x, 6x, 8x, 12x, 16x)
                  </li>
                  <li>
                    Typography: Modular scale with 1.25 ratio for consistent
                    hierarchy
                  </li>
                  <li>
                    Colors: Systematic tint/shade generation from base colors
                    using HSL adjustments
                  </li>
                  <li>
                    Border Radius: Proportional to component size (small: 8px,
                    medium: 12px, large: 16px, xlarge: 20px)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Go-To-Market Section */}
        <div className="w-full flex justify-center items-center h-[200px] bg-gray-200 shadow-sm">
          <h2 className="text-gray-800 text-center font-sora text-2xl md:text-[40px] font-bold px-4">
            Go-To-Market Planning
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col items-start gap-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e7395e495c88498174693fab134221b5d1dbb3a7?width=2480"
            alt="Go-To-Market Planning"
            className="w-full h-auto"
          />

          <div className="w-full space-y-6 text-gray-600">
            <h3 className="font-sora text-xl md:text-2xl font-bold">
              Pre-Launch Metrics & Projections
            </h3>
            <p className="font-bold text-base">
              Based on stakeholder testing and prototype validation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>
                92% task completion rate in usability testing with fitness
                professionals
              </li>
              <li>
                4.7/5 anticipated user satisfaction from beta testing group
              </li>
              <li>
                75% of fitness professionals expressed strong interest in
                creating paid leagues
              </li>
              <li>
                $500K projected first 6 months revenue through promised launch
                cohorts
              </li>
            </ul>

            <h3 className="font-bold text-base mt-6">
              Technical Documentation Delivered
            </h3>
            <p className="text-base">
              Comprehensive design system documentation including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>
                Component library with 45 master components generating 500+
                variants
              </li>
              <li>
                Design token specification with 200+ tokens across spacing,
                color, typography, and effects
              </li>
              <li>AI plugin configuration for MCP server integration</li>
              <li>
                Figma-to-code mapping documentation for automated code
                generation
              </li>
              <li>Component API documentation with TypeScript interfaces</li>
              <li>Accessibility annotations for WCAG AAA compliance</li>
            </ul>

            <h3 className="font-bold text-base mt-6">Reflection & Impact</h3>
            <p className="text-base">
              This pre-launch project demonstrates my ability to leverage
              cutting-edge design tools and AI technologies to create
              unprecedented development efficiencies. By focusing on component
              architecture rather than individual screens, and integrating
              AI-powered code generation, we've reduced a typical 6-month
              development cycle to 3 months while maintaining design excellence.
            </p>
            <p className="text-base">
              The sophisticated component system with intelligent variants and
              properties has not only accelerated development but also ensures
              perfect design consistency as we scale. The integration of MCP
              server plugins represents the future of design-to-development
              workflows, eliminating the traditional handoff friction that
              plagues most product teams.
            </p>
            <p className="text-base">
              Currently finalizing seed funding with strong interest from
              fitness industry stakeholders who see the platform's potential to
              revolutionize how fitness professionals and associations monetize
              their expertise and raise money through their communities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
