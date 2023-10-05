const cartProductsLoader = async (_id) => {
  const loaderProducts = await fetch("http://localhost:5000/hackathon");
  const products = await loaderProducts.json();

  const product = products.find((p) => p._id === parseInt(_id));

  return product;
};

export default cartProductsLoader;
