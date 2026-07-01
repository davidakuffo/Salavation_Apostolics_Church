import { MapPin, Sparkles, Heart, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    icon: Sparkles,
    title: 'Worshipfulness',
    description: 'We create space for awe through teaching, music, and intentional prayer.',
  },
  {
    icon: Users,
    title: 'Belonging',
    description: 'Every person is welcomed, valued, and invited to participate in community.',
  },
  {
    icon: Heart,
    title: 'Service',
    description: 'We extend generosity both inside and outside the church walls.',
  },
]

const About = () => (
  <div className="space-y-24 py-20">
    <section className="bg-white">
      <SectionHeading
        label="About us"
        title="Our mission is to make faith feel welcoming and true"
        description="Salvation Apostolics is a church for people who want thoughtful worship, warm community, and honest teaching from the Bible."
      />
      <div className="container mx-auto mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8 rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Mission</p>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Lead with faith, hope, and love.</h3>
            <p className="mt-4 text-gray-600 leading-7">
              Our mission is to invite people into a deeper relationship with Christ through vibrant teaching, compassionate care, and everyday discipleship.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">History</p>
            <p className="mt-4 text-gray-600 leading-7">
              Founded to serve families across the region, our church has grown from a small gathering into a joyful community of believers who love God and love people.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl bg-primary text-white shadow-soft">
            <img
              src="https://picsum.photos/640/480?portrait"
              alt="Pastor"
              className="h-80 w-full object-cover"
            />
            <div className="space-y-4 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Meet the pastor</p>
              <h3 className="text-2xl font-semibold">Pastor Elijah Walker</h3>
              <p className="text-gray-100 leading-7">
                Pastor Elijah brings passionate preaching, grounded discipleship, and a warm spirit to every gathering.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                <MapPin size={16} />
                Springtown, USA
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-soft">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-6 text-lg font-semibold text-primary">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
