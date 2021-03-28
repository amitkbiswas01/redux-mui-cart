async function getProducts() {
  const url = "https://fakestoreapi.com/products";
  const fetchConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, { ...fetchConfig });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

export default getProducts;
