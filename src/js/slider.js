import airJordan from '../images/airjordan-background.png'
import imgFrog from '../images/imgFrog.png'
import vector from '../images/vector.svg'
import { Slider } from './models/SliderClass'
export const sliderFunc = () => {
  let counter = 0
  const ImgSlider = document.createElement('div')
  const title = document.createElement('span')
  const btn = document.createElement('button')
  const btnSwitch = document.createElement('button')

  const imgInBtn = document.createElement('img')

  imgInBtn.src = vector
  btnSwitch.appendChild(imgInBtn)
  btnSwitch.setAttribute('id', 'btnSwitch')
  const wrapper_slider_element = document.createElement('div')
  const wrapper_slider = document.querySelector('#wrapper_slider')
  const wrapperBtnSlider = document.querySelector('#wrapperBtnSlider')
  const elements = [
    {
      image: imgFrog,
      button_text: 'КУПИТЬ',
      href_btn: '#',
      title: 'Stan Smith, Forever!',
    },
    {
      image: airJordan,
      button_text: 'ПОЛУЧИТЬ СКИДКУ',
      href_btn: '#',
      title: 'Air Jordan, Forever!',
    },
  ]

  const sliderObj = new Slider(
    elements[counter].image,
    elements[counter].button_text,
    elements[counter].title
  )
  ImgSlider.appendChild(btnSwitch)
  btn.textContent = elements[counter].button_text
  ImgSlider.appendChild(btn)
  btn.classList = 'SliderBtn'
  ImgSlider.style.background = `no-repeat url(${elements[counter].image})`
  ImgSlider.classList = 'ImgSlider'
  ImgSlider.style.width = '960px'
  ImgSlider.style.height = '300px'

  title.textContent = elements[counter].title

  title.classList = 'titleImageSlider'
  wrapper_slider_element.appendChild(ImgSlider)
  ImgSlider.appendChild(title)

  wrapper_slider.appendChild(wrapper_slider_element)

  btnSwitch.addEventListener('click', () => {
    counter += 1
    if (counter == elements.length) {
      counter = 0
    }
    wrapper_slider_element.removeChild(ImgSlider)
    ImgSlider.removeChild(btn)
    ImgSlider.removeChild(title)
    ImgSlider.appendChild(btnSwitch)
    btn.textContent = elements[counter].button_text
    ImgSlider.appendChild(btn)
    btn.classList = 'SliderBtn'
    ImgSlider.style.background = `no-repeat url(${elements[counter].image})`
    ImgSlider.classList = 'ImgSlider'
    ImgSlider.style.width = '960px'
    ImgSlider.style.height = '300px'

    title.textContent = elements[counter].title

    title.classList = 'titleImageSlider'
    wrapper_slider_element.appendChild(ImgSlider)
    ImgSlider.appendChild(title)

    wrapper_slider.appendChild(wrapper_slider_element)
  })
}
