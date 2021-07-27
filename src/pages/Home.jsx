import {Categories, PizzaBlock, SortPopup} from "../components";

function Home({Items}) {
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClick={(pizza) => console.log(pizza)}
                        items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}/>
                    <SortPopup items={[{name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавит', type: 'alphabet'}
                    ]}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {Items.map((obj) => (
                        <PizzaBlock
                            key={obj.id}
                            {...obj}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home