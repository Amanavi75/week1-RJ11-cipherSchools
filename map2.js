console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }),
  );
  // Visit 0
  // Visit 2
  // [2, empty, 6]