test("Basic testing", function(assert) {
  assert.propEqual(convertIntegerToRoman("1"), {value: "I", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-2");
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-3")
});


test("0 testing", function(assert){
  assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4");
  assert.propEqual(convertRomanToInteger("0"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-5");
});

test("5 testing", function(assert) {
  assert.propEqual(convertIntegerToRoman("5"), {value: 'V', message: '', result: true}, "TC-6");
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message:'', result:true}, "TC-7");
});

test("Invalid out of range input", function(assert) {
  assert.propEqual(convertIntegerToRoman("4000"), {value:0, message:'Out of range (1-3999)', result:false}, "TC-8");
  assert.propEqual(convertRomanToInteger("F"), {value: 0, message:'Please enter a valid roman', result: false}, "TC-9");
});

test("50 testing", function(assert) {
  assert.propEqual(convertIntegerToRoman("50"), {value: "L", message: '', result: true}, "TC-10");
  assert.propEqual(convertRomanToInteger("L"), {value: 50, message: '', result: true}, "TC-11");
});

test("Invalid input - characters", function(assert) {
  assert.propEqual(convertIntegerToRoman("abc"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-12");
  assert.propEqual(convertRomanToInteger("abc"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13");
});

test("Invalid input - out of range", function(assert) {
  assert.propEqual(convertIntegerToRoman("10000"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-14");
  assert.propEqual(convertRomanToInteger("MMMMMMMMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-15");
});

test("Invalid input - mixed characters and numbers", function(assert) {
  assert.propEqual(convertIntegerToRoman("10a0"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-16");
  assert.propEqual(convertIntegerToRoman("aa0"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-17");
  assert.propEqual(convertIntegerToRoman("1aa"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-18");
});

test("Invalid input - invalid Roman characters", function(assert) {
  assert.propEqual(convertRomanToInteger("0"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-19");
  assert.propEqual(convertRomanToInteger("L1"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-20");
  assert.propEqual(convertRomanToInteger("1L"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-21");
});

test("Mixed valid input integer to roman", function(assert) {
  assert.propEqual(convertIntegerToRoman("100"), {value: "C", message: '', result: true}, "TC-22");
  assert.propEqual(convertIntegerToRoman("101"), {value: "CI", message: '', result: true}, "TC-23");
  assert.propEqual(convertIntegerToRoman("110"),{value: 'CX', message: '', result: true}, "TC-24");
  assert.propEqual(convertIntegerToRoman("111"), {value: "CXI", message: '', result: true}, "TC-25");
  assert.propEqual(convertIntegerToRoman("1000"), {value: "M", message: '', result: true}, "TC-26");
  assert.propEqual(convertIntegerToRoman("1001"), {value: 'MI', message: '', result: true}, "TC-27");
  assert.propEqual(convertIntegerToRoman("5"), {value:'V', message: '', result: true}, "TC-28");
  assert.propEqual(convertIntegerToRoman("6"), {value: "VI", message: '', result: true}, "TC-29");
  assert.propEqual(convertIntegerToRoman("10"), {value: "X", message: '', result: true}, "TC-30");
  assert.propEqual(convertIntegerToRoman("11"), {value: 'XI', message: '', result: true}, "TC-31");
  assert.propEqual(convertIntegerToRoman("50"), {value: "L", message: '', result: true}, "TC-32");
  assert.propEqual(convertIntegerToRoman("51"), {value: "LI", message: '', result: true}, "TC-33");
  assert.propEqual(convertIntegerToRoman("3999"), {value: "MMMCMXCIX", message: '', result: true}, "TC-34");
});

test("Mixed valid input roman to integer", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-35");
  assert.propEqual(convertRomanToInteger("II"), {value: 2, message: '', result: true}, "TC-36");
  assert.propEqual(convertRomanToInteger("III"), {value: 3, message: '', result: true}, "TC-37");
  assert.propEqual(convertRomanToInteger("IV"), {value: 4, message:'', result: true}, "TC-38");
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-39");
  assert.propEqual(convertRomanToInteger("VI"), {value: 6, message: '', result: true}, "TC-40");
  assert.propEqual(convertRomanToInteger("IX"), {value: 9, message:'', result: true}, "TC-41");
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-42");
  assert.propEqual(convertRomanToInteger("XI"), {value: 11, message: '', result: true}, "TC-43");
  assert.propEqual(convertRomanToInteger("L"), {value: 50, message: '', result: true}, "TC-44");
  assert.propEqual(convertRomanToInteger("LI"), {value: 51, message: '', result: true}, "TC-45");
  assert.propEqual(convertRomanToInteger("XC"), {value: 90, message:'', result: true}, "TC-46");
  assert.propEqual(convertRomanToInteger("C"), {value: 100, message:'', result: true}, "TC-47");
  assert.propEqual(convertRomanToInteger("CI"), {value: 101, message:'', result: true}, "TC-48");
  assert.propEqual(convertRomanToInteger("CD"), {value: 400, message:'', result: true}, "TC-49");
  assert.propEqual(convertRomanToInteger("D"), {value: 500, message:'', result: true}, "TC-50");
  assert.propEqual(convertRomanToInteger("DI"), {value: 501, message: '', result: true}, "TC-51");
  assert.propEqual(convertRomanToInteger("DX"), {value: 510, message: '', result: true}, "TC-52");
});

test("Invalid Roman numerals", function(assert) {
  assert.propEqual(convertRomanToInteger("IL"),{value: 0, message:'Please enter a valid roman', result: false}, "TC-53");
  assert.propEqual(convertRomanToInteger("IC"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-54");
  assert.propEqual(convertRomanToInteger("ID"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-55");
  assert.propEqual(convertRomanToInteger("IM"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-56");
  assert.propEqual(convertRomanToInteger("XD"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-57");
  assert.propEqual(convertRomanToInteger("XM"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-58");
  assert.propEqual(convertRomanToInteger("VX"), {value: 0, message:'Please enter a valid roman', result: false}, "TC-59");
  assert.propEqual(convertRomanToInteger("VL"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-60");
  assert.propEqual(convertRomanToInteger("VC"),{value: 0, message:'Please enter a valid roman', result: false}, "TC-61");
  assert.propEqual(convertRomanToInteger("VD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-62");
  assert.propEqual(convertRomanToInteger("VM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-63");
  assert.propEqual(convertRomanToInteger("LC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-64");
  assert.propEqual(convertRomanToInteger("LD"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-65");
  assert.propEqual(convertRomanToInteger("LM"), {value: 0, message:'Please enter a valid roman', result: false}, "TC-66");
  assert.propEqual(convertRomanToInteger("DM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-67");
  assert.propEqual(convertRomanToInteger("DD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-68");
  assert.propEqual(convertRomanToInteger("LL"),{value: 0, message:'Please enter a valid roman', result: false}, "TC-69");
  assert.propEqual(convertRomanToInteger("VV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-70");
  assert.propEqual(convertRomanToInteger("IIII"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-71");
  assert.propEqual(convertRomanToInteger("XXXX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-72");
  assert.propEqual(convertRomanToInteger("CCCC"),{value: 0, message: 'Please enter a valid roman', result: false}, "TC-73");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-74");
});

