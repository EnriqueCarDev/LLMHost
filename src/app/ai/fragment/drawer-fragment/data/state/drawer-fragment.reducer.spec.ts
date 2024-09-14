import { chatHistoryMock } from 'src/app/mocks/chat-history.mock';
import { ChatMetaData } from 'src/app/models/chatMetaData';
import { DrawerFragmentStateModel } from '../model/drawer-fragment.model';
import { DrawerFragmentActions } from './drawer-fragment.actions';
import { initialDrawerFragmentState, reducer } from './drawer-fragment.reducer';

describe('DrawerFragment Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialDrawerFragmentState, action);

      expect(result).toBe(initialDrawerFragmentState);
    });
  });

  it('should loadDrawerFragments return a state in load mode', () => {
    // Given
    const expected = DrawerFragmentStateModel.init().load();
    const action = DrawerFragmentActions.loadDrawerFragments();

    // When
    const actual = reducer(initialDrawerFragmentState, action);

    // Then
    expect(actual).toEqual(expected);
  });

  it('should loadDrawerFragmentsSuccess return a state in success mode', () => {
    // Given
    const chatHistory: ChatMetaData[] = chatHistoryMock;
    const expected = DrawerFragmentStateModel.ofSuccess(chatHistory);
    const action = DrawerFragmentActions.loadDrawerFragmentsSuccess({
      data: chatHistory,
    });

    // When
    const actual = reducer(initialDrawerFragmentState, action);

    // Then
    expect(actual).toEqual(expected);
  });

  it('should loadDrawerFragmentsSuccess return a state in success mode', () => {
    // Given
    const error: string = 'an error';
    const expected = DrawerFragmentStateModel.init().fail(error);
    const action = DrawerFragmentActions.loadDrawerFragmentsFailure({
      error: error,
    });

    // When
    const actual = reducer(initialDrawerFragmentState, action);

    // Then
    expect(actual).toEqual(expected);
  });

  it('should toggleDrawer set the drawerState to false', () => {
    // Given
    const initialState = new DrawerFragmentStateModel(
      initialDrawerFragmentState.status,
      initialDrawerFragmentState.chatHistory,
      true
    );
    const action = DrawerFragmentActions.toggleDrawer();
    // When
    const result = reducer(initialState, action);

    // Then
    expect(result.isDrawerOpen).toBe(false);
  });

  it('should toggleDrawer set the drawerState to true', () => {
    // Given
    const initialState = new DrawerFragmentStateModel(
      initialDrawerFragmentState.status,
      initialDrawerFragmentState.chatHistory,
      false
    );
    const action = DrawerFragmentActions.toggleDrawer();
    // When
    const result = reducer(initialState, action);

    // Then
    expect(result.isDrawerOpen).toBe(true);
  });
});
