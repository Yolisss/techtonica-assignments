//3

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
  addAvailableTickets(name, price) {
    const ticType1 = new TicketType(name, price);
    this.availableTickets.push(ticType1);
  }
  //pushing name & price into available tickets
  // this.availableTickets.push(name, price);
  //return this.name + this.price;

  allTickets() {
    // human, 299 vampire 99
    // this.name => name of the event
    //var that holds name & description
    let output = `${this.name}-${this.description}- All tickets: `;
    //iterate through length of total tickets available
    for (let i = 0; i < this.availableTickets.length; i++) {
      //add each ticket type & price to the variable created
      output += ` ${i + 1}. ${this.availableTickets[i].name}  ($${
        this.availableTickets[i].price
      })`;
    } // this prints on the HTML page
    //returns the new string
    return output;
  }

  /*
  KLOS Golden Gala - An evening with Hollywood vampires - All tickets: 1. human ($299) 2. vampire ($99)
Skillet & Sevendust - Victorious war tour - All tickets: 1. General Admission ($25) 2. Floor Seating ($80)
Jenny Lewis - On the line tour 2019 - All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)
                                 */

  //  allTickets() {
  //  this.blurb += `<br><strong> - All tickets: </strong>`
  //  for (let i = 0; i < this.availableTickets.length; i++) {
  //    this.blurb += `<li>${i+1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `
  //  }
  //  this.description += this.blurb;
  // }
  searchTickets(lowerNum, upperNum) {
    let counter = 1;
    let ticketEligibility = `${this.name}-${this.description}-Eligible tickets: `;

    for (let j = 0; j < this.availableTickets.length; j++) {
      if (
        this.availableTickets[j].price >= lowerNum &&
        this.availableTickets[j].price <= upperNum
      ) {
        counter++;
        ticketEligibility += `${counter}. ${this.availableTickets[j].name} ($${this.availableTickets[j].price})`;
      } else if (counter === 1 && j === this.availableTickets.length - 1) {
        ticketEligibility = "No tickets available";
      }
      //return ticketEligibility;
    }
    return ticketEligibility;
  }
}

class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// #4, The below statement creates an object.
const eventObj1 = new Event(
  "KLOS Golden Gala",
  "An evening with hollywood vampires"
);

//#5, Create few more objects with different values.
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

//#6: Create an empty Event array.
const eventArray = new Array();

//#7 pushing single object to an array
//eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

//#8 in order to check whether the elements are pushed, use console.log
console.log(eventArray);

//#9
document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  let html = "";
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector("#event").innerHTML = html;
});

//setting ticket prices
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

//prints part 2, step 5
//console.log(eventObj1.availableTickets());
//console.log(eventObj2.availableTickets());
//console.log(eventObj3.availableTickets());
console.log(eventObj1.availableTickets[0].price);

//part 5 & 6
console.log(eventObj1.allTickets());
console.log(eventObj2.allTickets());
console.log(eventObj3.allTickets());

console.log(eventObj1.searchTickets(200, 400));
console.log(
  eventObj3.searchTickets(0, 250),
  "Output:Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200)"
);
