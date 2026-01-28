import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services">
      <div className="section-padding text-center">
        <div>
          <h1 className="md:text-7xl text-3xl">Our Services</h1>
          <p className="md:text-2xl text-white-50">
            What we do
          </p>
        </div>
        <div>
          {/* Service cards would go here */}
          <div className="grid-4-cols">
            <div className='flex-center'>
              {services.map((service, index) => (
                <div key={index}>
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