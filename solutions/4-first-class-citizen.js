const run = (text) => {
      const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }
    return str.slice(-length).split('').reverse().join('');
  };

  
    return takeLast(text, 4);
  };
  
export default run;