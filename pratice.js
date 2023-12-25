function test() {
  console.log("dsd");
}

const test1 = (props) => {
  console.log("test");
};

function* getMulltipleValues() {
  yield 56;
  yield "farcry";
}
const result = getMulltipleValues();
console.log(result.next().value);
console.log(result.next().value);

a = "hello";
console.log(a); //
var a;
