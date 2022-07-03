const btns = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('article.card');

// Isotope

const elem = document.querySelector('.card-wrapper');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.card',
  layoutMode: 'fitRowsCentered'
});

btns.forEach(function(eachBtn){
    eachBtn.addEventListener('click', function(){
        const btnCategory = eachBtn.dataset.target;
        
        btns.forEach(function(eachBtn){
            eachBtn.classList.remove('active');
        })

        eachBtn.classList.add('active');

        if (btnCategory === "all") {
            iso.arrange({ filter: '*' });
        } else {
            iso.arrange({ filter: `.${btnCategory}` });
        }
    })
})


// Modals

const modalBtns = document.querySelectorAll('[data-modal]');
const overlayModal = document.getElementById('modal-overlay');

modalBtns.forEach(function(eachModalBtn){

    eachModalBtn.addEventListener('click', function(e){
        e.preventDefault();

        const modalID = eachModalBtn.dataset.modal;
        const modal = document.getElementById(modalID);

        modal.classList.toggle('closed');
        overlayModal.classList.remove('closed');
        document.body.classList.add('overflow');
    })

})

const closeModalBtns = document.querySelectorAll('.modal .close-button');

closeModalBtns.forEach(function(eachCloseModalBtn){
    eachCloseModalBtn.addEventListener('click', function(){
        eachCloseModalBtn.parentNode.classList.toggle('closed');
        overlayModal.classList.add('closed');
        document.body.classList.remove('overflow');
    })
})

// Close if click outside (on the overlay)
overlayModal.addEventListener('click', function(){
    const openModal = document.querySelector('.modal:not(.closed)')
    overlayModal.classList.add('closed');
    document.body.classList.remove('overflow');
    openModal.classList.add('closed');
})