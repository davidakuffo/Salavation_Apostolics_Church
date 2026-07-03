import { MapPin, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const events = [
  {
    title: 'Sunday Worship Gathering',
    date: 'May 12',
    time: '10:00 AM',
    location: 'Main Sanctuary',
  },
  {
    title: 'Midweek Bible Study',
    date: 'May 15',
    time: '7:00 PM',
    location: 'Community Hall',
  },
  {
    title: 'Young Adults Meet-up',
    date: 'May 18',
    time: '6:30 PM',
    location: 'Prayer Garden',
  },
]

const Events = () => (
  <div className="space-y-20 py-20">
    <section className="bg-white">
      <SectionHeading
        label="Events"
        title="Gatherings for every season of life"
        description="Find opportunities to connect, learn, and worship with others. All events are open and family-friendly."
      />
      <div className="container mx-auto mt-16 px-6">
        {events.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">No events</p>
            <h3 className="mt-4 text-3xl font-semibold text-primary">There are no upcoming events right now.</h3>
            <p className="mt-4 text-gray-600">Check back soon for new gatherings, study nights, and worship experiences.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-secondary/10 px-4 py-4 text-center text-sm font-semibold text-secondary">
                    <p>{event.date}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{event.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{event.location}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <p className="inline-flex items-center gap-2">
                    <Clock size={16} className="text-secondary" />
                    {event.time}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {event.location}
                  </p>
                </div>
                <button className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
                  Learn More
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  </div>
)

export default Events
