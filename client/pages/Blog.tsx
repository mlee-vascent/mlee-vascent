import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Blog() {
  const ogImage = "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description = "Insights on product design, go-to-market strategy, and AI-powered sales systems from Matt Lee.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo title="Blog — Product, Design & GTM Insights | VerityAscent" description={description} image={ogImage} canonicalPath="/blog" />
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl text-center">
          <h1 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold mb-6">
            Blog Page
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            This page is coming soon. Continue prompting to add content here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
