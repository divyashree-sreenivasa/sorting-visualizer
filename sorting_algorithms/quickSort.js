const partition = async (arr, low, high) => {
    const pivot = arr[high].style.height;

    let i = low - 1;
    arr[high].style.background = "red";
    

    for(let j = low; j <= high-1; j++) {
        await addDelay();
        arr[j].style.background = "yellow";
        if(parseInt(arr[j].style.height) < parseInt(pivot)) {
            i++;
            swap(arr[j], arr[i]);
            arr[i].style.background = "orange";

            if(i != j) arr[j].style.background = "pink";
            
            await addDelay();

        } else {
            arr[j].style.background = "pink";

        }
    }
    i++;
    await addDelay();
    swap(arr[i], arr[high]);
    arr[high].style.background = "pink";
    arr[i].style.background = "green";
    
    await addDelay();
    for(let k = 0; k < arr.length; k++){
        if(arr[k].style.background !== 'green')
            arr[k].style.background = colorBlue;
    }

    return i;
}

const quickSort = async (arr, low, high) => {
    if(low < high ) {
        const partitionIdx = await partition(arr, low, high);
        await quickSort(arr, low, partitionIdx - 1);
        await quickSort(arr, partitionIdx + 1, high);
    } else {
        if(low >= 0 && high >= 0 && low < arr.length && high < arr.length){
            arr[high].style.background = 'green';
            arr[low].style.background = 'green';
        }
    }
}

const quickSortBtn = document.querySelector('.quick-sort-btn');
quickSortBtn.addEventListener("click", async () => {
    const barArr = document.querySelector('#bars').childNodes;
    disableSortingButtons(true);
    disableSizeSlider(true);
    disableNewArrayBtn(true);
    await quickSort(barArr, 0, barArr.length - 1);
    disableSortingButtons(false);
    disableSizeSlider(false);
    disableNewArrayBtn(false);
});