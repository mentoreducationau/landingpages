import React, { useState, useEffect, useRef } from 'react'
import { CounterText } from './counter.css'

/*
    Optional params:
        font    =>  @font-family (default = Fututra)
        color   =>  @color (default = #ff0808)
        size    =>  @font-size (default = 18vw)
        weight  =>  @font-weight (default = 900)
        ...props
*/

const CountUp = ({ targetNumber, duration, ...props }) => {

    const id = useRef(null)

    const [displayNumber, setDisplayNumber] = useState(0)
    const incrementCount = () => setDisplayNumber(count => count + 1)

    useEffect(() => {
        if (displayNumber < targetNumber) {
            id.current = setTimeout(() => {
                incrementCount()
            }, duration)
        }

        return () => clearTimeout(id.current)
    }, [displayNumber, duration, targetNumber])
    
    return <CounterText {...props} key={displayNumber}>{displayNumber}</CounterText>
}

export default CountUp