import {Categories, LoadingPizzaBlock, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory, setSortBy} from '../redux/actions/filter'
import {useCallback, useEffect} from "react";
import {fetchPizzas} from "../redux/actions/pizza";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'}
];


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filter}) => filter);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
        /* eslint-disable-next-line */
    }, [category, sortBy]);

    const onClickCategory = useCallback((index) => {
        dispatch(setCategory(index));
        /* eslint-disable-next-line */
    }, []);

    const onClickSortBy = useCallback((type) => {
        dispatch(setSortBy(type));
        /* eslint-disable-next-line */
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    };


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
                    {isLoaded
                        ? items.map((obj) => (
                            <PizzaBlock
                                onClickAddPizza={handleAddPizzaToCart}
                                key={obj.id}
                                cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                {...obj}
                            />
                        ))
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingPizzaBlock key={index}/>)}
                </div>
            </div>
        </div>
    );
}

export default Home