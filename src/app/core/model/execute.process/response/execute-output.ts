import {ExecuteResponseData} from './execute-response-data';

export class ExecuteOutput {
  private readonly _identifier: string;
  private readonly _title: string;
  private readonly _data: ExecuteResponseData;

  constructor(executeOutput: any) {
    this._identifier = executeOutput.identifier;
    this._title = executeOutput.title;
    this._data = executeOutput.data;
  }

  get identifier(): string {
    return this._identifier;
  }

  get title(): string {
    return this._title;
  }

  get data(): ExecuteResponseData {
    return this._data;
  }
}
