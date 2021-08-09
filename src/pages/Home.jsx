import {Categories, LoadingPizzaBlock, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory, setSortBy} from '../redux/actions/filter'
import {useCallback, useEffect} from "react";
import {fetchPizzas} from "../redux/actions/pizza";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'}
];


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filter}) => filter);

    useEffect(() => {
        dispatch(fetchPizzas(category,sortBy))
    }, [category, sortBy]);

    const onClickCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onClickSortBy = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);


    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onClickCategory}
                        items={categoryNames}/>
                    <SortPopup activeSortItem={sortBy.type}
                               items={sortItems}
                               onClickSort={onClickSortBy}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ? items.map((obj) => (<PizzaBlock isLoaded={true} key={obj.id}{...obj}/>))
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <LoadingPizzaBlock key={index}/>)}
                </div>
            </div>
        </div>
    );
}

export default Home