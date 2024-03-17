export const popupCard = (data) => {
  const wrapperElement = document.createElement('div')
  const imgSneakers = document.createElement('img')
  const wrapperTitleAndPrice = document.createElement('div')
  const buttonSneakers = document.createElement('button')
  const titleSneakers = document.createElement('span')
  const priceSneakers = document.createElement('span')
  if (data !== null) {
    data.map((element) => {
      console.log(element)
    })
  }
}
