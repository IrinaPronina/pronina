/*--Appear by time--*/
// let typing = document.querySelector('.typing-text');



// const endWidth = typing.clientWidth + 'px';
// console.log(endWidth);

// let start = Date.now(); // start time
// let count = 0; //start width
// typing.style.width = count;


// function typeLine() {


//   let interval = setInterval(function () {
//     console.log(typing.style.width);
//     console.log(endWidth);
//     const timeDuration = Date.now() - start;

//     count += 5;
//     typing.style.width = timeDuration / 5 + "px";

//     if (timeDuration > 1550) {

//       clearInterval(interval);

//     }
//   }, 10)

// }
// typeLine();


/*--Appear by opacity--*/

let interval = setInterval(function () {
  let appearText = document.querySelector(".appear-text");

  console.log(appearText);

  let letters = appearText.textContent.split("");
  console.log(letters);

  appearText.textContent = "";

  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    appearText.append(span);
  });
}, 4000);
