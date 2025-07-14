class Truncater {
    // Опции по умолчанию
    static defaultOptions = {
      length: 200, // Максимальная длина строки по умолчанию
      separator: '...', // Разделитель по умолчанию
    };
  
    constructor(options = {}) {
      // Объединяем переданные опции с опциями по умолчанию
      this.options = { ...Truncater.defaultOptions, ...options };
    }
  
    truncate(text, options = {}) {
      // Объединяем опции из конструктора с опциями, переданными в метод
      const currentOptions = { ...this.options, ...options };
  
      // Если текст короче или равен максимальной длине, возвращаем его без изменений
      if (text.length <= currentOptions.length) {
        return text;
      }
  
      // Обрезаем текст до максимальной длины и добавляем разделитель
      return text.substring(0, currentOptions.length) + currentOptions.separator;
    }
  }
  
  const truncater = new Truncater();
console.log(truncater.truncate('one two'))