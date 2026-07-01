import { Globe, Share2, Video, Mail, MapPin, Clock, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Salvation Apostolics</p>
          <h3 className="mt-4 text-2xl font-serif text-primary">A welcoming community grounded in faith.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Join us for worship, study, and service. Our doors are open for all ages and backgrounds.
          </p>
          <div className="mt-8 flex items-center gap-4 text-primary">
            <a href="#" aria-label="Website" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Social" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <Share2 size={18} />
            </a>
            <a href="#" aria-label="Video" className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary">
              <Video size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Quick links</p>
          <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
            <Link to="/about" className="text-gray-600 transition hover:text-primary">About Us</Link>
            <Link to="/sermons" className="text-gray-600 transition hover:text-primary">Sermons</Link>
            <Link to="/events" className="text-gray-600 transition hover:text-primary">Events</Link>
            <Link to="/give" className="text-gray-600 transition hover:text-primary">Give</Link>
            <Link to="/contact" className="text-gray-600 transition hover:text-primary">Contact</Link>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Service times</p>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-amber-700" />
              <span>Sunday Worship — 10:00 AM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-amber-700" />
              <span>Wednesday Bible Study — 7:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-amber-700" />
              <span>123 Faith Avenue, Springtown</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-amber-700" />
              <span>(555) 012-3456</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-amber-700" />
              <span>hello@salvationapostolics.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
