import { Link } from 'react-router-dom'
import { ArrowRight, Play, Heart, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { picture1 } from '../assets/assets'

const Home = () => {
  return (
    <div className="space-y-20">
      <motion.section 
        className="relative overflow-hidden bg-primary text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${picture1})` }}
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative container mx-auto px-6 py-28 text-center">
          <motion.p 
            className="mb-4 text-sm uppercase tracking-[0.3em] text-secondary/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
                Welcome
          </motion.p>
          <motion.h1 
            className="mx-auto max-w-3xl text-4xl font-heading font-semibold leading-tight tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Welcome to Salvation Apostolics Church
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary/40 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
             A place of faith, community, and purpose — where every story is welcomed and every life is cherished.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="/contact" className="btn-solid">
              Join Us
            </Link>
            <Link to="/sermons" className="btn-outline text-white border-white/40 bg-white/10 hover:bg-white/20">
              Watch Sermons
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="bg-white py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          label="Our story"
          title="A modern church rooted in scripture and community"
          description="We believe in thoughtful worship, curiosity, and serving others with grace. Our gatherings are designed to help you grow in faith and feel at home."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div 
            className="space-y-8 rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-soft"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary">Mission</p>
              <h3 className="mt-4 text-2xl font-semibold text-primary">Invite, empower, and disciple.</h3>
              <p className="mt-4 text-gray-600 leading-7">
                We gather to worship Jesus, support families, and create meaningful opportunities for people to grow in spiritual maturity.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary">Vision</p>
              <h3 className="mt-4 text-2xl font-semibold text-primary">A church that makes faith feel accessible.</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Our vision is a church where every person can discover purpose, connect with others, and find practical hope for today.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div 
              className="rounded-3xl bg-primary/5 p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-secondary">Featured</p>
              <h3 className="mt-4 text-xl font-semibold text-primary">Latest message</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Discover practical truth from this week’s sermon and take home encouragement for your family and work.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Play size={16} />
                <span>Watch now</span>
              </div>
            </motion.div>
            <motion.div 
              className="rounded-3xl bg-white p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-secondary">Community</p>
              <h3 className="mt-4 text-xl font-semibold text-primary">Gather with others.</h3>
              <p className="mt-3 text-gray-600 leading-7">
                Grow in fellowship through weekly worship, small groups, and service opportunities across the city.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <ArrowRight size={16} />
                <span>See events</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Core values"
            title="What guides our church"
            description="Our faith is built on a humble love for God, a joyful welcome for people, and a clear commitment to truth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <motion.div 
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-soft"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Heart className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="mt-6 text-xl font-semibold text-primary">Compassion</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Caring for every neighbor with kindness, support, and thoughtful outreach.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-soft"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="mt-6 text-xl font-semibold text-primary">Community</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Building strong relationships across generations and backgrounds.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-soft"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BookOpen className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="mt-6 text-xl font-semibold text-primary">Faith</h3>
              <p className="mt-4 text-gray-600 leading-7">
                Rooting our life together in scripture, prayer, and intentional worship.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
