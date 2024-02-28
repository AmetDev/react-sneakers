import card from '../images/card.svg'
import like from '../images/like.svg'
import profile from '../images/profile.svg'
import sneakersLogo from '../images/sneakers-logo.svg'
export const header = () => {
  const header_wrapper_ul = document.querySelector('#header_wrapper_ul')
  const header_arr = [
    {
      imgSrc: sneakersLogo,
      title: ['REACT SNEAKERS', 'Магазин лучших кроссовок'],
    },
    {
      imgSrc: card,
      title: ['1260 руб.'],
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
