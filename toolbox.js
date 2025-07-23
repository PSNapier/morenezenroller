/* jshint esversion: 6 */

// Snippets
// .replace(/(,\s)(?!.*\1)/, ' and ') <-- find last instance

function browserCheck() {
     const isChrome = !window.chrome;
     if (isChrome === false) {
          browser.style.display = 'none';
     }
}

function populate(id, array, optGroup) {
     if (optGroup === false) {
          let select = document.getElementById(id);
          let options = array;

          for (let i = 0; i < options.length; i++) {
               let opt = options[i];
               let ele = document.createElement('option');
               ele.textContent = opt;
               ele.value = opt;
               select.appendChild(ele);
          }
     } else {
          let select = document.getElementById(id);
          let groups = Object.keys(array);
          // console.log(groups);

          for (let i = 0; i < groups.length; i++) {
               let gro = groups[i];
               let groEle = document.createElement('optgroup');
               groEle.label = gro;
               select.appendChild(groEle);

               let options = array[gro];
               for (let i = 0; i < options.length; i++) {
                    let opt = options[i][0];
                    let ele = document.createElement('option');
                    ele.textContent = opt;
                    ele.value = opt;
                    select.appendChild(ele);
               }
          }
     }
}

function reload() {
     window.location.reload(false);
}

function rng(max) {
     const rng = Math.floor(Math.random() * max) + 1;
     return rng;
}

function rngRange(min, max) {
     const rng = Math.floor(Math.random() * (max - min + 1)) + min;
     return rng;
}

function randomizer(array) {
     if (array.length > 0) {
          const random = array[Math.floor(Math.random() * array.length)];
          return random;
     } else {
          return '';
     }
}

function onlyUnique(value, index, self) {
     return self.indexOf(value) === index;
}
// let a = ['a', 1, 'a', 2, '1'];
// let unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

function combiner(array) {
     const result = [],
          f = function (prefix = [], array) {
               for (let i = 0; i < array.length; i++) {
                    result.push([...prefix, array[i]]);
                    f([...prefix, array[i]], array.slice(i + 1));
               }
          };
     f('', array);
     return result;
}

function capitalizeArr(array) {
     var newArray = [];

     for (var x = 0; x < array.length; x++) {
          newArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
     }
     return newArray;
}

String.prototype.capitalizeStr = function () {
     // TODO: capitalize no worky with opening parenthesis even though regexr says it should?
     return this.replace(/(?:^|\(|\s|-|\/)\S/g, function (a) {
          return a.toUpperCase();
     });
};
// string.capitalize();

// const arrayToSort = ['apple', 'banana', 'cherry', 'date'];
// const sortOrder = ['banana', 'date', 'apple', 'cherry'];
// const sortedArray = arrayToSort.sortByArray(sortOrder);
// console.log(sortedArray);
Array.prototype.sortByArray = function (orderArr) {
     const map = new Map();
     orderArr.forEach((val, index) => map.set(val, index));
     return this.sort((a, b) => map.get(a) - map.get(b));
};

Array.prototype.checkGene = function (geneRegex) {
     return this.some((x) => geneRegex.test(x));
};
