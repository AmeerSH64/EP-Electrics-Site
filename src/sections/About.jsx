import { highlights } from "../constants";

const About = () => {
  return (
    <section id='about' className='about'>
      <div className="section-padding text-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="md:text-7xl text-3xl"><span className="text-primary font-bold">EP</span> Electrics</h1>
              <p className="md:text-2xl text-white-50">
                A qualified team of electricians, aiming to provide electrical solutions 
                across the country.
              </p>
            </div>
            <div className="about-text space-y-4 text-gray-600 animate-fade-in animation-delay-200">
              <p>
                We are a team of qualified electricians, focused on providing electrical solutions across the country.
              </p>
              <p>
                Our main focus is on EV charging infrastrucure and solar ennergy systems, but we also provide services for
                air conditioning, lighting and repairs.
              </p>
              <p></p>
            </div>
            <div className="rounded-2xl p-4 bg-black-200 animate-fade-in animation-delay-300">
              <p className="text-lg md:text-2xl font-medium italic text-white">
                "Our mission: Provide electrical services efficiently and professionally, 
                ensuring complete customer satisfaction."
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-black-200 p-6 rounded-2xl group animate-fade-in"
              style={{animationDelay: `${(index + 1) * 100}ms`}}>
                <div className="absolute w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center top-2 left-2 hover:bg-primary/20">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-white-50">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About