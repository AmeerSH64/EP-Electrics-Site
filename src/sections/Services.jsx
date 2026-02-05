import { serviceList, services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className='services-section'>
      <div className="section-padding text-center">
        <div>
          <h1 className="md:text-7xl text-3xl">Our <span className="text-primary font-bold">Services</span></h1>
          <p className="md:text-2xl text-white-50">
            What we do
          </p>
        </div>
        {/* Services list */}
        <div className='animate-fade-in animation-delay-200'>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...serviceList, ...serviceList].map((service, idx) => (
                <div key={idx} className='shrink-0 px-8 py-4'>
                  <span className='text-3xl font-semibold text-black-200 hover:text-white-50 transition-colors'>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Service cards would go here */}
          <div>
            <div className='service-grid grid gap-4'>
              <div className='service-main bg-black-50'>
                <div className='service-main-info'>
                  <h2 className="text-3xl md:text-6xl animate-fade-in animation-delay-300">
                    Select a Service to View Information
                  </h2>
                  <p className='text-xl md:text-3xl'>Hover to see more</p>
                </div>
              </div>
              {services.map((service, index) => (
                <div key={index} className={`animate-fade-in animation-delay-${400 + index * 100}`}>
                  <ServiceCard name={service.name} SIcon={service.icon}
                  image={service.image} description={service.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Services