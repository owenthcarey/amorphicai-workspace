export class Message {
  constructor(
    readonly senderId: string,
    readonly recipientId: string,
    readonly content: string,
    readonly timestamp: Date = new Date()
  ) {}
}
