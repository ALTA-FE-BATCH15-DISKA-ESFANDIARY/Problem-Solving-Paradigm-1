function dragonOfLoowater(dragonHead: number[], knightHead: number[]): number | string {
    dragonHead.sort((a, b) => a - b); 
    knightHead.sort((a, b) => a - b); 
  
    let diameterD = 0;
    let diameterK = 0;
    let totalDiameter = 0;
  
    while (diameterD < dragonHead.length && diameterK < knightHead.length) {
      if (knightHead[diameterK] >= dragonHead[diameterD]) {
        totalDiameter += knightHead[diameterK]; 
        diameterD++;
        diameterK++;
      } else {
        diameterK++;
      }
    }
  
    if (diameterD === dragonHead.length) {
      return totalDiameter;
    } else {
      return "knight fall";
    }
  }
  
  const test1 = dragonOfLoowater([5, 4], [7, 8, 4]);
  console.log(test1);  
  
  const test2 = dragonOfLoowater([5, 10], [5]);
  console.log(test2);  
  
  const test3 = dragonOfLoowater([7, 2], [4, 3, 1, 2]);
  console.log(test3);  
  
  const test4 = dragonOfLoowater([7, 2], [2, 1, 8, 5]);
  console.log(test4);  
  