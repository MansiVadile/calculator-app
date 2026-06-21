let expression = '';

const display = document.getElementById('result');
const exprDisplay = document.getElementById('expression');

function updateDisplay() {
  exprDisplay.textContent = expression;
  display.textContent = expression || '0';
}

// Number buttons
document.getElementById('n0').addEventListener('click', () => { expression += '0'; updateDisplay(); });
document.getElementById('n1').addEventListener('click', () => { expression += '1'; updateDisplay(); });
document.getElementById('n2').addEventListener('click', () => { expression += '2'; updateDisplay(); });
document.getElementById('n3').addEventListener('click', () => { expression += '3'; updateDisplay(); });
document.getElementById('n4').addEventListener('click', () => { expression += '4'; updateDisplay(); });
document.getElementById('n5').addEventListener('click', () => { expression += '5'; updateDisplay(); });
document.getElementById('n6').addEventListener('click', () => { expression += '6'; updateDisplay(); });
document.getElementById('n7').addEventListener('click', () => { expression += '7'; updateDisplay(); });
document.getElementById('n8').addEventListener('click', () => { expression += '8'; updateDisplay(); });
document.getElementById('n9').addEventListener('click', () => { expression += '9'; updateDisplay(); });
document.getElementById('dot').addEventListener('click', () => { expression += '.'; updateDisplay(); });

// Operator buttons
document.getElementById('add').addEventListener('click', () => { expression += '+'; updateDisplay(); });
document.getElementById('sub').addEventListener('click', () => { expression += '-'; updateDisplay(); });
document.getElementById('mul').addEventListener('click', () => { expression += '*'; updateDisplay(); });
document.getElementById('div').addEventListener('click', () => { expression += '/'; updateDisplay(); });
document.getElementById('per').addEventListener('click', () => { expression += '%'; updateDisplay(); });

// AC button
document.getElementById('ac').addEventListener('click', () => {
  expression = '';
  exprDisplay.textContent = '';
  display.textContent = '0';
});

// Delete button
document.getElementById('del').addEventListener('click', () => {
  expression = expression.slice(0, -1);
  updateDisplay();
});

// Equals button
document.getElementById('eq').addEventListener('click', () => {
  try {
    let answer = eval(expression);
    exprDisplay.textContent = expression + ' =';
    display.textContent = answer;
    expression = String(answer);
  } catch(e) {
    display.textContent = 'Error';
    expression = '';
  }
});

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key >= '0' && e.key <= '9') { expression += e.key; updateDisplay(); }
  else if (e.key === '+') { expression += '+'; updateDisplay(); }
  else if (e.key === '-') { expression += '-'; updateDisplay(); }
  else if (e.key === '*') { expression += '*'; updateDisplay(); }
  else if (e.key === '/') { expression += '/'; updateDisplay(); }
  else if (e.key === '.') { expression += '.'; updateDisplay(); }
  else if (e.key === 'Enter') document.getElementById('eq').click();
  else if (e.key === 'Backspace') document.getElementById('del').click();
  else if (e.key === 'Escape') document.getElementById('ac').click();
});
// Dark/Light Toggle
document.getElementById('toggleMode').addEventListener('click', function() {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    this.textContent = '☀️ Light';
  } else {
    this.textContent = '🌙 Dark';
  }
});