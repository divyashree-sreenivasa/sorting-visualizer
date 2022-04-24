const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    // temp arrays
    let leftArr = new Array(n1);
    let rightArr = new Array(n2);

    for(let i = 0; i < n1; i++) {
        await addDelay(); 
        arr[l + i].style.background = "yellow";
        leftArr[i] = arr[l + i].style.height;
    }

    for(let j = 0; j < n2; j++) {
        await addDelay(); 
        arr[m + 1 + j].style.background = "orange";
        rightArr[j] = arr[m + 1 + j].style.height;
    }
    await addDelay(); 

    let i=0, j=0, k=l;

    while(i < n1 && j < n2) {
        await addDelay();
        n1 + n2 === arr.length ? arr[k].style.background = "green" 
                                   : arr[k].style.background = "lightgreen";

        if(parseInt(leftArr[i]) <= parseInt(rightArr[j])) {
            
            arr[k].style.height = leftArr[i];
            i++;
        } else {
            
            arr[k].style.height = rightArr[j];
            j++;
        }
        k++;
    }

    while(i < n1) {
        await addDelay(); 

        n1 + n2 === arr.length ? arr[k].style.background = "green" 
                                   : arr[k].style.background = "lightgreen";
        arr[k].style.height = leftArr[i];
        k++;
        i++;
    }

    while(j < n2) {
        await addDelay(); 

        n1 + n2 === arr.length ? arr[k].style.background = "green" 
                                   : arr[k].style.background = "lightgreen";
        arr[k].style.height = rightArr[j];
        k++;
        j++;
    }
    
}

const mergeSort = async (arr, l, r) => {
    if(l >= r ) {
        return;
    }

    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r); 
}

const mergeSortBtn = document.querySelector('.merge-sort-btn');
mergeSortBtn.addEventListener("click", async () => {
    const barArr = document.querySelector('#bars').childNodes;
    disableSortingButtons(true);
    disableSizeSlider(true);
    disableNewArrayBtn(true);
    await mergeSort(barArr, 0, barArr.length - 1);
    disableSortingButtons(false);
    disableSizeSlider(false);
    disableNewArrayBtn(false);
});