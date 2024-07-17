export const mergeSort = (array) => {
  const animations = [];
  if (array.length <= 1) return array;

  const start = 0;
  const end = array.length - 1;

  mergeSortHelper(start, end, array, animations);

  return animations;
}

const mergeSortHelper = (start, end, array, animations) => {

  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  
  mergeSortHelper(start, mid, array, animations);
  mergeSortHelper(mid + 1, end, array, animations);

  merge(start, mid, end, array, animations);
}

const merge = (start, mid, end, array, animations) => {

  const temp = [];
  let l = start, r =  mid + 1, k = start;

  while (l <= mid && r <= end) {

    animations.push([l, r]);
    animations.push([l, r]);

    if (array[l] <= array[r]) {
      animations.push([k, array[l]]);
      temp.push(array[l]);
      l++
    } else {
      animations.push([k, array[r]]);
      temp.push(array[r]);
      r++;
    }

    k++;
  }

  while (l <= mid) {
    animations.push([l, l]);
    animations.push([l, l]);

    animations.push([k, array[l]]);
    
    temp.push(array[l]);
    l++;
    k++;
  }

  while (r <= end) {
    animations.push([r, r]);
    animations.push([r, r]);

    animations.push([k, array[r]])

    temp.push(array[r]);
    r++;
    k++;
  }

  for (let i = start; i <= end; i++) {
      array[i] = temp[i - start];
  }
}