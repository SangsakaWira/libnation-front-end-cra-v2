function CheckoutCard(props) {
    return (
        <div className="checkout-card">
            <div className="checkout-card-thumbnail"></div>
            <div className="checkout-card-description">
                <h3 className="heading-2">{props.title}</h3>
                <p>{props.description}</p>
                <p className="heading-2">{props.price}</p>
            </div>
        </div>
    )
}

export default CheckoutCard