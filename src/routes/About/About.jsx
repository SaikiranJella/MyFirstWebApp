import React from 'react'
import { name, location, Bus, add } from 'my-first-lib-nareshtit'
export const About = () => {
    const busObj = new Bus()
    return (
        <div>
            <h1>About</h1>
            <h3>{name}----{location}</h3>
            <h3>{add(10, 20)}</h3>

            <h3>{busObj.fw}-{busObj.bw} - {busObj.totalWheels()} - {busObj.getColor()}</h3>
        </div>
    )
}
