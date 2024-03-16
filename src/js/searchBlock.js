import searchIconv2 from '../images/searchIconv2.svg'
import { fetchedData } from './HomeData'
let parsedData = []
export { parsedData }
function debounce(func, delay) {
  let timerId

  return function (...args) {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
const dataSneakers = async (args) => {
  try {
    const response = await fetch(
      `https://65eb231e43ce164189335127.mockapi.io/sneakers/sneakers?text=${args}`
    )
    console.log('hello')
    parsedData = await response.json()
    fetchedData()
  } catch (error) {
    console.error(error)
    parsedData = []
  }
}

export const renderWrapperSearch = () => {
  const wrapperSearch = document.getElementById('wrapperSearch')
  wrapperSearch.innerHTML = ''
  const wrapperSearchAndDesc = document.createElement('div')
  const wrapperInput = document.createElement('div')
  const Input = document.createElement('input')
  const imgIcon = document.createElement('img')
  imgIcon.src = searchIconv2
  wrapperInput.appendChild(imgIcon)
  wrapperSearchAndDesc.textContent = 'Все кроссовки'
  wrapperSearchAndDesc.classList.add('wrapperSearchAndDesc')
  Input.placeholder = 'Поиск...'
  imgIcon.addEventListener('click', () => {
    console.log('dfs')
  })
  Input.addEventListener(
    'input',
    debounce((e) => {
      dataSneakers(e.target.value)
    }, 400)
  )
  wrapperInput.classList.add('InputWrapper')
  wrapperInput.appendChild(Input)
  // wrapperSearchAndDesc.textContent = 'hello world'
  wrapperSearch.appendChild(wrapperSearchAndDesc)
  wrapperSearch.appendChild(wrapperInput)
}
