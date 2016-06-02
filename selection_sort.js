//without this line, can't draw in the canvas
fill(255, 0, 0);
var fontWidth = 20;
var displayArray = function(array) {
    textFont(createFont("monospace"), fontWidth);
};

/**
 * the next lines helped me to identify the characterWidth needed for drawing.
 * this will be multiplied with a indexForPosition
 * and we will obtain the position where the 
 * line should end or begin.
 * The goal is to enclose each number inside a cell 
 * and identify the with of the cell/character. 
 */
var arrayOne = [2345678901234567];
displayArray(arrayOne);
var yPosition1 = 20*(0+1) + 0;
var f2 = 0;
var characterWidth = fontWidth/1.67;//1.5
var k = 0;//7.5 font 16
text(" " + arrayOne + "\n", 0, yPosition1);

for(var i=-1; i < 18; i++){
    line((f2 + i) * characterWidth + k, 0,
         (f2 + i) * characterWidth + k, yPosition1);
}

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

/**
* this function turns a integer number into a string 
* with a specific number of characters of width
* 
* @parameter intValue: value to be turned into string with 
* @parameter stringWidth : number of characters that the output string should have
*
* @Example:
* inputs intValue: 1, stringWidth: 5 
* output "     1" 
* string with five characters, four spaces in front of the integer 
* to complete the expected number of characters or width.
*
*/
// fill(255, 0, 0);
var intToStringWithWidth =  function(intValue, stringWidth){
                                //1 turn intValue into a string 
                                var intValueString = intValue.toString();
                                // text("intValueString: " + intValueString, 200, 30);
                                //2 identify the number of spacesToAdd to the intValueString
                                // text("intValueString: " + intValueString, 0, 70);
                                var spacesToAdd = stringWidth - intValueString.length;
                                // text("spacesToAdd: " + spacesToAdd.toString(), 200, 40);
                                //3 if spacesToAdd is 0 return if not add the spaces
                                if (spacesToAdd > 0) {
                                    var newStr = ' '.repeat(spacesToAdd)+intValueString;
                                    // text("newStr: " + newStr, 200, 50);
                                    return newStr;
                                } else {
                                    return intValueString;
                                }
                            };

/**
* 
* @parameter array: is an array of integers 
*  which could have values with different widths 
* @return  the width of the widest integer value in the array
*/
var widestIntInArray = function(array){
    var intWidth = function(intValue){
        return intValue.toString().length;
    };
    var arrayOfWidth = array.map(intWidth);
    var sortedArray = arrayOfWidth.sort();
    return sortedArray.pop();
};

/**
* this function is to be used inside a map function acting on
* an array,
* this function should be created because is not a goo idea define a function
* inside a for loop
*/
// stringWidth is global, I don't like it, but I don't know how to make it work for 
// this function!?!?!?!?
var stringWidth = 0;
var setValueWidth = function(intValue){
                        return intToStringWithWidth(intValue,stringWidth);
                    };

/** 
* for testing "intToStringWithWidth" uncomment next lines, 
* and comment the rest of the file
*/
// var testInt = 1;
// var testStrWidth = 5;
// // text("intToStringWithWidth(" + testInt + ", " + testStrWidth + ").length " + intToStringWithWidth(testInt, testStrWidth).length + "\n", 0, 35);
// var array = [22, 11, 99, 88, -6];
// var arrayEqualWidth = array.map(setValueWidth);
//         displayArray(arrayEqualWidth);
// text(" " + arrayEqualWidth + "\n", 100, 100);


/**
 * @Description
 * How I identified this indexFactor and the indexForPosition?
 * I create a grid of 17 spaces, each cell contains a number with 
 * type font monospace with font size of 20
 * the width of each cell is what I called characterWidth 
 *
 * So, the index 3 (when stringWidth is 2) in the array of numbers to be organized,
 * correspond to a index of 10 or position 11 for the array of space, that is why
 * I need a indexFactor of 3
 * so
 * 3 * indexFactor must be proximate to the position of cell 11
 *
 * if stringWidth is 3
 * index * indexFactor = indexForPosition
 * 4     * 4           = 16    + 1 = 17
 * 
 * if stringWidth is 2 
 * index * indexFactor = indexForPosition
 * 4     * 3           = 12    + 1 = 16
 * 3     * 3           =  9    + 1 = 10
 * 2     * 3           =  6    + 1 =  7
 * 1     * 3           =  3    + 1 =  4
 * 0                   =  0    + 1 =  1
 *
 * if stringWidth is 1
 * 4     * 2           =  8    + 1 =  9
 * 3     * 2           =  6    + 1 =  7
 * 2     * 2           =  4    + 1 =  5
 * 1     * 2           =  2    + 1 =  3
 * 0                   =  0    + 1 =  1
 * @parameter index: which we want to identify the equivalent index of position
 * @return the index of the array of positions
 */
 //2 for 1, 3 for 2, 4 for 3
var indexFactor = function(stringWith){
    return stringWith + 1;
};

/**
* index for position is related with inde
*/
var indexForPosition = function(index, stringWidth){
    return (index * indexFactor(stringWidth)) + 1;
};

/**
* 
*/
var xPostionOfIndex = function(index, stringWidth){
    return indexForPosition(index, stringWidth) * characterWidth + (stringWidth/2 * characterWidth);
};

var selectionSort = function(array, x, y) {
    var finalYposition = 0;
    var myArray = [];
    stringWidth = widestIntInArray(array);
    for(var i=0; i < array.length ; i++){
        var yPosition = 35 * (i + 1) + y;
        finalYposition = yPosition;
        var secondIndex = indexOfMinimum(array,i);
        var arrayEqualWidth = array.map(setValueWidth);
        displayArray(arrayEqualWidth);
        myArray = arrayEqualWidth.join(" ");
        text(" " + myArray + "\n", x, yPosition);
        // text("i2: " + secondIndex + " i1: "+ i +"\n", x+200, yPosition);
        line(xPostionOfIndex(secondIndex, stringWidth) + x , yPosition,
                       xPostionOfIndex(i, stringWidth) + x , yPosition + 25);
        swap(array, i, secondIndex);
    }
    text(" " + myArray + "\n", x, finalYposition + 35);
};

var array = [22, 11, 99, -6];
array = selectionSort(array, 0, 0);
var array = [60, 50, 40, 30];
array = selectionSort(array, 17*characterWidth, 0);
var array = [8, 2, 4, 2];
array = selectionSort(array, 0, 7*32);
var array = [4, 1, 2, 3];
array = selectionSort(array, 17*characterWidth, 7*32);
