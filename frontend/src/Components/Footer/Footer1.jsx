import React from 'react'
import veges from '../../assets/pictures/moreVeges.jpg'
import './Footer1.scss'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Alege comoditatea și calitatea cu piața noastră online!
                </h1>
                <p>Bucură-te de servicii rapide de livrare și o experiență de cumpărături fără stres, cu piața online!
                </p>
            </div>
        </div>
    )
}

export default Footer1