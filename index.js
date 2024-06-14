
let scrollBar = document.getElementById("small-article-container");
let nextbtn = document.getElementById("next-btn");
let backbtn = document.getElementById("back-btn");

nextbtn.addEventListener("click", () => {

    scrollBar.scrollTo({
        left: scrollBar.scrollLeft + 600,
        behavior: 'smooth' /* animation */
    });
});

backbtn.addEventListener("click", () => {

    scrollBar.scrollTo({
        left: scrollBar.scrollLeft - 600, /*can be adjusted due to HOW many stories or posts there can be in the row */
        behavior: 'smooth'
    });
});

nextbtn.addEventListener("click", (e) => {
    e.preventDefault();
});

backbtn.addEventListener("click", (e) => {
    e.preventDefault();
});
