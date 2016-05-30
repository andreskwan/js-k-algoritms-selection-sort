//without this line, can't draw in the canvas
fill(255, 0, 0);
var fontWidth = 16;
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
var fontWidthFactor = fontWidth/1.5;
var k = 7.5;
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
var toEqualWidth = function(intValue){
                        if(0 <= intValue && intValue < 10){
                            var intStr = intValue.toString();
                            var newValue = ' '.repeat(1)+intStr;
                            return newValue;
                        }else{
                            return intValue.toString();
                        }
                    };

/**
 * How I identified this indexFactor and the indexForPosition?
 * I create a grid of 16 spaces, each cell contains a number with 
 * type font monospace and font size of 15
 * a width of this width I called fontWidthFactor 
 * a character monosapced 
 * with font size of 15, 
 * so for an index 4 in the array of numbers to be organized correspond
 * to a index of 16 for 
 * so
 * 4 * indexFactor must be between 15 an 16
 * index * indexFactor = indexForPosition
 * 4     * 3.75        = 15    + 1 = 16
 * 3     * 3.75        = 11.25 + 1 = 12.25
 * 1     * 3.75        = 3.75  + 1 =  4.75
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
    var arrayEqualWidth = array.map(toEqualWidth);
        displayArray(arrayEqualWidth);
    var myArray = [];
    for(var i=0; i < array.length ; i++){
        var secondIndex = indexOfMinimum(array,i);
        var yPosition = 35*(i+1) + y;
        finalYposition = yPosition;
        arrayEqualWidth = array.map(toEqualWidth);
        displayArray(arrayEqualWidth);
        myArray = arrayEqualWidth.join(" ");
        var myArrayStr = myArray.toString();
        text(" " + myArray + "\n", x, yPosition);
        // text("i2: " + secondIndex + " i1: "+ i +"\n", x+200, yPosition);
        line(xPostionOfIndex(secondIndex) + x , yPosition,
                       xPostionOfIndex(i) + x , yPosition + 25);
        // line(((secondIndex + 1) * fontWidth) + x + fontWidth * factor, yPosition, ((i+1) * fontWidth) + x + fontWidth * factor, yPosition + 25);
        swap(array, i, secondIndex);
    }
    text(" " + myArray + "\n", x, finalYposition + 35);
};

var array = [22, 11, 99, 88, -6];
array = selectionSort(array, 0, 0);
var array = [6, 5, 4, 3, 2];
array = selectionSort(array, 180, 0);
var array = [2, 2, 2, 2];
array = selectionSort(array, 0, 7*32);
var array = [4, 1, 2, 3];
array = selectionSort(array, 180, 7*32);