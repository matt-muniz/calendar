let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentDay = date.getDay();
//Get first day of each moth
let firstDay = new Date(currentYear, currentMonth, 1).getDay();
let newFirstDay = new Date(currentYear, currentMonth, 1).getDay();
//Get first date of each month
let day = new Date(currentYear, currentMonth, 1).getDate();
//Get number of days in a month
let numDaysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
//Get last day of month
let lastDay = new Date(currentYear, currentMonth, numDaysInMonth).getDay();
//Get first day of each week
let firstDayOfWeek = currentDate - 7 - currentDay;
//Get last day of each week
let lastDayofWeek = currentDate - 7 - currentDay + 6;
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let daysArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let daysOfPrevMonth = 32 - new Date(currentYear, currentMonth - 1, 32).getDate();
let daysOfNextMonth = new Date(currentYear, currentMonth, 1).getDate();
let prevMonth = daysOfPrevMonth - firstDay + 1;

let row;
let cell;
let cellText;

function next(){
	
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	updateCalendar()
}

function previous(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
	updateCalendar()
}

updateDays(daysArr)
updateCalendarDates(prevMonth, daysOfNextMonth, day)
updateMonthYear(currentYear, currentMonth)


function updateCalendar(){
	firstDay = new Date(currentYear, currentMonth, 1).getDay();
	daysOfPrevMonth = 32 - new Date(currentYear, currentMonth - 1, 32).getDate();
	prevMonth = daysOfPrevMonth - firstDay + 1;
	numDaysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
	lastDay = new Date(currentYear, currentMonth, numDaysInMonth).getDay();
	updateCalendarDates(prevMonth, daysOfNextMonth, day)
	updateMonthYear(currentYear, currentMonth)
}

//Append Days in current month to calendar
		
function updateCalendarDates(previous, next, current){

	let calendarBody = document.getElementById("calendar-body");
	
	calendarBody.innerHTML = ""
	for(let c = 0; c < 6; c++){
		
		row = document.createElement("tr");
		for(let r = 0; r < 7; r++){
			if(c === 0 && r < firstDay){
				updateMonthDates(previous)
				cell.classList.add("prevMonth")
				previous++			
			}else if( current > numDaysInMonth){

				if(lastDay === 6){
					break;
				}else{
					updateMonthDates(next)
					cell.classList.add("prevMonth")
					next++
					c = 6;						
				}
			}else{
				updateMonthDates(current)
				if(current === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()){
					cell.classList.add("currentDay")	
				}
				cell.classList.add("hoverOver")
				current++
				cell.addEventListener("click", function(){
					testing(this.innerHTML)
					if(this.innerHTML === "3"){
						console.log("you did something")
					}
				});
				
			}
			
		}
		calendarBody.appendChild(row)
	}
}

// Append days in the week to calendar
function updateDays(days){
	
	let daysInWeek = document.getElementById("calendar");
	
	for(let i = 0; i < 1; i++){
		let row = document.createElement("tr");
		for(let x = 0; x < 7; x++){
			cell = document.createElement("th")
			cellText = document.createTextNode(days[x]);
			cell.appendChild(cellText)
			row.appendChild(cell)
		}
		daysInWeek.appendChild(row)
	}
}

// Append current month and year to calendar
function updateMonthYear(year, month){
	
	let monthAndYear = document.getElementById("monthAndYear");
	monthAndYear.innerHTML = "";	
	monthAndYear.innerHTML = `${months[month]} ${year}`
}


function updateMonthDates(z){
	cell = document.createElement("td");
	cellText = document.createTextNode(z);
	cell.appendChild(cellText);
	row.appendChild(cell);	

}



function testing(z){
	
	let hidden = document.getElementById("hidden");
	let body = document.getElementById("body");
	let clm = document.createElement("ul");
	hidden.style.display = "block"
	for(let x = 0; x < 1; x++){
		for(let y = 0; y < 1; y++){
			cell = document.createElement("li");
			let newCell = document.createTextNode(z);
			cell.appendChild(newCell);
			clm.appendChild(cell);
		}
		
		body.appendChild(clm)
	}

}


