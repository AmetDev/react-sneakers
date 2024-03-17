import card from '../images/card.svg'
import like from '../images/like.svg'
import profile from '../images/profile.svg'
import sneakersLogo from '../images/sneakers-logo.svg'

export const header = () => {
  let priceNumber = 0
  const dataPriceFirst = JSON.parse(localStorage.getItem('localItems'))
  if (dataPriceFirst !== null) {
    dataPriceFirst.map((element) => {
      if (element.selected == true) {
        priceNumber += element.price
      }
    })
  }
  const header_wrapper_ul = document.querySelector('#header_wrapper_ul')
  const dataPrice = JSON.parse(localStorage.getItem('localItems'))
  let btnsSelectList = document.getElementsByClassName('buttonSneakers')

  Array.from(btnsSelectList).forEach((element) => {
    element.addEventListener('click', () => {
      // ваш обработчик события клика
      const dataPrice = JSON.parse(localStorage.getItem('localItems'))
      dataPrice.map((element) => {
        if (element.selected == true) {
          priceNumber += element.price
        }
      })
    })
  })
  const header_arr = [
    {
      imgSrc: sneakersLogo,
      title: ['REACT SNEAKERS', 'Магазин лучших кроссовок'],
    },
    {
      imgSrc: card,
      title: [`${priceNumber} руб.`],
      type: 'button',
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

  const checkToUpdate = document.getElementById('header_wrapper_ul')
  checkToUpdate.innerHTML = ''

  header_arr.map((element, index) => {
    const elementLi = document.createElement('div')

    const elementImg = document.createElement('img')
    const elementDiv = document.createElement('li')
    const elementLink = document.createElement('a')
    if (element.type === 'button') {
      console.log('button')
      elementLink.setAttribute('id', 'btn')
    }
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
    elementLink.classList.add('innerWrapperHeaderElement')
    elementLi.classList.add('HeaderListElement')
    elementImg.src = element.imgSrc

    elementDiv.addEventListener('click', () => {
      console.log(elementDiv)
    })
    elementDiv.appendChild(elementLi)
    elementDiv.appendChild(elementImg)
    elementLink.appendChild(elementDiv)
    header_wrapper_ul.appendChild(elementLink)
  })
}
