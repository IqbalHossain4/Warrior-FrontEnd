const cartProductsLoader = async (_id) => {
    const loaderProducts = await fetch('/hakaton.json');
    const products = await loaderProducts.json();

    
    const product = products.find((p) => p._id === parseInt(_id));
    
    
    return product;
  };

  export default cartProductsLoader;