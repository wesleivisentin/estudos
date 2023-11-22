function compareTriplets(a, b) {
    let points = [0, 0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]){
            points[0] += 1
        }else if (a[i] < b[i]){
            points[1] += 1
        }
        
    }
    return points
}

console.log(compareTriplets([0,10,4],[10,10,10] ));