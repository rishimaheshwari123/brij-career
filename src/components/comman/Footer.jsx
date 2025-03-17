import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo2.png";
import { useSelector } from "react-redux";
export default function Footer() {
  const { token } = useSelector((state) => state.auth);
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="not found" className="w-44 lg:w-64" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Our mission is to bridge the gap between skilled professionals and
              global businesses.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Usefull Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="job"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/candidates"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Candidates
                </Link>
              </li>
              <li>
                {token ? (
                  <Link
                    href="/admin/dashboard"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Login
                  </Link>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Office 510, B wing, Galleria Complex,
                <br />
                Hiranandani Gardens, Powai, Mumbai 400076{" "}
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: 91 9202553151
              </li>
              <li className="text-sm text-muted-foreground">
                Email: HR@brijinternationalservices.com
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574107173934&mibextid=wwXIfr&mibextid=wwXIfr"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="https://www.instagram.com/brij_international_service_?igsh=MWYxb3hjbGdlNTJ5NQ%3D%3D&utm_source=qr"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.google.com/maps?q=Office+510,+B+wing,+Galleria+Complex,+Hiranandani+Gardens,+Powai,+Mumbai+400076&z=17&hl=en"
                className="text-muted-foreground hover:text-foreground"
              >
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Map</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Developed By I Next ETS . All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
