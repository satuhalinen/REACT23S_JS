function insurance() {
  let age = document.getElementById("age").value;
  let hypertension = document.getElementById("hypertension");
  let sugar = document.getElementById("sugar");
  let overweight = document.getElementById("overweight");

  let exercise = document.getElementById("exercise");
  let diet = document.getElementById("diet");
  let sleep = document.getElementById("sleep");
  let noStress = document.getElementById("noStress");
  let noAlcohol = document.getElementById("noAlcohol");
  let noSmoke = document.getElementById("noSmoke");

  let smoke = document.getElementById("smoke");
  let alcohol = document.getElementById("alcohol");
  let noExercise = document.getElementById("noExercise");
  let noDiet = document.getElementById("noDiet");
  let noSleep = document.getElementById("noSleep");
  let drugs = document.getElementById("drugs");
  let result;
  let score = 0;
  if (age <= 18) {
    score = 500;
  }
  if (age > 18 && age <= 25) {
    score = 1.1 * 500;
  }
  if (age > 25 && age <= 35) {
    score = 1.3 * 500;
  }
  if (age > 35 && age <= 45) {
    score = 1.6 * 500;
  }
  if (age > 45 && age <= 55) {
    score = 2 * 500;
  }

  if (age > 55 && age <= 65) {
    score = 2.5 * 500;
  }

  if (age > 65) {
    score = 3.1 * 500;
  }

  if (hypertension.checked) {
    score = 1.01 * score;
  }
  if (sugar.checked) {
    score = 1.01 * score;
  }
  if (overweight.checked) {
    score = 1.01 * score;
  }

  if (exercise.checked) {
    score = 0.95 * score;
  }
  if (diet.checked) {
    score = 0.95 * score;
  }
  if (sleep.checked) {
    score = 0.95 * score;
  }
  if (noStress.checked) {
    score = 0.95 * score;
  }
  if (noAlcohol.checked) {
    score = 0.95 * score;
  }
  if (noSmoke.checked) {
    score = 0.95 * score;
  }

  if (smoke.checked) {
    score = 1.05 * score;
  }
  if (alcohol.checked) {
    score = 1.05 * score;
  }
  if (noExercise.checked) {
    score = 1.05 * score;
  }
  if (noDiet.checked) {
    score = 1.05 * score;
  }
  if (noSleep.checked) {
    score = 1.05 * score;
  }
  if (drugs.checked) {
    score = 1.05 * score;
  }

  result = document.getElementById("score");
  result.textContent = `Your risk score is calculated based on your answers. Your risk score is ${String(
    score.toFixed(0)
  )}.`;
}
age.addEventListener("change", insurance);
hypertension.addEventListener("change", insurance);
sugar.addEventListener("change", insurance);
overweight.addEventListener("change", insurance);

exercise.addEventListener("change", insurance);
diet.addEventListener("change", insurance);
sleep.addEventListener("change", insurance);
noStress.addEventListener("change", insurance);
noAlcohol.addEventListener("change", insurance);
noSmoke.addEventListener("change", insurance);

smoke.addEventListener("change", insurance);
alcohol.addEventListener("change", insurance);
noExercise.addEventListener("change", insurance);
noDiet.addEventListener("change", insurance);
noSleep.addEventListener("change", insurance);
drugs.addEventListener("change", insurance);
