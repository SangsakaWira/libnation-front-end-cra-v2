import CheckoutCard from "../../components/CheckoutCard";

function Checkout() {
    return (
        <>
            <h1 className="heading-2">Checkout</h1>
            <div className="checkout">
                <div className="checkout-detail">
                    <div className="checkout-list">
                       <CheckoutCard title="Harry Potter" description="Book Two" price="Rp 200.000" ></CheckoutCard>
                    </div>
                    <p className="heading-2">Total: <span>$ 45.00</span></p>
                    <button className="btn btn-primary">Proceed</button>
                </div>
                <div className="checkout-wallet">
                    <div className="checkout-wallet-card">
                        <h3 className="heading-2">Your Wallet</h3>
                        <h2 className="wallet-price">$ 150.00</h2>
                    </div>
                    <button className="btn btn-primary btn-primary">Top Up Wallet</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;