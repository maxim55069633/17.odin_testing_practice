function analyzeArray(source_string) {
  let average;
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  let length = source_string.length;
  if (length == 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: length,
    };
  }
  for (let i = 0; i < length; i++) {
    sum += source_string[i];
    if (source_string[i] > max) max = source_string[i];
    if (source_string[i] < min) min = source_string[i];
  }
  average = sum / length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

export { analyzeArray };
