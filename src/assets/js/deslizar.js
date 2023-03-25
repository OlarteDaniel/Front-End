const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () =>{
    slider.scrollTop -=200
})

next.addEventListener('click', () =>{
    slider.scrollTop +=200
})