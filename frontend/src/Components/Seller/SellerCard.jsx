import "./SellerCard.scss"

const SellerCard = ({item}) => {
    let {id,email,imageUrl,firstName,lastName,address}=item;
    console.log(address)
    return (
        <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
                    <div className="container">
                        <div
                            className="front"
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        >
                            <div className="inner">
                                <p>{firstName} {lastName}</p>
                                <span>{address}</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>
                                    {email}
                                </p>
                            </div>
                        </div>
                    </div>
        </div>

    );
};

export default SellerCard;