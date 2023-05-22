export class Swipe {
  constructor(
    readonly swiperId: string,
    readonly swipeeId: string,
    readonly direction: 'like' | 'dislike',
    readonly timestamp: Date = new Date()
  ) {}
}
