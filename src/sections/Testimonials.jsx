import TestimonialCard from "../components/TestimonialCard"
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-padding text-center">
        <div>
          <h1 className="md:text-7xl">Testimonials</h1>
          <p className="md:text-2xl text-white-50">What our clients say about us</p>
        </div>
        <div className="grid-2-cols">
          {/* Testimonial cards would go here */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hover:scale-105 transition-all duration-300 ease-in-out">
              <TestimonialCard name={testimonial.name} testimonial={testimonial.quote} rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials