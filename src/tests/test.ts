import { Easing, DemoImage } from '../index';

const cubic = Easing.cubic;
const noise = Easing.noise(0.05, 5);

console.log(Easing.polynomial(2.5).in(0.3));