/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

const chai = require("chai");
const assert = chai.assert;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM( "" );
global.$ = require( "jquery" )( window );
let Solver;

suite('Functional Tests', () => {
  suiteSetup(() => {
    // DOM already mocked -- load sudoku solver then run tests
    Solver = require('../public/sudoku-solver.js');
  });
  
  suite('Text area and sudoku grid update automatically', () => {
    // Entering a valid number in the text area populates 
    // the correct cell in the sudoku grid with that number
    test('Valid number in text area populates correct cell in grid', done => {
      document.getElementById('text-input').value='123456789........................................................................';
      Solver.textAreatoGrid();
      assert.equal(document.getElementById('A1').value,'1');
      assert.equal(document.getElementById('A2').value,'2');
      assert.equal(document.getElementById('A3').value,'3');
      assert.equal(document.getElementById('A4').value,'4');
      assert.equal(document.getElementById('A5').value,'5');
      assert.equal(document.getElementById('A6').value,'6');
      assert.equal(document.getElementById('A7').value,'7');
      assert.equal(document.getElementById('A8').value,'8');
      assert.equal(document.getElementById('A9').value,'9');
      done();
    });

    // Entering a valid number in the grid automatically updates
    // the puzzle string in the text area
    test('Valid number in grid updates the puzzle string in the text area', done => {
      document.getElementById('text-input').value='.................................................................................'
      Solver.gridToTextArea(0,'1');//entering 1 to A1 grid
      Solver.gridToTextArea(1,'2');//entering 2 to A2 grid
      Solver.gridToTextArea(2,'3');//entering 3 to A3 grid
      Solver.gridToTextArea(3,'4');//entering 4 to A4 grid
      Solver.gridToTextArea(4,'5');//entering 5 to A5 grid
      Solver.gridToTextArea(5,'6');//entering 6 to A6 grid
      Solver.gridToTextArea(6,'7');//entering 7 to A7 grid
      Solver.gridToTextArea(7,'8');//entering 8 to A8 grid
      Solver.gridToTextArea(8,'9');//entering 9 to A9 grid
      assert.equal(document.getElementById('text-input').value,'123456789........................................................................');
      done();
    });
  });
  
  suite('Clear and solve buttons', () => {
    // Pressing the "Clear" button clears the sudoku 
    // grid and the text area
    test('Function clearInput()', done => {
      Solver.clearInput();
      assert.equal(document.getElementById('text-input').value,'.................................................................................');
     done();
    });
    
    // Pressing the "Solve" button solves the puzzle and
    // fills in the grid with the solution
    test('Function showSolution(solve(input))', done => {
      var textInput=document.getElementById('text-input');
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const expectedResult="769235418851496372432178956174569283395842761628713549283657194516924837947381625"
      textInput.value=input;
      Solver.sudokuSolver();
      assert.equal(textInput.value,expectedResult);
      done();
    });
  });
});

