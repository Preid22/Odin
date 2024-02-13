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
