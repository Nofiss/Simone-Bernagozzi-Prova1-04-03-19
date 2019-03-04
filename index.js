document.addEventListener("DOMContentLoaded", () => {

    let array = []

    function showMore() {
        const text = document.querySelector(".hidden")
        const button = document.querySelector(".button")
        if (text.style.display === "none") {
            text.style.display = "block"
            button.innerHTML = "Read Less"
        } else {
            text.style.display = "none"
            button.innerHTML = "Read More"
        }
    }

    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(res => {
            array = res.data
            document.querySelector("#textN1").innerHTML = array[0].first_name
            document.querySelector("#textN2").innerHTML = array[1].first_name
            document.querySelector("#textN3").innerHTML = array[2].first_name
            document.querySelector("#textC1").innerHTML = array[0].last_name
            document.querySelector("#textC2").innerHTML = array[1].last_name
            document.querySelector("#textC3").innerHTML = array[2].last_name
            document.querySelector("#img1").src = array[0].avatar
            document.querySelector("#img2").src = array[1].avatar
            document.querySelector("#img3").src = array[2].avatar
        })

    const today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    const data = mm + '/' + dd + '/' + yyyy;
    document.querySelector("#data").innerHTML = data

    const button = document.querySelector(".button")
    button.addEventListener("click", showMore)
});
