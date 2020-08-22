import { Easing } from './index';
import DemoImage from './DemoImage';

const cubic = Easing.cubic;
const noise = Easing.noise(0.05, 10);

DemoImage.interpolate(cubic, noise, 'src/images/cubicNoiseInterpolate.png')