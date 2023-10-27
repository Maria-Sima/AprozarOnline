
import Slider from 'react-slick'
import vegetables from "../../assets/pictures/vegetables.jpeg"
import vegetables2 from "../../assets/pictures/1.png"
import fruits from "../../assets/pictures/fruits.webp"
import fruits2 from "../../assets/pictures/1.png"
import './BannerSlider.scss'

const BannerSlider = ({scrollToProductSidebar}) => {
    const data=[
        {
            id:1,
            image:vegetables,
            title:"Prospetimea de la fermă la ușa ta!",
            description:"Descoperă savoarea autentică a produselor locale, livrate la tine acasă!",
            button:'Cumpara local'
        },
        {
            id:2,
            image:fruits2,
            title:"Aprozarul online al tradițiilor locale și gusturilor autentice!",
            description:"Economisește timp și sprijină producătorii locali prin cumpărăturile tale online!",
            button:'Cumpara acum'
        },
        {
            id:3,
            image:fruits,
            title:"Găsește delicatese locale într-un mod convenabil și simplu!",
            description:"Descoperă farmecul tradiției în fiecare produs cumpărat online!",
            button:'Cumpara sanatos'
        },
        {
            id:4,
            image:vegetables2,
            title:"Produse de la producători locali: gust autentic, impact pozitiv!",
            description:"Încurajăm legătura cu producătorii locali, prin intermediul aprozarului nostru online!",
            button:'Cumpara din Romania'
        }

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleShopMoreClick = () => {

        scrollToProductSidebar();
    };

    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button onClick={handleShopMoreClick}>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider