const selectionSort = async () => {
    let i, j, minIdx = 0;
    const barArr = document.querySelector("#bars").childNodes;
    for(i=0; i<barArr.length; i++) {
        minIdx = i;
        barArr[i].style.background = "yellow";
        await addDelay();
        for(j = i + 1; j < barArr.length; j++) {
            barArr[j].style.background = "red";
            await addDelay();
            if(parseInt(barArr[j].style.height) < parseInt(barArr[minIdx].style.height)) {
                
                barArr[minIdx].style.background = colorBlue;
                minIdx = j;
                barArr[minIdx].style.background = "yellow";
    
            } else {
                barArr[j].style.background = colorBlue;
            }
        }
        await addDelay();
        swap(barArr[i], barArr[minIdx]);
        await addDelay();
        barArr[minIdx].style.background = colorBlue;
        barArr[i].style.background = "green";
    }
}

const selectionSortBtn = document.querySelector('.selection-sort-btn');
selectionSortBtn.addEventListener("click", async () => {
    disableSortingButtons(true);
    disableSizeSlider(true);
    disableNewArrayBtn(true);
    await selectionSort();
    disableSortingButtons(false);
    disableSizeSlider(false);
    disableNewArrayBtn(false);
});
