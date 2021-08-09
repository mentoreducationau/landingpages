import React , { useState, useEffect, useCallback } from "react"
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide"
import { testimonialarray }  from '../../utils/slider';

// console.log(testimonialarray);

let interval

const Testimonials = () => {
  
  // console.log(testimonialarray)

  const [ activeSlide , setActiveSlide] = useState(0)

  // console.log(activeSlide)

  const nextSlide = useCallback(() => {
    if(activeSlide < testimonialarray.length - 1) {
      setActiveSlide((prev) => prev + 1)
    } else {
      setActiveSlide(0)
    }
  },[activeSlide, setActiveSlide])
  
  const prevSlide = () => {
    if(activeSlide === 0) {
      setActiveSlide(testimonialarray.length - 1);
    } else {
      setActiveSlide((prev) => prev - 1)
    }
  }

  useEffect(() => {
    interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  },[nextSlide])

  return (
    <>
        {testimonialarray && testimonialarray.map((item , index) => {
          return (
            <TestimonialSlide 
              active={index === activeSlide} 
              nextSlide={nextSlide} 
              prevSlide={prevSlide} 
              data={item}  
              index={index} 
            />
          )
        })}
    </>
  )
}

export default Testimonials

