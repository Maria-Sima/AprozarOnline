import {useEffect} from 'react'
import SingleBanner from '../../Components/Banners/SingleBanner.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import banner from '../../assets/pictures/veges.jpg'
import img1 from '../../assets/pictures/platou_trad.webp'
import img2 from '../../assets/pictures/producatoriLocali.jpg'
import img3 from '../../assets/pictures/fruits.webp'
import './Extrapages.scss'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
            heading="About Us"
            bannerimage={banner}
        />
        <div className='pgleft pgcommon'>
            <img
                src={img2} alt='noimg'/>

            <div>
                <h1>Our Story</h1>
                <p>We understand the importance
                    of providing high-quality products to our customers. That's why we
                    carefully select our suppliers and perform rigorous quality checks
                    to ensure the freshness and purity of our products.</p>
            </div>
        </div>
        <div className='pgright pgcommon'>
            <img
                src={img1} alt='noimg'/>

            <div>
                <h1>Who are we</h1>
                <p>
                    Welcome to our Natural Food Online Store!We are passionate about
                    providing you with the finest selection of natural products sourced
                    directly from local producers. We believe in the power of nature and
                    the importance of supporting local communities.
                </p>
            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img

src={img3}                alt='noimg'/>

            <div>
                <h1>Our Goal</h1>
                <p>We prioritize working directly
                    with local farmers and producers who share our values. By sourcing
                    our products locally, we support the community and reduce our
                    carbon footprint.</p>
            </div>
        </div>
        <Footer1/>
        <Footer2/>
    </div>)
}

export default About