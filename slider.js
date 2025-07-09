const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;
let interval;

slide.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);

    if(index === 0){
        dot.classList.add('active');
    }

    dot.setAttribute('data-index', index);
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

function updateSlider () {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`
    updateDots();
}
function nextSlide () {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
}
function prevSlide () {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
}
function goToSlide(index){
    currentIndex = index;
    updateSlider();
    resetInterval();
}
function updateDots(){
    document.querySelectorAll('.dot')
    .forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    })
}
function autoSlide(){
    nextSlide();
}
interval = setInterval(autoSlide, 3000);

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
}
document.querySelector('.buttons')
.addEventListener('click' , resetInterval);