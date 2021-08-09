function Showtva() {

    var checkBox = document.getElementById("myCheck");

    var tva = document.getElementById("tva");


    if (checkBox.checked == true) {
        tva.style.display = "flex";
    } else {
        tva.style.display = "none";
    }
}




function person() {

    var personform = document.getElementById("person");
    var entrepriceform = document.getElementById("entreprice");
    var Entreprice = document.getElementById("entrepricebtn");
    var Person = document.getElementById("personbtn");
    Person.classList.add("active");
    Entreprice.classList.remove("active");

    personform.style.display = "flex";
    entrepriceform.style.display = "none";

}

function entreprice() {

    var personform = document.getElementById("person");
    var entrepriceform = document.getElementById("entreprice");
    var Entreprice = document.getElementById("entrepricebtn");
    var Person = document.getElementById("personbtn");
    Person.classList.remove("active");
    Entreprice.classList.add("active");
    personform.style.display = "none";
    entrepriceform.style.display = "flex";
}

function pay() {

    var checkBox = document.getElementById("pay");

    var tva = document.getElementById("payorder");


    if (checkBox.checked == true) {
        tva.style.display = "block";
    } else {
        tva.style.display = "none";
    }
}