export const skeletonSneakers = () => {
  const n = 12
  //wrapperSkeleton.textContent = 'loading'
  //wrapperSkeleton.classList.add = 'skeleton'
  //wrapperSkeleton.style.backgroundColor = '#000'
  for (let index = 0; index < n; index++) {
    const wrapperGridSneakers2 = document.querySelector('#skeleton')

    wrapperGridSneakers2.classList.add('wrapperSneakersStyle')
    const wrapperSkeleton = document.createElement('div')
    const imgSkeleton = document.createElement('div')
    const titleSkeleton = document.createElement('div')
    const titleSkeletonv2 = document.createElement('div')
    const titleSkeletonv3 = document.createElement('div')
    const titleSkeletonv4 = document.createElement('div')
    const wrapperPrice = document.createElement('div')
    imgSkeleton.classList.add('skeleton-box')
    titleSkeleton.classList.add('skeleton-box')
    titleSkeletonv2.classList.add('skeleton-box')
    titleSkeletonv3.classList.add('skeleton-box')
    titleSkeletonv4.classList.add('skeleton-box')
    imgSkeleton.style.width = '150px'
    imgSkeleton.style.height = '91px'
    imgSkeleton.style.borderRadius = '30px'
    titleSkeleton.style.width = '150px'
    titleSkeletonv2.style.width = '91px'
    titleSkeletonv2.style.height = '15px'
    titleSkeletonv3.style.width = '80px'
    titleSkeletonv3.style.height = '24px'
    titleSkeletonv4.style.width = '32px'
    titleSkeletonv4.style.height = '32px'
    titleSkeleton.style.height = '15px'
    titleSkeleton.style.borderRadius = '20px'
    titleSkeletonv2.style.borderRadius = '20px'
    titleSkeletonv3.style.borderRadius = '20px'
    titleSkeletonv4.style.borderRadius = '10px'
    titleSkeleton.style.marginTop = '20px'
    titleSkeletonv2.style.marginTop = '12px'
    titleSkeletonv3.style.marginTop = '22px'
    titleSkeletonv4.style.marginTop = '20px'
    wrapperSkeleton.appendChild(imgSkeleton)
    wrapperSkeleton.appendChild(titleSkeleton)
    wrapperSkeleton.appendChild(titleSkeletonv2)
    wrapperPrice.appendChild(titleSkeletonv3)
    wrapperPrice.appendChild(titleSkeletonv4)
    wrapperPrice.style.display = 'flex'
    wrapperPrice.style.width = '150px'
    wrapperPrice.style.height = '14px'
    wrapperPrice.style.display = 'flex'
    wrapperPrice.style.flexDirection = 'row'
    wrapperPrice.style.justifyContent = 'space-between'
    wrapperPrice.style.alignItems = 'center'
    wrapperSkeleton.appendChild(wrapperPrice)
    wrapperSkeleton.classList.add('wrapperElementSkeleton')
    console.log('true')
    wrapperGridSneakers2.appendChild(wrapperSkeleton)
  }
}
