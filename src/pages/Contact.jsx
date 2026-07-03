import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const Contact = () => (
  <div className="space-y-20 py-20">
    <section className="bg-white">
      <SectionHeading
        label="Contact"
        title="We’re here to listen and help"
        description="Send us a message or visit us in person. Our team is ready to answer questions and welcome you to church."
      />

      <div className="container mx-auto mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-gray-50 p-10 shadow-soft">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary" type="text" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Phone (optional)</span>
              <input className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary" type="tel" placeholder="(555) 012-3456" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary" rows="6" placeholder="Share how we can support you"></textarea>
            </label>
            <button type="submit" className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
              Submit message
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Visit us</p>
            <div className="mt-6 space-y-5 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Church address</p>
                  <p>123 Faith Avenue, Springtown, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p>(555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p>hello@salvationapostolics.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-soft">
            <iframe
              title="Church location"
              src="https://maps.google.com/maps?q=123%20Faith%20Avenue%20Springtown&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Service times</p>
            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                <span>Sunday Worship — 10:00 AM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                <span>Wednesday Bible Study — 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                <span>Friday Prayer Night — 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
