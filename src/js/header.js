import sneakersLogo from '../images/sneakers-logo.svg'
import like from '../images/like.svg'
import card from '../images/card.svg'
import profile from '../images/profile.svg'
export const header = () => {
const header_wrapper_ul = document.querySelector("#header_wrapper_ul")
const header_arr = [
  {
    imgSrc: sneakersLogo,
    title:["REACT SNEAKERS \n Магазин лучших кроссовок"],
  },
  {
    imgSrc: card,
    title:["1260 руб."]
  },
  {
    imgSrc: like,
    title: ["Закладки"]
  },
  {
    imgSrc: profile,
    title:["Профиль"]
  }
]
header_arr.map((element)=>{
  const elementLi = document.createElement("li");
  const elementImg = document.createElement("img");
  const elementDiv = document.createElement("div")
  elementLi.textContent = element.title;
  elementImg.src= element.imgSrc
  elementDiv.appendChild(elementLi)
  elementDiv.appendChild(elementImg)
  header_wrapper_ul.appendChild(elementDiv) 
}) 
} 
