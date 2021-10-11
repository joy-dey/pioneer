const sessionPlaceholder = document.querySelector('#session'),
closeBannerButton = document.querySelector('.close-banner');
let tabs = document.querySelectorAll('[data-target]');
let tabContents = document.querySelectorAll('[data-tab-content]'), 
navigationHolder = document.querySelector('.navigation');
sessionPlaceholder.innerText = `${new Date().getFullYear()}-${new Date().getFullYear()+1}`;

closeBannerButton.addEventListener('click', function() {
    document.querySelector('header').removeChild(closeBannerButton.parentElement);
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})
// eng, med, pre-found, Achievers program

console.log(document.querySelectorAll('.nav-link').length)

document.addEventListener('DOMContentLoaded', function() {
    console.log(navigationHolder.querySelector('.navbar'))
})

let galleryPhotos = document.querySelector('#gallery-grid');
if(galleryPhotos) {
    galleryPhotos.addEventListener('click', function(evt) {
        const imageSource = this.querySelector('img').src;
        console.log(imageSource)

        document.querySelector('.image-holder>img').src = imageSource;
    })
}