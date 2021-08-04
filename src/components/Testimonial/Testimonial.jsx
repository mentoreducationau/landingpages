import React , { useState } from "react"
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide"
import { testimonialarray }  from '../../utils/slider';


console.log(testimonialarray);



const Testimonials = () => {
  
  console.log(testimonialarray)

  const [ activeSlide , setActiveSlide] = useState(0)

  console.log(activeSlide)

  const nextSlide = () => {

    if(activeSlide === testimonialarray.length - 1) return;

    setActiveSlide((prev) => prev + 1)
  }
  
  const prevSlide = () => {
    if(activeSlide === 0) return;

    setActiveSlide((prev) => prev - 1)
  }

  return (
    <>
        {
          testimonialarray && testimonialarray.map((item , index) => {
            
            if( index === activeSlide ) {
             return <TestimonialSlide active={true} nextSlide={nextSlide} prevSlide={prevSlide} data={item}  index={index}></TestimonialSlide>
            }  
            else {
              return <TestimonialSlide active={false} nextSlide={nextSlide} prevSlide={prevSlide} data={item}  index={index}></TestimonialSlide>
            }
            
          })
        }
    </>
  )
}

export default Testimonials

