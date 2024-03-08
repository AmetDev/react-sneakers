import plus from '../images/plus.svg'
import { ElementGridSneakers } from './models/GridClass'
var dataSneakers = []

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
  console.log(dataSneakers)
  const wrapperGridSneakers = document.querySelector('#gridSneakers')
  dataSneakers.forEach((element) => {
    const object = new ElementGridSneakers(element.url, element.liked, element.text, element.price)
    console.log('it a object', object)
    const imgSneakers = document.createElement('img')
    const textSneakers = document.createElement('span')
    const priceSneakers = document.createElement('span')
    const wrapperSneakersElement = document.createElement('div')
    const priceBlock = document.createElement('div')
    const nameSneakers = document.createElement('div')
    const buttonSneakers = document.createElement('div')
    const plusButton = document.createElement('img')
    imgSneakers.src = object.img
    imgSneakers.style.width = '133px'
    imgSneakers.style.height = '112px'
    textSneakers.textContent = object.text
    textSneakers.classList = 'textSneakers'
    buttonSneakers.classList = 'buttonSneakers'
    //buttonSneakers.textContent = '+'
    plusButton.style.background = `no-repeat url(${plus})`
    plusButton.style.width = '11px'
    plusButton.style.height = '11px'

    priceSneakers.textContent = `${object.price} руб.`
    buttonSneakers.appendChild(plusButton)
    priceBlock.classList = 'priceSneakers'
    wrapperSneakersElement.appendChild(imgSneakers)
    nameSneakers.appendChild(textSneakers)
    priceBlock.appendChild(priceSneakers)
    priceBlock.appendChild(buttonSneakers)
    wrapperSneakersElement.appendChild(nameSneakers)
    wrapperSneakersElement.appendChild(priceBlock)
    wrapperGridSneakers.appendChild(wrapperSneakersElement)
  })
}

fetchedData()
