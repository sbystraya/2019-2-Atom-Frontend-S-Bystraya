/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from './convertBytesToHuman.js'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("test")).toBe("false")
  expect(convertBytesToHuman(true)).toBe("false")
  expect(convertBytesToHuman(undefined)).toBe("false")
  expect(convertBytesToHuman(null)).toBe("false")
  expect(convertBytesToHuman(Symbol)).toBe("false")
  expect(convertBytesToHuman(Object)).toBe("false")
})

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe("0B")
  expect(convertBytesToHuman(1024)).toBe("1KB")
  expect(convertBytesToHuman(2024)).toBe("1.98KB")
  expect(convertBytesToHuman(2072579)).toBe("1.98MB")
  expect(convertBytesToHuman(10.875)).toBe("10.88B")
  expect(convertBytesToHuman(41007199255140991)).toBe("36.42PB")
})

test('Возвращает false для некорректных чисел', () => {
  expect(convertBytesToHuman(-3)).toBe("false")
  expect(convertBytesToHuman(1024.33)).toBe("false")
})