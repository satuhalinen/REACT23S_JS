const askDoing = () => {
  const ask = document.querySelector("#ask").value;

  let question = document.querySelector("#question");

  const answer = document.querySelector("#answer");

  let text;

  if (ask.length > 0) {
    // Check for that the input is not empty. //
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (ask.includes("food")) {
      switch (randomNumber) {
        case 1:
          text = "liver caserole";
          break;

        case 2:
          text = "cabbage caserole";
          break;

        case 3:
          text = "meat soup";
          break;

        case 4:
          text = "chicken sauce and rice";
          break;

        case 5:
          text = "lasagna";
          break;

        case 6:
          text = "tuna pasta";
          break;

        case 7:
          text = "spaghetti and minced meat sauce";
          break;

        case 8:
          text = "salmon soup";
          break;

        case 9:
          text = "oven sausage and mashed potatoes";
          break;

        case 10:
          text = "Karelian stew";
          break;
      }
    } else if (ask.includes("sports")) {
      switch (randomNumber) {
        case 1:
          text = "basketball";
          break;

        case 2:
          text = "floorball";
          break;

        case 3:
          text = "football";
          break;

        case 4:
          text = "handball";
          break;

        case 5:
          text = "cross-country skiing";
          break;

        case 6:
          text = "disc golf";
          break;

        case 7:
          text = "cycling";
          break;

        case 8:
          text = "gymnastics";
          break;

        case 9:
          text = "running";
          break;

        case 10:
          text = "swimming";
          break;
      }
    } else if (ask.includes("friend")) {
      switch (randomNumber) {
        case 1:
          text = "Go for a walk.";
          break;

        case 2:
          text = "Go for shopping.";
          break;

        case 3:
          text = "Go to a museum.";
          break;

        case 4:
          text = "Watch a movie.";
          break;

        case 5:
          text = "Play board games.";
          break;

        case 6:
          text = "Play video games.";
          break;

        case 7:
          text = "Watch a movie.";
          break;

        case 8:
          text = "Go to a concert.";
          break;

        case 9:
          text = "Bake cookies.";
          break;

        case 10:
          text = "Go to a restaurant.";
          break;
      }
    } else {
      text =
        "Please include one of the words, food, friend or sports in your question.";
      // Option if the the user doesn't enter a question including one of the needed words. //
    }
  } else {
    text = "Please write your question.";
    // Option if the input is empty. //
  }
  if (ask.length > 0) {
    question.textContent = `Answer to your question "${ask}" is: `;
  }
  answer.textContent = text;
};
const button = document.querySelector("#button");
button.addEventListener("click", askDoing);
