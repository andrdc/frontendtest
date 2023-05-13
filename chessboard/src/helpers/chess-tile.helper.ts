type GetBackground = (row: number, column: number) => [boolean, boolean];

const getBackground: GetBackground = (row: number, column: number) => {
  let backgrounds: [boolean, boolean] = [false, false];

  if (column % 2 === 0) {
    if (row % 2 === 0) backgrounds[0] = true;
    else backgrounds[1] = true;
  } else {
    if (row % 2 === 0) backgrounds[1] = true;
    else backgrounds[0] = true;
  }

  return backgrounds;
}

export { getBackground };