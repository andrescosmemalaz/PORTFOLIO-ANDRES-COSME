import React from "react"
import "./Home.css"
import hero from "../images/slider-1.png"
import skill1 from "../images/skill1.png"
import skill2 from "../images/skill2.png"
import skill3 from "../images/skill3.png"
import Typewriter from 'typewriter-effect'


const Home = () => {

return (
    <>
    <section className='hero' id='home'>
        <div className='container f_flex top'>
        <div className='left top'>
            <h3>WELCOME TO MY PAGE</h3>
            <h1>
            Hi, I´m <span>Andres </span> a 
            </h1>
            <h2>  <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <Typewriter
            options={{
                strings: ['Industrial Engineer','Developer','Tech Enthusiast.'],
                autoStart: true,
                loop: true,
            }}
            />
        </span>
            </h2>
            <p>I am a persevering industrial engineer, looking for a position in a technology company, with innovative mindset, with challenges and transcendent projects. I consider myself to be a self-confident person, curious by nature and always looking to improve my skills, one design problem at a time. I enjoy learning constantly, I propose integral solutions focused on people, processes and technology. I am a self-taught professional with high curiosity, with clear indicators of proactivity, communication, teamwork and analytical skills. I possess communication skills at all levels, who constantly learns from the organisational culture, who likes to solve the doubts and concerns of the clients. If I have to define myself in one sentence, I would be a family person, an animal lover, a fantastic sportsman, a food fanatic and obsessed with technology.</p>

            <div className='hero_btn d_flex'>
            <div className='col_1'>
                <h4>YOU CAN ALSO FIND ME ON</h4>
                <div className='button'>
                <a  href="https://www.facebook.com/andresmaximo.cosmemalasquez" target="_blank" ><button className='btn_shadow'>
                    <i class='fab fa-facebook'></i>
                </button>
                </a>
                <a  href="https://github.com/andrescosmemalaz" target="_blank" >
                <button className='btn_shadow'>
                    <i class='fab fa-github'></i>
                </button>
                </a>
                <a  href="https://www.linkedin.com/in/andres-m%C3%A1ximo-cosme-malasquez-bb11b7173/" target="_blank" >
                <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                </button>
                </a>
                </div>
            </div>
            <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                <img src={skill3} alt='' />
                </button>
            </div>
            </div>
        </div>
        <div className='right'>
            <div className='right_img'>
            <img src={hero} alt='' />
            </div>
        </div>
        </div>
    </section>
    </>
)
}
{/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}
export default Home