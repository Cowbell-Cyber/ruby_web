window.onload = function() {
    const horizontalSection = document.getElementById('horizontalSection');
    const items = horizontalSection.querySelectorAll('.horizontal-item');
    const dotContainer = document.getElementById('dotContainer');
    let itemIndex = 0;

    function createDots() {
        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) {
              dot.classList.add('active');
            }
            dotContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = dotContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === itemIndex);
        });
    }

    function scrollItems() {
        horizontalSection.scrollTo({
            left: items[itemIndex].offsetLeft,
            behavior: 'smooth'
        });
        updateDots();
    }

    function startScrolling() {
        setInterval(() => {
            itemIndex = (itemIndex + 1) % items.length;
            scrollItems();
        }, 3500);
    }

    createDots();
    startScrolling();
};

function openImage(evt, imageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(imageName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();