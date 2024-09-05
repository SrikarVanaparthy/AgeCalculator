function calculateAge(event) {
    if (event) {
        event.preventDefault(); 
    }

    const date = parseInt(document.getElementById("date").value);
    const month = parseInt(document.getElementById("mon").value);
    const year = parseInt(document.getElementById("year").value);
    const res = document.getElementById("result");
    const errMsg = document.getElementById("errormsg");

    const today = new Date(); 
    const givenDate = new Date(year, month - 1, date);

    res.style.display = "none";
    errMsg.innerText = ""; 

    if(givenDate > today){
        errMsg.innerText = "Date cannot be in future";
        return;

    }
    

    if (isNaN(date) || isNaN(month) || isNaN(year)) {
        errMsg.innerText = "Please enter the valid date, month, and year.";
        return;
    }

    if (date < 1 || date > 31) {
        errMsg.innerText = "Date must be between 1 - 31.";
        return;
    }

    if (month < 1 || month > 12) {
        errMsg.innerText = "Month must be between 1 - 12.";
        return;
    }

   
    if (year > today.getFullYear()) {
        errMsg.innerText = "Year cannot be in the future.";
        return;
    }
    
  

    if (givenDate.getFullYear() !== year || givenDate.getMonth() + 1 !== month || givenDate.getDate() !== date) {
        errMsg.innerText = "Please make sure that you have entered a correct Date .";
        return;
    }


    

    let age_Year = today.getFullYear() - year; 
    let age_Month = (today.getMonth() + 1) - month;
    let age_Date = today.getDate() - date;

    if (age_Date < 0) {
        age_Month--;
        age_Date += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (age_Month < 0) {
        age_Year--;
        age_Month += 12;
    }

    res.style.display = "block";
    res.innerHTML = `<b>Hey, You are <br> ${age_Year} years <br> ${age_Month} months <br> & ${age_Date} days old</b>`;
}

const button = document.getElementById('btn');
button.addEventListener("click",calculateAge);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (document.activeElement.tagName === "INPUT")) {
        e.preventDefault();
        calculateAge(e);
    }
});