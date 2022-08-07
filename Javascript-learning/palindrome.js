// var sentence='MALAXYXALAM';
// a=sentence.split("");
// let i=0,j=a.length-1;
// let f=0
// while(j>0){
//     if(a[i++] != a[j--])
//     {
//         f=0;
//         break;
//     }
//     else f=1;
// }
// if(f==1) console.log("palindrome")
// else console.log("not a palindrome")

function palindrome(str) {
  reverseStr = str.split("").reverse().join("").toLowerCase();
  console.log(reverseStr);
  if (str.toLowerCase() == reverseStr) return "palindrome";
  else return "not a palindrome";
}
console.log(palindrome("MalayaLam7452"));

// x= "MALAYALAM"
// y=x.length
// f=0
// for(i=0;i<y/2;i++){
//  if (x[i]==x[y-1-i]){
//  f=1
//  }
//  else{
//      f=0
//      break
//  }
// }
// if(f==1) console.log("palindrome")
// else console.log("not a palindrome")

// function palindromeDeeksha(x){
//     y=x.length
//     f=0
//     for(i=0;i<y/2;i++){
//      if (x[i]==x[y-1-i]){
//      f=1
//      }
//      else{
//          f=0;
//          break;
//      }
//     }
//     if(f==1) console.log("palindrome")
//     else console.log("not a palindrome")
// }
// palindromeDeeksha("MALAYALAM")
// palindromeDeeksha("GADAG")
// palindromeDeeksha("Deeksha")
