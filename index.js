let nama = document.getElementById("name");
let email = document.getElementById("email");
let tombol = document.getElementById("tombol");

tombol.onclick = function() {
    if (nama.value === "Budi Santoso" && email.value === "budisantoso@gmail.com") {
        window.location.href = "https://rachmadyogoo.github.io/26-july-2024-2/";
    } else {
        alert("Data yang anda masukan salah Your name: Budi Santoso Email Address: budisantoso@gmail.com");
    }
};
