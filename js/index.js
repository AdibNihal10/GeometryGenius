const areashow = document.getElementById("Entry");
let count = 0;
document.getElementById("areaT").addEventListener("click", function () {
  count += 1;

  const bvalue = document.getElementById("bvalue");
  const bbvalue = bvalue.value;
  const hvalue = document.getElementById("hvalue");
  const hvaluee = hvalue.value;
  if (!isNaN(hvaluee) && !isNaN(bbvalue)) {
    const name = document.getElementById("triangle").innerText;

    const areaT = 0.5 * parseFloat(bbvalue) * parseFloat(hvaluee);
    const setp = areaT.toFixed(2);
    setArea(count, name, setp);
    bvalue.value = "";
    hvalue.value = "";
  } else {
    alert("Enter a number please");
    bvalue.value = "";
    hvalue.value = "";
  }
});

document.getElementById("ellipse").addEventListener("click", function () {
  count += 1;
  const pivalue = Math.PI.toFixed(2);
  const avalue = document.getElementById("avalue").innerText;
  const bvalue = document.getElementById("rhvalue").innerText;
  const ellipsename = document.getElementById("Ellipsename").innerText;

  const areaEllipse = pivalue * parseFloat(avalue) * parseFloat(bvalue);
  const setprecision = areaEllipse.toFixed(2);
  setArea(count, ellipsename, setprecision);
});

function setArea(count, name, setp) {
  const tr = document.createElement("p");
  tr.classList.add("my-4");

  tr.innerHTML = `
    ${count}. ${name}<span class="ml-2"></span> ${setp}cm<sup>2</sup> <button class="ml-2 bg-blue-700 text-white w-32 h-10 font-bold rounded">Convert to m<sup>2</sup></button>`;

  areashow.appendChild(tr);
}
document.getElementById("blogid").addEventListener("click", function () {
  window.location.href = "https://cloud.google.com/products/databases";
});
