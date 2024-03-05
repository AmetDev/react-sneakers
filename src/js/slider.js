import airJordan from '../images/airjordan-background.png'
import imgFrog from '../images/imgFrog.png'
import { Slider } from './models/SliderClass'

export const sliderFunc = () => {
  let counter = 0
  const ImgSlider = document.createElement('img')
  const title = document.createElement('span')
  const btn = document.createElement('button')
  const btnSwitch = document.querySelector('#btnSwitch')
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
  wrapper_slider_element.appendChild(ImgSlider)
  wrapper_slider.appendChild(wrapper_slider_element)

  btnSwitch.addEventListener('click', () => {
    counter += 1
    if (counter == elements.length) {
      console.log('counter', counter)
      console.log('elements.length', elements.length)
      btnSwitch.setAttribute('disabled', 'disabled')
    }
    wrapper_slider_element.removeChild(ImgSlider)
    ImgSlider.src = elements[counter].image
    wrapper_slider_element.appendChild(ImgSlider)
    wrapper_slider.appendChild(wrapper_slider_element)
  })

  console.log(sliderObj)
}
