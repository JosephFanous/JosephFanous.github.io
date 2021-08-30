import './welcome.scss';
import Pic from '../../media/me.JPG';

export default function welcome() {
    return (
        <div class="container">
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


