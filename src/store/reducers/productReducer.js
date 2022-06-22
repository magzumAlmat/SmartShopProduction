const initState = {
    products: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
};

const productReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PRODUCT':
            console.log('created product', action.product);
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.err);
            return state;
        case 'DELETE_SUCCESS':
            console.log('product deleted');
            return state;
        case 'DELETE_ERROR':
            console.log('product delete error', action.err);
            return state;
        default:
            return state;
    }
}

export default productReducer;