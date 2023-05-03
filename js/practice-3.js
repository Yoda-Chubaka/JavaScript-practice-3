// Task #1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// Task #2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//    name:  "Henry",
//    phone: "982-126-1588",
//    email: "henry.carter@aptmail.com"
//   }
// };
// console.log(apartment);

// Task #3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(apartment);

// Task #4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(lastTag);

// Task #5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// Task #6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);

// Task #7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);

// Task #8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

// Task #9
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
// email: "henry.carter@aptmail.com",
// password: "jqueryismyjam",
// [emailInputName]: "henry.carter@aptmail.com",
//  [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);

// Task #10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(key);
// console.log(apartment[values]);

// Task #11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
 
// }

// Task #12
// function countProps(object) {
//   let propCount = Object.keys(object).length;
 
// for (let i=0; i<object.length; i+=1) {
//   if (countProps.hasOwnProperty(propCount)) {
    
//   }
// }
//   return propCount;
// }

// Task #13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(apartment);

// Task #14
// function countProps(object) {
//   let propCount = Object.keys(object).length;
// const keys = Object.keys(countProps);
//   for (const key in object) {
//   }
//   return propCount;
// }

// Task #15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(apartment);

// Task #16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
// }
//   return totalSalary;
// }

// Task #17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// Task #18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;
// }

// Task #19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
// const propValue = [];
//   for (product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValue.push(product[propName]);
//     }
//   }
// return propValue;
// }


// Task #20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// };

// Task #21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Task #22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Task #23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Task #24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push({ hex, rgb }.hex);
//   rgbColors.push({ hex, rgb }.rgb);
// }

// Task #25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast

// Task #26
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: {low: tomorrowLow, high: tomorrowHigh } } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// Task #27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// Task #28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// Task #29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// Task #30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   return {...{completed, category, priority},...data}
// }

// Task #31
// function add(...args) {
//    let total = 0;
//   for (const arg of args) {
//      total += arg;
//    }
//    return total;
// }

// Task #32
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//     total += arg;
//   }
//   }
//   return total;
// }

// Task #33
// function findMatches(allowedNumbers, ...args) {
//   const matches = [];

//   for (let arg of args) {
//     if (allowedNumbers.includes(arg)) {
//       matches.push(arg);
//     }
//   }
 
//   return matches;
// }

// Task #34
// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
// };

// Task #35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// Task #36
// const atTheOldToad = {
// potions: [],
// };

// Task #37
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   }
// };

// Task #38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
// this.potions.push(potionName);
//   },
// };

// Task #39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
// };

// Task #40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//   const potionIndex = this.potions.indexOf(oldName);
//   this.potions.splice(potionIndex, 1, newName);
//   },
// };

// Task #41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const oldPotion of this.potions) {
//       if (newPotion.name === oldPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;

//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         potionIndex = this.potions.indexOf(potion);
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     let potionIndex = -1;

//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potionIndex = this.potions.indexOf(potion);
//       }
//     }

//     this.potions[potionIndex].name = newName;
//   },
// };









