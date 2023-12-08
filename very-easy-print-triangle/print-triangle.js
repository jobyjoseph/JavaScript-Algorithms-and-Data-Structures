function printStarTriangle() {
  for (let i = 0; i < 5; i++) {
    const charArr = new Array(i + 1);
    console.log(charArr?.fill("*")?.join(" "));
  }
}

printStarTriangle();
