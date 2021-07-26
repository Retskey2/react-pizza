function Categories({items}) {

    const itemCategories = items.map((pizza,index) =>
        <li key={`${pizza}_${index}`}>{pizza}</li>
    );
    console.log(itemCategories);

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {itemCategories}
            </ul>
        </div>
    );
}

export default Categories;