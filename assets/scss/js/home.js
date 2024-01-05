let products = document.getElementById("products")

let limit=4
let page=1

const renderProducts = async () =>{
try{
    const response = await axios.get(`https://655c8cc025b76d9884fd82fe.mockapi.io/products?page=${page}&limit=${limit}`)
    const data = response.data;
    db = data;
    console.log(data);
    db.map((item) =>{
        let myDiv = document.createElement("div")
        myDiv.className = "myDiv"
        myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h1>${item.title}</h1>
        <p>${item.price}</p>
        <button onclick="addToCart(${item.id})"> Add to Cart</button>
     
        `;
        products.appendChild(myDiv)
    });
}catch (error) {
    console.log(error);
}
}


  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == id));
    localStorage.setItem("cart", JSON.stringify(cart));
  }




window.onload = () =>{
    renderProducts()
}









const btn = document.getElementById("btn")
const inpSearch = document.getElementById("inp")


function getSearch() {
    products.innerHTML = ``
    axios
        .get(
            `https://655c8cc025b76d9884fd82fe.mockapi.io/products`
        )
        .then((res) => {
            db = res.data;
            console.log(db);
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inpSearch.value.toLowerCase()))
            let sortData = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
            sortData.map((item) => {
              console.log(sortData);
                let myDiv = document.createElement("div")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <button onclick ="addToCart(${item.id})">Add to Cart</button>
            `
                products.append(myDiv)
            });
        });

}

btn.addEventListener('click', getSearch)