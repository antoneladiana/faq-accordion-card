function toggleAnswer(faq) {

    var faq = document.getElementById(faq);
    var question = faq.querySelector(".faq__question");
    var icon = faq.querySelector(".faq__icon");
    var answer = faq.querySelector(".faq__answer");

    if(answer.style.display === "none") {
        answer.style.display = "block";
        question.style.fontWeight = "bold";
        icon.style.transform = "rotate(180deg)";
    } else {
        answer.style.display = "none";
        question.style.fontWeight = "normal";
        icon.style.transform = "unset";
    }

}