let popupKeys = document.querySelectorAll('#Gallery .popupKey'),
    popupEle = document.querySelector(".popup"),
    popupBoxEle = document.querySelector(".box"),
    popupExitKey = popupEle.querySelector(".close"),
    popupImgEle = popupEle.querySelector("img"),
    galleryImages = document.querySelectorAll("#Gallery img"),
    currentImgIndex,
    popupNextKey = popupEle.querySelector(".next"),
    popupPrevKey = popupEle.querySelector(".prev"),
    popupIndicatorsContainer = popupEle.querySelector(".indicators");


for (let i = 0; i < galleryImages.length; i++) {
    let newIndicator = document.createElement("li");
    newIndicator.textContent = i + 1;


    if (i == 0) {
        newIndicator.classList.add("active")
    }
    popupIndicatorsContainer.append(newIndicator)
}
let popupIndicators = popupEle.querySelectorAll(".indicators li");

popupKeys.forEach(function (popupKey) {
    popupKey.addEventListener("click", function () {
        let currentImgEle = popupKey.parentElement.previousElementSibling,
            currentImgEleSrc = currentImgEle.getAttribute("src"),
            galleryImagesArr = Array.from(galleryImages);
        currentImgIndex = galleryImagesArr.indexOf(currentImgEle);
        popupImgEle.setAttribute("src", currentImgEleSrc);
        updatePopupImage(currentImgEleSrc);
        updateIndicators();
        openPopUp();
    });
});

popupEle.addEventListener("click", closePopUp);

popupBoxEle.addEventListener("click", function (e) {
    e.stopPropagation();
})
popupExitKey.addEventListener("click", closePopUp)

popupNextKey.addEventListener("click", function () {
    currentImgIndex = (++currentImgIndex >= galleryImages.length) ? 0 : currentImgIndex

    let nextImgIndex = currentImgIndex,
        nextImgEle = galleryImages[nextImgIndex],
        nextImgSrc = nextImgEle.getAttribute("src");
    updateIndicators();
    updatePopupImage(nextImgSrc);

})
popupPrevKey.addEventListener("click", function () {
    currentImgIndex = (--currentImgIndex == -1) ? galleryImages.length - 1 : currentImgIndex;
    let prevImgIndex = currentImgIndex,
        prevImgEle = galleryImages[prevImgIndex];
    prevImgSrc = prevImgEle.getAttribute("src");
    updateIndicators();
    updatePopupImage(prevImgSrc);
})
popupIndicators.forEach(function (popupIndicator, currentIndicatorIndex) {
    popupIndicator.addEventListener("click", function () {
        let newImgEle = galleryImages[currentIndicatorIndex];
        newImgSrc = newImgEle.getAttribute("src");
        currentImgIndex = currentIndicatorIndex;
        updatePopupImage(newImgSrc);
        updateIndicators();
        //console.log(newImgEle);

    }
    )
})