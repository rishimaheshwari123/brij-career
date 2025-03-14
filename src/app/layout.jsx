import "./globals.css";
import Wrapper from "./wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
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
