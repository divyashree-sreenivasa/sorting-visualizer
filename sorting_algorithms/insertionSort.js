const insertionSort = async () => {
    const barArr = document.querySelector('#bars').childNodes;
    barArr[0].style.background = "green";
    for(let i = 1; i < barArr.length; i++) {
        console.log(i + "i");
        const key = parseInt(barArr[i].style.height);
        let j;
        
        barArr[i].style.background = "red";
        await addDelay();
        for(j = i - 1; j >= 0 && key < parseInt(barArr[j].style.height); j--) {

            
            barArr[j].style.background = "red";
            barArr[j+1].style.height = barArr[j].style.height; 

            await addDelay();

            for(let k = i; k >= 0; k--){
                barArr[k].style.background = 'green';
            }

        }
        
        barArr[j+1].style.height = `${key}px`;
        barArr[i].style.background = "green";
    }
} 


const insertionSortBtn = document.querySelector('.insertion-sort-btn');
insertionSortBtn.addEventListener("click", async () => {
    disableSortingButtons(true);
    disableSizeSlider(true);
    disableNewArrayBtn(true);
    await insertionSort();
    disableSortingButtons(false);
    disableSizeSlider(false);
    disableNewArrayBtn(false);
});
