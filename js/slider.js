import {priceField} from './validate-form.js';

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {

      return value.toFixed(0);
    },
    from: function (value) {

      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

function disableSlider() {
  sliderElement.setAttribute('disabled', true);
}

function enableSlider() {
  sliderElement.removeAttribute('disabled');
}

export {disableSlider, enableSlider};
