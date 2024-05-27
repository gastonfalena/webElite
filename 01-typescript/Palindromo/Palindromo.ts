const Palindromo = (cadena: string): boolean | undefined => {
  cadena = cadena.toLocaleLowerCase().trim()

  if (cadena.length <= 1) {
    return true
  }
  if (cadena[0] !== cadena[cadena.length - 1]) {
    return false
  }
  cadena = cadena.slice(1)
  cadena = cadena.slice(0, -1)
  return Palindromo(cadena)
}

console.log(Palindromo('padap'))
console.log(Palindromo('padaa'))
