const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lotter draw is happening 🔮`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // Метод Promise.resolve(value) возвращает Promise выполненный с переданным значением
      resolve(`You win 💰`);
    } else {
      // Метод Promise.reject(reason) возвращает объект Promise, который был отклонён по указанной причине.
      reject(new Error(`You lost your money 💩`));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// // Promisifying SetTimeout // Обещающий установить тайм-аут
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`1 second passed`);
//     return wait(2);
//   })
//   .then(() => {
//     console.log(`2 second passed`);
//     return wait(3);
//   })
//   .then(() => {
//     console.log(`3 second passed`);
//     return wait(1);
//   })
//   .then(() => console.log(`4 second passed`));

// Promise.resolve(`abc`).then((x) => console.log(x));
// Promise.reject(new Error(`Problem!`)).catch((x) => console.error(x));
