import React from "react";


const OrderAddress = () => {
    const [deliverydate, setdeliverydate] = React.useState(
        new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    )
    const savedaddress = [
        {
            AddressLine1: "Address Line 1",
            AddressLine2: "Address Line 2",
            AddressLine3: "Address Line 3",
            postalcode: "123456"
        },
        {
            AddressLine1: "Address Line 1",
            AddressLine2: "Address Line 2",
            AddressLine3: "Address Line 3",
            postalcode: "123456"
        }
    ]
    return (
        <div className='shippingcont'>
            <div className='selectdate'>
                <h2 className='mainhead1'>Select Delivery Date</h2>
                <input
                    min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    type='date'
                    value={deliverydate}
                    onChange={(e) => {
                        setdeliverydate(e.target.value)
                    }}
                />
            </div>
            <div className='previous'>
                <h2 className='mainhead1'>Previous Saved Address</h2>
                {
                    savedaddress.length > 0 ?
                        savedaddress.map((item, index) => {
                            return (
                                <div className='radio' key={index}>
                                    <input type='radio' name='address' id={index} />
                                    <span>
                          {
                              item.AddressLine1 + ', ' + item.AddressLine2 + ', ' + item.AddressLine3 + ', ' + item.postalcode
                          }
                        </span>
                                </div>
                            )
                        })
                        :
                        <div className='emptyaddress'>
                            <p>No address Found</p>
                        </div>
                }
            </div>
            <h3>OR</h3>
            <div className='shippingadd'>
                <input type='text' placeholder='Address Line 1' />
                <input type='text' placeholder='Address Line 2' />
                <input type='text' placeholder='Address Line 3' />
                <input type='text' placeholder='Postal Code' />
                <button>Save</button>
            </div>

        </div>
    );
};

export default OrderAddress;