const BASE_URL = "http://localhost:3024";

function getGoods() {
  return fetch(`${BASE_URL}/api/goods?nopage=true`).then((response) =>
    response.json()
  );
}

function getCategory() {
  return fetch(`${BASE_URL}/api/category?nopage=true`).then((response) =>
    response.json()
  );
}
function postGoods(data) {
  console.log(data);
  return fetch(`${BASE_URL}/api/goods`, {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => error);
}
export { getGoods, getCategory, postGoods };
