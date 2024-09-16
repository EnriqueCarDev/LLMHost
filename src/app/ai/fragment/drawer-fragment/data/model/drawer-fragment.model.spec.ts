import { chatHistoryMock } from 'src/app/mocks/chat-history.mock';
import { ChatMetaData } from 'src/app/models/chatMetaData';
import { StateStatusModel } from 'src/app/models/status/state-status.model';
import { DrawerFragmentStateModel } from './drawer-fragment.model';

describe('DrawerFragmentStateModel', () => {
  it('should init with status pending', () => {
    // Given
    const tested = DrawerFragmentStateModel.init();

    // Then
    expect(tested.status).toEqual(StateStatusModel.ofPending());
  });

  it('should init with status of failure', () => {
    // Given
    const error: string = 'an error';
    const tested = DrawerFragmentStateModel.init().fail(error);

    // Then
    expect(tested.status).toEqual(StateStatusModel.ofFailure());
  });

  it('should init with a status of loading', () => {
    // Given
    const tested = DrawerFragmentStateModel.init().load();

    // Then
    expect(tested.status).toEqual(StateStatusModel.ofFailure());
  });

  it('should init with a status of success', () => {
    // Given
    const chatHistory: ChatMetaData[] = chatHistoryMock;
    const tested = DrawerFragmentStateModel.ofSuccess(chatHistory);

    // Then
    expect(tested.status).toEqual(StateStatusModel.ofSuccess());
  });
});
