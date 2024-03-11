import done from '../images/bi_check-lg.svg'
import like from '../images/like2.svg'
import liked from '../images/liked.svg'
import plus from '../images/plus.svg'
import { ElementGridSneakers } from './models/GridClass'

var dataSneakers = []
var localItems = { selectedItems: [], likedItems: [] }

const fetchedData = async () => {
  try {
    const response = await fetch('https://65eb231e43ce164189335127.mockapi.io/sneakers/sneakers')
    const data = await response.json()
    dataSneakers = data
    HomeGridSneakersRender()
  } catch (error) {
    console.error(error)
  }
}

export const HomeGridSneakersRender = () => {
  const wrapperGridSneakers = document.querySelector('#gridSneakers')
  dataSneakers.forEach((element) => {
    const object = new ElementGridSneakers(element.url, element.liked, element.text, element.price)

    const imgSneakers = document.createElement('img')
    const textSneakers = document.createElement('span')
    const priceSneakers = document.createElement('span')
    const wrapperSneakersElement = document.createElement('div')
    const priceBlock = document.createElement('div')
    const nameSneakers = document.createElement('div')
    const buttonSneakers = document.createElement('div')
    const plusButton = document.createElement('img')
    const textPrice = document.createElement('span')
    const blockPriceWrapper = document.createElement('div')
    const likeElement = document.createElement('img')
    const likedElement = document.createElement('img')
    const likeBtn = document.createElement('button')
    likeElement.src = like
    likedElement.src = liked
    imgSneakers.src = object.img
    imgSneakers.style.width = '133px'
    imgSneakers.style.height = '112px'
    textSneakers.textContent = object.text
    textSneakers.classList = 'textSneakers'
    buttonSneakers.classList = 'buttonSneakers'
    //buttonSneakers.textContent = '+'
    plusButton.src = plus
    plusButton.style.width = '11px'
    plusButton.style.height = '11px'
    plusButton.classList = 'plusButton'
    textPrice.textContent = 'ЦЕНА:'
    textPrice.classList = 'textPrice'
    priceSneakers.textContent = `${object.price} руб.`
    buttonSneakers.appendChild(plusButton)
    priceBlock.classList = 'priceSneakers'
    likeBtn.appendChild(likeElement)
    wrapperSneakersElement.appendChild(likeBtn)
    wrapperSneakersElement.appendChild(imgSneakers)
    wrapperSneakersElement.classList = 'wrapperSneakersElement'
    likeBtn.classList = 'likeBtn'
    nameSneakers.appendChild(textSneakers)
    blockPriceWrapper.appendChild(textPrice)
    blockPriceWrapper.appendChild(priceSneakers)
    blockPriceWrapper.classList = 'blockPriceWrapper'
    priceBlock.appendChild(blockPriceWrapper)
    priceBlock.appendChild(buttonSneakers)
    wrapperSneakersElement.appendChild(nameSneakers)
    wrapperSneakersElement.appendChild(priceBlock)
    wrapperGridSneakers.appendChild(wrapperSneakersElement)

    let checker = true
    let findedElement = 0
    plusButton.addEventListener('click', () => {
      if (checker == false) {
        plusButton.src = plus
        plusButton.classList.remove('--active')
        wrapperSneakersElement.classList.remove('--active-element')
        element.selected = false
        checker = true
        const result = JSON.parse(localStorage.getItem('localItems'))
        let resultv1 = result
        result.map((elementLocal) => {
          if (elementLocal.id == element.id && elementLocal.selected === true) {
            findedElement = elementLocal
          }
        })
        console.log(findedElement)
        if (findedElement !== 0) {
          console.log('resilt')
          resultv1.splice(findedElement.id, 1)
        }
        console.log('resilt', resultv1)
      } else {
        plusButton.src = done
        plusButton.classList.add('--active')
        wrapperSneakersElement.classList.add('--active-element')
        element.selected = true
        const result = JSON.parse(localStorage.getItem('localItems'))
        console.log('result', result)
        if (result === null) {
          localItems.selectedItems = []
          localItems.selectedItems.push(element)
          localStorage.setItem('localItems', JSON.stringify(localItems.selectedItems))
          localItems.selectedItems = []
        }
        if (result.length == 0) {
          console.log('it is null')
          localItems.selectedItems = []
          localItems.selectedItems.push(element)
          localStorage.setItem('localItems', JSON.stringify(localItems.selectedItems))
          localItems.selectedItems = []
        }
        if (result.length !== 0) {
          result.forEach((elementLocal) => {
            console.log('it is not null')
            if (elementLocal.id != element.id) {
              localItems.selectedItems = result
              localItems.selectedItems.push(element)
              localStorage.setItem('localItems', JSON.stringify(localItems.selectedItems))
              localItems.selectedItems = []
            }
          })
        }

        checker = false
      }
    })
    let checkerLike = true
    likeBtn.addEventListener('click', () => {
      if (checkerLike == false) {
        likeElement.src = like
        element.liked = false
        localStorage.removeItem('object', JSON.stringify(element))
        likeBtn.classList.remove('--active-like')
        checkerLike = true
      } else {
        likeElement.src = liked
        likeBtn.classList.add('--active-like')

        element.liked = true
        localStorage.setItem('object', JSON.stringify(element))
        checkerLike = false
      }
    })
  })
}

fetchedData()
