//without this line, can't draw in the canvas
fill(255, 0, 0);
var fontWidth = 13;
var displayArray = function(array) {
    textFont(createFont("monospace"), fontWidth);
};

/**
 * Identify the fontWidthFactor, needed for drawing
 * this will be mutiplied with a indexForPosition
 * and we will obtain the value of pixels where the value
 * should be placed
 */
var arrayOne = [12345678901234];
displayArray(arrayOne);
var yPosition1 = 20*(0+1) + 0;
var f2 = 0;
var fontWidthFactor = fontWidth/1.8;//1.5
var k = 0;//7.5 font 16
text(" " + arrayOne + "\n", 0, yPosition1);

for(var i=-1; i< 17; i++){
    line((f2+i)*fontWidthFactor+k, 0,
         (f2+i)*fontWidthFactor+k, yPosition1);
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
var stringWidth = 2;
/**
* this function is to be used inside a map function acting on
* an array,
* this function should be created because is not a goo idea define a function
* inside a for loop
*/
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
 * I create a grid of 16 spaces, each cell contains a number with 
 * type font monospace with font size of 15
 * the width of each cell is what I called fontWidthFactor 
 *
 * So, for an index 4 in the array of numbers to be organized,
 * correspond to a index of 16 for the array of space, that is why
 * I need a indexFactor of 3.75
 * so
 * 4 * indexFactor must be proximate to the position of cell 16
 * index * indexFactor = indexForPosition
 * 4     * 3.75        = 15    + 1 = 16
 * 3     * 3.75        = 11.25 + 1 = 12.25
 * 1     * 3.75        = 3.75  + 1 =  4.75
 * @parameter index: which we want to identify the equivalent index of position
 * @return the index of the array of positions
 */
var indexFactor = 3.75;
var indexForPosition = function(index){
    return (index * indexFactor) + 1;
};

/**
* 
*/
var xPostionOfIndex = function(index){
    return indexForPosition(index) * fontWidthFactor;
};

var selectionSort = function(array, x, y) {
    var finalYposition = 0;
    var myArray = [];
    for(var i=0; i < array.length ; i++){
        var yPosition = 35 * (i + 1) + y;
        finalYposition = yPosition;

        var secondIndex = indexOfMinimum(array,i);
        var arrayEqualWidth = array.map(setValueWidth);
        displayArray(arrayEqualWidth);
        myArray = arrayEqualWidth.join(" ");
        text(" " + myArray + "\n", x, yPosition);
        // text("i2: " + secondIndex + " i1: "+ i +"\n", x+200, yPosition);
        line(xPostionOfIndex(secondIndex) + x , yPosition,
                       xPostionOfIndex(i) + x , yPosition + 25);
        swap(array, i, secondIndex);
    }
    text(" " + myArray + "\n", x, finalYposition + 35);
};

var array = [22, 11, 99, -6, 0];
array = selectionSort(array, 0, 0);
var array = [60, 50, 40, 30, 20];
array = selectionSort(array, 180, 0);
var array = [2, 2, 2, 2];
array = selectionSort(array, 0, 7*32);
var array = [4, 1, 2, 3];
array = selectionSort(array, 180, 7*32);