/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n  // number of chapters - (length of arr)
 *  2. INTEGER k  // number of problems per page
 *  3. INTEGER_ARRAY arr  // array - number of problems per chapter
 */

const workbook = (n, k, arr) => {
    let special = 0;
    let pages = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++) {
             
            if (k === 1 || j % k === 1) {
                pages++
            }
            if (j === pages) {
                special++
            }
        }
        console.log(special, pages)
    }
    
    console.log(special);
    return special;
}
