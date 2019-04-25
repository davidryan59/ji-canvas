import noteTable from './noteTable'

describe('noteTable reducer', () => {
  it('should handle initial state', () => {
    expect(
      noteTable(undefined, {type:''})
    ).toEqual([])
  })

  it('should handle ADD_NOTE', () => {
    expect(
      noteTable([], {
        type: 'ADD_NOTE',
        noteId: 42,
        noteTypeISTHISNEEDED: 'Test type'
      })
    ).toEqual([
      {
        noteId: 42,
        freqHz: 'Label42',
        noteTypeISTHISNEEDED: 'Test type'
      }
    ])

    expect(
      noteTable([
        {
          noteId: 42,
          freqHz: 'Label42',
          noteTypeISTHISNEEDED: 'Test type'
        }
      ], {
        type: 'ADD_NOTE',
        noteId: 160,
        noteTypeISTHISNEEDED: 'testing 123'
      })
    ).toEqual([
      {
        noteId: 42,
        freqHz: 'Label42',
        noteTypeISTHISNEEDED: 'Test type'
      },
      {
        noteId: 160,
        freqHz: 'Label160',
        noteTypeISTHISNEEDED: 'testing 123'
      }
    ])

  })

  it('should handle DEL_NOTE', () => {
    expect(
      noteTable([
        {
          noteId: 42,
          freqHz: 'Label42',
          noteTypeISTHISNEEDED: 'Test type'
        },
        {
          noteId: 160,
          freqHz: 'Label160',
          noteTypeISTHISNEEDED: 'testing 123'
        }
      ], {
        type: 'DEL_NOTE',
        noteId: 42
      })
    ).toEqual([
      {
        noteId: 160,
        freqHz: 'Label160',
        noteTypeISTHISNEEDED: 'testing 123'
      }
    ])

    expect(
      noteTable([
        {
          noteId: 42,
          freqHz: 'Label42',
          noteTypeISTHISNEEDED: 'Test type'
        },
        {
          noteId: 160,
          freqHz: 'Label160',
          noteTypeISTHISNEEDED: 'testing 123'
        }
      ], {
        type: 'DEL_NOTE',
        noteId: 161
      })
    ).toEqual([
      {
        noteId: 42,
        freqHz: 'Label42',
        noteTypeISTHISNEEDED: 'Test type'
      },
      {
        noteId: 160,
        freqHz: 'Label160',
        noteTypeISTHISNEEDED: 'testing 123'
      }
    ])

  })

})
