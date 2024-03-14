import card from '../images/card.svg'
import like from '../images/like.svg'
import profile from '../images/profile.svg'
import sneakersLogo from '../images/sneakers-logo.svg'
import {updatedPriceSum} from "@/js/UpdatedPriceSum";
import {btnsSelectList} from "@/js/HomeData";

export const header = () => {
  let priceNumber = 0;
  const dataPriceFirst = JSON.parse(localStorage.getItem('localItems'))
  dataPriceFirst.map(element=>{
    if(element.selected == true){
      priceNumber += element.price;
    }
  })
  const header_wrapper_ul = document.querySelector('#header_wrapper_ul')
  const dataPrice = JSON.parse(localStorage.getItem('localItems'))
  let btnsSelectList = document.getElementsByClassName("buttonSneakers");
  console.log(btnsSelectList)
  Array.from(btnsSelectList).forEach(element => {
    element.addEventListener('click', () => {
      // ваш обработчик события клика
      const dataPrice = JSON.parse(localStorage.getItem('localItems'))
      dataPrice.map(element=>{
        if(element.selected == true){
          priceNumber += element.price;
        }
      })
      console.log("hello world", priceNumber)

    });
  });
  const header_arr = [
    {
      imgSrc: sneakersLogo,
      title: ['REACT SNEAKERS', 'Магазин лучших кроссовок'],
    },
    {
      imgSrc: card,
      title: [`${priceNumber} руб.`],
    },
    {
      imgSrc: like,
      title: ['Закладки'],
    },
    {
      imgSrc: profile,
      title: ['Профиль'],
    },
  ]
  header_arr.map((element) => {
    const elementLi = document.createElement('div')

    const elementImg = document.createElement('img')
    const elementDiv = document.createElement('li')
    const elementLink = document.createElement('a')

    if (element.title.length > 1) {
      element.title.map((element) => {
        const elementTitle = document.createElement('span')
        elementTitle.textContent = element
        elementLi.appendChild(elementTitle)
      })
    } else {
      const createElement = document.createElement('span')
      createElement.textContent = element.title
      elementLi.appendChild(createElement)
    }
    elementLi.classList.add('HeaderListElement')
    elementImg.src = element.imgSrc
    elementDiv.appendChild(elementLi)
    elementDiv.appendChild(elementImg)
    elementLink.appendChild(elementDiv)
    header_wrapper_ul.appendChild(elementLink)
  })
}
