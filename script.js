let myItems = [];

function addItemToList() {
    const name = document.getElementById("itemsName").value;
    const price = Number(document.getElementById("itemsprice").value);
    let displayList = document.getElementById("List");
    let displayTotal = document.getElementById("total");

    if (name == "") {
        alert("item name cannot be empty");
        return;
    }

    if (price == 0) {
        alert("Price cannot be empty or 0");
        return;
    }

    myItems.push({name: name, price: price });

    displayList.innerHTML = "";

    let total = 0;
    
    for (let i = 0; i < myItems.length; i++) {
        displayList.innerHTML +=
        "<p><b>Name</b> " +
         myItems[i].name + 
         ", <b>Price:</p> R" +
         myItems[i].price +
         "</p>";

         total += myItems[i].price;
    }

    generalTotal = total;
    displayTotal.innerHTML = "Total: R" + total;
    Clear;
}

function CalculateClientChange() {
    const ClientMoney = Number(document.getElementById("ClientMoney").value);
    let ClientDisplay = document.getElementById("ClientChange");

    if (ClientMoney == 0) {
        alert("Give me the money");
        return;
    }

    if (ClientMoney < generalTotal) {
        alert("Your money is not enough, add money");
        return;
    }

    ClientDisplay.innerHTML = "Client Change: R" + (ClientMoney - generalTotal);
}

function Clear() {
    document.getElementById("itemsName").value = "";
    document.getElementById("itemsprice").value = "";

}