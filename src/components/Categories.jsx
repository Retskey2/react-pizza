import React, {useState} from "react";

function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }


    return (
        <div className="categories">
            <ul>
                <li className={activeItem == null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>Все
                </li>
                {items &&
                items.map((pizza, index) =>
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${pizza}_${index}`}
                    >{pizza}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Categories;