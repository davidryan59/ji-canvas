import React from 'react'
import { Circle } from 'react-konva';

const ScoreNote = ({idx, len, row}) => (
  <Circle
    x={0.1 * row.startMs.val}
    y={0.1 * row.freqHz.val}
    radius={0.3 * (row.volDb.val + 20)}
    fill={'grey'}
    stroke={'black'}
    strokeWidth={1}
    onClick={()=>console.log(row)}
  />
)

export default ScoreNote
