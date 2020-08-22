import PImage from 'pureimage';
import { Easing } from './index';
import * as fs from 'fs';

class DemoImage {
    private static _save(image: any, outPath: string) {
        PImage.encodePNGToStream(image, fs.createWriteStream(outPath)).then(() => {
            console.log(`wrote out the png file to ${outPath}`);
        }).catch((e)=>{
            console.log(e);
        });
    }

    private static _createImage(easingFunction: (t: number) => number, outPath: string, steps: number) {
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

        DemoImage._save(image, outPath);
    }

    static in(easing: Easing, outPath: string, steps = 200) {
        DemoImage._createImage(easing.in, outPath, steps);
    }

    static out(easing: Easing, outPath: string, steps = 200) {
        DemoImage._createImage(easing.out.bind(easing), outPath, steps);
    }

    static inOut(easing: Easing, outPath: string, steps = 200) {
        DemoImage._createImage(easing.inOut.bind(easing), outPath, steps);
    }

    static interpolate(inEasing: Easing, outEasing: Easing, outPath: string, smoothing = 0.25, steps = 200) {
        DemoImage._createImage(
            (t: number) => Easing.interpolate(inEasing, outEasing, t, smoothing),
            outPath,
            steps
        );
    }
}

export default DemoImage;
