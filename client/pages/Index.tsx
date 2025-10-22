import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function Index() {
  const ogImage =
    "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description =
    "Matt Lee helps startups and growth teams launch faster with UI/UX design and go-to-market strategy. Modern sales infrastructure and AI-powered outreach generate predictable pipeline. View the portfolio and book a consultation.";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Matt Lee | UI/UX Design & Go-To-Market Strategy — VerityAscent"
        description={description}
        image={ogImage}
        canonicalPath="/"
      />
      <Header />

      <main>
        <section
          className="w-full flex flex-col md:flex-row items-center md:items-stretch md:shadow-none lg:shadow-md"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/cfc7b32d3bd84e2431b8ac9f31332e7430c2402d?width=2880')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-1 px-6 md:px-[60px] lg:px-[200px] py-10 md:py-10 flex flex-col items-start md:items-start gap-6 md:gap-4">
            <h1 className="text-gray-600 font-sora text-3xl md:text-[40px] lg:text-[56px] font-bold leading-normal w-full md:w-[340px] lg:w-[538px] text-center md:text-left">
              From Concept to Market, Fast!
            </h1>
            <p className="text-gray-600 text-lg font-normal w-full text-center md:text-left">
              I design sleek, intuitive user experiences and craft go-to-market
              strategies that help startups scale the mountain of success
              quickly and win early.
            </p>
            <div className="hidden md:flex">
              <SocialLinks />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center px-5 md:px-5 lg:pl-24 lg:pr-[200px] py-4 md:py-[15px]">
            <div className="relative rounded-full overflow-hidden w-[157px] h-[157px] md:w-[315px] md:h-[315px] lg:w-[363px] lg:h-[363px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=800"
                alt="Matt Lee climbing"
                className="w-full h-full object-cover mx-auto border-0 outline-none ring-0 shadow-none"
                style={{ border: "none", boxShadow: "none" }}
              />
            </div>
          </div>

          <div className="md:hidden w-full flex justify-center pb-9">
            <SocialLinks />
          </div>
        </section>

        <section className="w-full px-6 md:px-9 lg:px-[200px] py-9 md:py-9 flex flex-col md:flex-row justify-center items-center md:items-start gap-[50px] md:gap-6">
          <div className="flex-1 flex flex-col justify-center items-start gap-9 md:gap-6 md:px-4">
            <h2 className="text-gray-600 text-center md:text-center font-sora text-[30px] font-bold leading-normal w-full">
              Designing Interfaces That <br />
              Feel Effortless
            </h2>

            <div className="flex flex-col md:flex-col items-center md:items-center justify-start gap-9 md:gap-6 w-full px-2 md:px-2">
              <div className="flex justify-center items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/40db7e666c3b74912cf3d36982b52cc98ca6ec0b?width=400"
                  alt="Design tools"
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>

              <div className="flex-1 flex flex-col justify-end items-center md:items-center gap-6 md:gap-6">
                <p className="text-gray-500 text-base font-normal px-2 md:px-2 text-center md:text-left">
                  Great design doesn't stop at aesthetics. I combine UI craft
                  with UX strategy, helping startups and established brands
                  launch products that are visually stunning, easy to use, and
                  ready to scale.
                </p>
                <Link
                  to="/portfolio"
                  className="px-6 py-2 rounded-xl bg-orange-primary text-white text-lg font-normal inline-block text-center self-center md:self-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-start gap-9 md:gap-6 md:px-4">
            <h2 className="text-gray-600 text-center md:text-center font-sora text-[30px] font-bold leading-normal w-full">
              Modern Sales Infrastructure, Built for Automation & Scale
            </h2>

            <div className="flex flex-col md:flex-col items-center md:items-center justify-start gap-9 md:gap-6 w-full px-2 md:px-2">
              <div className="flex justify-center items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fdd9cdf6cd596a6cc3d1b6f5cc1ae6f762a9baf4?width=400"
                  alt="Sales tools"
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>

              <div className="flex-1 flex flex-col justify-end items-center md:items-center gap-6 md:gap-6">
                <p className="text-gray-500 text-base font-normal px-2 md:px-2 text-center md:text-left">
                  Whether you're a startup or scaling organization, we implement
                  end-to-end GTM systems leveraging tools like LinkedIn
                  automation, buyer intent data, and AI-powered sequencing to
                  accelerate your path to revenue.
                </p>
                <Link
                  to="/gtm"
                  className="px-6 py-2 rounded-xl bg-orange-primary text-white text-lg font-normal inline-block text-center self-center md:self-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[100px] py-9 flex flex-col items-center border-b border-gray-200">
          <div className="w-full max-w-[880px] py-4 flex justify-center items-center">
            <blockquote className="text-gray-500 text-center font-sora text-2xl md:text-[30px] font-bold leading-normal">
              "It ain't what you don't know that gets you into trouble. It's
              what you know for sure that just ain't so."
            </blockquote>
          </div>
          <div className="w-full px-0 md:px-[100px] py-2 flex justify-end items-center">
            <cite className="text-gray-600 text-right text-2xl font-normal italic">
              Mark Twain
            </cite>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-12 md:py-16 flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-center gap-10 md:gap-16">
          <div className="flex-1 flex flex-col items-center md:items-center lg:items-start gap-6">
            <h2 className="text-gray-600 font-sora text-[30px] font-bold leading-normal">
              IT Cost Reduction Consulting
            </h2>
            <p className="text-gray-600 text-lg text-center md:text-center lg:text-left max-w-lg">
              Reduce your IT costs and buy the right platforms. Get independent guidance aligned with your business outcomes, not vendor quotas. From UCaaS and CCaaS to Security, Connectivity, and Cloud & Colo, we help you navigate enterprise technology procurement with confidence.
            </p>
            <Link
              to="/tools"
              className="px-6 py-3 rounded-xl bg-orange-primary text-white text-lg font-normal inline-block text-center"
            >
              Explore IT Consulting
            </Link>
          </div>

          <div className="flex justify-center items-center w-full md:w-full lg:w-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2Fb2171e29b8114b70ae106d6cf47d6942?format=webp&width=800"
              alt="CCaaS Consulting Services"
              className="w-full md:w-[500px] lg:w-[400px] h-auto object-contain border-0 outline-none ring-0 shadow-none rounded-2xl"
            />
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-[200px] py-9 md:py-10 flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-center gap-10 md:gap-16">
          <div className="flex justify-center items-center w-full md:w-full lg:w-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F56454eb42d164a989da8875c2b68c526?format=webp&width=800"
              alt="Matt Lee on mountain"
              className="w-[163px] md:w-[500px] lg:w-[491px] h-auto object-contain border-0 outline-none ring-0 shadow-none"
            />
          </div>

          <div className="flex-1 flex flex-col items-center md:items-center lg:items-start gap-6 max-w-[710px] px-4 md:px-12 lg:px-0">
            <h2
              id="about"
              className="text-gray-600 font-sora text-[30px] font-bold leading-normal"
            >
              About Me
            </h2>
            <div className="text-gray-600 text-base font-normal leading-normal space-y-4">
              <p>
                I'm Matt Lee, a senior product and go-to-market leader with a
                track record of building and scaling teams, designing innovative
                products, and driving measurable business outcomes. My
                experience spans leading GTM teams of more than 100 account
                executives as well as managing developer teams bringing new
                applications and Salesforce AppExchange products to market.
              </p>
              <p>
                I've led the entire product lifecycle from concept and
                wire-framing through prototyping and full UI/UX execution,
                creating intuitive digital experiences that accelerate
                development and increase engagement.
              </p>
              <p>
                One example: I designed and launched EnlightenCRM, a
                Salesforce-integrated training platform used by enterprises like
                Dynatrace, Everbridge, and Anaplan to improve onboarding
                efficiency by 50%.
              </p>
              <p>
                My background also includes designing and executing the
                go-to-market strategy for LMSCheckout, a multi-tenant e-commerce
                platform for selling courses that integrated with leading
                learning management systems such as Canvas, Moodle, and Bridge.
                This work highlights my ability to blend UI/UX design with
                scalable business strategy.
              </p>
              <p>
                Across every role, I've operated at the intersection of Sales,
                Product, Marketing, and Operations, aligning cross-functional
                teams to deliver smarter product enhancements, better
                decision-making, and repeatable GTM execution.
              </p>
              <p>
                In short, I specialize in turning ideas into products that drive
                adoption and revenue while building the systems and teams that
                make growth sustainable.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-0 py-9 md:py-9 flex flex-col items-center gap-1">
          <h2 className="text-gray-600 text-center font-sora text-[40px] font-bold leading-normal">
            Portfolio
          </h2>
        </section>

        <section className="w-full px-6 md:px-[44px] lg:px-[200px] py-2 md:py-2 flex flex-wrap justify-center items-start gap-12 md:gap-6">
          <Link
            to="/ecommerce"
            className="flex flex-col items-center gap-5 w-full md:w-[348px] lg:w-auto hover:opacity-80 transition-opacity"
          >
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold leading-normal">
              Ecommerce
            </h3>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9aa68bcf174ce04a5b573e0ef1ad6360ea9a04a9?width=580"
              alt="Ecommerce project"
              className="w-[290px] h-[334px] rounded-br-2xl border-0 outline-none ring-0 shadow-none"
            />
          </Link>

          <Link
            to="/portfolio/website"
            className="flex flex-col items-center gap-5 w-full md:w-[342px] lg:w-auto hover:opacity-80 transition-opacity"
          >
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold leading-normal">
              Website
            </h3>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/df9bc31f173e10aabca41e06fa9e2d2bd8f04546?width=580"
              alt="Website project"
              className="w-[290px] h-[334px] rounded-br-2xl border-0 outline-none ring-0 shadow-none"
            />
          </Link>

          <Link
            to="/salesforce"
            className="flex flex-col items-center gap-5 w-full md:w-[342px] lg:w-auto hover:opacity-80 transition-opacity"
          >
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold leading-normal">
              Salesforce
            </h3>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/659410b2ffaa782061f785f25d99c15df0b1a2eb?width=580"
              alt="Salesforce project"
              className="w-[290px] h-[334px] rounded-br-2xl border-0 outline-none ring-0 shadow-none"
            />
          </Link>

          <Link
            to="/mobile-app"
            className="flex flex-col items-center gap-5 w-full md:w-[346px] lg:w-auto hover:opacity-80 transition-opacity"
          >
            <h3 className="text-gray-600 text-center font-sora text-2xl font-semibold leading-normal">
              Mobile
            </h3>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/78db42db315cce267f0f92f88c4f95df7baf9a16?width=580"
              alt="Mobile project"
              className="w-[290px] h-[334px] rounded-br-2xl border-0 outline-none ring-0 shadow-none"
            />
          </Link>
        </section>

        <section className="w-full px-6 md:px-12 lg:px-0 py-12 md:py-12 flex flex-col items-center gap-5">
          <Link
            to="/portfolio"
            className="px-16 py-4 md:px-16 md:py-4 rounded-xl bg-orange-primary text-white text-lg font-normal inline-block"
          >
            View More
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
