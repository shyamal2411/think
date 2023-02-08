const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number"); //we only want to allow numbers
  inputElement.setAttribute("min", 0); //minimum value is 1
  inputElement.setAttribute("max", 9); //maximum value is 9
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push(".");
    }
  });
  console.log(submission);
};

const solve = () => {
    joinValues()
    submission.join('')
    var options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '559bb9798dmshe5d519875229e58p182b3ejsnd361bf5abccb',
          'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
};

solveButton.addEventListener("click", solve);
