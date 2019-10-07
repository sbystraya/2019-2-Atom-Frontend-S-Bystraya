/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
// eslint-disable-next-line consistent-return
export default function convertBytesToHuman(bytes) {
  if (typeof bytes != "number") {
    return "false"
  } else {
    if (bytes < 0 ) {
      return "false"
    // eslint-disable-next-line no-else-return
    } else {
      // получение и проверка дробной части числа
      let tmp = bytes - Math.floor(bytes)
      if (!((tmp==0.125)||(tmp==0.25)||(tmp==0.375)||(tmp==0.5)||(tmp==0.625)||(tmp==0.75)||(tmp==0.875)||(tmp==0))) {
        /*
        строго говоря, если дробная часть
        bytes == {0,125; 0,25; 0.375; 0.5; 0,625; 0,75; 0,875}
        то количество БИТ все еще целое, и данные можно считать корректными.
        А во всех иных случаях провалимся в эту ветку
        */
       return "false"
      } else {
        let prefix=0
        let result = bytes
        while(result >= 1024){
          result /= 1024
          prefix+=3
        }
        /*
        т.к. если мы в этой ветке алгоритма
        => bytes - число
        => его максимальное значение автоматически не превышает 2^53-1 ,
        => bytes/1024 больше 5 раз никак не выполнится
        => возможные значения prefix - 0, 3, 6, 9, 12, 15
        */
        /*
        для округления до 2 знаков после запятой в случае дробного результа
        Вообще говоря может статься так, что наш ответ будет иметь 1 знак после запятой и код ниже
        приведет, например, 1.9 к 1.90, но это не является фактической ошибкой, а о красоте и поспорить можно
        */
        tmp = result - Math.round(result)
        if (tmp!=0) {
          result = result.toFixed(2)
        }
        switch (prefix) {
          case 3: {return (`${String(result)}KB`)}
          case 6: {return (`${String(result)}MB`)}
          case 9: {return (`${String(result)}GB`)}
          case 12: {return (`${String(result)}TB`)}
          case 15: {return (`${String(result)}PB`)}
          default: {return (`${String(result)}B`) }
        }
      }
    }
  }
}



