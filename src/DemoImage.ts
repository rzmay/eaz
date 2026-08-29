import PImage from 'pureimage';
import { Easing } from './index';

class DemoImage {
    private static _createImage(easingFunction: (t: number) => number, steps: number) {
        // Create image & get context
        const image = PImage.make(512, 512);
        const ctx = image.getContext('2d');

        // Clear image
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0,0,512,512);

        // Draw stroke
        ctx.beginPath();
        ctx.moveTo(0, 512);
        for (let i = 0; i < 1; i += 1 / steps) {
            const x = i * 512;
            const y = (1 - easingFunction(i)) * 512;

            ctx.lineTo(x, y);
        }
        ctx.stroke();

        return PImage;
    }

    static in(easing: Easing, steps = 200) {
        DemoImage._createImage(easing.in, steps);
    }

    static out(easing: Easing, steps = 200) {
        DemoImage._createImage(easing.out.bind(easing), steps);
    }

    static inOut(easing: Easing, steps = 200) {
        DemoImage._createImage(easing.inOut.bind(easing), steps);
    }

    static interpolate(inEasing: Easing, outEasing: Easing, smoothing = 0.25, steps = 200) {
        DemoImage._createImage(
            (t: number) => Easing.interpolate(inEasing, outEasing, t, smoothing),
            steps
        );
    }
}

export default DemoImage;
