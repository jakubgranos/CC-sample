class Lightbox {
  constructor(imageElement) {
    this.images = document.querySelectorAll(imageElement);
    
    if(this.images.length) {
      this.lightboxOpen();
      this.bodyClass = 'body-toggle-scroll';
    }
  }

  lightboxOpen() {
    for(let i = 0; i < this.images.length; i++) {
      this.images[i].addEventListener('click', e => {
        this.renderLightbox(e.target);
      })
    }
  }

  renderLightbox(targetImage) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.classList.add(this.bodyClass);
    
    document.body.appendChild(lightbox)
  
    this.removeLightboxButton(lightbox)
    this.renderImage(targetImage, lightbox)
  }

  renderImage(targetImage, targetParent) {
    //check src of img on server (you get absolute src path)
    const newImage = document.createElement('img');
    newImage.src = targetImage.src;
    newImage.alt = targetImage.alt

    targetParent.appendChild(newImage)
  }

  removeLightboxButton(targetParent) {
    const newButton = document.createElement('button');
    const newButtonContainer = document.createElement('div');
    newButtonContainer.classList.add('lightbox-button-container');
    newButtonContainer.classList.add('container')
    
    newButton.classList.add('lightbox-close');
    
    newButtonContainer.appendChild(newButton)
    targetParent.appendChild(newButtonContainer)

    newButton.addEventListener('click', () => {
      document.body.removeChild(targetParent);
      document.body.classList.remove(this.bodyClass);
    })
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  new Lightbox('[data-lightbox="image"]')
})
