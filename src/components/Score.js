import React from 'react'
import { Stage, Layer } from 'react-konva';

import ScoreNote from './ScoreNote'

// In React, when iterating over array, must supply unique 'key' prop
let nextKey = 0

const Score = ({noteTable}) => (
  <Stage width={window.innerWidth} height={Math.floor(0.25 * window.innerHeight)}>
    <Layer>
      {noteTable.map( (noteRow, idx) =>
        <ScoreNote
          idx={idx}
          len={noteTable.length}
          key={nextKey++}
          row={noteRow}
        />
      )}
    </Layer>
  </Stage>
)

export default Score
