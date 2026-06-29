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

        
          {/* Service cards */}
          <div className='masonry'>
            <div className='left-column'>
              <div>
                <img src={services[0].image} alt={services[0].name} />
                <p>{services[0].description}</p>
              </div>
              <div>
                <img src={services[1].image} alt={services[1].name} />
                <p>{services[1].description}</p>
              </div>
            </div>
            <div className='right-column'>
              <div className='apple-gradient'>
                <img src={services[2].image} alt={services[2].name} />
                <p>{services[2].description}</p>
              </div>
              <div>
                <img src={services[3].image} alt={services[3].name} />
                <p>{services[3].description}</p>
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
      
    </section>
  )
}

export default Services