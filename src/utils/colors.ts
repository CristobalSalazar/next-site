export function rgb2rgba(rgbstr: string) {
  const rgbRegex = /rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/;
  if (!rgbRegex.test(rgbstr)) {
    throw new Error("Invalid rgb string format");
  } else {
    const startIndex = rgbstr.indexOf("(");
    const lastindex = rgbstr.indexOf(")");
    const substr =
      "rgba" + rgbstr.substr(startIndex, lastindex - startIndex) + ", 1)";
    return substr;
  }
}

export function rgbaChangeAlpha(rgbaString: string, alpha: number) {
  const lastComma = rgbaString.lastIndexOf(",");
  const start = rgbaString.substring(0, lastComma + 1);
  return start + alpha.toString() + ")";
}
