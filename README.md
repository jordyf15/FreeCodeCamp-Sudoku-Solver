# FreeCodeCamp's Sudoku Solver
For the fourth project of FreeCodeCamp's Quality Assurance curriculum we have to make a sudoku solver where we can input numbers directly to the grid or throught the text area and have it solved by the sudoku solver. Although the sudoku solver may only solve some sudokus where the algorithm can complete the grids.

## Live Demo on Repl
https://freecodecamp-sudoku-solver.jordyf15.repl.co/

## Technologies Used
1. HTML
2. CSS
3. Javascript
4. @babel/core version ^7.10.1
5. @babel/preset-env version ^7.10.1
6. @babel/register version ^7.10.1
7. body-parser version ^1.19.0
8. chai version ^4.2.0
9. cors version ^2.8.5
10. dotenv version ^8.2.0
11. express version ^4.17.1
12. jquery version ^3.5.1
13. jsdom version ^16.2.2
14. mocha version ^7.1.1
15. nodemon version ^2.0.4

## User stories:
1.  I can enter a sudoku puzzle by filling in the text area with either a number or period (.) to represent an empty cell. 
2. When a valid number is entered in the text area, the same number is applied to the correct cell of the sudoku grid.
3. I can enter a sudoku puzzle by adding numbers directly to the sudoku grid.
4. When a valid number is entered in the sudoku grid, the same number appears in the correct position in the text area.
5. The text area should only update the corresponding sudoku grid cell when a whole number between 1 and 9 is entered.
6. The sudoku grid should only update the puzzle string in the text area when a whole number between 1 and 9 is entered into a cell.
7. I can solve an incomplete puzzle by clicking the "Solve" button. When a solution is found, the sudoku grid and text area are automatically populated with the correct numbers for each cell in the grid or position in the text area.
8. This sudoku solver is not expected to be able to solve every incomplete puzzle. See `/public/puzzle-strings.js` for a list of puzzle strings it should be able to solve along with their solutions.
9. If the puzzle is not 81 numbers or periods long, append the message "Error: Expected puzzle to be 81 characters long." to the `error-msg` `div` so the text appears in red.
10. I can clear the text area and sudoku grid by clicking the "Clear" button.
11. All 6 unit tests are complete and passing. See `/tests/1_unit-tests.js` for the expected behavior you should write tests for.
12. All 4 functional tests are complete and passing. See `/tests/2_functional-tests.js` for the functionality you should write tests for.

## Project Description
This project was made from FreeCodeCamp's Sudoku Solver [Boilerplate](https://repl.it/github/freeCodeCamp/boilerplate-project-sudoku-solver) where we have to edit `public/sudoku-solver.js` so that the sudoku solver may work as it should be and also we have to create some tests in `tests/1_unit-tests.js` and `tests/2_functional-tests.js`.
### public/sudoku-solver.js
This is where al the logic goes in order for the sudoku solver to work.
There are 13 functions in total and also event listenes for `input` for all the sudoku grids and text area and also `click` event listeners for the solve and clear button.  
Functions:  
1. **inputChecker:**  
This function checks whether the input to grid or text area is a valid number from 1 to 9. this function accepts the input as the parameter to be validate.
2. **gridToTextArea:**  
this function will change the value of the text area based on the input of the grid where it will set it based on the index and gridInput. This function accepts an index based on which grid was inputted and also the gridInput which is the value of the input in the grid.
3. **textAreatoGrid:**  
This function will change the value of the grids based on the value of the text area. For it to set the value of all grids the text must be 81 long to avoid any wrong value inputted to the wrong grid.
4. **searchEmptyIndex:**  
This function will search all the index of the sudoku in the text area that is empty. 
5. **prepPossibleNumberforIndexArr:**  
This function will prepare all possible numbers from 1-9 for each empty index.
6. **rowRightPossibleChecker:**  
This function will check all the grid in the right row of the empty grid to eliminate the possible number of the empty grid. This will operate based on the textarea `#text-input` value.
7. **rowLeftPossibleChecker:**  
This function will check all the grid in the left row of the empty grid to eliminate the possible number of the empty grid. This will operate based on the textarea `#text-input` value.
8. **columntTopPossibleChecker:**  
This function will check all the grid in the top column of the empty grid to eliminate the possible number of the empty grid. This will operate based on the textarea `#text-input` value.
9. **columnBottomPossibleChecker:**  
This function will check all the grid in the bottom column of the empty grid to eliminate the possible number of the empty grid. This will operate based on the textarea `#text-input` value.
10. **gridPossibleChecker:**  
This function will check all the grid in the 3x3 grid where the empty grid is located to eliminate the possible number of the empty grid. This will operate based on the textarea `#text-input` value.
11. **setSinglePossible:**  
This function will set the value of the grid if the grid only has one possible number left.
12. **sudokuSolver:**  
This function will solved the sudoku (if possible) using a combination of all the function and eliminating possible numbers and set value of a grid if it only has one possible numbers and keep doing it until the sudoku is solved or all the empty grid have more than one possible number.
13. **clearInput:**   
This function will clear the grid and the textarea.

### 1_unit-tests.js
There are 7 test in the `1_unit-tests.js`:
1. **Valid "1-9" characters:**  
In this test we need to check if the input is valid or not, this can be done by using the inputChecker function inputting 1-9 character as it's parameter and asserting it's result equal to true.
2. **Invalid characters (anything other than "1-9") are not accepted:**  
In this test we need to check if the input is not valid, this can be done by using the inputChecker function inputting all the characters in input variable as it's parameter and asserting it's result equal to false.
3. **Parses a valid puzzle string into an object:**  
As for my project this testing isn't necessary since i didn't parse the puzzle string into an object but did the operation directly on the puzzle string.
4. **Shows an error for puzzles that are not 81 numbers long**  
In this test we need to check if our sudoku solver shows an error when a puzzle that is not 81 numbers long was inputted and asked to be solved. We can do this by setting the value of textarea `#text-input` to a value that is not 81 numbers long and then call the sudokuSolver function which will be called to solve the puzzle and asserting the innerHTML div equal to Error: Expected puzzle to be 81 characters long.
5. **Valid puzzles pass:**  
There is no description as what should be done when a valid puzzle pass so i assume it should be just like the previous test whether it will get an error or no when the user click the solve button.
6. **Invalid puzzles fail:**  
Just like test no. 5, i only test whether this puzzle will give an error or not.
7. **Returns the expected solution for an incomplete puzzle**  
in this test we need to check if our sudoku solver can solve the sudoku puzzle as same as the expected result in the test. So we must set the text area value to the input in the test and then call the sudokuSolver function to solve the puzzle and assert the text area value equal to the expected result.  

### 2_functional-tests.js
1. **Valid number in text area populates correct cell in grid:**  
In this test we need to chec if the value in text area will populate the correct cell in the grid. This can be done by setting the value of the text area and asserting the grids value that is expected to be populated to equal the value that is expected.
2. **Valid number in grid updates the puzzle string in the text area:**  
In this text we need to check if the value in grid will update the correct index of the puzzle string in the text area. This can be done by setting the value of the grids and asserting the index of the puzzle string connected to the grids and assert it's value to the grid's value.
3. **Function clearInput():**  
In this test we need to check if the clear function is working or not. This can bedone by calling the clearInput functon and asserting the value of the text area equal to the expected result.
4. **Function showSolution(solve(input)):**  
This test is the same with test no.7 in unit tests.js.



## Instruction from FreeCodeCamp's Sudoku Solver Boilerplate
1. To run the tests on Repl.it, set NODE_ENV to test without quotes in the .env file.
2.  To run the tests in the console, use the command npm run test. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell".
3.  All logic can go into `public/sudoku-solver.js`.
4.  Create all of the unit/functional tests in `tests/1_unit-tests.js` and `tests/2_functional-tests.js`.
