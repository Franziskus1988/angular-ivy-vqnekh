export class DummyWebSocket {
  id: number;

  constructor(_url: string) {
    let id = 0;

    this.id = setInterval(() => {
      id++;
      this.onmessage(
        new MessageEvent('message', { data: `${id} --> message \n` })
      );
    }, 1000);
  }

  onmessage: (event: MessageEvent) => void = () => {};

  kill() {
    clearInterval(this.id);
  }
}
