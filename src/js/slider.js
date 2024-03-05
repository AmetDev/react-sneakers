import airJordan from '../images/airjordan-background.png'
import imgFrog from '../images/imgFrog.png'
import vector from '../images/vector.svg'
import { Slider } from './models/SliderClass'
export const sliderFunc = () => {
  let counter = 0
  const ImgSlider = document.createElement('img')
  const title = document.createElement('span')
  const btn = document.createElement('button')
  const btnSwitch = document.querySelector('#btnSwitch')

  const imgInBtn = document.createElement('img')
  imgInBtn.src = vector
  btnSwitch.appendChild(imgInBtn)
  const wrapper_slider_element = document.createElement('div')
  const wrapper_slider = document.querySelector('#wrapper_slider')
  const wrapperBtnSlider = document.querySelector('#wrapperBtnSlider')
  const elements = [
    {
      image: imgFrog,
      button_text: 'КУПИТЬ',
      title: 'Stan Smith, Forever!',
    },
    {
      image: airJordan,
      button_text: 'ПОЛУЧИТЬ СКИДКУ',
      title: 'Air Jordan, Forever!',
    },
  ]

  const sliderObj = new Slider(
    elements[counter].image,
    elements[counter].button_text,
    elements[counter].title
  )

  ImgSlider.src = elements[counter].image
  title.textContent = elements[counter].title

  title.classList = 'titleImageSlider'
  wrapper_slider_element.appendChild(ImgSlider)
  wrapper_slider_element.appendChild(title)

  wrapper_slider.appendChild(wrapper_slider_element)

  btnSwitch.addEventListener('click', () => {
    counter += 1
    if (counter == elements.length) {
      counter = 0
    }
    wrapper_slider_element.removeChild(ImgSlider)
    ImgSlider.src = elements[counter].image
    title.textContent = elements[counter].title
    wrapper_slider_element.appendChild(ImgSlider)
    wrapper_slider_element.appendChild(title)
    wrapper_slider.appendChild(wrapper_slider_element)
  })

  console.log(sliderObj)
}
