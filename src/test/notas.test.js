const {calcWeightedGrade, percentile} = require('../utils/notas.js');
describe('Pruebas para calcWeightedGrade', () => {
  test('Caso: [80,0.4] + [90,0.6] → 86.00', () => {
    expect(calcWeightedGrade([{score: 80, weight: 0.4}, {score: 90, weight: 0.6}])).toBe(86.00);
  });

  test('Calcula nota ponderada correctamente', () => {
    expect(calcWeightedGrade([{score: 100, weight: 1}])).toBe(100.00);
    expect(calcWeightedGrade([{score: 70, weight: 0.3}, {score: 80, weight: 0.3}, {score: 90, weight: 0.4}])).toBe(81.00);
  });

  test('Valida rangos de score (0-100)', () => {
    expect(() => calcWeightedGrade([{score: -1, weight: 1}])).toThrow(RangeError);
    expect(calcWeightedGrade([{score: 100, weight: 1}])).toBe(100.00);
  });

  test('Valida rangos de weight (0-1)', () => {
    expect(() => calcWeightedGrade([{score: 80, weight: -0.1}])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{score: 80, weight: 1.1}])).toThrow(RangeError);
    expect(calcWeightedGrade([{score: 80, weight: 0}, {score: 90, weight: 1}])).toBe(90.00);
  });
});

describe('Pruebas para percentile (nearest-rank)', () => {
  test('Caso para bordes', () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
  });

  test('Caso: percentil 50 de [1,2,3,4] → 2.00', () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
  });

  test('Calcula percentiles correctamente usando nearest-rank', () => {
    expect(percentile(25, [1, 2, 3, 4])).toBe(1.00);
    expect(percentile(67, [1, 2, 3])).toBe(2.00);
  });
});
