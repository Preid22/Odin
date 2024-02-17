NOTE -
Ran into a lot of trouble when trying to increment a value within a factory func generated player object.
The issue was that I was declaring the score property, and a function property to increment. Then, I was trying to run the addScore function but the score was not being incremented.

            const player = () => {
            let playerName = "";
            let playerToken = "";
            let playerScore = 0;

            /*const getScore = () => playerScore;*/
            const addScore = () => playerScore++;

            return { playerName, playerToken, addScore, playerScore };
            };

            let player1 = player();
            player1.playerName = "John";
            console.log(player1);
            player1.addScore();
            console.log(player1.playerScore)

    The problem lies in closure, and the fact that the returned object property in the player function is only a copy of to value at the time of the objects creation, in this case 0.
     If we only return the playerScore value and the addScore() function, even though addScore() is working as intended, the reference to playerScore is still just a reference to the copy of the initial value (0).

     ** IN ORDER TO REFLECT THE CHANGED VALUE, WE NEED TO USE A FUNCTION THAT HAS ACCESS VIA CLOSURE AND LEXICAL SCOPE**

     Here, that function is getScore. The value of playerScore is within the lexical scope of getScore, so getScore can be used to access the correct updated value, NOT just the copy that playerScore lets us access.

     This give an extra layer of control, as the score value can now only be manipulated and accessed via approved means.

NOTE: CANNOT ACCESS HTML ELEMENT STYLE PROPERTIES USING THE CLASS NAME TO ACCESS, USE ID INSTEAD

2/14/24
Gained some further understanding on the differences between methods for accessing the DOM/HTML from the JS. - getElementByID: since HTML IDs must be unique, ID can only ever return one (the first) element, can me modified

        - getElementsByClassName: returns and HTMLCollection, which is a LIVE UPDATED array-like object. Because it is live it's good for accessing dynamic content, but care must be taken because the order of elements can change. Remember - since it is like an array, elements must be accessed using [bracket] notation.

        -  getElementsByName: returns a LIVE NODE LIST with specified name attribute. Also an array-like object.

        -  querySelector: returns the first element matching the specified CSS selector, returns a single element

        -  querySelectorAll: static node list of all elements that match the specified CSS selector

2/17/24

        Another hurdle cleared having to do with accessing elements via class name - It doesn't work to have, for example, an event listener set to listen for 'a class'. You have to create a variable first, using getElementsByClassName, which as we know creates an array like list so again we need to remember to iterate through that list in order to access specific elements.

        Looking at the list returned in the dev console of Chrome, it looks like we should also be able to make use of the ID to get to a specific cell.

??? QUESTION: Seems like there are a couple of ways around it, but I'm thinking through how and where to make the cells 'active' (accessible and interactive).

FEELING STUMPED - Time to move on and chew on this... The issue that I'm trying to unravel is how to link the individual cells to my JS functions and make them individually accessible. Haven't yet been able to really step through it so that should be the next step.
