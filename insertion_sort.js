var insert = function(array, rightIndex, value) {
	var index;
	//first I need to be sure that index i is never less than 0;
	//that is why it should come first in the and expression
	//if evaluated then array[index] is never evaluated!!!
	for(index = rightIndex; index >= 0 && value < array[index]; index--) {
        array[index + 1] = array[index];
    }
    array[index + 1] = value;   
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);
// Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
// Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);
// Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);

var insertionSort = function(array) {
    for(var i = 1; i < array.length ; i++){
        insert(array, i-1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
