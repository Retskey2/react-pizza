import ContentLoader from "react-content-loader"

function LoadingPizzaBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="147" r="115" />
            <rect x="0" y="277" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="314" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="415" rx="6" ry="6" width="95" height="30" />
            <rect x="144" y="408" rx="25" ry="25" width="135" height="44" />
        </ContentLoader>
    )
}


export default LoadingPizzaBlock;