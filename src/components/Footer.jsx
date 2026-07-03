import { Mail, MapPin, Clock, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H8.2v-2.9h2.23V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58v1.89h2.79l-.45 2.9h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <path d="M16.5 7.5h.01" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.19 3.25a4.83 4.83 0 0 1-1.97-.4v4.15a4 4 0 0 0 1.97.52 4.11 4.11 0 0 0 4.07-4.12V3.35h-4.07Zm-1.52 6.8a4.38 4.38 0 0 1-4.16-2.78 4.4 4.4 0 0 1-3.9 1.46A4.37 4.37 0 0 0 7.72 15v5.5a4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 4.5-4.5V9.05h-1.05v1Zm-2.12 1.75V21.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V12a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5Z" />
  </svg>
)

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.8 7.2a3.02 3.02 0 0 0-2.13-2.13C17.74 4.6 12 4.6 12 4.6s-5.74 0-7.67.47A3.02 3.02 0 0 0 2.2 7.2 31.79 31.79 0 0 0 2 12a31.79 31.79 0 0 0 .2 4.8 3.02 3.02 0 0 0 2.13 2.13c1.93.47 7.67.47 7.67.47s5.74 0 7.67-.47A3.02 3.02 0 0 0 21.8 16.8 31.79 31.79 0 0 0 22 12a31.79 31.79 0 0 0-.2-4.8ZM10 15.5V8.5l5 3.5-5 3.5Z" />
  </svg>
)

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Salvation Apostolics</p>
          <h3 className="mt-4 text-2xl font-serif text-primary">A welcoming community grounded in faith.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Join us for worship, study, and service. Our doors are open for all ages and backgrounds.
          </p>
          <div className="mt-8 flex items-center gap-4 text-primary">
            <a href="https://www.facebook.com/salvationapostolicschurch" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/salvationapostolicschurch" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="https://www.tiktok.com/@salvationapostolicschurch" target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@salvationapostolicschurch" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Quick links</p>
          <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
            <Link to="/about" className="text-gray-600 transition hover:text-primary">About Us</Link>
            <Link to="/sermons" className="text-gray-600 transition hover:text-primary">Sermons</Link>
            <Link to="/events" className="text-gray-600 transition hover:text-primary">Events</Link>
            <Link to="/give" className="text-gray-600 transition hover:text-primary">Give</Link>
            <Link to="/contact" className="text-gray-600 transition hover:text-primary">Contact</Link>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Service times</p>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-secondary" />
              <span>Sunday Worship — 10:00 AM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-secondary" />
              <span>Wednesday Bible Study — 7:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-secondary" />
              <span>123 Faith Avenue, Springtown</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-secondary" />
              <span>(555) 012-3456</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-secondary" />
              <span>hello@salvationapostolics.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
