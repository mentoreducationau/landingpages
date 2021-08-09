import React, { useState, useEffect } from 'react'
import { CounterText } from './counter.css'

const easeOutSine = t => -(Math.cos(Math.PI * t) - 1) / 2; // from easings.net
const frameDuration = 1000 / 60;

/*
    contains optional props from styled-comp:
        font    =>  @font-family (default = Fututra)
        color   =>  @color (default = #ff0808)
        size    =>  @font-size (default = 18vw)
        weight  =>  @font-weight (default = 900)
*/

const CountUp = ({ children, duration = 5000, ...props }) => {

    const targetNumber = parseInt(children, 10)
    const [displayNumber, setDisplayNumber] = useState(0)

    useEffect(() => {
        let frame = 0;
		const totalFrames = Math.round( duration / frameDuration )

        const counter = setInterval(() => {
            frame++
            var progress = easeOutSine(frame / totalFrames)
            setDisplayNumber(targetNumber * progress)

            if (frame === totalFrames) {
                clearInterval(counter)
            }
        },frameDuration)
    },[duration, targetNumber])
    
    return (
        <CounterText {...props}>
            {Math.floor(displayNumber)}
        </CounterText>
    )
}

export default CountUp