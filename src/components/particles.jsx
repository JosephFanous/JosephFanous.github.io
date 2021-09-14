import React from 'react'
import './particles.scss'
import Particles from 'react-particles-js';

export default function particles() {
    return (
        <div className='part'>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        </div>
    )
}
