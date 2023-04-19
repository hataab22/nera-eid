var dataURL = ''

function generateImage() {
  var name = document.getElementById('name-input').value
  var canvas = document.createElement('canvas')

  canvas.width = 2250
  canvas.height = 2250
  var context1 = canvas.getContext('2d')

  var contexts = [context1]
  var image = new Image()
  image.onload = function () {
    for (let i = 0; i < contexts.length; i++) {
      contexts[i].drawImage(image, 0, 0, canvas.width, canvas.height)
      var gradient = contexts[i].createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )
      gradient.addColorStop(0.1, '#2D9824')
      gradient.addColorStop(0.24, '#2D9824')
      gradient.addColorStop(0.26, '#2D9824')
      gradient.addColorStop(0.27, '#2D9824')
      gradient.addColorStop(0.4, '#2A37D1')
      gradient.addColorStop(0.9, '#2A37D1')
      contexts[i].fillStyle = gradient
      contexts[i].textAlign = 'left'
      contexts[i].shadowOffsetX = 2
      contexts[i].shadowOffsetY = 2
      contexts[i].shadowBlur = 5
      contexts[i].shadowColor = 'rgba(0, 0, 0, 0.7)'
    }
    contexts[0].font = " 100px 'Playfair Display', serif"
    contexts[0].fillText(name, canvas.width / 2, canvas.height - 285, 1800)

    dataURL = canvas.toDataURL()
    updateImage(dataURL)
  }
  image.src = 'Eid.jpg'
}

function updateImage(src) {
  var image = document.getElementsByClassName('output-image')[0]
  image.src = src
}

var nameInput = document.getElementById('name-input')
nameInput.addEventListener('input', generateImage)

var downloadBtn = document.querySelector('.btn')
downloadBtn.addEventListener('click', () => {
  var link = document.createElement('a')
  link.download = 'Eid.jpg'
  link.href = dataURL
  link.click()
})
