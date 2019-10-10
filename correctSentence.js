/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */


 /*
 по-хорошему бы конечно еще запилить проверки на то
 -не является ли вся строка последовательностью спецсимволов и знаков пунктуации
 -не оканчивается ли она на кучу знаков 
 -и т.д.
 */
// eslint-disable-next-line consistent-return
export default function correctSentence(text) {
  if (typeof(text)!="string") {
    return "Invalid input"
  } else {
    // eslint-disable-next-line no-lonely-if
    if (text.length===0){
      return "Invalid input"
    } else {
      let tmpText = text.toLowerCase()
      let upperCase = text.toUpperCase()
      let FirstSymbol = upperCase[0]
      if (text[text.length-1] == ".") {
        let result = FirstSymbol + tmpText.slice(1)
        return result
      } else {
        let result = `${FirstSymbol + tmpText.slice(1)}.`
        return result
      }
    }
  }
}
