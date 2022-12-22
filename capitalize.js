function capitalize(source_string) {
  let new_string = "";
  for (let i = 0; i < source_string.length; i++) {
    if (i == 0) new_string += source_string[i].toUpperCase();
    else new_string += source_string[i];
  }
  return new_string;
}

export { capitalize };
