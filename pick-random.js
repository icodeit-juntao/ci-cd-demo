
function pickRandom(array, count) {
    let shuffledArray = [...array];
    
    // Fisher-Yates shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray.slice(0, count);
  }

export default pickRandom;