function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function backspace() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }