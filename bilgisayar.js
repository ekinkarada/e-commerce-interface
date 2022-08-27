const menu = document.querySelector(".ul-menu");
const mobile_menu = document.querySelector(".mobile-menu-ul");
const cart = document.querySelector(".item");
const button = document.getElementsByTagName("button");
const getCategory = async () => {
  await fetch("product-list.json")
    .then((res) => res.json())
    .then((data) => {
      createUl(data);
      createCategory(data);
      createMobileUl(data);
    });
};
createMobileUl = (data) => {
  const array = data.responses[0][0].params.userCategories;
  for (let index = 0; index < array.length; index++) {
    console.log(array[index][2]);
    mobile_menu.innerHTML += `
    <li class="mobile-menu-li">
    <a href="${array[index][2]}.html">${array[index]}</a>
    </li>
        `;
  }
};
createUl = (data) => {
  const array = data.responses[0][0].params.userCategories;
  for (let index = 0; index < array.length; index++) {
    console.log(array[index][2]);
    menu.innerHTML += `
        <li>
        <a href="${array[index][2]}.html" ><p>${array[index]}</p>
      </li>
        `;
  }
};
createCategory = (data) => {
  console.log(button[1]);
  const loop =
    data.responses[0][0].params.recommendedProducts
      .BilgisayarTabletDizüstüBilgisayar;

  for (let index = 0; index < loop.length; index++) {
    cart.innerHTML += `
    <div class="anakart">
    <div class="image">
      <img loading="lazy" src="${loop[index].image}" alt="" />
    </div>
    <div class="info">
      <p>${loop[index].name}</p>
    </div>
    
    <div class="price">${loop[index].priceText}</div>
    <div class="kargo">
      <i
        class="fa fa-truck"
        style="
          font-size: 10px;
          color: rgb(3, 190, 3);
          margin-right: 3px;
          transform: rotateY(180deg);
        "
      ></i
      >Ücretsiz kargo
    </div>
    <button onclick="myFunction()" class="button">Sepete Ekle</button>
    <script>
function myFunction() {
  alert("I am an alert box!");
}
</script>
  </div>
         `;
  }
};
function myFunction() {
  alert("Ürün sepete eklendi\nSepete git.");
}

getCategory();
