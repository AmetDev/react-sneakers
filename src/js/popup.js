import iconclose from '../images/closeicon.svg'
import { removeItemLocalStorage } from './HomeData'
export const popupCard = () => {
  const localData = JSON.parse(localStorage.getItem('localItems'))

  const btnPrice = document.getElementById('btn')
  const modal = document.getElementById('myModal')

  btnPrice.addEventListener('click', () => {
    console.log('btnprice')
    modal.style.display = 'block'
  })
  // modalCLose.addEventListener('click', () => {
  //   modal.style.display = 'none'
  // })
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }

  const popupWrapper = document.querySelector('.modal-content')
  popupWrapper.classList.add('popupWrapper')
  console.log(popupWrapper)

  if (localData !== null) {
    localData.map((element) => {
      if (element.selected == true) {
        const wrapperElement = document.createElement('div')
        wrapperElement.classList.add('wrapperSneakersPopup')
        const imgSneakers = document.createElement('img')
        const closeImg = document.createElement('img')
        const wrapperTitleAndPrice = document.createElement('div')
        const buttonSneakers = document.createElement('button')
        buttonSneakers.classList.add('buttonSneakersPopup')
        closeImg.src = iconclose
        buttonSneakers.appendChild(closeImg)
        const titleSneakers = document.createElement('span')
        const priceSneakers = document.createElement('span')
        imgSneakers.src = element.url
        titleSneakers.textContent = element.text
        priceSneakers.textContent = `${element.price} руб.`
        wrapperTitleAndPrice.classList.add('wrapperTitleAndPrice')
        imgSneakers.style.width = '70px'
        imgSneakers.style.height = '70px'
        buttonSneakers.addEventListener('click', () => {
          console.log(element)
          const result = JSON.parse(localStorage.getItem('localItems'))
          element.selected = false
          const updatedData = removeItemLocalStorage(result, element)
          localStorage.removeItem('localItems')
          localStorage.setItem('localItems', JSON.stringify(updatedData))
          popupCard()
        })
        wrapperTitleAndPrice.appendChild(titleSneakers)
        wrapperTitleAndPrice.appendChild(priceSneakers)
        wrapperElement.appendChild(imgSneakers)
        wrapperElement.appendChild(wrapperTitleAndPrice)
        wrapperElement.appendChild(buttonSneakers)
        popupWrapper.appendChild(wrapperElement)
      }
      // wrapperElement.appendChild()
    })
  }
}
