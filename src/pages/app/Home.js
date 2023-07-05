import { useState } from "react";
import CardBook from "../../components/CardBook";
import SearchBar from "../../components/SearchBar"

function Home() {

    const [books] = useState([{
        image: "assets/images/image-1.png",
        title: "Harry Potter",
        price: "Rp 150.000",
        description: "Lorem Ipsum",
        button: "Add to Cart",
        bought: false
    }, {
        image: "assets/images/image-2.png",
        title: "Harry Potter II",
        price: "Rp 250.000",
        description: "Lorem Ipsum",
        button: "Read",
        bought: true
    }, {
        image: "assets/images/image-3.png",
        title: "Harry Potter III",
        price: "Rp 200.000",
        description: "Lorem Ipsum",
        button: "Read",
        bought: true
    }])

    return (
        <>
            <SearchBar title="Explore all books available" ></SearchBar>
            {/* Looping and Conditional */}
            <div className="book">
                {books.map(book => {
                    if (book.bought) {
                        return (<CardBook key={book.title} image={book.image} title={book.title} price={book.price} description={book.description} button={"Add to Cart"} />)
                    } else {
                        return (<CardBook key={book.title} image={book.image} title={book.title} price={book.price} description={book.description} button={"Read"} />)
                    }
                })}
            </div>
        </>
    )
}

export default Home;