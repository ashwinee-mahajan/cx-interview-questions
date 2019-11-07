export const getRandomNumbers = (i, min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    let randomNumbers = Array.from({length: i}, () => Math.floor(Math.random()* (max - min)) + min);    
    return [...new Set(randomNumbers)]
   }
   