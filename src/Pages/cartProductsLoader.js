const cartProductsLoader = async (_id) => {
    const loaderProducts = await fetch('/hakaton.json');
    const products = await loaderProducts.json();

    
    const product = products.find((p) => p._id === parseInt(_id));
    
<<<<<<< HEAD
    
    return product;
  };

=======
    // console.log(typeof id)
    // console.log(products)
    // console.log(product)
    
    return product;
  };
  
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
  export default cartProductsLoader;