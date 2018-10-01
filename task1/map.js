//Создадим новый объект, метод .map которого будет повторять работу Array.prototype.map()
var forArr = {
  map: function(arr, callback, myThis) {
      var newArr = [];
      for (let i = 0; i < arr.length; i++) newArr.push(callback(arr[i]));
      return newArr;
  }

};

//Пример использования
var myArr = [1,2,3,412,41,52];
console.log(myArr.map(a => a*2));
console.log(forArr.map(myArr, (a => a*2)));