import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
