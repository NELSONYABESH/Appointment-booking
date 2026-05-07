const nameInput = document.getElementById("name");

const dateInput = document.getElementById("date");

const timeInput = document.getElementById("time");

const bookBtn = document.getElementById("bookBtn");

const bookingList = document.getElementById("bookingList");


bookBtn.addEventListener("click", function(){

    
    const name = nameInput.value;

    const date = dateInput.value;

    const time = timeInput.value;

    
    if(name === "" || date === "" || time === ""){

        alert("Please fill all fields");

        return;
    }

    
    // CREATE LIST ITEM
    const li = document.createElement("li");

    
    li.className =
    "list-group-item d-flex justify-content-between align-items-center";

    
    li.innerHTML =
    `
    ${name} | ${date} | ${time}

    <button class="btn btn-danger btn-sm">
        Delete
    </button>
    `;

    
    // DELETE BUTTON
    li.querySelector("button").addEventListener("click", function(){

        li.remove();

    });

    
    bookingList.appendChild(li);

    
    // CLEAR INPUTS
    nameInput.value = "";

    dateInput.value = "";

    timeInput.value = "";

});