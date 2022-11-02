function* foo() {
  console.log("t1");
  const v = yield "执行到t2之前";
  console.log(v);
  console.log("t2");
}
const ga = foo();
const g1 = ga.next();
console.log(g1);
const g2 = ga.next("ionlycry");
console.log(g2);
