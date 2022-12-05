const data = [
    {
      id: 1,
      name: "Invicta Women's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71ECvaOeQQL._AC_UL320_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Women's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/61Os8OBwGkL._AC_UL320_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Women's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/81iAfA+bwbL._AC_UL320_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61dn4DT6axL._AC_UL320_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/71yjKj2EQzL._AC_UL320_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/710EMVovd5L._AC_UL320_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

const products = document.querySelector('.products');
const searchInput = document.querySelector('.search')
const CategoriesContainer = document.querySelector('.cats')

const priceRange = document.querySelector('.priceRange')
const priceValue = document.querySelector('.priceValue')


const displayProducts = (filteredProducts) => {
    products.innerHTML = filteredProducts.map((product)=>{
        return `<div class="product">
        <img src=${product.img} alt="">
        <span class="name">${product.name}</span>
        <span class="name">$${product.price}</span>
        </div>`
    }).join("");
}
displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        displayProducts(data);
    }
});

const setCategories = ()=>{
    const allCats = data.map((item)=>item.cat);
    const categories = ["All",...allCats.filter((item,i)=>{
        return allCats.indexOf(item) === i
    })];

    CategoriesContainer.innerHTML = categories.map(cat=>{
        return `<span class="cat">${cat}</span>`
    }).join("");
}
setCategories();

const cat = document.querySelectorAll('.cat')

cat.forEach((elem)=> {
    elem.addEventListener("click",e=>{
        let value = e.target.textContent;
        if(value === "All"){
            displayProducts(data);
        }else{
            displayProducts(data.filter(item => item.cat === value))
        }
    })
});

priceRange.addEventListener('input',e=>{
    let val = e.target.value;
    priceValue.innerHTML = `$${val}`;
    if(val){
        displayProducts(data.filter(item=>item.price <= val));
    }else{
        displayProducts(data);
    }
});

const setPriceList = ()=> {
    const priceList = data.map((item)=>item.price);
    const min = Math.min(...priceList);
    const max = Math.max(...priceList);

    priceRange.min = min;
    priceRange.max = max;
    priceRange.value = max;
    priceValue.innerHTML = `$${max}`;
}
setPriceList();