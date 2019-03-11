// function minimumMoves(a, m) {
//     // a and m arrays must be same length
//     if (a.length === m.length) {
//         let aLength = a.map(function (num) {
//             aNums.length;
//         });
//         console.log(aLength);
//     }


    // Each element in a and m arrays must be integers with the same number of digits as their counterpart
    // Turn every element in the array into its own array to compare length

    // Further break up the new arrays into individual characters (integers)
    // Compare each individual character/integers's value from a against its counterpart in m 
    // Based on the difference in positive or negative value, increment a counter for how many moves were used
    // Have a separate incremented counter for each of a and m's elements

    // Add up the counter variables to return the integer result


// }


for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("CracklePop");
    } else if (i % 3 === 0) {
        console.log("Crackle");
    } else if (i % 5 === 0) {
        console.log("Pop");
    } else {
        console.log(i);
    }
}