var insert = function(array, rightIndex, value) {
var index = 0;
var key = array[rightIndex];
    //swap
    // for(index = rightIndex; value < key; index--) {
    for(index = rightIndex; value < key && 0 <= index; index--) {    
        // print("index: " + (index) +"\n");
        // print("b array: " + array+"\n");
        // print("b index: " + index +" value: " + value + " array["+index+"]= "+ key +"\n");
        // print("b value: " + value + " array["+index+"] = "+ key +"\n");
        key = array[index];
        // print("array[" + index +"] = " + key + "\n");
        // print("array[" + index +" + 1] = " +array[index + 1 ] + "\n");
        // print(
        // array[index + 1] = array[index];//key;
        array[index + 1] = key;
        // array[index] = 
        // print("array[" +index +" + 1] = " +array[index] + "\n");
        // print("array[" +(index + 1)+"] = " + key + "\n");
        // print("a array: " + array+"\n");
        // print("a index: " + index +" value: " + value + " array["+index+"]= "+ key +"\n\n");
        key = array[index - 1];
    }
    //insert
    // print("out index: " + (index) +"\n");
    // print("array[" +index +" + 1] = " + value + "\n");
    // if( index === -1 ){
        array[index + 1] = value;
    // } else {
    //     array[index + 2] = value;
    // }
};

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


// //1 insert value before and index 
// // https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/p/challenge-implement-insert

// var insert = function(array, rightIndex, value) {
//   	var index = rightIndex;
//   	for(index = )  
// };

// var array = [3, 5, 7, 11, 13, 2, 9, 6];

// insert(array, 4, 2);
// println("Array after inserting 2:  " + array);
// //Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

// insert(array, 5, 9);
// println("Array after inserting 9:  " + array);
// //Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

// insert(array, 6, 6);
// println("Array after inserting 6:  " + array);
// //Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);


var index = 0;
var key = array[rightIndex];
    
    for(index = rightIndex; value < key && 0 < index; index--) {
        array[index + 1] = key;
        key = array[index - 1];
    }
    array[index] = value;











