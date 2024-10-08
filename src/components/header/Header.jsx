import React from 'react'
import './Header.css'

const Header = () => {

    const headerData = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Slills",
            link: "#skills"
        },
        {
            name: "Services",
            link: "#services"
        }
    ]

    return (

        <header>
            <h1>Iram Ashfaq
                
                .</h1>

            <div className='navitems'>
                {headerData.map((item, index) => {
                    return (
                        <a href={item.link} className="" key={index}>{item.name}</a>
                    )
                })}
            </div>
        </header>


    )
}

export default Header;