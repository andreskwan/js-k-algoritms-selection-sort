var slide = function(array, newPosition){
    var value = array[newPosition - 1];
    array[newPosition] = value;
    return array;
};

var insert = function(array, rightIndex, value) {
var index = 0;
var previousValue = array[rightIndex];
var lKey = array[rightIndex-1];
var key = array[rightIndex+1];//value

    for(index = rightIndex; value < array[index] && 0 <= index; index--) {
        // print("b array: " + array+"\n");
        // print("key: "+ key + " pv: "+ previousValue +"\n");
        array = slide(array, index + 1);
        previousValue = array[index-1];
        // print("a array: " + array+"\n");
        // array[index + 1] = key;
        // key = array[index];
    }
    array[index + 1] = value;    
    // print("\n\n");
};



// var array = [10,7,3,13];
// insert(array, 0, 7);
// println("Array after inserting 7:  " + array);
// Program.assertEqual(array, [7,10,3,13]);

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);