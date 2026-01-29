let btn = document.querySelector("button");
let p = document.querySelector("p");
let crs = document.querySelector(".courses");
let calc = document.querySelector("#submit");
let res = document.querySelector("#result");
let info = document.querySelector("img");
let pre = document.querySelector("pre");

let flag = "odd";

const formatDiv = (div) => {
    div.classList.add(flag);
    let text = `<input class='grade' type='text' placeholder='Enter your grade'>
    <input class = 'credit' type='number' placeholder='Enter the credit amount'>`;
    div.innerHTML += text;
    return div;
};

const addCourse = ()=>{
    let el = document.createElement("div");
    crs.appendChild(formatDiv(el));
    flag=="odd"? flag="even":flag="odd";
};

const gradeValue = (i) => {
    let grades = document.querySelectorAll(".grade");
    let grade = grades[i].value.toUpperCase();
    if(grade=="S") return 10;
    else if(grade=="A") return 9;
    else if(grade=="B") return 8;
    else if(grade=="C") return 7;
    else if(grade=="D") return 6;
    else if(grade=="E") return 5;
    else return 0;
}

const calculateGPA = () => {
    let credits = document.querySelectorAll(".credit");
    let creditSum = 0;
    let gpa = 0;
    for(let i=0;i<credits.length;i++){
        creditSum += Number(credits[i].value);
        gpa += credits[i].value*gradeValue(i);
    }
    
    res.innerText = Math.ceil(100*gpa/creditSum)/100;
    res.scrollIntoView({ behavior: 'smooth' });
}

info.addEventListener("mouseover",()=>{
    pre.style.display = "inline";
    info.style.cursor = "pointer";
});
info.addEventListener("mouseout",()=>{
    pre.style.display = "none";
});

btn.addEventListener("mouseover",()=>{
    p.style.display = "inline";
});
btn.addEventListener("mouseout",()=>{
    p.style.display = "none";
});

calc.addEventListener("click",calculateGPA);
btn.addEventListener("click",addCourse);