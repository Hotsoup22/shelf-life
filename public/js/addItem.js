window.onload = function() {
    document.querySelector(".loginForm").style.display = "none";
    document.querySelector(".signupForm").style.display = "none";
  };
const addItem = async (event) => {
    console.log("addItem")
    event.preventDefault();

    const name = document.querySelector('#itemName').value.trim();
    const category = document.querySelector('#itemCategory').value.trim();
     const date_purchased = document.querySelector('#purchaseDate').value.trim();
     const  experation_date = document.querySelector('#expirationDate').value.trim();


     if (name && category && date_purchased &&  experation_date) {
        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify({ name, category ,date_purchased}),
            // body: JSON.stringify({ name, category, date_purchased , experation_date }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/pantry');
        } else {
            alert('alert');
        }
    }
};

// Listen for the blogpost form submission
document
    .querySelector('#addItemBtn')
    .addEventListener('click', addItem)