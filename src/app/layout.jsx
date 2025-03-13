import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import Footer from "@/components/comman/Footer";
import TopHeader from "@/components/comman/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden lg:block">
          <TopHeader />
        </div>
        <Navbar />
        {children}
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}
export const generateMetadata = () => {
  return {
    title: "Brij International Services",
    description: "Brij International Services",
    keywords: "Brij International Services",
    url: "brijinternationalservices.com",
    image: "/android-chrome-192x192.png",

    openGraph: {
      type: "website",
      url: "brijinternationalservices.com",
      title: "Brij International Services",
      description: "Brij International Services",
      image: "/android-chrome-192x192.png",
    },
  };
};
