export type StateNotes = Array<{ id: string, name: string, current: number }>

export type GlobalState = { notes: StateNotes }