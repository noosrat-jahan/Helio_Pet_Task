let quantity = 1;
let drawer_quantity = 1;
const max_quantity = 10;
const min_quantity = 1;

let compare_price = document.getElementById("compare-price").innerText;
let selling_price = document.getElementById("selling-price").innerText;
let drawer_selling_price = parseInt(localStorage.getItem("selling_price"));

function updatePrice(quantity) {
  let new_compare_price = (quantity * compare_price).toFixed(2);
  let new_selling_price = (quantity * selling_price).toFixed(2);

  document.getElementById("quantity").innerText = quantity;
  document.getElementById("quantity-dublicate").innerText = quantity;

  document.getElementById("compare-price").innerText = new_compare_price;
  localStorage.setItem("compare-price", new_compare_price);
  document.getElementById("selling-price").innerText = new_selling_price;
  localStorage.setItem("selling_price", new_selling_price);
}

function add_quantity() {
  if (quantity < max_quantity) {
    quantity = quantity + 1;
    drawer_quantity += 1;
    localStorage.setItem("quantity", quantity);
    updatePrice(quantity);
  }
}

function remove_quantity() {
  if (quantity > min_quantity) {
    quantity = quantity - 1;
    localStorage.setItem("quantity", quantity);
    updatePrice(quantity);
  }
}

function delete_item() {
  document.getElementById("cart-product").innerHTML = "Your Cart is Empty";
}

function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("drawer-open");

  document.getElementById("cart-product").innerHTML = `
  <img src="assets/product1.png" alt="" />
              <div style="display: flex; flex-direction: column; gap: 8px">
                <h1 style="font-size: 1rem">Helio Pet Device ™</h1>
                <h1 style="font-size: 1rem">$ 249.00</h1>

                <div style="display: flex; align-items: center; gap: 8px">
                  <div
                    class="add-minus-btn-conatiner-3"
                    style="
                      border: 1px solid gray;
                      text-align: center;
                      padding: 8px;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <button class="plus-btn" onclick="drawer_remove_quantity()">
                      -
                    </button>
                    <span style="font-size: 1rem" class="count" id="drawer_quantity">${quantity}</span>
                    <button class="minus-btn" onclick="drawer_add_quantity()">
                      +
                    </button>
                  </div>
                  <button onclick="delete_item()"><i class="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
              <p>
                <span
                  style="font-size: 12px; color: #cf1010; font-weight: 500"
                  class="selling-price"
                  >$ <span id="drawer-selling-price">${drawer_selling_price}</span></span
                >
              </p>`;
}

window.onload = function () {
  quantity = parseInt(localStorage.getItem("quantity")) || 1;
  //   drawer_quantity = parseInt(localStorage.getItem("drawer_quantity")) || 1;
  //   selling_price = parseInt(localStorage.getItem("selling_price")) || 249.00;

  compare_price = parseFloat(
    document.getElementById("compare-price").innerText
  );
  selling_price = parseFloat(
    document.getElementById("selling-price").innerText
  );

  updatePrice(quantity);
  drawer_updatePrice(drawer_quantity);
};

function drawer_updatePrice(drawer_quantity) {
  let drawer_selling_price = 249.0;
  let new_drawer_selling_price = (
    drawer_quantity * drawer_selling_price
  ).toFixed(2);

  document.getElementById("drawer_quantity").innerText = drawer_quantity;

  document.getElementById("drawer-selling-price").innerText =
    new_drawer_selling_price;
}

function drawer_add_quantity() {
  if (quantity < max_quantity) {
    quantity += 1;
    localStorage.setItem("drawer_quantity", quantity);
    drawer_updatePrice(quantity);
  }
}

function drawer_remove_quantity() {
  if (quantity > min_quantity) {
    quantity -= 1;
    localStorage.setItem("drawer_quantity", quantity);
    drawer_updatePrice(quantity);
  }
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
  document.body.classList.remove("drawer-open");
}
