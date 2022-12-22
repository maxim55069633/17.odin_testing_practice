function reverseString(source_string) {
  let result_string = "";
  for (let i = source_string.length - 1; i >= 0; i--) {
    result_string += source_string[i];
  }
  return result_string;
}

export { reverseString };
