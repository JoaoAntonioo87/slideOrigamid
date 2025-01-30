import Slide from "./slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
console.log(slide.changeSlide);

slide.changeSlide(1);
