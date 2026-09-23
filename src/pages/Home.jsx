import Hero from '../components/Hero'

const steps = [
  { n: '01', title: 'Search', body: 'Type a title and get instant matches from a library of thousands.' },
  { n: '02', title: 'Compare', body: 'Scan ratings and release years at a glance across the grid.' },
  { n: '03', title: 'Watch', body: 'Open the details, read the overview, and pick tonight\u2019s show.' },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl text-paper text-center mb-12">HOW IT WORKS</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.n} className="text-center sm:text-left">
              <span className="font-display text-4xl text-marquee">{step.n}</span>
              <h3 className="mt-2 font-display text-xl text-paper">{step.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
