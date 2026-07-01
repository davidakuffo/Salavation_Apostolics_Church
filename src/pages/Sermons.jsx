import { BookOpen, Headphones, Play, CalendarDays, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const sermons = [
  {
    title: 'Finding Peace in a Busy World',
    date: 'Apr 28, 2026',
    speaker: 'Pastor Elijah',
    length: '34 min',
    image: 'https://picsum.photos/480/320?sermon1',
  },
  {
    title: 'Living with Courage and Grace',
    date: 'Apr 21, 2026',
    speaker: 'Pastor Elijah',
    length: '41 min',
    image: 'https://picsum.photos/480/320?sermon2',
  },
  {
    title: 'Hope for Hard Seasons',
    date: 'Apr 14, 2026',
    speaker: 'Young Adults Team',
    length: '29 min',
    image: 'https://picsum.photos/480/320?sermon3',
  },
]

const Sermons = () => (
  <div className="space-y-20 py-20">
    <section className="bg-white">
      <SectionHeading
        label="Sermons"
        title="Messages that encourage and equip"
        description="Explore recent sermons, Bible studies, and teaching series designed to help you grow in faith and purpose."
      />

      <div className="container mx-auto mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[2rem] bg-primary text-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Featured message</p>
          <h3 className="mt-6 text-3xl font-serif font-semibold leading-tight">Hope for Hard Seasons</h3>
          <p className="mt-4 max-w-xl text-gray-200 leading-8">
            A practical message about trusting God when life feels uncertain. Hear real stories and discover a renewed sense of courage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/20 px-4 py-2 text-sm text-amber-100">
              <CalendarDays size={16} />
              Latest
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              <BookOpen size={16} />
              Series: Renewal
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-amber-400">
              Watch
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20">
              Listen
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gray-50 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Filter</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['All', 'Renewal', 'Faith', 'Community'].map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary transition hover:border-amber-300"
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="mt-10 text-sm leading-7 text-gray-600">
            Use this filter bar as a starting point for browsing sermons by series or topic.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Latest sermons</p>
            <h3 className="mt-3 text-3xl font-semibold text-primary">Recent messages</h3>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-gray-100">
            <ChevronRight size={16} />
            Browse All
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sermons.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-700">{item.date}</p>
                <h4 className="mt-4 text-xl font-semibold text-primary">{item.title}</h4>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>{item.speaker}</span>
                  <span>{item.length}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
                    <Play size={16} /> Watch
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-amber-300">
                    <Headphones size={16} /> Listen
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Sermons
