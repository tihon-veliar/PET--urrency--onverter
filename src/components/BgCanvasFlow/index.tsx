/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactP5Wrapper } from "@p5-wrapper/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sketch(p5: any) {
  let points: any[] = []
  let mult: number  = 1
  p5.setup = () =>{
    console.log('points', points)
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.background('#F3F2EA')
    p5.angleMode(p5.DEGREES)
    p5.noiseDetail(1)

    const density = 50
    const space = p5.width / density

    for (let x = 0; x < p5.width; x += space) {
        for (let y = 0; y < p5.height; y += space) {
            const p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10))
            points.push(p)
        }
    }

    p5.shuffle(points, true)
    mult = p5.random(0.002, 0.01)
  };

  p5.draw = () => {
    p5.noStroke()
    let max = 0 
    if (p5.frameCount * 5 <= points.length) {
         max = p5.frameCount * 5
    } else {
         max = points.length
    }

    for (let i = 0; i < max; i++) {
        p5.fill(251,65,97)
        const angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
        p5.ellipse(points[i].x, points[i].y, 0.5) 

    }
  };

  p5.windowResized = () =>{
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background('#F3F2EA')

    const density = 30
    const space = p5.width / density
    points = []
    for (let x = 0; x < p5.width; x += space) {
        for (let y = 0; y < p5.height; y += space) {
            const p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10))
            points.push(p)
        }
    }
    p5.shuffle(points, true)
    mult = p5.random(0.002, 0.01)
    
  }
}

const BgCanvasFlow = () => <ReactP5Wrapper sketch={sketch}/>


export default BgCanvasFlow;