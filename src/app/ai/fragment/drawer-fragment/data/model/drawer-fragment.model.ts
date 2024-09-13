import { ChatMetaData } from 'src/app/models/chatMetaData';
import { StateStatusModel } from 'src/app/models/status/state-status.model';

export class DrawerFragmentStateModel {
  private readonly _status: StateStatusModel;
  private readonly _error?: string;
  private readonly _chatHistory: ChatMetaData[] = [];
  private readonly _isDrawerOpen: boolean;

  constructor(
    status: StateStatusModel,
    chatHistory: ChatMetaData[],
    isDrawerOpen: boolean,
    error?: string
  ) {
    this._status = status;
    this._chatHistory = chatHistory;
    this._isDrawerOpen = isDrawerOpen;
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

  get isDrawerOpen(): boolean {
    return this._isDrawerOpen;
  }

  static init(): DrawerFragmentStateModel {
    const drawerState = sessionStorage.getItem('drawerOpen');
    const isDrawerOpen = drawerState !== null ? drawerState === 'true' : false;
    return new DrawerFragmentStateModel(
      StateStatusModel.ofPending(),
      [],
      isDrawerOpen
    );
  }

  fail(error: string): DrawerFragmentStateModel {
    return new DrawerFragmentStateModel(
      StateStatusModel.ofFailure(),
      this._chatHistory,
      this._isDrawerOpen,
      error
    );
  }

  static ofSuccess(chatHistory: ChatMetaData[]): DrawerFragmentStateModel {
    return new DrawerFragmentStateModel(
      StateStatusModel.ofSuccess(),
      chatHistory,
      true
    );
  }

  load(): DrawerFragmentStateModel {
    return new DrawerFragmentStateModel(
      StateStatusModel.ofLoading(),
      this._chatHistory,
      this._isDrawerOpen
    );
  }

  toggleDrawer(): DrawerFragmentStateModel {
    const newDrawerState = !this._isDrawerOpen;
    sessionStorage.setItem('drawerOpen', newDrawerState.toString());
    return new DrawerFragmentStateModel(
      this._status,
      this._chatHistory,
      newDrawerState
    );
  }
}
