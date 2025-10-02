import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebsiteProject() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full px-6 md:px-12 lg:px-24 py-10 flex flex-col md:flex-row justify-center items-center gap-12 bg-[#FFF8DC]">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/35abb0e68b5595f56e887e5539bc47dc23e0b049?width=838"
              alt="Website project hero"
              className="w-full max-w-[419px] h-auto rounded-xl border-0 outline-none ring-0 shadow-none"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-3 max-w-[740px]">
            <h1 className="text-gray-600 font-sora text-3xl md:text-4xl lg:text-[56px] font-bold leading-[65px]">
              Envisiontel Corporate Website: Elearning Solutions Digital Experience
            </h1>
            <h2 className="text-gray-600 font-sora text-xl md:text-2xl font-semibold leading-[32px]">
              UI/UX Design Case Study
            </h2>
          </div>
        </section>

        {/* Design Process & Methodology */}
        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center gap-6">
          <h2 className="text-gray-600 font-sora text-[30px] font-bold leading-[45px] text-center">Design Process & Methodology</h2>
          <div className="w-full max-w-[1166px] lg:ml-[51px] text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p className="font-semibold">Discovery & Strategic Planning</p>
            <p>Conducted extensive research to understand the eLearning industry landscape and buyer journey:</p>

            <p className="font-semibold">Stakeholder Research & Requirements Gathering</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>C-Suite Executives needed to showcase ROI of digital learning transformation</li>
              <li>L&D Directors required examples of instructional design capabilities and methodologies</li>
              <li>HR Leaders wanted evidence of employee engagement and completion rates</li>
              <li>IT Decision Makers needed technical specifications for LMS integration</li>
              <li>Sales Team required case studies and demos to support consultative selling</li>
            </ul>

            <p className="font-semibold">Market Analysis & Positioning — analyzed 25+ competitor websites and identified market gaps:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Most eLearning companies focused solely on technology OR content, not both</li>
              <li>Poor demonstration of instructional design expertise</li>
              <li>Lack of learning outcome metrics and success stories</li>
              <li>Weak explanation of content development process</li>
              <li>Missing portfolio examples due to client confidentiality</li>
            </ul>

            <p className="font-semibold">User Research Insights — interviewed 40+ L&D professionals and identified key personas:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enterprise L&D Leaders: Seeking end-to-end learning program development</li>
              <li>SMB Training Managers: Needing cost-effective custom content solutions</li>
              <li>HR Directors: Looking for employee onboarding and compliance training</li>
              <li>Product Training Teams: Requiring customer education platforms</li>
            </ul>

            <p>Key Finding: Organizations struggled to find partners who could both develop engaging content AND provide the technology to deliver it effectively, creating EnvisionTel's unique market position.</p>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Information Architecture & Site Structure</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0099d59e4fa8dbcc6ed979bd8359522851ee7556?width=1192"
              alt="Information architecture"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p>Developed a dual-focused architecture balancing services and software:</p>
            <p className="font-semibold">Primary Navigation Structure</p>
            <p><span className="font-semibold">Solutions</span></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Employee Onboarding Programs</li>
              <li>Compliance Training Solutions</li>
              <li>Sales Enablement Training</li>
              <li>Customer Education Platforms</li>
              <li>Professional Development Programs</li>
            </ul>
            <p><span className="font-semibold">Services</span></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Instructional Design</li>
              <li>eLearning Development</li>
              <li>Video Production</li>
              <li>Mobile Learning</li>
              <li>Microlearning Design</li>
            </ul>
            <p><span className="font-semibold">Software</span></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Learning Management System</li>
              <li>Content Authoring Tools</li>
              <li>Assessment Engine</li>
              <li>Analytics Dashboard</li>
              <li>Mobile Apps</li>
            </ul>
            <p><span className="font-semibold">Industries</span></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Healthcare & Medical</li>
              <li>Financial Services</li>
              <li>Technology</li>
              <li>Manufacturing</li>
              <li>Retail & Hospitality</li>
            </ul>
            <p><span className="font-semibold">Resources</span></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Blog</li>
              <li>White Papers</li>
              <li>Webinars</li>
              <li>eLearning Templates</li>
              <li>Best Practices Guides</li>
            </ul>
          </div>
        </section>

        {/* WordPress Implementation */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">WordPress Architecture & Technical Implementation</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/18bf5566d5ee20c2b3f753b6f06750bbe3f3da7b?width=1030"
              alt="WordPress implementation"
              className="w-full max-w-[515px] h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p className="font-semibold">Custom Theme Development — built a sophisticated WordPress theme showcasing eLearning expertise:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mobile-First Design reflecting importance of mobile learning</li>
              <li>Interactive Elements demonstrating engagement techniques</li>
              <li>Portfolio System for secure client work showcase with NDAs</li>
              <li>Performance Optimization for global audiences</li>
            </ul>
            <p className="font-semibold">Plugin Integration for eLearning Functionality</p>
            <p className="font-semibold">Learning Content Showcase</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>H5P Interactive Content demonstrating various content types</li>
              <li>SCORM Cloud to preview SCORM packages</li>
              <li>Custom Portfolio Plugin for protected client galleries</li>
              <li>Interactive Demos using JavaScript-based learning interactions</li>
            </ul>
            <p className="font-semibold">Lead Generation & Nurturing</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Salesforce Integration with sophisticated lead scoring</li>
              <li>Gravity Forms multi-step needs assessment</li>
              <li>ActiveCampaign nurtures by interest</li>
              <li>Proof notifications for social proof</li>
            </ul>
            <p className="font-semibold">Content Management</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advanced Custom Fields Pro for flexible content blocks</li>
              <li>Custom Post Types: case studies, team members, courses</li>
              <li>Toolset Types for complex relational data</li>
              <li>WP All Import for bulk content migration</li>
              <li>SearchWP for enhanced search</li>
            </ul>
          </div>
        </section>

        {/* Visual Design & Brand */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Customer Visual Design & Brand Expression</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ee5e10cb8abb48b84446b1f79b2564b3035c3b3?width=1176"
              alt="Design system"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p>Design System for Learning Focus created visual language emphasizing engagement and transformation:</p>
            <p className="font-semibold">Color Psychology</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Primary Blue (#0066CC): Trust and corporate professionalism</li>
              <li>Learning Green (#00AA44): Growth and knowledge acquisition</li>
              <li>Energetic Orange (#FF6600): Engagement and interaction</li>
              <li>Neutral Grays: Content focus without distraction</li>
              <li>Accent Purple (#6633CC): Innovation and creativity</li>
            </ul>
            <p className="font-semibold">Typography for Readability</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Headers: Poppins (modern, approachable for learning)</li>
              <li>Body: Source Sans Pro (optimized for screen reading)</li>
              <li>Code/Technical: Fira Code (for software documentation)</li>
            </ul>
            <p>Established readability standards for educational content</p>
            <p className="font-semibold">Component Library Showcasing Expertise — 60+ components</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interactive course cards with progress indicators</li>
              <li>Before/after sliders showing learning transformation</li>
              <li>Animated statistics for engagement metrics</li>
              <li>Timeline components for learning pathways</li>
              <li>Interactive assessments and quizzes</li>
              <li>Video players with chapter markers</li>
              <li>Testimonial cards with learning outcomes</li>
              <li>ROI calculators for training investment</li>
            </ul>
            <p className="font-semibold">Portfolio & Case Study Design</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Password-protected client galleries</li>
              <li>Interactive before/after training comparisons</li>
              <li>Anonymized success metrics dashboards</li>
              <li>Video testimonials from learners</li>
              <li>Sample course interactions</li>
              <li>Methodology explanations with process diagrams</li>
            </ul>
          </div>
        </section>

        {/* Cross-Functional Collaboration */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Cross-Functional Collaboration</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6dd8d8a05d3425985dcb21b6a91e07440c06287?width=1176"
              alt="Collaboration"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p className="font-semibold">Instructional Design Team Partnership — coordinated with IDs to showcase methodologies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ADDIE Model visualization</li>
              <li>Learning Objective mapping</li>
              <li>Bloom's Taxonomy tools</li>
              <li>Storyboard samples (redacted)</li>
              <li>Assessment strategies</li>
            </ul>
            <p className="font-semibold">Multimedia Production Coordination — worked with content creators:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Course trailer videos</li>
              <li>Animation samples</li>
              <li>Interactive simulations</li>
              <li>360° video examples</li>
              <li>Podcast integration</li>
            </ul>
            <p className="font-semibold">Software Development Team Alignment — platform feature presentation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Feature tours</li>
              <li>API documentation</li>
              <li>Admin dashboards</li>
              <li>Mobile app previews</li>
              <li>Integration diagrams</li>
            </ul>
            <p className="font-semibold">Marketing Team Coordination — content workflows for thought leadership:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Industry reports</li>
              <li>Webinar series</li>
              <li>Email templates by buyer stage</li>
              <li>Case study format</li>
              <li>SEO content</li>
            </ul>
          </div>
        </section>

        {/* Key Design Innovations */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Key Design Innovations</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b74a9c736bc0c668a80ebda920a3738aaefe27c1?width=1176"
              alt="Key innovations"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p className="font-semibold">Interactive Learning Effectiveness Calculator</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Current training cost inputs</li>
              <li>Efficiency improvement sliders</li>
              <li>Engagement metric projections</li>
              <li>ROI visualization over time</li>
              <li>Personalized recommendation engine</li>
            </ul>
            <p className="font-semibold">Course Preview System — designed "try before you buy" experience</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sample micro-courses in various styles</li>
              <li>Interactive content examples</li>
              <li>Mobile learning demonstrations</li>
              <li>Gamification elements</li>
              <li>Accessibility features preview</li>
            </ul>
            <p className="font-semibold">Client Success Dashboard</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Before/after metrics visualization</li>
              <li>Learner feedback word clouds</li>
              <li>Completion rate improvements</li>
              <li>Time-to-competency graphs</li>
              <li>Business impact metrics</li>
            </ul>
            <p className="font-semibold">Learning Path Builder</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Drag-and-drop curriculum design</li>
              <li>Prerequisite mapping</li>
              <li>Time estimation calculator</li>
              <li>Resource requirement planning</li>
              <li>Export to PDF proposals</li>
            </ul>
          </div>
        </section>

        {/* Measurable Outcomes */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Measurable Outcomes</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/93b66cd7d91244e2ccbe7ea50e435495cc9ec44b?width=1176"
              alt="Measurable outcomes"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p className="font-semibold">Traffic & Engagement Metrics (Year 1)</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>183% increase in organic traffic</li>
              <li>4.3 average pages per session</li>
              <li>5:32 average session duration</li>
              <li>52% reduction in bounce rate</li>
            </ul>
            <p className="font-semibold">Lead Generation Results</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>240% increase in qualified leads</li>
              <li>100+ demo requests per quarter</li>
              <li>22.3+ consultation bookings monthly</li>
            </ul>
            <p className="font-semibold">Conversion Metrics</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>8% visitor-to-lead conversion rate</li>
              <li>28% demo-to-trial conversion (software)</li>
              <li>35% consultation-to-proposal rate (services)</li>
              <li>$8.2M pipeline generated in Year 1</li>
            </ul>
            <p className="font-semibold">SEO Performance</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Top 3 rankings for 35 target keywords</li>
              <li>Featured snippets for 18 eLearning queries</li>
              <li>Domain Authority increased from 42 to 61</li>
              <li>100+ backlinks from education sites</li>
            </ul>
            <p className="font-semibold">Business Impact</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>47% increase in service inquiries</li>
              <li>3x growth in software trials</li>
              <li>$1.75M new revenue attributed to website</li>
              <li>32% reduction in sales cycle length</li>
            </ul>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Design Challenges & Solutions</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51843bf3e97beb8dcf8813ae1ffffed0b3fe80fd?width=1176"
              alt="Challenges and solutions"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[1.45] space-y-6">
            <div className="space-y-1">
              <p><span className="font-semibold">Challenge:</span> Demonstrating proprietary work under NDAs</p>
              <p><span className="font-semibold">Solution:</span> Created anonymized case studies with permission, developed generic sample courses showcasing capabilities</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-semibold">Challenge:</span> Balancing dual value propositions without confusion</p>
              <p><span className="font-semibold">Solution:</span> Designed clear navigation paths and created a solution finder tool</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-semibold">Challenge:</span> Long B2B sales cycles for enterprise learning programs</p>
              <p><span className="font-semibold">Solution:</span> Developed nurture content for each buyer stage; created self‑service resources</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-semibold">Challenge:</span> Competing with larger LMS vendors and boutique agencies</p>
              <p><span className="font-semibold">Solution:</span> Emphasized unique integrated approach; showcased end‑to‑end transformation case studies</p>
            </div>
          </div>
        </section>

        {/* Reflection & Impact */}
        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-tight">Reflection & Impact</h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-start gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e26ab9a625bb0eaef81c810832768e8f0eebc68c?width=1176"
              alt="Reflection and impact"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 text-gray-600 text-[16px] leading-[16px] space-y-4">
            <p>The Envisiontel website successfully positioned the company as a unique player in the eLearning space, one of the few offering both world-class content development AND the technology to deliver it. The project required balancing complex dual messaging while maintaining clarity and driving conversions for two distinct business lines.</p>
            <p className="font-semibold">Key achievements demonstrating expertise:</p>
            <p className="font-semibold">Strategic Design Thinking</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Solved complex positioning challenge</li>
              <li>Created distinct yet connected user journeys</li>
              <li>Balanced multiple stakeholder needs</li>
              <li>Enabled cross-selling opportunities</li>
            </ul>
            <p className="font-semibold">eLearning Industry Expertise</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deep understanding of L&D challenges</li>
              <li>Instructional design best practices</li>
              <li>Thought leadership to build trust</li>
              <li>Tools that solve real buyer problems</li>
            </ul>
            <p className="font-semibold">Technical Excellence</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Integrated complex eLearning technologies</li>
              <li>Built performant, accessible platform</li>
              <li>Implemented sophisticated tracking</li>
              <li>Created scalable content system</li>
            </ul>
            <p className="font-semibold">Business Impact</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Drove measurable revenue growth</li>
              <li>Shortened sales cycles</li>
              <li>Increased brand authority</li>
              <li>Enabled marketing independence</li>
            </ul>
            <p>The Envisiontel website became a powerful differentiator in a crowded market, proving that thoughtful design can effectively communicate complex, dual value propositions. The project validated that understanding industry-specific needs and translating them into engaging digital experiences is crucial for B2B success. By showcasing both creative services and technical capabilities through interactive demonstrations rather than just descriptions, the website became a living portfolio that converted visitors into clients for both service lines. Envisiontel was acquired by Remote-Learner in 2019 and it's web properties and technology are now owned by Learning Pool.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
