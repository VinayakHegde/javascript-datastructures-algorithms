import mergeSort from '.';

const sortedArrAsc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const sortedArrDsc = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const unSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negativeUnSortedArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const negativeSortedArr = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

describe('Merge Sort', () => {
  it('should sort', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(mergeSort(sortedArrAsc)).toEqual(sortedArrAsc);
    expect(mergeSort(sortedArrDsc)).toEqual(sortedArrAsc);
    expect(mergeSort(unSortedArr)).toEqual(sortedArrAsc);
    expect(mergeSort(equalArr)).toEqual(equalArr);
    expect(mergeSort(negativeUnSortedArr)).toEqual(negativeSortedArr);
    expect(mergeSort([''])).toEqual(['']);
    expect(mergeSort(['a'])).toEqual(['a']);
    expect(mergeSort(['aa', 'a'])).toEqual(['a', 'aa']);
    expect(mergeSort(['aa', 'q', 'bbbb', 'ccc'])).toEqual(['aa', 'bbbb', 'ccc', 'q']);
    expect(mergeSort(['aa', 'aa'])).toEqual(['aa', 'aa']);
  });
});