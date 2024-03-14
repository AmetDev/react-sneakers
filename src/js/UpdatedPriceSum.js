export const updatedPriceSum = (dataPrice, counter) => {
    dataPrice.map(element=>{
        if(element.selected == true){
            counter += element.price;
        }
    })
    return counter
}