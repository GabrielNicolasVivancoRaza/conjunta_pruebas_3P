function calcWeightedGrade(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('Los items debe ser un arreglo');
  }
  if (items.length === 0) {
    throw new RangeError('Los items no pueden estar vacios');
  }

  let totalWeight = 0;
  let totalScore = 0;

  for (const item of items) {
    if (typeof item !== 'object' || item === null) {
      throw new TypeError('Cada item debe ser un objeto');
    }

    const { score, weight } = item;

    if (typeof score !== 'number' || !Number.isFinite(score)) {
      throw new TypeError('El score debe ser un número finito');
    }
    if (typeof weight !== 'number' || !Number.isFinite(weight)) {
      throw new TypeError('El weight debe ser un número finito');
    }

    if (score < 0 || score > 100) {
      throw new RangeError('El score fuera de rango entre 0 y 100');
    }
    if (weight < 0 || weight > 1) {
      throw new RangeError('El weight fuera de rango entre 0 y 1');
    }

    totalWeight += weight;
    totalScore += score * weight;
  }

  if (Math.abs(totalWeight - 1) > 0.001) {
    throw new RangeError('La suma de pesos debe ser 1');
  }

  return Number(totalScore.toFixed(2));
}

function percentile(p, values) {
  if (typeof p !== 'number' || !Number.isFinite(p)) {
    throw new TypeError('p debe ser un número finito');
  }
  if (p < 0 || p > 100) {
    throw new RangeError('p fuera de rango');
  }
  if (!Array.isArray(values)) {
    throw new TypeError('values debe ser un arreglo');
  }
  if (values.length < 1) {
    throw new RangeError('values debe tener al menos un elemento');
  }
  if (values.some(v => typeof v !== 'number' || !Number.isFinite(v))) {
    throw new TypeError('values debe contener solo números finitos');
  }

  const sorted = values.slice().sort((a, b) => a - b);
  const n = sorted.length;

  if (p === 0) {
    return Number(sorted[0].toFixed(2));
  }
  if (p === 100) {
    return Number(sorted[n - 1].toFixed(2));
  }

  const rank = Math.ceil((p / 100) * n);
  const value = sorted[rank - 1];

  return Number(value.toFixed(2));
}

module.exports = { toCelsius, toFahrenheit, movingAverages, calcWeightedGrade, percentile };
