import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className='services-section'>
      <div className="section-padding text-center">
        <div>
          <h1 className="md:text-7xl text-3xl">Our Services</h1>
          <p className="md:text-2xl text-white-50">
            What we do
          </p>
        </div>
        <div>
          {/* Service cards would go here */}
          <div>
            <div className='relative service-grid grid gap-4'>
              <div className='service-main bg-black-50'>
                <h2 className="text-6xl">Select a Service to View Information</h2>
              </div>
              {services.map((service, index) => (
                <div key={index} className='relative'>
                  <ServiceCard name={service.name} description={service.description} />
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