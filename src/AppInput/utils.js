const initRangeInput = () => {
  const sliders = document.querySelectorAll('input[type="range"]');
  sliders[0].addEventListener('input', (e) => {
    if(+sliders[0].value > +sliders[1].value){
      sliders[1].value = +sliders[0].value;
    }
  });
  sliders[1].addEventListener('input', (e) => {
    if(+sliders[1].value < +sliders[0].value){
      sliders[0].value = +sliders[1].value;
    }
  });
}

export { initRangeInput };