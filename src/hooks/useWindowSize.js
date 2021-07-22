import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    
    useEffect(() => {
        const updateSize = () => {
            const { innerWidth, innerHeight } = window
            setSize([innerWidth, innerHeight])
        }
        window.addEventListener('resize', updateSize)

        updateSize()

        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}