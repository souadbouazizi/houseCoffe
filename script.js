// Nav hover and select
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
    const currentLocation = location.href;

    navLinks.forEach((link) => {
        // Ajouter les styles au survol (hover)
        link.addEventListener("mouseover", function () {
            link.style.color = "#fff";
            link.style.backgroundColor = "#764c29";
            link.style.borderRadius = "5px";
        });

        // Retirer les styles lorsqu'on ne survole plus
        link.addEventListener("mouseout", function () {
            if (!link.classList.contains("selected")) {
                link.style.color = "";
                link.style.backgroundColor = "";
                link.style.borderRadius = "";
            }
        });

        // Ajouter la classe 'selected' à l'élément actuel
        if (link.href === currentLocation) {
            link.classList.add("selected");
            link.style.color = "#fff";
            link.style.backgroundColor = "#764c29";
            link.style.borderRadius = "5px";
        }
    });
});

  
  // Script pour la section Services
  document.addEventListener("DOMContentLoaded", function () {
    const serviceItemWrapper = document.querySelector(".serviceItem-wrapper");
    const serviceItems = Array.from(document.querySelectorAll(".serviceItem"));
    const prevBtn = document.getElementById("prevBtnSer");
    const nextBtn = document.getElementById("nextBtnSer");
    const indicatorsContainer = document.getElementById("serviceCarouselIndicators");
    let index = 0;

    function updateCardWidth() {
        const serviceItem = serviceItems[0];
        if (!serviceItem) return 0;
        return serviceItem.offsetWidth + parseInt(getComputedStyle(serviceItem).marginRight) * 2;
    }

    function createIndicators() {
        const itemsToShow = window.innerWidth < 576 ? 1 : 4;
        const totalItems = serviceItems.length;
        const numPages = Math.ceil(totalItems / itemsToShow);
        indicatorsContainer.innerHTML = "";
        for (let i = 0; i < numPages; i++) {
            const indicator = document.createElement("button");
            indicator.setAttribute("data-slide-to", i);
            if (i === 0) {
                indicator.classList.add("active");
            }
            indicatorsContainer.appendChild(indicator);
        }
    }

    function updateCarousel() {
        const serviceItemWidth = updateCardWidth();
        const itemsToShow = window.innerWidth < 576 ? 1 : 4;
        serviceItemWrapper.style.transform = `translateX(-${index * serviceItemWidth}px)`;

        prevBtn.style.display = index === 0 ? "none" : "block";
        nextBtn.style.display =
            index >= serviceItems.length - itemsToShow ? "none" : "block";

        const indicators = Array.from(indicatorsContainer.children);
        indicators.forEach((indicator, i) => {
            if (i === Math.floor(index / itemsToShow)) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    function handleIndicatorClick(e) {
        if (e.target.tagName === "BUTTON") {
            const slideTo = parseInt(e.target.getAttribute("data-slide-to"), 10);
            index = slideTo * (window.innerWidth < 576 ? 1 : 4);
            updateCarousel();
        }
    }

    prevBtn.addEventListener("click", () => {
        index = Math.max(0, index - (window.innerWidth < 576 ? 1 : 4));
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        index = Math.min(
            serviceItems.length - (window.innerWidth < 576 ? 1 : 4),
            index + (window.innerWidth < 576 ? 1 : 4)
        );
        updateCarousel();
    });

    indicatorsContainer.addEventListener("click", handleIndicatorClick);

    window.addEventListener("resize", () => {
        createIndicators();
        updateCarousel();
    });

    createIndicators(); // Initialize indicators
    updateCarousel(); // Initialize carousel
});



  // Script pour la section Team
  
  document.addEventListener("DOMContentLoaded", function () {
    const teamItemWrapper = document.querySelector(".TeamItem-wrapper");
    const teamItems = Array.from(document.querySelectorAll(".TeamItem"));
    const prevBtnTeam = document.getElementById("prevBtnTeam");
    const nextBtnTeam = document.getElementById("nextBtnTeam");
    const indicatorsContainerTeam = document.getElementById("TeamCarouselIndicators");
    let indexTeam = 0;

    function updateCardWidthTeam() {
        const teamItem = teamItems[0];
        if (!teamItem) return 0;
        return teamItem.offsetWidth + parseInt(getComputedStyle(teamItem).marginRight) * 2;
    }

    function createIndicatorsTeam() {
        const itemsToShow = window.innerWidth < 576 ? 1 : 2;
        const totalItems = teamItems.length;
        const numPages = Math.ceil(totalItems / itemsToShow);
        indicatorsContainerTeam.innerHTML = "";
        for (let i = 0; i < numPages; i++) {
            const indicator = document.createElement("button");
            indicator.setAttribute("data-slide-to", i);
            if (i === 0) {
                indicator.classList.add("active");
            }
            indicatorsContainerTeam.appendChild(indicator);
        }
    }

    function updateCarouselTeam() {
        const teamItemWidth = updateCardWidthTeam();
        const itemsToShow = window.innerWidth < 576 ? 1 : 2;
        teamItemWrapper.style.transform = `translateX(-${indexTeam * teamItemWidth}px)`;

        prevBtnTeam.style.display = indexTeam === 0 ? "none" : "block";
        nextBtnTeam.style.display = indexTeam >= teamItems.length - itemsToShow ? "none" : "block";

        const indicators = Array.from(indicatorsContainerTeam.children);
        indicators.forEach((indicator, i) => {
            if (i === Math.floor(indexTeam / itemsToShow)) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    function handleIndicatorClickTeam(e) {
        if (e.target.tagName === "BUTTON") {
            const slideTo = parseInt(e.target.getAttribute("data-slide-to"), 10);
            indexTeam = slideTo * (window.innerWidth < 576 ? 1 : 2);
            updateCarouselTeam();
        }
    }

    prevBtnTeam.addEventListener("click", () => {
        indexTeam = Math.max(0, indexTeam - (window.innerWidth < 576 ? 1 : 2));
        updateCarouselTeam();
    });

    nextBtnTeam.addEventListener("click", () => {
        indexTeam = Math.min(
            teamItems.length - (window.innerWidth < 576 ? 1 : 2),
            indexTeam + (window.innerWidth < 576 ? 1 : 2)
        );
        updateCarouselTeam();
    });

    indicatorsContainerTeam.addEventListener("click", handleIndicatorClickTeam);

    window.addEventListener("resize", () => {
        createIndicatorsTeam();
        updateCarouselTeam();
    });

    createIndicatorsTeam(); // Initialize indicators
    updateCarouselTeam(); // Initialize carousel
});



//********gallery footer*******/


document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "flex";
        modalImage.src = thumbnails[currentIndex].src;
        modalTitle.textContent = thumbnails[currentIndex].getAttribute("data-title");
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function showPrevImage() {
        currentIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
        openModal(currentIndex);
    }

    function showNextImage() {
        currentIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
        openModal(currentIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            openModal(index);
        });
    });

    closeBtn.addEventListener("click", closeModal);

    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowLeft") {
                showPrevImage();
            } else if (event.key === "ArrowRight") {
                showNextImage();
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });
});
