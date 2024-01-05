const customers = document.getElementById("customers");
const getCard = () => {
  customers.innerHTML = ``
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <div>
        <h1>${item.title}</h1>
    <p>${item.name}</p>
    <p>${item.price}</p>
    <button onclick="removeItem(${index})">delete</button>

        </div>
        `;
    customers.appendChild(myDiv);
  });
};

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getCard();
}


  getCard();