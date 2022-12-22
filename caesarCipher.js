function caesarCipher(old_string, shift = 1) {
  const alphabetLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const alphabetUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let new_string = "";
  for (let i = 0; i < old_string.length; i++) {
    if (
      old_string[i].charCodeAt() <= "Z".charCodeAt() &&
      old_string[i].charCodeAt() >= "A".charCodeAt()
    ) {
      let processed_letter =
        alphabetUpperCase[
          (old_string[i].charCodeAt() - "A".charCodeAt() + shift) % 26
        ];
      new_string += processed_letter;
    } else if (
      old_string[i].charCodeAt() <= "z".charCodeAt() &&
      old_string[i].charCodeAt() >= "a".charCodeAt()
    ) {
      let processed_letter =
        alphabetLowerCase[
          (old_string[i].charCodeAt() - "a".charCodeAt() + shift) % 26
        ];
      new_string += processed_letter;
    } else {
      new_string += old_string[i];
    }
  }

  return new_string;
}

export { caesarCipher };
