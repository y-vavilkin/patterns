type Subscriber = () => void;

class Observer {
  private subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(callback: Subscriber): void {
    this.subscribers.push(callback);
  }

  unsubscribe(callback: Subscriber): void {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
  }

  notify(): void {
    this.subscribers.forEach(subscriber => subscriber.call(null));
  }
}

export default Observer;
