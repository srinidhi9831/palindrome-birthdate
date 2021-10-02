
function reverseStr(str) {
    return str.split("").reverse().join("");
  }
  
  function isPal(str) {
    var revStr = reverseStr(str);
    return revStr === str;
  }
  
  function convertDateToStr(date) {
    var dateStr = { day: "", month: "", year: "" };
    if (date.day < 10) {
      dateStr.day = "0" + date.day;
    } else {
      dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
      dateStr.month = "0" + date.month;
    } else {
      dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
  }
  
  function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyyy, mmddyy, yymmdd];
  }
  
  function checkPalindromeForAllDateFormats(date) {
      //console.log("date=",date);
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    //console.log(listOfPalindromes)
    for (var i = 0; i < listOfPalindromes.length; i++) {
       // console.log(listOfPalindromes[i]);
      if (isPal(listOfPalindromes[i])) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  
  function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
  
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;

          month = 3;
        }
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    };
  }
  
  function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);
  
    while (1) {
      ctr++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if (isPalindrome) {
        break;
      }
      nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
  }
  


 var bdayInput = document.querySelector("#date");
var button = document.querySelector("#button");
var resultDiv = document.querySelector("#output");

function clickHandler(e) {
  var bdayString = bdayInput.value;

  if (bdayString !== "") {
    var date = bdayString.split("-");
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    var date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };

    if(checkPalindromeForAllDateFormats(date)){
        resultDiv.innerText = "Yay! Your birthday is palindrome!";
    }
    else{
        const [ctr1, nextDate] = getNextPalindromeDate(date);
            resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
    }
}
else{
    alert("please provide date");
}
}

button.addEventListener("click", clickHandler);