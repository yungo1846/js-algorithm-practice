const REGEXP = /^[a-zA-Z][a-zA-Z]$/;
const multiNumber = 65536;

const getDevidedObjectFromString = (string) => {
  const devidedArray = [];
  string.split("").forEach((letter, index) => {
    if (index + 1 === string.length) return;
    const unit = letter + string[index + 1];
    if (!REGEXP.test(unit)) return;
    devidedArray.push(unit.toUpperCase());
  });
  const devidedObject = {};
  devidedArray.forEach((unit) => {
    devidedObject[unit] ? devidedObject[unit]++ : (devidedObject[unit] = 1);
  });
  return devidedObject;
};

function solution(str1, str2) {
  const devidedObj1 = getDevidedObjectFromString(str1);
  const devidedObj2 = getDevidedObjectFromString(str2);

  const union = [];
  const intersection = [];

  Object.entries(devidedObj1).forEach(([obj1Key, obj1Value]) => {
    if (devidedObj2[obj1Key] && !intersection.includes(obj1Key)) {
      for (let i = 0; i < Math.min(obj1Value, devidedObj2[obj1Key]); i++) {
        intersection.push(obj1Key);
      }
      for (let i = 0; i < Math.max(obj1Value, devidedObj2[obj1Key]); i++) {
        union.push(obj1Key);
      }
    } else {
      for (let i = 0; i < obj1Value; i++) {
        union.push(obj1Key);
      }
    }
  });
  Object.entries(devidedObj2).forEach(([obj2Key, obj2Value]) => {
    if (intersection.includes(obj2Key)) return;

    for (let i = 0; i < obj2Value; i++) {
      union.push(obj2Key);
    }
  });

  if (union.length === 0) return 1 * multiNumber;
  return Math.floor((intersection.length / union.length) * multiNumber);
}
