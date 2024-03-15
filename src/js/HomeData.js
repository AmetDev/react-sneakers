import done from '../images/bi_check-lg.svg'
import like from '../images/like2.svg'
import liked from '../images/liked.svg'
import plus from '../images/plus.svg'
import { ElementGridSneakers } from './models/GridClass'
import {updatedPriceSum} from "@/js/UpdatedPriceSum";
import {header} from "@/js/header";

var dataSneakers = []
var localItems = { selectedItems: [], likedItems: [] }
let isDuplicatedData = true
export let btnsSelectList;
const fetchedData = async () => {
  try {
    const response = await fetch('https://65eb231e43ce164189335127.mockapi.io/sneakers/sneakers')
    const data = await response.json()
    dataSneakers = data
    HomeGridSneakersRender()
    header()
  } catch (error) {
    console.error(error)
  }
}
const isDuplicated = (arr, element) => {
  let check = true
  arr.forEach((object) => {
    if (object.id == element.id) {
      console.log('proccess')
      return (check = false)
    }
  })
  return check
}

const updatedSelect = (arr, element) => {
  const isResult = isDuplicated(arr, element)

  var updatedArr = [];
  var counter = 0;
  console.log(arr)
  if(arr.length === 0){
    updatedArr.push(element)
  }
  arr.forEach(elementArr=>{
    if(elementArr.id == element.id && elementArr.selected == false) {
      elementArr.selected = true
      updatedArr.push(elementArr)
    }
    if(elementArr.id !== element.id) {
      counter += 1;
      updatedArr.push(elementArr)
    }
    if(arr.length == counter) {
      console.log("true")
      updatedArr.push(element)
    }


  })
  return updatedArr; // return the updated array
}
// const updatedLiked = (arr, element) => {
//   const isResult = isDuplicated(arr, element)
//   var updatedArr = [];
//   var counter = 0;
//   updatedArr = arr.map((elementLocal)=>{
//     if(elementLocal.id ==element.id)
//     {
//       elementLocal.liked = true
//       return elementLocal
//     }
//     if(elementLocal.id !== element.id) {
//       counter +=1;
//       return  elementLocal
//     }
//     if(counter == arr.length) {
//       element.liked = true
//        updatedArr.push(element)
//       return  element
//     }
//   })
//   return updatedArr; // return the updated array
// }
const updatedLiked = (arr, element) => {
  // const isResult = isDuplicated(arr, element)

  var updatedArr = [];
  var counter = 0;
  if(arr === null || arr.length === 0) {
    element.selected = false
    element.liked = true
    updatedArr.push(element)
    return updatedArr
  }

  arr.forEach(elementArr=>{
    if(elementArr.id == element.id && elementArr.liked == false) {
      elementArr.liked = true
      updatedArr.push(elementArr)
    }
    if(elementArr.id !== element.id) {
      counter += 1;
      updatedArr.push(elementArr)
    }
    if(arr.length == counter) {
      console.log("true")
      element.selected = false
      element.liked = true
      updatedArr.push(element)
    }


  })
  return updatedArr; // return the updated array
}

const updatedLikedObject = (element) => {
  element.liked = true
  return element
}
const isDuplicatedforLike = (arr, element) => {
  let updatedObject
  arr.forEach((object) => {
    if (object.id == element.id && object.liked === false) {
      return (updatedObject = updatedLikedObject(element))
    }
    if (object.id !== element.id) {
      return (updatedObject = updatedLikedObject(element))
    }
    if (object.id == element.id && object.liked === true) {
      return (updatedObject = object)
    }
  })
  return updatedObject
}

const removeItemLocalStorage = (arr, element) => {
  let arrTwo = arr

  const resultIndex = arr.findIndex((object) => {
    return object.id === element.id
  })
  if (resultIndex !== -1) {
    if(arr[resultIndex].liked === true && arr[resultIndex].selected === true ){
      console.log('selected is false')
      let updated = arr[resultIndex]
      updated.selected = false
      console.log(updated)
      arrTwo.splice(resultIndex, 1, updated)
    }
    if(arr[resultIndex].liked === false && arr[resultIndex].selected === true ) {
      arrTwo.splice(resultIndex, 1)
    }

  }
  return arrTwo
}
const removeItemLikeLocalStorage = (arr, element) => {
  let arrTwo = arr

  const resultIndex = arr.findIndex((object) => {
    return object.id == element.id
  })
  if (resultIndex !== -1) {
    if(arr[resultIndex].selected == true && arr[resultIndex].liked === true){
      let updated = arr[resultIndex]
      updated.liked = false
      arrTwo.splice(resultIndex, 1, updated)
    }
    if(arr[resultIndex].liked == true && arr[resultIndex].selected === false) {
      arrTwo.splice(resultIndex, 1)
    }

  }
  return arrTwo
}
const checkSelectedLocalStore = () => {
  const sneakersSelectedLocal = JSON.parse(localStorage.getItem('localItems'))
  if (sneakersSelectedLocal) {
    return sneakersSelectedLocal.map((element) => {
      if (element.selected == true || element.liked == true) {
        return { id: element.id, selected: element.selected, liked:element.liked }
      }
    })
  } else {
    return []
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
    checkSelectedLocalStore().map((elementSelected) => {
      if (elementSelected.id == element.id && elementSelected.selected == true) {
        plusButton.src = done
        plusButton.classList.add('--active')
        wrapperSneakersElement.classList.add('--active-element')
        element.selected = true
      }
      if(elementSelected.id == element.id && elementSelected.liked==true) {
        likeElement.src = liked
        likeBtn.classList.add('--active-like')
      }
    })
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
      if (plusButton.classList.contains('--active')) {
        const resultv1 = JSON.parse(localStorage.getItem('localItems'))
        plusButton.src = plus
        plusButton.classList.remove('--active')
        wrapperSneakersElement.classList.remove('--active-element')
        element.selected = false
        const updatedData = removeItemLocalStorage(resultv1, element)
        localStorage.removeItem('localItems')
        localStorage.setItem('localItems', JSON.stringify(updatedData))

        checker = true

      } else {
        plusButton.src = done
        plusButton.classList.add('--active')
        wrapperSneakersElement.classList.add('--active-element')
        element.selected = true
        const result = JSON.parse(localStorage.getItem('localItems'))
        console.log('result', result)
        //header()

        if (result == null) {
          localItems.selectedItems = []
          localItems.selectedItems.push(element)
          localStorage.setItem('localItems', JSON.stringify(localItems.selectedItems))
          localItems.selectedItems = []

        } else {
          const resultLocal = JSON.parse(localStorage.getItem('localItems'))
          const updatedArrSelect = updatedSelect(resultLocal, element)
          console.log(updatedArrSelect)
          localItems.selectedItems = updatedArrSelect
          localStorage.removeItem('localItems')
          localStorage.setItem('localItems', JSON.stringify(localItems.selectedItems))
          localItems.selectedItems = []

        }
        checker = false
      }
    })
    likeBtn.addEventListener('click', () => {
      if (likeBtn.classList.contains('--active-like')) {
        likeElement.src = like
        element.liked = false
        likeBtn.classList.remove('--active-like')
        const resulttoDeleteLike = JSON.parse((localStorage.getItem('localItems')))
        const updatedRemove = removeItemLikeLocalStorage(resulttoDeleteLike, element)
        localStorage.setItem('localItems', JSON.stringify(updatedRemove))
      } else {

        const resultLocalLike = JSON.parse(localStorage.getItem('localItems'))
        likeElement.src = liked
        likeBtn.classList.add('--active-like')
        const resultUpdatedData = updatedLiked(resultLocalLike, element)
        console.log(resultUpdatedData)
        localStorage.setItem('localItems', JSON.stringify(resultUpdatedData))
        // const updatedDataLike = isDuplicatedforLike(resultLocalLike, element)
        // console.log(updatedDataLike)


      }
    })
  })


}
export const nodeList = () => {
  btnsSelectList = document.querySelectorAll(".buttonSneakers");
  console.log(btnsSelectList)
}

//fixed
fetchedData()
