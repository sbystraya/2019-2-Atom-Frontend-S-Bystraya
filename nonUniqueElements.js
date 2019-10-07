/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  let result = new Array()
  /*
  flags[i]=true если данный элемент в массиве имеет дубликаты
  */
  let flags = new Array ()
  for (let currentElement=0; currentElement<data.length; currentElement++){
    if (flags[currentElement]) {
      result.push(data[currentElement])
    } else {
      // элемент ранее не встречался
      for (let iterator=currentElement+1; iterator<data.length; iterator++) {
        // перебор элементов в далее по списку
        if (data[currentElement]===data[iterator]){
          if (flags[currentElement]){
            // не первый дубликат текущего элемента => еще раз добавлять не надо
            flags[iterator] = true
          } else {
            // первый дубликат текущего элемента => добавить к результату
            flags[currentElement] = true
            flags[iterator] = true
            result.push(data[currentElement])
          }
        }
      }
    }
  }
  return result
}
