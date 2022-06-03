import React from "react"
import "./Portfolio.css"
import Card from "./Cards"
import Portfolio_data from "./Porfolio.data"

export const Portfolio = () => {
return (
    <>
    <section className='Portfolio top' id='portfolio'>
        <div className='container'>
        <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>MY PORTFOLIO</h1>
        </div>

        <div className='content_grid'>
            {Portfolio_data.map((value, index) => {
            return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} description={value.description} link = {value.link} />
            })}

            {/*<div className='box btn_shadow '>
            <div className='img'>
                <img src='' alt='' />
            </div>
            <div className='category d_flex'>
                <span>Development</span>
                <label>
                    <i className='far fa-heart'></i> 360
                </label>
            </div>
            <div className='title'>
                <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                <i class='fas fa-arrow-right'></i>
                </a>
            </div>
            </div>*/}
        </div>
        </div>
    </section>
    </>
)
}

export default Portfolio