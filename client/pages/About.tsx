import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function About() {
  const ogImage = "https://cdn.builder.io/api/v1/image/assets%2F4142780b5a85442faddc1827c5dbc44f%2F47bd8390907741749758f6c6206db0b1?format=webp&width=1200";
  const description = "About Matt Lee — product and go-to-market leader focused on UI/UX and revenue systems that accelerate growth for startups and enterprises.";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo title="About Matt Lee — VerityAscent" description={description} image={ogImage} canonicalPath="/about" />
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl text-center">
          <h1 className="text-gray-600 font-sora text-4xl md:text-5xl font-bold mb-6">
            About Page
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
