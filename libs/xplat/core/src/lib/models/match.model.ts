export class Match {
  constructor(
    readonly userId1: string,
    readonly userId2: string,
    readonly timestamp: Date = new Date()
  ) {}
}
