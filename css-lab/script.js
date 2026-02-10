const target = document.getElementById('target-element');
const codeOutput = document.getElementById('code-output');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');
const playBtn = document.getElementById('play-btn');

// Control Elements
const controls = {
    rotate: document.getElementById('rotate'),
    scale: document.getElementById('scale'),
    radius: document.getElementById('radius'),
    duration: document.getElementById('duration'),
    easing: document.getElementById('easing'),
    preset: document.getElementById('preset')
};

// Value Displays
const displays = {
    rotate: document.getElementById('rotate-val'),
    scale: document.getElementById('scale-val'),
    radius: document.getElementById('radius-val'),
    duration: document.getElementById('duration-val')
};

function updatePreview() {
    const rotate = controls.rotate.value;
    const scale = controls.scale.value;
    const radius = controls.radius.value;
    const duration = controls.duration.value;
    const easing = controls.easing.value;
    const preset = controls.preset.value;

    // Update Displays
    displays.rotate.textContent = `${rotate}deg`;
    displays.scale.textContent = scale;
    displays.radius.textContent = `${radius}px`;
    displays.duration.textContent = `${duration}s`;

    // Apply Styles
    target.style.transition = `all ${duration}s ${easing}`;
    target.style.transform = `rotate(${rotate}deg) scale(${scale})`;
    target.style.borderRadius = `${radius}px`;
    
    if (preset !== 'none') {
        target.style.animation = preset;
    } else {
        target.style.animation = 'none';
    }

    // Update Code Output
    const cssCode = `#target-element {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  border-radius: ${radius}px;
  transform: rotate(${rotate}deg) scale(${scale});
  transition: all ${duration}s ${easing};
  ${preset !== 'none' ? `animation: ${preset};` : ''}
}`;
    codeOutput.textContent = cssCode;
}

// Event Listeners
Object.values(controls).forEach(control => {
    control.addEventListener('input', updatePreview);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeOutput.textContent);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = '#10b981';
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    }, 2000);
});

resetBtn.addEventListener('click', () => {
    controls.rotate.value = 0;
    controls.scale.value = 1;
    controls.radius.value = 12;
    controls.duration.value = 0.3;
    controls.easing.value = 'ease';
    controls.preset.value = 'none';
    updatePreview();
});

playBtn.addEventListener('click', () => {
    // Briefly toggle a state to show transition
    const currentRotate = controls.rotate.value;
    target.style.transform = `rotate(${parseInt(currentRotate) + 360}deg) scale(${controls.scale.value})`;
    setTimeout(() => {
        target.style.transform = `rotate(${currentRotate}deg) scale(${controls.scale.value})`;
    }, parseFloat(controls.duration.value) * 1000);
});

// Initialize
updatePreview();
