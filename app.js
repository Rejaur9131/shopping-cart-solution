function upadateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //update product total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
}
// handle phos=ne increase decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
  upadateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  upadateProductNumber("phone", 1219, false);
});

// handle case increase decrease events
document.getElementById("case-plus").addEventListener("click", function () {
  /* const caseInput = document.getElementById("case-number");
  const caseNumber = caseInput.value;
  caseInput.value = parseInt(caseNumber) + 1; */
  upadateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  /* const caseInput = document.getElementById("case-number");
  const caseNumber = caseInput.value; */
  upadateProductNumber("case", 59, false);
  //   caseInput.value = parseInt(caseNumber) - 1;
});
