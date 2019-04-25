import * as actions from './index'

describe('actions', () => {

  it('doNothing works', () => {
    expect(actions.doNothing()).toEqual({
      type: 'DO_NOTHING'
    })
  })

  it('addNote works', () => {
    expect(actions.addNote()).toEqual({
      type: 'ADD_NOTE',
      noteId: 100,
    })
  })

  it('dupNote works', () => {
    expect(actions.dupNote({noteId: 321})).toEqual({
      type: 'DUP_NOTE',
      noteId: 321,
      newNoteId: 101
    })
  })

  it('delNote works', () => {
    expect(actions.delNote({noteId: 4519})).toEqual({
      type: 'DEL_NOTE',
      noteId: 4519
    })
  })

  it('SETFREQHZ works', () => {
    expect(actions.SETFREQHZ({noteId: 2990, val: 256.0304})).toEqual({
      type: 'ROW_SETFREQHZ',
      noteId: 2990,
      freqHz: 256.0304
    })
  })

  it('SETLENMS works', () => {
    expect(actions.SETLENMS({noteId: 143, val: 306.7425})).toEqual({
      type: 'ROW_SETLENMS',
      noteId: 143,
      lenMs: 306.7425
    })
  })

})
