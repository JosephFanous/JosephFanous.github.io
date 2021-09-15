import React from 'react'
import './contact.scss'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
export default function contact() {
    return (
        <div className='contact' id='p4'>
            <div className='title'>
                <h1>Contact Me</h1>
            </div>
            <section id="contact">
                <div className="row">
                    <div className="icon-row">

                        <div className="icon-container">
                            <a href="mailto:joseph.fanous@ontariotechu.net">
                                <EmailIcon className='icon' /></a>
                            {/* <p>joseph.fanous@ontariotechu.net</p> */}
                        </div>

                        {/* <div className="icon-container">
                            <LocationOnIcon className='icon' />
                            <p>Toronto, ON</p>
                        </div> */}

                        <div className="icon-container">
                            <a href="tel:+16473285716">
                                <PhoneIcon className='icon' /></a>
                            {/* <p>+1 647 328 5716</p> */}
                        </div>

                        <div className="icon-container">
                            <a href="https://www.linkedin.com/in/joseph-fanous/">
                                <LinkedInIcon className='icon' /></a>
                        </div>

                        <div className="icon-container">
                            <a href="https://github.com/JosephFanous">
                                <GitHubIcon className='icon' /></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>)
}
