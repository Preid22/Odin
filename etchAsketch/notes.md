Cells dont generate unless the row and cell vars are defined within the loop

10/11 - Can't understand why the clear button isn't functioning. I can use it to change the BG color of the
grid parent container but the inner cell elements won't change. Thinking it may be a case of needing to iterate
through the collection?

10/12 - Checked in w chatGPT and realized that I was fixating on the approach of changing the background color
of each cell, but a simpler solution is to just run the grid generating function over again with the supplied
slider number. Wondering if it could still be done through styling.

Need to figure out iteration thru grid, forEach?

- REMEMBER: .querySelector and .getElementById only return SINGLE ELEMENTS, the first one that is found that matches the params
- .querySelectorAll and .getElementsByTagName return COLLECTIONS (array LIKE objects)

- CANT CALL forEach on HTMLCollection, since it is array LIKE and NOT and array 
- This was the main issue, I was trying to iterate over the HTMLCollection which doesn't work. By using the spread syntax
and converting the cells HTMLCollection to an array the forEach method works and I am able to conditionally check if a cell is
filled and reset it to white
