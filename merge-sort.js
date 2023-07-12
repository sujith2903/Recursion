function merge(arr1, arr2) {
    
    const mergedArray = []

    let [i,j] = [0,0] 

    while (i < arr1.length && j < arr2.length) {
        
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j])
        j++
    }

    return mergedArray
}

function mergeSort(arr) {
    
    if (arr.length == 0) return arr

    if (arr.length == 1) return arr

    const mid = Math.floor(arr.length) / 2
    
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, arr.length))
    
    return merge(leftArr,rightArr)

}