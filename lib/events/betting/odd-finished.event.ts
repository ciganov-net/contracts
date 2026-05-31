export interface OddFinishedEvent {
  eventId: string
  status: 'FINISHED' | 'CANCELLED'
  winningOutcomes: string[]
}
