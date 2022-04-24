const bubbleSort = async () => {
    const arrBars = document.querySelector('#bars').childNodes;
    for(let i = 0; i < arrBars.length - 1; i++) {
        for(let j = 0; j < arrBars.length - i - 1; j++) {
            arrBars[j].style.background = "red";
            arrBars[j+1].style.background = "red";
            if(parseInt(arrBars[j].style.height) > parseInt(arrBars[j+1].style.height)) {
                await addDelay();
                swap(arrBars[j+1], arrBars[j]);
            }
            arrBars[j].style.background = colorBlue;
            arrBars[j+1].style.background = colorBlue;
        }
        arrBars[arrBars.length-i-1].style.background = "green";
        await addDelay();
    }
    arrBars[0].style.background = "green";
}

const bubbleSortBtn = document.querySelector('.bubble-sort-btn');
bubbleSortBtn.addEventListener("click", async () => {
    disableSortingButtons(true);
    disableSizeSlider(true);
    disableNewArrayBtn(true);
    await bubbleSort();
    disableSortingButtons(false);
    disableSizeSlider(false);
    disableNewArrayBtn(false);
});