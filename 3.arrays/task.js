function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])) {
      return true;
    }
    else {
      return false;
    }
  }
  
  
  function getUsersNamesInAgeRange(users, gender) {
    return users.filter(item => item.gender === gender)
      .reduce((acc, item, index, arr) => {
        return acc + item.age / arr.length;
      }, 0)
  }