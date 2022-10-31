
function paddingLeft(str: string, length: number) {
  const rest = length - str.length;
  return '0'.repeat(rest > 0 ? rest : 0) + str;
}

export default paddingLeft
