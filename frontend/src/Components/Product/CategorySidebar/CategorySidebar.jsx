import img1 from '../../../assets/pictures/fruits.png'
import img2 from '../../../assets/pictures/legumecos.png'
import img3 from '../../../assets/pictures/dairy.png'
import img4 from '../../../assets/pictures/carne.png'
import './CategorySidebar.scss'

const CategorySidebar = ({setCategory,category}) => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Fructe',
            category:'Fruits'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Legume',
            category:'Vegetables'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Lactate',
            category:'Dairy'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Carne',
            category:'Meat'
        },

    ]

    const handleCategoryClick = (categoryClicked) => {
        if (category === categoryClicked) {
            setCategory('');
        } else {
            setCategory(categoryClicked);
        }
    };
    return (
        <div className='categorysidebar'>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='category' onClick={() => {
                            handleCategoryClick(item.category)
                        }}>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CategorySidebar