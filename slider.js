const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

//create navigation bottom circle buttons
for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = '#fff';

const resetButtonBackground = ()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor = 'transparent';
    });
}

buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        resetButtonBackground();
        slider.style.transform = `translateX(-${index * 500}px)`;
        slideNumber = index + 1;
        button.style.backgroundColor = '#fff';
    })
});



const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 500}px)`;
    slideNumber++;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
    slideNumber = length;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`;
    slideNumber--;
}

right.addEventListener("click", () => {
   
    (slideNumber < length) ?
        nextSlide()
        :
        getFirstSlide()

        resetButtonBackground();
        buttons[slideNumber-1].style.backgroundColor = '#fff';
});

left.addEventListener("click", () => {

    slideNumber < 1 ? getLastSlide() : prevSlide();

    resetButtonBackground();
    buttons[slideNumber-1].style.backgroundColor = '#fff';
});;

