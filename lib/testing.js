const style = function(text, code) {
  return "\033[" + code + "m" + text + "\033[0m";
}

const redFg = function(text) {
  return style(text, 31);
}

const greenFg = function(text) {
  return style(text, 32);
}

const yellowFg = function(text) {
  return style(text, 33);
}

const italics = function(text) {
  return style(text, 3);
}

const underline = function(text) {
  return style(text, 4);
}

const printHeadline = function(text) {
  console.log(yellowFg(italics(underline(text))));
}

const isApproximatelySame = function(expected, actual, precision) {
  if(expected === actual) {
    return true;
  }

  return actual >= (expected - precision) && actual <= (expected + precision) ;
}

const isEqual = function(list1, list2) {
  if (list1.length === 0 && list2.length === 0) return true;

  if (list1.length !== list2.length) return false;

  if (list1[0] !== list2[0]) return false;

  return isEqual(list1.slice(1), list2.slice(1)); 
}

const generateSuccessMessage = function(message) {
  return "✅ " + message;
}

const generateFailureMessage = function(expected, actual, message) {
  const expectedValue = greenFg("\n\tExpected : \t" + expected);
  const actualValue = redFg("\n\tActual   : \t" + actual);

  return "❌ " + message + expectedValue + actualValue;
}

let passedAssertions = 0;
const getPassedAssertions = function() {
  return passedAssertions;
}

let totalAssertions = 0;
const getTotalAssertions = function() {
  return totalAssertions;
}

const showTestResult = function(isTestPassed, expected, actual, testName) {
  const successMessage = generateSuccessMessage(testName); 
  const failureMessage = generateFailureMessage(expected, actual, testName); 
  const message = isTestPassed ? successMessage : failureMessage;

  passedAssertions += isTestPassed;
  totalAssertions++;

  console.log(message);
}

const decorateSummaryMessage = function(passedAssertions, totalAssertions) {
  const failedAssertions = totalAssertions - passedAssertions;
  const coloredPassedMessage = (failedAssertions > 0) ? redFg(" test passed") : greenFg(" test passed"); 

  const summaryMessage = yellowFg("Summary : ") + passedAssertions + "/" + totalAssertions + coloredPassedMessage;
  return summaryMessage;
}

const showTestSummary = function() {
  console.log();
  const passedAssertions = getPassedAssertions();
  const totalAssertions = getTotalAssertions();
  const summaryMessage = decorateSummaryMessage(passedAssertions, totalAssertions);
  console.log(summaryMessage.padStart(80));
  console.log();
}

const assert = function(expected, actual, testName) {
  showTestResult(isApproximatelySame(actual, expected, 0.01), expected, actual, testName); 
}

const assertArrayEqual = function(expected, actual, testName) {
  showTestResult(isEqual(actual, expected), expected, actual, testName);
}

exports.assert = assert;
exports.assertArrayEqual = assertArrayEqual;
exports.showTestSummary = showTestSummary;
exports.printHeadline = printHeadline;
