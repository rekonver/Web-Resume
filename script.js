// Перемикач Hard/Soft Skills
const hardBtn = document.getElementById('hard-btn');
const softBtn = document.getElementById('soft-btn');
const hardSkills = document.getElementById('hard-skills');
const softSkills = document.getElementById('soft-skills');

hardBtn.addEventListener('click', () => {
  hardBtn.classList.add('active');
  softBtn.classList.remove('active');
  hardSkills.classList.remove('hidden');
  softSkills.classList.add('hidden');
});

softBtn.addEventListener('click', () => {
  softBtn.classList.add('active');
  hardBtn.classList.remove('active');
  softSkills.classList.remove('hidden');
  hardSkills.classList.add('hidden');
});

// Віджет Portfolio
const portfolioWidgetBtn = document.getElementById('portfolio-widget-btn');
const portfolioWidget = document.getElementById('portfolio-widget');
const closeWidgetBtn = document.getElementById('close-widget');

portfolioWidgetBtn.addEventListener('click', () => {
  portfolioWidget.classList.remove('hidden');
});

closeWidgetBtn.addEventListener('click', () => {
  portfolioWidget.classList.add('hidden');
});

portfolioWidget.addEventListener('click', (event) => {
  if (event.target === portfolioWidget) {
    portfolioWidget.classList.add('hidden');
  }
});
