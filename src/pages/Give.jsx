import { Sparkles, Gift, HandHeart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const gifts = [
  {
    title: 'Tithe',
    description: 'Support the ongoing ministries and mission of the church through consistent giving.',
  },
  {
    title: 'Offering',
    description: 'Give with gratitude for special needs, local outreach, and community care.',
  },
  {
    title: 'Special Giving',
    description: 'Partner with us for building projects, scholarship support, and compassionate response.',
  },
]

const Give = () => (
  <div className="space-y-20 py-20">
    <section className="bg-white">
      <SectionHeading
        label="Give"
        title="Giving is an act of worship and generosity"
        description="Your contributions help us care for families, support local outreach, and create spaces where faith can grow."
      />

      <div className="container mx-auto mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-gray-50 p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Why give</p>
          <h3 className="mt-5 text-3xl font-semibold text-primary">Resources help us extend grace in real ways.</h3>
          <p className="mt-6 text-gray-600 leading-8">
            Every gift supports worship gatherings, care for neighbors, and ministries that reach people who need hope.
          </p>
          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-secondary">Scripture</p>
              <blockquote className="mt-4 text-xl font-serif italic text-primary">
                “Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion..." — 2 Corinthians 9:7
              </blockquote>
            </div>
          </div>
          <a
            href="https://example.com/give"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Give Now
          </a>
        </div>

        <div className="space-y-6">
          {gifts.map((item) => (
            <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                {item.title === 'Tithe' ? <Gift size={20} /> : item.title === 'Offering' ? <HandHeart size={20} /> : <Sparkles size={20} />}
              </div>
              <h4 className="mt-6 text-xl font-semibold text-primary">{item.title}</h4>
              <p className="mt-3 text-gray-600 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Give
