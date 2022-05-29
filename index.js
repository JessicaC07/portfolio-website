const btns = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('article.card');

// console.log(cards)
const onButtonFilterClick = function(buttonClicked) {
    const btnCategory = buttonClicked.dataset.target;
    btns.forEach(function(eachBtn){
        eachBtn.classList.remove('active');
    })
    buttonClicked.classList.add('active');
    cards.forEach(function(eachCard){
        const cardCategories = eachCard.dataset.categories;

        if (cardCategories.includes(btnCategory) || btnCategory === "all"){
            eachCard.classList.remove('hidden');
        } else {
            eachCard.classList.add('hidden');
        }
    })
}

btns.forEach(function(eachBtn){
    eachBtn.addEventListener('click', function(){
        onButtonFilterClick(eachBtn);
    })
})