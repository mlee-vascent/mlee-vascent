import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebsiteProject() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full px-9 md:px-12 lg:px-9 py-9 flex flex-col md:flex-row justify-center items-center gap-12 bg-[#FFF8DC]">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/35abb0e68b5595f56e887e5539bc47dc23e0b049?width=838"
              alt="Website project hero"
              className="w-full max-w-[419px] h-auto rounded-xl border border-[#BFCAD6] shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-4 max-w-[740px]">
            <h1 className="text-gray-600 font-sora text-3xl md:text-4xl lg:text-[56px] font-bold leading-normal">
              Envisiontel Corporate Website: Elearning Solutions Digital Experience
            </h1>
            <h2 className="text-gray-600 font-sora text-xl md:text-2xl font-semibold leading-normal">
              UI/UX Design Case Study
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col justify-center items-center gap-7">
          <h2 className="text-gray-600 font-sora text-[30px] font-bold leading-normal text-center w-full">
            Design Process & Methodology
          </h2>
          <div className="prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p className="font-bold">Discovery & Strategic Planning</p>
            <p>Conducted extensive research to understand the eLearning industry landscape and buyer journey:</p>
            
            <p className="font-bold">Stakeholder Research & Requirements Gathering</p>
            <p>C-Suite Executives needed to showcase ROI of digital learning transformation</p>
            <p>L&D Directors required examples of instructional design capabilities and methodologies</p>
            <p>HR Leaders wanted evidence of employee engagement and completion rates</p>
            <p>IT Decision Makers needed technical specifications for LMS integration</p>
            <p>Sales Team required case studies and demos to support consultative selling</p>
            
            <p className="font-bold">Market Analysis & Positioning Analyzed 25+ competitor websites identifying market gaps:</p>
            <p>Most eLearning companies focused solely on technology OR content, not both</p>
            <p>Poor demonstration of instructional design expertise</p>
            <p>Lack of learning outcome metrics and success stories</p>
            <p>Weak explanation of content development process</p>
            <p>Missing portfolio examples due to client confidentiality</p>
            
            <p className="font-bold">User Research Insights Interviewed 40+ L&D professionals and identified key personas:</p>
            <p>Enterprise L&D Leaders: Seeking end-to-end learning program development</p>
            <p>SMB Training Managers: Needing cost-effective custom content solutions</p>
            <p>HR Directors: Looking for employee onboarding and compliance training</p>
            <p>Product Training Teams: Requiring customer education platforms</p>
            
            <p>Key Finding: Organizations struggled to find partners who could both develop engaging content AND provide the technology to deliver it effectively, creating EnvisionTel's unique market position.</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Information Architecture & Site Structure
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0099d59e4fa8dbcc6ed979bd8359522851ee7556?width=1192"
              alt="Information architecture"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p>Developed a dual-focused architecture balancing services and software:</p>
            
            <p className="font-bold">Primary Navigation Structure</p>
            <p><span className="font-bold">Solutions:</span> Integrated offerings by business need</p>
            <p>Employee Onboarding Programs</p>
            <p>Compliance Training Solutions</p>
            <p>Sales Enablement Training</p>
            <p>Customer Education Platforms</p>
            <p>Professional Development Programs</p>
            
            <p><span className="font-bold">Services:</span> Content development expertise</p>
            <p>Instructional Design</p>
            <p>eLearning Development</p>
            <p>Video Production</p>
            <p>Mobile Learning</p>
            <p>Microlearning Design</p>
            
            <p><span className="font-bold">Software:</span> Platform capabilities</p>
            <p>Learning Management System</p>
            <p>Content Authoring Tools</p>
            <p>Assessment Engine</p>
            <p>Analytics Dashboard</p>
            <p>Mobile Apps</p>
            
            <p><span className="font-bold">Industries:</span> Sector-specific expertise</p>
            <p>Healthcare & Medical</p>
            <p>Financial Services</p>
            <p>Technology</p>
            <p>Manufacturing</p>
            <p>Retail & Hospitality</p>
            
            <p><span className="font-bold">Resources:</span> Thought leadership hub</p>
            <p>Blog</p>
            <p>White Papers</p>
            <p>Webinars</p>
            <p>eLearning Templates</p>
            <p>Best Practices Guides</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              WordPress Architecture & Technical Implementation
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/18bf5566d5ee20c2b3f753b6f06750bbe3f3da7b?width=1030"
              alt="WordPress implementation"
              className="w-full max-w-[515px] h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p className="font-bold">Custom Theme Development Built a sophisticated WordPress theme showcasing eLearning expertise:</p>
            <p>Mobile-First Design: Reflecting importance of mobile learning</p>
            <p>Interactive Elements: Demonstrating engagement techniques</p>
            <p>Portfolio System: Secure client work showcase with NDAs</p>
            <p>Performance Optimization: Fast loading for global audience</p>
            
            <p className="font-bold">Plugin Integration for eLearning Functionality</p>
            <p className="font-bold">Learning Content Showcase</p>
            <p>H5P Interactive Content: Demonstrating various content types</p>
            <p>SCORM Cloud: Previewing SCORM packages</p>
            <p>Custom Portfolio Plugin: Protected client work galleries</p>
            <p>Interactive Demos: JavaScript-based learning interactions</p>
            
            <p className="font-bold">Lead Generation & Nurturing</p>
            <p>Salesforce Integration: Sophisticated lead scoring for dual offerings</p>
            <p>Gravity Forms: Multi-step needs assessment forms</p>
            <p>ActiveCampaign: Email nurture campaigns by interest</p>
            <p>Proof: Social proof notifications of recent signups</p>
            
            <p className="font-bold">Content Management</p>
            <p>Advanced Custom Fields Pro: Flexible content blocks</p>
            <p>Custom Post Types: Case studies, team members, courses</p>
            <p>Toolset Types: Complex relational data structures</p>
            <p>WP All Import: Bulk content migration from old site</p>
            <p>SearchWP: Enhanced search across all content types</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Customer Visual Design & Brand Expression
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ee5e10cb8abb48b84446b1f79b2564b3035c3b3?width=1176"
              alt="Design system"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p>Design System for Learning Focus Created visual language emphasizing engagement and transformation:</p>
            
            <p className="font-bold">Color Psychology</p>
            <p>Primary Blue (#0066CC): Trust and corporate professionalism</p>
            <p>Learning Green (#00AA44): Growth and knowledge acquisition</p>
            <p>Energetic Orange (#FF6600): Engagement and interaction</p>
            <p>Neutral Grays: Content focus without distraction</p>
            <p>Accent Purple (#6633CC): Innovation and creativity</p>
            
            <p className="font-bold">Typography for Readability</p>
            <p>Headers: Poppins (modern, approachable for learning)</p>
            <p>Body: Source Sans Pro (optimized for screen reading)</p>
            <p>Code/Technical: Fira Code (for software documentation)</p>
            <p>Established readability standards for educational content</p>
            
            <p className="font-bold">Component Library Showcasing Expertise Designed 60+ components demonstrating eLearning capabilities:</p>
            <p>Interactive course cards with progress indicators</p>
            <p>Before/after sliders showing learning transformation</p>
            <p>Animated statistics for engagement metrics</p>
            <p>Timeline components for learning pathways</p>
            <p>Interactive assessments and quizzes</p>
            <p>Video players with chapter markers</p>
            <p>Testimonial cards with learning outcomes</p>
            <p>ROI calculators for training investment</p>
            
            <p className="font-bold">Portfolio & Case Study Design Created sophisticated templates for showcasing work:</p>
            <p>Password-protected client galleries</p>
            <p>Interactive before/after training comparisons</p>
            <p>Anonymized success metrics dashboards</p>
            <p>Video testimonials from learners</p>
            <p>Sample course interactions</p>
            <p>Methodology explanations with process diagrams</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Cross-Functional Collaboration
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6dd8d8a05d3425985dcb21b6a91e07440c06287?width=1176"
              alt="Collaboration"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p className="font-bold">Instructional Design Team Partnership Coordinated with IDs to showcase methodologies:</p>
            <p>ADDIE Model Visualization: Interactive explanation of design process</p>
            <p>Learning Objective Mapping: Visual frameworks and templates</p>
            <p>Bloom's Taxonomy Tools: Interactive reference guides</p>
            <p>Storyboard Samples: Redacted client examples</p>
            <p>Assessment Strategies: Quiz and test examples</p>
            
            <p className="font-bold">Multimedia Production Coordination Worked with content creators on portfolio pieces:</p>
            <p>Course Trailer Videos: 30-second engagement previews</p>
            <p>Animation Samples: Character animations and explainers</p>
            <p>Interactive Simulations: Software training demonstrations</p>
            <p>360° Video Examples: Immersive learning experiences</p>
            <p>Podcast Integration: "Learning Leaders" interview series</p>
            
            <p className="font-bold">Software Development Team Alignment Collaborated on platform feature presentation:</p>
            <p>Feature Tours: Interactive product walkthroughs</p>
            <p>API Documentation: Developer-friendly integration guides</p>
            <p>Admin Dashboards: Screenshots of analytics capabilities</p>
            <p>Mobile App Previews: Device frames showing mobile learning</p>
            <p>Integration Diagrams: Visual system architecture</p>
            
            <p className="font-bold">Marketing Team Coordination Established content workflows for thought leadership:</p>
            <p>Industry Reports: Annual eLearning trends studies</p>
            <p>Webinar Series: Monthly best practices sessions</p>
            <p>Email Templates: Nurture campaigns by buyer stage</p>
            <p>Case Study Format: Standardized success story structure</p>
            <p>SEO Content: Keyword-optimized service pages</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Key Design Innovations
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b74a9c736bc0c668a80ebda920a3738aaefe27c1?width=1176"
              alt="Key innovations"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p className="font-bold">Interactive Learning Effectiveness Calculator</p>
            <p className="font-bold">Built custom tool demonstrating expertise:</p>
            <p>Current training cost inputs</p>
            <p>Efficiency improvement sliders</p>
            <p>Engagement metric projections</p>
            <p>ROI visualization over time</p>
            <p>Personalized recommendation engine</p>
            
            <p className="font-bold">Course Preview System</p>
            <p className="font-bold">Designed "try before you buy" experience:</p>
            <p>Sample micro-courses in various styles</p>
            <p>Interactive content examples</p>
            <p>Mobile learning demonstrations</p>
            <p>Gamification elements showcase</p>
            <p>Accessibility features preview</p>
            
            <p className="font-bold">Client Success Dashboard</p>
            <p className="font-bold">Created visual case study format:</p>
            <p>Before/after metrics visualization</p>
            <p>Learner feedback word clouds</p>
            <p>Completion rate improvements</p>
            <p>Time-to-competency graphs</p>
            <p>Business impact metrics</p>
            
            <p className="font-bold">Learning Path Builder</p>
            <p className="font-bold">Interactive tool for visualizing programs:</p>
            <p>Drag-and-drop curriculum design</p>
            <p>Prerequisite mapping</p>
            <p>Time estimation calculator</p>
            <p>Resource requirement planning</p>
            <p>Export to PDF proposals</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Measurable Outcomes
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/93b66cd7d91244e2ccbe7ea50e435495cc9ec44b?width=1176"
              alt="Measurable outcomes"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p className="font-bold">Traffic & Engagement Metrics (Year 1)</p>
            <p>183% increase in organic traffic</p>
            <p>4.3 average pages per session</p>
            <p>5:32 average session duration</p>
            <p>52% reduction in bounce rate</p>
            
            <p className="font-bold">Lead Generation Results</p>
            <p>240% increase in qualified leads</p>
            <p>100+ demo requests per quarter</p>
            <p>22.3+ consultation bookings monthly</p>
            
            <p className="font-bold">Conversion Metrics</p>
            <p>8% visitor-to-lead conversion rate</p>
            <p>28% demo-to-trial conversion (software)</p>
            <p>35% consultation-to-proposal rate (services)</p>
            <p>$8.2M pipeline generated in Year 1</p>
            
            <p className="font-bold">SEO Performance</p>
            <p>Top 3 rankings for 35 target keywords</p>
            <p>Featured snippets for 18 eLearning queries</p>
            <p>Domain Authority increased from 42 to 61</p>
            <p>100+ backlinks from education sites</p>
            
            <p className="font-bold">Business Impact</p>
            <p>47% increase in service inquiries</p>
            <p>3x growth in software trials</p>
            <p>$1.75M new revenue attributed to website</p>
            <p>32% reduction in sales cycle length</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Design Challenges & Solutions
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51843bf3e97beb8dcf8813ae1ffffed0b3fe80fd?width=1176"
              alt="Challenges and solutions"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p><span className="font-bold">Challenge:</span> Demonstrating proprietary work under NDAs</p>
            <p><span className="font-bold">Solution:</span> Created anonymized case studies with permission, developed generic sample courses showcasing capabilities</p>
            
            <p><span className="font-bold">Challenge:</span> Balancing dual value propositions without confusion</p>
            <p><span className="font-bold">Solution:</span> Designed clear navigation paths and created a solution finder tool guiding visitors to appropriate offerings</p>
            
            <p><span className="font-bold">Challenge:</span> Long B2B sales cycles for enterprise learning programs</p>
            <p><span className="font-bold">Solution:</span> Developed nurture content for each buyer stage, created self-service resources reducing sales involvement</p>
            
            <p><span className="font-bold">Challenge:</span> Competing with larger LMS vendors and boutique agencies</p>
            <p><span className="font-bold">Solution:</span> Emphasized unique integrated approach, showcased end-to-end transformation case studies</p>
          </div>
        </section>

        <section className="w-full h-[200px] flex justify-center items-center border-b border-gray-200 bg-[#F6F8FA] shadow-md">
          <div className="flex h-20 px-4 justify-center items-center flex-1">
            <h2 className="flex-1 text-[#3E4B5D] text-center font-sora text-[30px] font-bold leading-normal">
              Reflection & Impact
            </h2>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-12 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e26ab9a625bb0eaef81c810832768e8f0eebc68c?width=1176"
              alt="Reflection and impact"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 prose prose-slate max-w-none md:prose-lg prose-headings:font-sora prose-headings:text-gray-600 prose-p:text-gray-600 prose-strong:text-gray-600 prose-p:leading-relaxed">
            <p>The Envisiontel website successfully positioned the company as a unique player in the eLearning space, one of the few offering both world-class content development AND the technology to deliver it. The project required balancing complex dual messaging while maintaining clarity and driving conversions for two distinct business lines.</p>
            
            <p>Key achievements demonstrating expertise:</p>
            
            <p className="font-bold">Strategic Design Thinking</p>
            <p>Solved complex positioning challenge</p>
            <p>Created distinct yet connected user journeys</p>
            <p>Balanced multiple stakeholder needs</p>
            <p>Enabled cross-selling opportunities</p>
            
            <p className="font-bold">eLearning Industry Expertise</p>
            <p>Demonstrated deep understanding of L&D challenges</p>
            <p>Showcased instructional design best practices</p>
            <p>Built trust through thought leadership</p>
            <p>Created tools solving real buyer problems</p>
            
            <p className="font-bold">Technical Excellence</p>
            <p>Integrated complex eLearning technologies</p>
            <p>Built performant, accessible platform</p>
            <p>Implemented sophisticated tracking</p>
            <p>Created scalable content system</p>
            
            <p className="font-bold">Business Impact</p>
            <p>Drove measurable revenue growth</p>
            <p>Shortened sales cycles</p>
            <p>Increased brand authority</p>
            <p>Enabled marketing independence</p>
            
            <p>The Envisiontel website became a powerful differentiator in a crowded market, proving that thoughtful design can effectively communicate complex, dual value propositions. The project validated that understanding industry-specific needs and translating them into engaging digital experiences is crucial for B2B success. By showcasing both creative services and technical capabilities through interactive demonstrations rather than just descriptions, the website became a living portfolio that converted visitors into clients for both service lines. Envisiontel was acquired by Remote-Learner in 2019 and it's web properties and technology are now owned by Learning Pool.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
