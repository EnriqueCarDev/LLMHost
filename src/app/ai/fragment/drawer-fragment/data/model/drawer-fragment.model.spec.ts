import { StateStatusModel } from 'src/app/models/status/state-status.model';
import { DrawerFragmentStateModel } from './drawer-fragment.model';

describe('DrawerFragmentStateModel', () => {
  it('should init with status pending', () => {
    // Given
    const tested = DrawerFragmentStateModel.init();

    // Then
    expect(tested.status).toEqual(StateStatusModel.ofPending());
  });
});
