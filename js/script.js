document.getElementById("guest-review-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var guestName = document.getElementById("guest-name").value;
    var guestReview = document.getElementById("guest-review").value;

    var reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = "<strong>" + guestName + "</strong><br>" + guestReview;


    document.getElementById("reviews").appendChild(reviewElement);

    document.getElementById("guest-name").value = "";
    document.getElementById("guest-review").value = "";
});