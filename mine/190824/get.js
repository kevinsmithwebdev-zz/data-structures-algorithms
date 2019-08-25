const person1 = {
  location: {
    address: {
      state: "Arkansas",
    },
  },
};

const person2 = {
  location: undefined,
  phone: null,
};

const isObject = o => typeof o === 'object' && o !== null;
const hasProp = (o, p) => o.hasOwnProperty(p);
const isValid = (o, p) => isObject(o) && hasProp(o, p);

const myGet = (obj, path, defaultValue) => {
  // defaultValue = null
    // Checking if path is array returns true
    const getPATH = Array.isArray(path) ? path : path.split('.').filter(i => i.length);
    if (!getPATH.length) {
    //If 1st param returns undefined, default to defaultValue, if not return obj
      return obj === undefined ? defaultValue : obj;
    }
    // Protecting first parameter if not of type obj like you mentioned above
    if (typeof obj !== 'object' ) {
      return defaultValue;
    }
    return myGet(obj[getPATH.shift()], getPATH, defaultValue);
 }

const testMatrix = [
  { test: myGet(person1, 'location'), answer: person1.location },
  { test: myGet(person1.location.address, 'state'), answer: 'Arkansas' },
  { test: myGet(person1, 'location.address.state'), answer: 'Arkansas' },
  { test: myGet(person1, 'location.address.state', 'Hawaii'), answer: 'Arkansas' },
  { test: myGet(person1.location.address, 'state.abbreviation'), answer: undefined },
  { test: myGet(person2, 'location', 'no location'), answer: undefined },
  { test: myGet(person2, 'location'), answer: undefined },
  { test: myGet(person2.location, 'address'), answer: undefined },
  { test: myGet(person2.location, 'address', 'no address'), answer: 'no address' },
  { test: myGet(person2, 'phone'), answer: null },
  { test: myGet(person2, 'phone', 'no phone'), answer: null },
  { test: myGet(person2, 'phone.prefix'), answer: undefined },
  { test: myGet(person2, 'phone.prefix.otherProp'), answer: undefined },
];

let numFails = 0;
testMatrix.forEach((el, i) => {
  const passed = el.test === el.answer;
  console.log(`Test ${i} ${passed ? 'passed' : 'failed'}.`);
  if (!passed) {
    console.log('*** test returned:', el.test);
    console.log('*** test expected:', el.answer);
  }
  numFails += !passed;
});

console.log('\nTotal test fails:', numFails);
