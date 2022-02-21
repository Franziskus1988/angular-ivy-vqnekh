import { Component, OnInit } from '@angular/core';
import { DummyWebSocket as WebSocket } from '../dummy-web-socket';

@Component({
  selector: 'app-question-b',
  template: `
    <h2>Question B</h2>
    <p>{{messages}}</p>
  `,
})
export class QuestionBComponent implements OnInit {
  /**
   * There is a WebSocket, which get's notifications that contain data. This data should be rendered.
   *
   * Questions:
   * Do you see a problem here with the rendering of the data?
   */

  socket: WebSocket;

  messages: string = '';

  constructor() {
    this.socket = new WebSocket('ws://some_url');

    this.socket.onmessage = (event: MessageEvent) => {
      this.messages += event.data as string;

      console.log(`Data received: ${event.data}`);
    };
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.socket.kill();
  }
}
