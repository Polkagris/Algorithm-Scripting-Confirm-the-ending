function confirmEnding(str, target) {
  let resultArr = [];
  let resultStr = "";
  let result = false;
  // Backwards for-loop to inspect from the last index of str
  for(let i=str.length - 1; i>=0; i--){
    // Iterations: 1. n, 2. on, 3. ion, 4. tion, etc.
    // Paste each iteration of str in resultStr variable
    resultStr = resultStr.concat(str[i]);
    // Split to array and reverse
    resultArr = resultStr.split('').reverse();
    // Join for convertion back to string
    resultArr = resultArr.join('');
    // Log each iteration
    console.log(resultArr);

    // Check if target == resultArr of that iteration - if true break
    if(target == resultArr){
      console.log('target \"'+target+'\" is present as str \"'+resultArr+'\"  in the word '+'\"'+str+'\" ');
      result = true;
      break;
    }else{
      result = false;
    }
  }
  // True / False
  return result;
}

confirmEnding("Abstraction", "action");
