import {Injectable} from 'angular2/core';
import {Config} from './config.model'

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  superGreeting: string = 'No! YOU HOLLA T YER BOY!';
  config: Config ={
    name: 'Hello',
    description: 'Description'
  };

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
