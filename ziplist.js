/**
 * Solving Experience E27.
 * Created by koday on 2/6/2017.
 */

const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function zipList(one, two) {
  let i = 0;
  let j = 0;
  let k = 0;
  let list = [];
  while (i < one.length){
    while (j < two.length){
      list[k++] = one[i++];
      list[k++] = two[j++];
    }
  }
  return list;
}

console.log(zipList(listOne, listTwo));

function zipListTheSimpleWay(one, two) {
  let zipper = _.union (_.zip(one, two));
  return _.flatten(zipper);
}

console.log(zipListTheSimpleWay(listOne, listTwo));
