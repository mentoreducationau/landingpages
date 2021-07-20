import React from "react"
import { TestimonialCard, TestimonialCarousel, TestimonialContainer, TitleBGImage } from "./testimonial.css"
import JL from "../../images/happy.png"


const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali M",
      testimonial:
        "Mentor staff and Miler have helped me to complete my assessments and course in time. Appreciate your time and support. Warm Regards, Ali",
    },
    {
      name: "Praful D",
      testimonial:
        "Excellent experience working with the team. They are very understanding and useful. ... ",
    },
    {
      name: "Nick",
      testimonial:
        "Very great team and supportive team. The best staff and the best assessors I have dealt with. Very helpful and so understanding. They live and breathe assistance. ",
    },
  ]
  return (
    <TestimonialContainer>
      <h3>What our previous students say</h3>

      <TestimonialCarousel>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard order={`${i * 100}%`}>
            <TitleBGImage src={JL} alt="" />
            <p>{testimonial.testimonial}</p>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: `bold`,
                float: `right`,
              }}
            >
              {testimonial.name}
            </span>
          </TestimonialCard>
        ))}
      </TestimonialCarousel>
    </TestimonialContainer>
  )
}

export default Testimonials

