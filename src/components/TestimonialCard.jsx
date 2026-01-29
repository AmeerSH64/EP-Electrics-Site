import { IconStarFilled } from "@tabler/icons-react";
import { testimonials } from "../constants";

const TestimonialCard = ({ name, testimonial, rating }) => {
  return (
    <div>
        <div className="card rounded-3xl bg-black-200 p-10 mb-10 text-left inline-block max-w-md">
                <h3 className="font-semibold text-3xl">{name}</h3>
                <p className="text-white-50 italic my-4 text-2xl">
                    {testimonial}
                </p>
                <div className="stars">
                    {Array.from({ length: rating }, (_, i) => (
                        <IconStarFilled key={i} />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default TestimonialCard