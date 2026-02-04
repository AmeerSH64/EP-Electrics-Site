import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../constants";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-padding text-center">
        <div className="mb-6">
          <h1 className="text-3xl md:text-7xl">Testimonials</h1>
          <p className="md:text-2xl text-white-50">What our clients say about us</p>
        </div>
        <div className="desktop lg:columns-3 mt-16" gap-2>
          {/* Testimonial cards - Desktop version */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in">
              <TestimonialCard name={testimonial.name} testimonial={testimonial.quote} rating={testimonial.rating} />
            </div>
          ))}
        </div>

        <div>
          {/* Testimonial cards - Mobile version */}
          <div className="max-w-4xl mx-auto">
            <div className="relative moblile lg:hidden">
              <div className="animate-fade-in animation-delay-300">
                <TestimonialCard name={testimonials[activeIndex].name} 
                  testimonial={testimonials[activeIndex].quote} 
                  rating={testimonials[activeIndex].rating} />
              </div>
              <div className="flex w-fit items-center justify-center gap-4 mt-8 rounded-full bg-black-200">
                <button onClick={previous} 
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                  <IconArrowLeft />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button onClick={() => setActiveIndex(index)} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${index === activeIndex ? "w-8 bg-primary" : 
                        "bg-black-50 hover:bg-black-50"}`} />
                  ))}
                </div>
                <button onClick={next} 
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials