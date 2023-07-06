function fibs(n) {
    let arr = []
    let a = 0
    let b = 1
    let c

    arr.push(a, b)
    
    for (let i = 2; i < n; i++){

        c = a + b
        arr.push(c)
        a = b
        b = c
    }
    console.log(arr)
}

fibs(8)

function fibsRec(n) {
    
    if (n == 1) {
        return [0]
    } else if (n == 2) {
        return [0,1]
    } else {
        return [...fibsRec(n-1),fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
    }

}

fibsRec(8)