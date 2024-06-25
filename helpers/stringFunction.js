export const stringFunction = (string) => {
  // ініціалізуємо масив результатів + додаємо початковий рядок
  const result = [string];

  // функція addDots приймає 3 аргументи
  /**
   @function addDots  фунція додає крапки у рядок.
   @str рядок, в який треба передати крапки
   @pos позиція з якої додаються крапки 
   @dotCount кількість крапок, які треба передати
  */

  const addDots = (str, pos, dotCount) => {
    // якщо dotCount дорівнює 0 виходимо із функції
    if (dotCount === 0) {
      result.push(str);
      return;
    }
    // проходимо по рядку від переданої позиції, до кінця масиву
    for (let i = pos; i < str.length; i++) {
      const newStr = str.slice(0, i) + "." + str.slice(i);
      // зміщує позицію на 2, щоб уникнути дуплювання крапок
      addDots(newStr, i + 2, dotCount - 1);
    }
  };

  // проходимо по рядку, при кожній ітерації викликається
  // функція addDots додає крапки з першої позиції в
  // кількості i
  for (let i = 1; i < string.length; i++) {
    addDots(string, 1, i);
  }
  // відфільтровуємо дублікати
  return Array.from(new Set(result));
};
