function simpleEquations(A: number, B: number, C: number): [number, number, number] | string {
    for (let x = -10000; x <= 10000; x++) {
      for (let y = x + 1; y <= 10000; y++) {
        const z = A - x - y;
  
        if (x * y * z === B && Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2) === C) {
          return [x, y, z];
        }
      }
    }
  
    return "No solution";
  }

  console.log(simpleEquations(1, 2, 3));
  console.log(simpleEquations(6, 6, 14));
  