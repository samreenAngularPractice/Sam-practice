function sayHello(name) {
  console.log('Hi ' + name);
}

let testFunc = (name="Test user") => "Hi " + name

console.log(testFunc())

let checkinput = (callBack, ...strings) => {
for (const str of strings) {
  if (str=="")
  console.log(callBack(str))
}
};

const validate = () => "No Argument is provided"

checkinput(validate, "")