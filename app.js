function showTemperatures() {
    var lstImage = [{ id: '1', description: 'asset/images/1.png' },
        { id: '2', description: 'asset/images/2.png' },
        { id: '3', description: 'asset/images/3.jpg' },
        { id: '4', description: 'asset/images/4.jpg' }
    ].map(function (t, i) {
        var img = document.createElement("img");
        var a = function () { currentDiv(t.id) };
        img.setAttribute('src', t.description);
        img.setAttribute('onclick', a);
        img.setAttribute('style', "");
        console.log(img);
        return img;
    })
    console.log(lstImage);
    document.getElementById('temperatures').innerHTML =
      '<li>' + lstImage.join('</li><li>') + '</li>'
  }
  
  
  function currentDiv(n) {
      showDivs(slideIndex = n);
    }
    
    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
    showTemperatures()
}
  
function createImageSlide (id) {
    var parentId = '#' + id;
    var parent = document.querySelector(parentId);
    var imageFeature = parent.querySelectorAll('.img_feature');
    var lstImage = parent.querySelectorAll('.list-image img');
    var nextButton = parent.querySelector('.next');
    var backButton = parent.querySelector('.back');
    var currentIndex = 0

    lstImage.forEach((image, index) => { 
        image.addEventListener('click', e => {
            currentIndex = index;
            updateImageByIndex(index, imageFeature, lstImage)
        })
    })

    backButton.addEventListener('click', e => { 
        if (currentIndex == 0) {
            currentIndex = lstImage.length - 1;
        } else { 
            currentIndex --
        }
        updateImageByIndex(currentIndex, imageFeature, lstImage)
    })

    nextButton.addEventListener('click', e => { 
        if (currentIndex == lstImage.length - 1) {
            currentIndex = 0;
        } else { 
            currentIndex ++
        }
        updateImageByIndex(currentIndex, imageFeature, lstImage)
    })
}

function updateImageByIndex(index, mainImage, listImage) {
    mainImage.src = listImage[index].getAttribute('src')
}