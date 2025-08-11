import React from 'react'
//import './footer.css'
const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "70vh",
        width: "100%",

    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className='text-center'>
                Conyright &copy; TodosList.com
            </p>

        </footer>
    )
}

export default Footer
