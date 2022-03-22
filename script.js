
const navBar = document.getElementById('navbar')
const nav = document.querySelector('.nav')
const img = document.getElementById('img')
console.log(navBar)


const imgArr = [
    'img/img2.png',
    'img/bed1.jpg',
    'img/bed2.jpg',
    'img/bed3.jpg',
    'img/bed4.jpg',
    'img/bed5.jpg',
    'img/bed6.jpg',
    'img/bed7.jpg',
]

let index = 0;
const imageChange = num => {

    index+=num
    if(index >= imgArr.length-1){
        index=0
        img.src=imgArr[index]
    }else if(index < 0){
        index=imgArr.length-1
    }
    img.src=imgArr[index]
    // console.log(index)
}




navBar.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav')
    console.log('hello')
})

