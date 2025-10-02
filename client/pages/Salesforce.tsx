import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Salesforce() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-9 lg:px-[100px] py-9 md:py-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 bg-[#FFD7C3]">
          <div className="w-full md:w-[419px] h-auto md:h-[335px] rounded-xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2cfd9ed00d56763a050a99c331e77e43f45d11ed?width=838"
              alt="Salesforce Hero"
              className="w-full h-full object-cover block border-0 outline-none ring-0 shadow-none"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-4 max-w-[740px]">
            <h1 className="text-[#59697F] font-sora text-3xl md:text-4xl lg:text-[56px] font-bold !leading-[65px]">
              EnlightenCRM: Salesforce-Native Learning Management Solution
            </h1>
            <h2 className="text-[#59697F] font-sora text-xl md:text-2xl font-semibold">
              UI/UX Design Case Study
            </h2>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col items-center gap-7">
          <h2 className="text-[#59697F] text-center font-sora text-2xl md:text-[40px] font-bold">
            Design Process & Methodology
          </h2>
          
          <div className="w-full text-[#59697F] text-base md:text-lg space-y-4 leading-[16px] md:leading-[16px]">
            <p>
              Partnered with a Fortune 500 technology company experiencing critical sales enablement and partner certification challenges:
            </p>
            
            <h3 className="font-bold text-base pt-4">Initial Pain Points Identified:</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7">
              <li>Sales Onboarding Crisis: New hires took 6+ months to reach productivity, with training scattered across multiple systems</li>
              <li>CRM Adoption Issues: Sales reps avoided Salesforce due to constant context-switching for training</li>
              <li>Partner Training Gaps: No unified system to deliver product training to 5,000+ channel partners</li>
              <li>Compliance Tracking: Manual tracking of certifications in spreadsheets with no Salesforce integration</li>
              <li>ROI Blindness: Unable to correlate training completion with sales performance metrics</li>
              <li>Lacking a notification system to alert expiring certification holders to re-certify, negatively impacting partner payments and trust</li>
            </ul>

            <h3 className="font-bold text-base pt-4">Conducted 100+ hours of shadowing and interviews with:</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7">
              <li>Sales Representatives frustrated by leaving Salesforce for training</li>
              <li>Sales Managers lacking visibility into team readiness</li>
              <li>L&D Teams struggling with adoption and completion rates</li>
              <li>Partner Managers manually tracking partner certifications</li>
              <li>Salesforce Administrators dealing with training data silos</li>
            </ul>

            <p className="pt-4">
              Key Insight: Organizations didn't need another standalone LMS. They needed learning embedded where work happens, inside Salesforce, with native data integration enabling correlation between training and business outcomes.
            </p>
          </div>
        </section>

        {/* Design System Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Visualforce Design System & Salesforce Native Architecture
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a9f856d5164c2bf986d9059084503ba2722c9abf?width=1216"
            alt="Design System"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="w-full md:w-1/2 text-[#59697F] space-y-4 leading-[16px]">
            <p className="text-base md:text-lg leading-[16px] md:leading-[16px]">
              Developed a comprehensive design approach that balanced Salesforce's design constraints with enhanced learning experiences:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Visualforce Component Architecture</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Created 40+ custom Visualforce components that extended Salesforce's native capabilities</li>
                <li>Designed within Salesforce Classic and Lightning Experience constraints</li>
                <li>Built responsive layouts using Salesforce's grid system and SLDS (Salesforce Lightning Design System)</li>
                <li>Implemented progressive disclosure patterns to manage complexity within Salesforce's page limitations</li>
                <li>Established consistent naming conventions matching Salesforce's object and field structure</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Design Within Platform Constraints</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Governor Limits Conscious: Designed interfaces that minimized SOQL queries and API calls</li>
                <li>View State Management: Created paginated interfaces to stay within 135KB view state limits</li>
                <li>Bulk Operations: Designed batch interfaces for mass enrollment and reporting</li>
                <li>Permission-Aware UI: Components that dynamically adjusted based on Salesforce profiles and permission sets</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">SLDS Customization Strategy</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Extended SLDS tokens for learning-specific use cases</li>
                <li>Created custom Lightning components for rich media playback</li>
                <li>Designed learning-specific icons matching SLDS style guidelines</li>
                <li>Built accessible color schemes for progress tracking and gamification</li>
                <li>Implemented motion design within Salesforce's performance constraints</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Strategic Feature Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Strategic Feature Design & Information Architecture
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2c3ff3965061e697008c148eb9e090da40e65d3c?width=796"
            alt="Strategic Feature Design"
            className="w-full md:w-[398px] h-auto"
          />
          
          <div className="flex-1 text-[#59697F] space-y-4 leading-[16px]">
            <div className="space-y-3">
              <h3 className="font-bold text-lg">Sales Onboarding Command Center Designed a revolutionary onboarding experience embedded in Salesforce:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
                <li>Role-Based Learning Paths: Automatic assignment based on Salesforce profiles</li>
                <li>Contextual Microlearning: Training surfaces within opportunity and account pages</li>
                <li>Progress Dashboards: Manager visibility into team readiness</li>
                <li>Skill Gap Analysis: Integration with Salesforce's competency model</li>
                <li>Certification Tracking: Native custom objects for compliance management</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-lg">Partner Portal Learning Experience Created differentiated experiences for internal vs. external users:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
                <li>Communities Integration: Seamless embedding in Salesforce Partner Communities</li>
                <li>Branded Learning Paths: White-labeled experiences per partner tier</li>
                <li>Deal Registration Training: Prerequisites for deal registration access</li>
                <li>Partner Scorecards: Training metrics in partner performance dashboards</li>
                <li>Account/contact/Level tiered access controls</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] pb-12 text-[#59697F] space-y-6 leading-[16px]">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Salesforce-Native Data Model Designed custom objects that leveraged Salesforce's relationship model:</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
              <li>Learning Path Object: Parent object with curriculum structure</li>
              <li>Course Enrollment Object: Junction object linking users to courses</li>
              <li>Learning Activity Object: Granular tracking of all interactions</li>
              <li>Skill Assessment Object: Competency tracking linked to user records</li>
              <li>Certification Object: Compliance tracking with expiration automation</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-lg">Moodle & Canvas Plugin Architecture</h3>
            <p className="text-base md:text-lg leading-[16px] md:leading-[16px]">Designed bi-directional synchronization interfaces for external LMS platforms:</p>
            <h4 className="font-bold text-base">Visual Configuration Interface</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
              <li>Field Mapping UI: Drag-and-drop interface for mapping Salesforce fields to LMS attributes</li>
              <li>Sync Rules Builder: Visual workflow for enrollment automation</li>
              <li>Conflict Resolution Dashboard: Interface for handling data mismatches</li>
              <li>Real-Time Sync Monitor: Live view of data flow between systems</li>
              <li>Error Recovery Workflows: Self-healing sync with retry logic</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-lg">Plugin Design Specifications</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
              <li>Created mockups for Moodle admin interface matching their design patterns</li>
              <li>Designed Canvas LTI configuration screens</li>
              <li>Built OAuth flow visualizations for secure authentication</li>
              <li>Specified webhook endpoints for real-time updates</li>
              <li>Documented API rate limit handling interfaces</li>
            </ul>
          </div>
        </section>

        {/* Complex Workflow Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Complex Workflow Design
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d2860d22b2b1bbae55c8719928eb96efecdd38c6?width=1176"
            alt="Complex Workflow"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="flex-1 text-[#59697F] space-y-4 leading-[16px]">
            <div className="space-y-3">
              <h3 className="font-bold text-base">Automated Enrollment Workflows Designed sophisticated automation reducing manual work by 85%:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Trigger-Based Enrollment: New hires automatically enrolled based on role</li>
                <li>Prerequisite Enforcement: Sequential learning with locked content</li>
                <li>Deadline Automation: Escalation workflows for overdue training</li>
                <li>Completion Actions: Automatic Salesforce updates upon course completion</li>
                <li>Recertification Cycles: Automated re-enrollment for expiring certifications</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Reporting & Analytics Dashboards Created comprehensive analytics within Salesforce's reporting framework:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Executive Dashboards: ROI metrics linking training to revenue</li>
                <li>Manager Reports: Team readiness and skill gap analysis</li>
                <li>Individual Progress: Personal learning transcripts and achievements</li>
                <li>Compliance Reports: Certification status across organizations</li>
                <li>Engagement Analytics: Content effectiveness and user behavior</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Gamification Framework Designed motivation systems using native Salesforce features:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Badge System: Visual achievements using Salesforce badges</li>
                <li>Leaderboards: Chatter-integrated competition boards</li>
                <li>Point Economy: Custom currency for learning activities</li>
                <li>Learning Paths: Visual progress indicators</li>
                <li>Social Learning: Chatter integration for peer learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Design Innovations Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Key Design Innovations
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d625949cd83407333b8c80274e76f3cb705c2393?width=1176"
            alt="Key Design Innovations"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="flex-1 text-[#59697F] space-y-4 leading-[16px]">
            <p className="text-lg leading-[16px]">Contextual Learning Delivery</p>
            
            <div className="space-y-3">
              <h3 className="font-bold text-base">Pioneered "Learning in the Flow of Work" within Salesforce:</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Opportunity Coaching: Training surfaces when deals reach specific stages</li>
                <li>Account Intelligence: Competitive battlecards within account pages</li>
                <li>Case Resolution Training: Knowledge articles with embedded videos</li>
                <li>Email Templates: Training links in automated communications</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Native Salesforce Integration Patterns</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Process Builder Integration: Learning assignments through declarative automation</li>
                <li>Flow Integration: Embedded learning checks in screen flows</li>
                <li>Einstein Analytics: Predictive models for learning recommendations</li>
                <li>Chatter Learning Feeds: Social learning in collaboration streams</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Mobile-First Salesforce1 Design</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Optimized for Salesforce mobile app constraints</li>
                <li>Offline content caching for field sales</li>
                <li>Touch-optimized video players</li>
                <li>Responsive assessment interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Measurable Outcomes Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Measurable Outcomes
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8c2b3066baea27c18b3bfce23b1d34d7f5e9e91d?width=1176"
            alt="Measurable Outcomes"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="flex-1 text-[#59697F] space-y-4 leading-[16px]">
            <div className="space-y-3">
              <h3 className="font-bold text-base">Strategic Customer Success (Year 1)</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>62% reduction in time-to-productivity for new sales hires</li>
                <li>3.2x increase in Salesforce adoption rates</li>
                <li>67% improvement in partner recertification rates</li>
                <li>89% training completion rate (up from 34%)</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">AppExchange Product Success (Years 2-3)</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>20+ customers across 5 industries</li>
                <li>$500k ARR within 18 months of launch</li>
                <li>4.7/5 AppExchange rating (5+ reviews)</li>
                <li>97% customer retention rate in years 3-4</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Platform Metrics</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>650k+ learning activities tracked monthly</li>
                <li>150K+ course completions processed</li>
                <li>99.95% uptime maintained</li>
                <li>60-minute average implementation time</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base">Business Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>147% net revenue retention from upsells and expansions</li>
                <li>&lt;3% annual churn rate</li>
                <li>Drove over $500k in complimentary add-on sales</li>
                <li>Key product driver in company acquisition in 2019</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Challenges Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Design Challenges & Solutions
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c9a7c753890d943e4cf30391861e5a7a9809e1a6?width=1176"
            alt="Design Challenges"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="flex-1 text-[#59697F] text-base space-y-3 leading-[16px]">
            <div>
              <p><span className="font-bold">Challenge:</span> Visualforce's limited responsive capabilities</p>
              <p><span className="font-bold">Solution:</span> Created adaptive layouts using JavaScript and custom CSS grid systems</p>
            </div>

            <div>
              <p><span className="font-bold">Challenge:</span> 135KB View State limit impacting complex interfaces</p>
              <p><span className="font-bold">Solution:</span> Implemented pagination, lazy loading, and transient variables</p>
            </div>

            <div>
              <p><span className="font-bold">Challenge:</span> Maintaining consistent UX across Classic and Lightning</p>
              <p><span className="font-bold">Solution:</span> Developed dual-theme component library with graceful degradation</p>
            </div>

            <div>
              <p><span className="font-bold">Challenge:</span> Multi-language support within Salesforce's translation workbench</p>
              <p><span className="font-bold">Solution:</span> Created custom labels architecture with dynamic language switching</p>
            </div>

            <div>
              <p><span className="font-bold">Challenge:</span> Delivering a consistent learning experience to both internal SF users and external customers/partners with no SF license</p>
              <p><span className="font-bold">Solution:</span> Built multi-use connection plugin used in the SF partner portal and across other website properties</p>
            </div>
          </div>
        </section>

        {/* Reflection & Impact Section */}
        <div className="w-full flex justify-center items-center min-h-[200px] bg-[#F6F8FA] border-b border-[#EAEFF3] shadow-sm py-8 px-4">
          <h2 className="text-[#3E4B5D] text-center font-sora text-xl md:text-3xl lg:text-[40px] font-bold">
            Reflection & Impact
          </h2>
        </div>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fc3c09f4740f8a0058329df21bcd181871c8730f?width=1176"
            alt="Reflection & Impact"
            className="w-full md:w-1/2 h-auto"
          />
          
          <div className="flex-1 text-[#59697F] space-y-4 leading-[16px]">
            <p className="text-base leading-[16px]">
              EnlightenCRM represents my ability to design within strict platform constraints while delivering exceptional user experiences. The project demanded deep understanding of Salesforce's technical architecture, creative problem-solving within Visualforce limitations, and careful balance between innovation and platform compliance.
              Key achievements demonstrating design expertise:
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Platform Mastery</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Deep understanding of Salesforce design patterns and limitations</li>
                <li>Creative solutions within Visualforce constraints</li>
                <li>Successful navigation of AppExchange requirements</li>
                <li>Integration design for complex enterprise systems</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Business Impact Through Design</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Transformed strategic customer need into scalable product</li>
                <li>Achieved product-market fit through user-centered design</li>
                <li>Enabled measurable ROI for customers</li>
                <li>Built sustainable SaaS business through thoughtful UX</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Technical Design Leadership</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Established design patterns adopted by development team</li>
                <li>Created reusable component library accelerating development</li>
                <li>Documented comprehensive design system</li>
                <li>Mentored team on Salesforce UX best practices</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base">Innovation Within Constraints</h3>
              <ul className="list-disc pl-6 space-y-2 text-base leading-7">
                <li>Pioneered embedded learning within CRM workflow</li>
                <li>Created responsive designs before Lightning existed</li>
                <li>Built accessible interfaces exceeding platform standards</li>
                <li>Developed performance-optimized experiences</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] pb-16">
          <p className="text-[#59697F] text-base leading-[16px]">
            EnlightenCRM proved that native platform integration trumps feature richness when solving enterprise problems. By embracing Salesforce's constraints rather than fighting them, we created a product that felt like a natural extension of the platform while delivering sophisticated learning management capabilities. The success validated that understanding technical architecture is essential for enterprise UX design, and that the best solutions often emerge from creative constraint navigation rather than unlimited possibility.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
