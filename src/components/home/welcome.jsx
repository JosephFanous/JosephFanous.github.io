import './welcome.scss';
import Pic from '../../media/me.JPG';
import Particles from 'react-particles-js';

export default function welcome() {
    return (
        <div class="container" id='p1'>
            {/* <Particles className='Particle'
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
                }} /> */}
            <img src={Pic} alt='me' id='meep' />
            <div class="box">
                <div class="title">
                    <span class="block"></span>
                    <h1>Joseph Fanous<span></span></h1>
                </div>
                <div class="role">
                    <div class="block"></div>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}
