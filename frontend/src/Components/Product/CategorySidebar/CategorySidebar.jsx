import img1 from '../../../assets/pictures/fruits.png'
import img2 from '../../../assets/pictures/legumecos.png'
import img3 from '../../../assets/pictures/dairy.png'
import img4 from '../../../assets/pictures/carne.png'
import './CategorySidebar.scss'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Fructe'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Legume'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Lactate'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Carne'
        },

    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar