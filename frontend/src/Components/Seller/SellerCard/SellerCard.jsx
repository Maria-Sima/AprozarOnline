import "./SellerCard.scss"
import {Link} from "react-router-dom";

const SellerCard = ({item}) => {
    let {id, email, imageUrl, firstName, lastName, address} = item;
    console.log(address)
    return (// <div className="col" onTouchStart={() => this.className.toggle('hover')}>
        <div className="sellercontainer" onTouchStart={() => this.className.toggle('hover')}>
            <div
                className="front"
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <div className="inner">
                    <p>{firstName} {lastName}</p>

                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>{firstName} {lastName}</p>
                    <p>
                        Come meet {firstName} {lastName} from {address} and see what they have to offer
                    </p>
                    <div className='btn'>
                        <Link
                            to={`/seller/${id}`} className='stylenone'
                        >Find out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // </div>

    );
};

export default SellerCard;