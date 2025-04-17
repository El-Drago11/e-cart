
export const sortTheItems = (Type,sortedProducts) => {
    switch (Type) {
        case sortType.PRICE_ASC:
            sortedProducts.sort((a, b) => a.price - b.price);
            break;

        case sortType.PRICE_DESC:
            sortedProducts.sort((a, b) => b.price - a.price);
            break;

        case sortType.RATING_DESC:
            sortedProducts.sort((a, b) => a.rating?.rate - b.rating?.rate);
            break;

        case sortType.RATING_ASC:
            sortedProducts.sort((a, b) => b.rating?.rate - a.rating?.rate);
            break;

        default:
            break;
    }
}



export const sortType = {
    DEFAULT: "default",
    PRICE_ASC: "priceAsc",
    PRICE_DESC: "priceDesc",
    RATING_ASC: "ratingAsc",
    RATING_DESC: "ratingDesc",
}
