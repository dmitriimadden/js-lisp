let LISPChecker = function (str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {

        // If character is an opening parentheses add it to the stack
        if (str[i] === '(' ) {
            stack.push(str[i]);
        }
        // If character is a closing parentheses pop it from the stack
        else if (str[i] === ')'){
            if (stack.length == 0)
                return false;

            let last = stack.pop();
        }
        //ignore all the other characters of the string
        else {
            continue
        }
    }
    //Check if the stack has parentheses left and if it does return false 
        if (stack.length !== 0) {return false};

    return true;
}

console.log(LISPChecker(" (list 1 2 (quote foo))")); // returns true
console.log(LISPChecker("((())))")); // returns false
console.log(LISPChecker("(()"));  // returns false
console.log(LISPChecker(")()))"));  // returns false
console.log(LISPChecker(" (or (and 'zero' nil 'never') 'James' 'task 'time)"));  // returns true
console.log(LISPChecker(" (defun foo (a b c d) (+ a b c d))"));  // returns true
console.log(LISPChecker(" (defun foo (a b c d) ((+ a b c d))"));  // returns false