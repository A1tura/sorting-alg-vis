
// export const quickSort = (array, start, end) => {
//     const animations = [];

//     quickSortHelper(array, start, end, animations);

//     return animations;

// }


// const partition = (array, start, end, animations) => {

//     let i = start - 1;
//     const pivot = array[end];

//     for (let j = start; j < end; j++) {
//         animations.push([j, end, "comp"]);
//         animations.push([j, end, "comp2"]);

//         if (array[j] < pivot) {
//             i++;
//             animations.push([i, array[j], "swap"]);
//             animations.push([j, array[i], "swap"]);

//             const temp = array[j];
//             array[j] = array[i];
//             array[i] = temp;
//         }
//     }

//     i++;


//     animations.push([i, end, "comp"])
//     animations.push([i, end, "comp2"])

//     animations.push([i, pivot, "swap"]);
//     animations.push([end, array[i], "swap"]);

//     const temp = array[end];
//     array[end] = array[i];
//     array[i] = temp;


//     return i;
// }

// const quickSortHelper = (array, start, end, animations) => {

//     if (start >= end) return;

//     const pivot = partition(array, start, end, animations);

//     quickSortHelper(array, start, pivot - 1, animations);
//     quickSortHelper(array, pivot + 1, end, animations);

//     return animations;
// }



export const quickSort = (array, start, end) => {
    const animations = [];

    quickSortHelper(array, start, end, animations);

    return animations;

}


const partition = (array, start, end, animations) => {

    let i = start - 1;
    const pivot = array[end];
    animations.push([end, 0, "setPivot"]);

    for (let j = start; j < end; j++) {
        animations.push([j, end, "comp"]);
        animations.push([j, end, "unsetColor"]);

        if (array[j] < pivot) {
            i++;
            animations.push([i, array[j], "swap"]);
            animations.push([j, array[i], "swap"]);

            const temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }

    i++;


    animations.push([i, end, "comp"])
    animations.push([i, end, "unsetColor"])

    animations.push([i, pivot, "swap"]);
    animations.push([end, array[i], "swap"]);

    const temp = array[end];
    array[end] = array[i];
    array[i] = temp;

    animations.push([end, "unsetPivot"]);


    return i;
}

const quickSortHelper = (array, start, end, animations) => {

    if (start >= end) return;

    const pivot = partition(array, start, end, animations);

    quickSortHelper(array, start, pivot - 1, animations);
    quickSortHelper(array, pivot + 1, end, animations);

    return animations;
}