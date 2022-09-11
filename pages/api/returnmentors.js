import { employeeData } from "../../data/employee";

// Shuffle Array
function arrayShuffle(array) {

    let currentElementIndex = array.length;
    let randomElementIndex;  

    // Shuffle elements until there are no more
    while (currentElementIndex != 0) {
  
        // Select a random element
        randomElementIndex = Math.floor(Math.random() * currentElementIndex);
        currentElementIndex--;

        // Swap the random and current element
        [array[currentElementIndex], array[randomElementIndex]] = [
        array[randomElementIndex], array[currentElementIndex]];
    }  
    return array;
}

export default function handler(req, res) {

    // create a shuffled array for randomising
    let randomData = arrayShuffle(employeeData);
    let returnData = [];
    // pick first two elements for randomising
    for(let i=0; i<2; i ++){
        returnData.push(randomData[i]);
    }
    // console.log(returnData)
    res.status(200).json({ returnData })
}