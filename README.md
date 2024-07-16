This project is essentially YouTube + my YouTube shorts! it is essentially a website that displays both general YouTube content and specifically highlights my own shorts!

Steps to run the project:

1.npm install: Do this the first time you are starting the project as node_modules has been deleted to reduce the size of the project.

2.npm start: This step is only required the next time you run the project. 

Features:

1.Header is just like YouTube + has My channel Logo! You can click on it(my channel Logo) to see my top 50 shorts(based on number of views) of my YouTube channel Gamesutra!

2.50 trending videos will be displayed on the homepage(special emphasis of YouTube India content)!

3.Advertisment: The advertisment is one of my top 50 shorts!

4.When you click on any of the video(including advertisment) you are redirected to a watch page. There the video plays automatically just like YouTube!

5.On the watchpage you can see comments and Live Chat. 

6.The comments are dummy but they have nesting feature just like Reddit!

7.The live chat is also dummy but it's just like YouTube. It involves API Polling. Random people will be chatting randomly live on it!

8.There is also a search bar. Though you can't actually search but the search suggestions are just like YouTube!

9.Also when you search there is debouncing! If API calling is less than a particular time(let's say 150ms) then it will be rejected. This helps in reducing API calls and making the search more efficient!

10.The last but not the least, the website is also responsive! It doesn't break on smaller devices like mobiles!
