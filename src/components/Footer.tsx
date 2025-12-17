import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C4563] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Gen Engineering INC</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Professional structural engineering and steel detailing services. Founded in 2013, our management team brings 10+ years of experience.
            </p>
            
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Software We Use</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-1 rounded w-20 h-10 relative">
                    <Image src="/tekla-logo.svg" alt="Tekla" fill className="object-contain p-1" />
                </div>
                 <div className="bg-white p-1 rounded w-20 h-10 relative">
                    <Image src="/projecad-logo.svg" alt="Projecad" fill className="object-contain p-1" />
                </div>
                 <div className="bg-white p-1 rounded w-20 h-10 relative">
                    <Image src="/sds2-logo.svg" alt="SDS 2" fill className="object-contain p-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Structural Steel Detailing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Connection Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Estimation & Take-Off
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Rebar Detailing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  BIM Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a href="mailto:info@genengg.com" className="text-gray-300 hover:text-white transition-colors text-base">
                  info@genengg.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a href="tel:+13024992050" className="text-gray-300 hover:text-white transition-colors text-base">
                  +1 302-499-2050
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=16192+Coastal+Highway,+Lewes,+DE+19958" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-base"
                  >
                    16192 Coastal Highway, Lewes, DE 19958
                  </a>
                  <div className="relative w-12 h-8">
                    <Image src="/usa-flag-new.png" alt="USA Flag" fill className="object-contain" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/gen-engineering-inc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Gen Engineering INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}