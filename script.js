// SPREAD

// 1. scrivere una funzione che unisce le proprietà di due oggetti
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }

const obj1 = {
  foo: "bar",
};

const obj2 = {
  name: "Mio nome",
};

const mergeObj = (a, b) => {
  return { ...a, ...b };
};

console.log(mergeObj(obj1, obj2));

// 2. Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };

const mergeObj2 = (a, b, words) => {
  return { ...a, ...b, words };
};

console.log(mergeObj2(obj1, obj2, (mergeObj2.phrase = "Frase a caso")));

// DESTRUCTURING

// 1. Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length

const stringAboveTen = [
  "Pippooooooooo",
  "Pluto",
  "Paperinooooooooooooo",
  "Topolino",
].filter((name) => {
  return name.length > 10;
});

console.log(stringAboveTen);

// GET/SET

// 1. Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:
// - leggere _products nel getter
// - sovrascrivere _products nel setter
// - contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

// shop.products = [
//   { id: 1, name: "TV", price: 40 },
//   { id: 2, name: "PC", price: 30 },
// ];
// -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

//  const shop = {
//      _products: [],
//      get products() {

//      },
//      set products(val) {

//      }
//   }

let shop = {
  _products: [
    { id: 1, name: "TV", price: 80 },
    { id: 2, name: "Mouse", price: 10 },
  ],
  get getProducts() {
    return this._products;
  },
  set setProducts(value) {
    this._products = [...this._products, value];
  },
};

console.log(shop.getProducts);
shop.setProducts = { id: 3, name: "pc", price: 280 };
shop.setProducts = { id: 4, name: "Smartphone", price: 490 };
console.log(shop.getProducts);

const body = document.querySelector("body");
body.innerHTML = `
<h1>Lista prodotti</h1>
<ul>
<li class= "productCard"> <img src="https://picsum.photos/250?random=0" alt=""> <p>Codice Id ${shop.getProducts[0].id}</p>  <p> Name: ${shop.getProducts[0].name}</p> <p>Price: ${shop.getProducts[0].price}</p> </li>
<li class= "productCard"> <img src="https://picsum.photos/250?random=1" alt=""> <p>Codice Id: ${shop.getProducts[1].id}</p>  <p> Name: ${shop.getProducts[1].name}</p> <p>Price: ${shop.getProducts[1].price}</p> </li>
<li class= "productCard"> <img src="https://picsum.photos/250?random=2" alt=""> <p>Codice Id: ${shop.getProducts[2].id}</p>  <p> Name: ${shop.getProducts[2].name}</p> <p>Price: ${shop.getProducts[2].price}</p> </li>
<li class= "productCard"> <img src="https://picsum.photos/250?random=3" alt=""> <p>Codice Id: ${shop.getProducts[3].id}</p>  <p> Name: ${shop.getProducts[3].name}</p> <p>Price: ${shop.getProducts[3].price}</p> </li>

</ul>`;
