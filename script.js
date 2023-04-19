var dataURL = ''

function generateImage() {
  var name = document.getElementById('name-input').value
  var canvas = document.createElement('canvas')

  canvas.width = 840
  canvas.height = 840
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
      gradient.addColorStop(0.1, '#e2d9c9')
      gradient.addColorStop(0.24, '#e2d9c9')
      gradient.addColorStop(0.26, '#7c6d46')
      gradient.addColorStop(0.27, '#e2d9c9')
      gradient.addColorStop(0.4, '#ffefc6')
      gradient.addColorStop(0.9, '#5b4a20')
      contexts[i].fillStyle = gradient
      contexts[i].textAlign = 'center'
      contexts[i].shadowOffsetX = 2
      contexts[i].shadowOffsetY = 2
      contexts[i].shadowBlur = 5
      contexts[i].shadowColor = 'rgba(0, 0, 0, 0.7)'
    }
    contexts[0].font = " 40px 'Playfair Display', serif"
    contexts[0].fillText(name, canvas.width / 2, canvas.height - 240, 450)

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