// @flow
import type { Loop } from '../types/models/Loop';

const fs = require('fs');
const path = require('path');

export default class LoopFileIO {
  static LoopsFilePath = path.resolve(__dirname, '..', 'loops.json');

  static loops = [];

  static readLoops() {
    const loopFileExists = fs.existsSync(LoopFileIO.LoopsFilePath);
    if (loopFileExists) {
      const loops = fs.readFileSync(LoopFileIO.LoopsFilePath, 'utf8');
      LoopFileIO.loops = JSON.parse(loops);
    }
  }

  static saveLoop(loop: Loop) {
    LoopFileIO.loops.push(loop);
    const serializedData = JSON.stringify(LoopFileIO.loops);
    fs.writeFileSync(LoopFileIO.LoopsFilePath, serializedData);
  }
}
