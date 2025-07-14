const hasNumber = (string) => string.search(/\d/) !== -1;

class PasswordValidator {
  constructor(options = {}) {
    // Устанавливаем значения по умолчанию
    this.options = {
      minLength: 8,
      containNumbers: true,
      ...options, // Переопределяем значения по умолчанию, если переданы
    };
  }

  validate(password) {
    const errors = {};

    // Проверка на минимальную длину
    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    // Проверка на наличие цифр, если требуется
    if (this.options.containNumbers && !hasNumber(password)) {
      errors.containNumbers = 'should contain at least one number';
    }

    return errors;
  }
}

// Экспорт класса
export default PasswordValidator;

// Пример использования
const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate('qwertyui')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }
console.log(1)
