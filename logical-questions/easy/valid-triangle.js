function valid_trangle(side1, side2, side3) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side3 + side2 > side1) {
    return "Valid";
  }

  return "Invalid";
}
console.log(valid_trangle(8, 4, 8));
