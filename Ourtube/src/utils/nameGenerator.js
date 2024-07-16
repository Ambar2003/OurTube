var nameList = [
  'Ambar','Akshat','Arushi','Deepak',
  'Aditya','Maitreyi','Malay','Adithya','Abhishek','Noel',
  'Akshata','Akshit','Rocky','Shikar','Usha','Aman','Alekhya',
  'Adarsh','Amogh','Adonis','Ollie',"Apollo","Tony","Michael","Bhuvan"
  ,"Ashish","Aryan","Raghav","Gautam","Harshit","Sanchita","Meena",
  'Rohan', 'Priya', 'Nikhil', 'Sneha',
  'Kunal', 'Kavya', 'Aditi', 'Rohit',
  'Sanya', 'Rajat', 'Ishita', 'Tanmay',
  'Varun', 'Divya', 'Arnav', 'Pooja',
  'Tanish', 'Riya', 'Aarav', 'Swati','Kushal'
];

export function generateRandomNames() {
  // The function doesn't need to "return" anything. It just needs
  // to set the value of the text field to the random name.
  return nameList[Math.floor( Math.random() * nameList.length )];
};