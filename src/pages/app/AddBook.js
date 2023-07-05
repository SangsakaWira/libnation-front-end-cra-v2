function AddBook() {
    return (
        <>
            <h1 className="heading-2 text-left">Add New Book</h1>
            <div className="add-book">
                <form action="" className="add-book-form">
                    <div className="input-field">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="input-field">
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description" autocomplete="off" />
                    </div>
                    <div className="input-field">
                        <label for="price">Price</label>
                        <input type="number" name="price" id="price" />
                    </div>
                    <div className="button-wrap">
                        <button className="btn btn-tertiary">UPLOAD FILE</button>
                        <button className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
                <div className="add-book-preview"></div>
            </div>
        </>
    )
}

export default AddBook;