window.onload = function() {
    document.querySelector(".loginForm").style.display = "none";
    document.querySelector(".signupForm").style.display = "none";
    // document.getElementById("#userName").textContent = "";
  };
const addItem = async (event) => {
    console.log("addItembtn")
    event.preventDefault();

    const product_name = document.querySelector('#itemName').value.trim();
    const category_id = document.querySelector('#itemCategory').value.trim();
     const date_purchased = document.querySelector('#purchaseDate').value.trim();
     const expiration_date = document.querySelector('#expirationDate').value.trim();
     console.log("name" + product_name);
     console.log("category" +  category_id);
     console.log("date_p" + date_purchased);
     console.log("exp date" + expiration_date);


     if (product_name && category_id && date_purchased &&  expiration_date) {
        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify({product_name, category_id ,date_purchased, expiration_date}),
            // body: JSON.stringify({ name, category, date_purchased , experation_date }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/addItems');
            console.log("name" + product_name);
            console.log("category" +  category_id);
            console.log("date_p" + date_purchased);
            console.log("exp date" + expiration_date);
        } else {
            console.log("esle");
            alert('alert');
        }
    }
};

// Listen for the blogpost form submission
document
    .querySelector('#addItemBtn')
    .addEventListener('click', addItem)