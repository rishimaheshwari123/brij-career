import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import SubNavbar from "@/components/comman/SubNav";
import Footer from "@/components/comman/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden lg:block">
          <SubNavbar />
        </div>
        <Navbar />
        {children}
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
