let currentColor = 'blue'

const painting = document.querySelector('.painting')
palette = document.querySelector('.palette')

palette.addEventListener('click', function(e){
    let selectedColor = e.target

    if (selectedColor.id === 'clear') {
        let allPixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < allPixels.length; i++) {
            allPixels[i].style.backgroundColor = 'white'
        }
    }
    else {
        currentColor = selectedColor.id
    }
})

painting.addEventListener('click', function(e){
    let clickedPixel = e.target
    clickedPixel.style.backgroundColor = currentColor
})

painting.addEventListener('dblclick', function(e){
    let clickedPixel = e.target
    clickedPixel.style.backgroundColor = 'white'
})