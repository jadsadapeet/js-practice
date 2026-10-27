// โจทย์อยู่ใน README.md ในโฟลเดอร์นี้
// เขียนโค้ดแทนบรรทัด throw ในแต่ละ function

export function add(a, b) {
  return a + b;
}

export function isEven(n) {
  return n % 2 === 0;
}

export function getGrade(score) {

  if (score < 0 || score > 100) {
    return "invalid";
  }else if (score >= 80) {
    return "A"; 
  }
  else if (score >= 70){
    return "B";
  }else if (score >= 60){
    return "C";
  }else if (score >= 50){
    return "D";
  }

  else{
    return "F";
  }
}

export function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {

    sum += i;
  }
  return sum;
}

export function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0  ) {
      result.push("FizzBuzz");
    }
    else if (i %3 === 0) {
      result.push("Fizz");
    }
    else if (i %5 === 0) {
      result.push("Buzz");
    }
    else {
      result.push(i);
    }
  }
  return result;  
}

export function max3(a, b, c) {
  if (a >= b && a >= c) {
    return a; 
}
  else if (b >= a && b >= c) {
    return b;
  }
  else {
    return c;
  }
}


