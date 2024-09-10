import { ChatMetaData } from 'src/app/models/chatMetaData';
import { StateStatusModel } from 'src/app/models/status/state-status.model';

export class DrawerFragmentStateModel {
  private readonly _status: StateStatusModel;
  private readonly _error?: string;
  private readonly _chatHistory: ChatMetaData[] = [];

  constructor(
    status: StateStatusModel,
    chatHistory: ChatMetaData[],
    error?: string
  ) {
    this._status = status;
    this._chatHistory = chatHistory;
    this._error = error;
  }

  get status(): StateStatusModel {
    return this._status;
  }

  get error(): string | undefined {
    return this._error;
  }

  get chatHistory(): ChatMetaData[] {
    return this._chatHistory;
  }

  static init(): DrawerFragmentStateModel {
    return new DrawerFragmentStateModel(StateStatusModel.ofPending(), []);
  }

  fail(error: string): DrawerFragmentStateModel {
    return new DrawerFragmentStateModel(
      StateStatusModel.ofFailure(),
      this._chatHistory,
      error
    );
  }
}
