import './HomeCategories.scss'
import img1 from '../../assets/pictures/fruits.png'
import img2 from '../../assets/pictures/legumecos.png'
import img3 from '../../assets/pictures/dairy.png'
import img4 from '../../assets/pictures/carne.png'

const HomeCategories = () => {
    return (
        <div className='homecategories'>
            <div className='container'>
                <img src={img1} alt='img1' />
                <div className='content'>
                    <h1>
                        Livrare rapida si sigura
                    </h1>
                    <p> Direct la tine acasa</p>
                </div>
            </div>
            <div className='container'>
                <img src={img2} alt='img2' />
                <div className='content'>
                    <h1>
                        Calitate și prospețime garantată
                    </h1>
                    <p>Vreau legume</p>
                </div>
            </div>
            <div className='container'>
                <img src={img3} alt='img3' />
                <div className='content'>
                    <h1>
                        O selecție vastă de produse proaspete și autentice
                    </h1>
                    <p> Shop vegetables now</p>
                </div>
            </div>
            <div className='container'>
                <img src={img4} alt='img4' />
                <div className='content'>
                    <h1>
                        Profită de ofertele speciale și reducerile noastre exclusive
                    </h1>
                    <p> Shop vegetables now</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCategories