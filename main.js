const docs = document.querySelector('.docs')
const login =  document.querySelector('.login')
const register =  document.querySelector('.register')
const back = document.querySelector('.back')
const info =  document.querySelector('.info')
const newsBlock = document.querySelector('.news-block')
const polls = document.querySelector('.polls')
const ar = document.querySelector('.ar')
const footer = document.querySelector('.footer')
const blank = document.querySelector('.blank')
let isNon = true;

docs.addEventListener('click', () => {
    if (isNon){
        info.classList.add('non');
        newsBlock.classList.add('non');
        polls.classList.add('non');
        ar.classList.add('non');
        footer.classList.add('non');
        blank.classList.remove('non');
        isNon = false;
    }
})
back.addEventListener('click', () => {
    if (isNon == false){
    info.classList.remove('non');
    newsBlock.classList.remove('non');
    polls.classList.remove('non');
    ar.classList.remove('non');
    footer.classList.remove('non');
    blank.classList.add('non');
    isNon = true;
    }
})

ar.addEventListener('click', () => {
    alert('Эта функция пока недоступна')
})
// info
// news-block
// polls
// ar
// footer