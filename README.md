# eaz
#### ↝ Simple and flexible easing package for smooth animations
Installation:
```npm i eaz```

#### [npm](https://www.npmjs.com/package/eaz) ![npmlogo](https://raw.githubusercontent.com/npm/logos/master/npm%20square/npm-16.png)
#### [documentation](https://robertmay2003.gitbook.io/eaz/) 📖

### Use Predefined Easing Functions
  Using predefined easing functions is as simple as referencing a static property of the Easing class.
  
```javascript
import { Easing } from 'eaz';

Easing.cubic.in(0.3); // Output: 0.0269
```
*Every Easing object contains an in, out, and inOut method, and more options. Refer to the documentation for theEasing class for more information.*


### Create Custom Easing Functions
  Use eaz's generational methods to create custom easing functions quickly
  ```javascript
import { Easing } from 'eaz';
  
Easing.polynomial(2.5).in(0.3); // Output: 0.0493
```
  Or create entirely custom easing methods from scratch
  ```javascript
import { Easing } from 'eaz';
  
const myEasing = new Easing(t => t ** 2.5);
myEasing.in(0.3); // Output: 0.0493
```

### Easily Generate Demo Images
  Generate images to test your easing functions
  ```javascript
import { Easing, DemoImage } from '../index';

DemoImage.inOut(Easing.cubic, 'images/cubicInOut.png');
```
Output:
![images/cubicInOut.png](https://raw.githubusercontent.com/robertmay2003/eaz/master/src/tests/images/cubicInOut.png)
