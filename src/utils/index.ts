export const capitalizeString = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const pokedexLimiter = (generation: number) => {
  let limiter = 0

  switch (generation) {
    case 0:
      limiter = 0      
      break;
    case 1:
      limiter = 151      
      break;
    case 2:
      limiter = 251      
      break;
    case 3:
      limiter = 386      
      break;
    case 4:
      limiter = 493      
      break;
    case 5:
      limiter = 649      
      break;
    case 6:
      limiter = 721
      break;
    case 7:
      limiter = 809
      break;
    case 8:
      limiter = 905
      break;
    case 9:
    limiter = 1025
      break;
    default:
      break;
  }

  return limiter
}

export const getUrl = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  return Number(id)
}

export const makeArray = (inputLength: number) => {
  if (Number.isInteger(inputLength)){
    const array = Array.from({ length: inputLength }, (_, index) => index + 1);
    return array;
  } else {
    const array = Array.from({ length: Math.floor(inputLength) + 1 }, (_, index) => index + 1);
    return array;
  }
  
}

