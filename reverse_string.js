let reverseString = (string_example) => {
    //split the string the user input first
    // so that each letter of the string would represent an array
    //we are spliting so that we can use each element of the string for something else like : reversal or join
    let string_arr = string_example.split("");
    let rev = '';
    if(string_arr){
        string_arr.forEach(function (each_string, its_index) {
            if(!isNaN(each_string)){//if current index is a number
                // if it is, leave the number in same position
                each_string = each_string + ' is not a number ';
            }else{
                is_string = each_string + ' is not a number ';

                string_arr.reverse();
            }
            console.log(its_index + 'is a string');
            console.log(each_string + ' Value');
        });
    }

    let result = string_arr.join(" ");

    // OR
    // let result = string_example.split("").reverse().join("");
    console.log(result);
}

reverseString('str1ngw1thnumb3rs');