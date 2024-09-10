import { StateStatusModel } from './state-status.model';

describe('StateStatusModel', () => {
  it('should create StateStatusModel with pending', () => {
    // Given

    // When
    const actual = StateStatusModel.ofPending();

    // Then
    expect(actual.isPending()).toBeTruthy();
  });

  it('should create StateStatusModel with loading', () => {
    // Given

    // When
    const actual = StateStatusModel.ofLoading();

    // Then
    expect(actual.isLoading()).toBeTruthy();
  });

  it('should create StateStatusModel with success', () => {
    // Given

    // When
    const actual = StateStatusModel.ofSuccess();

    // Then
    expect(actual.isSuccess()).toBeTruthy();
  });

  it('should create StateStatusModel with failure', () => {
    // Given

    // When
    const actual = StateStatusModel.ofFailure();

    // Then
    expect(actual.isFailure()).toBeTruthy();
  });

  it('should isLoadingOrPending return false when is not loading or pending', () => {
    // Given

    // When
    const actual = StateStatusModel.ofFailure();

    // Then
    expect(actual.isLoadingOrPending()).toBeFalsy();
  });

  it('should isLoadingOrPending return true when is pending', () => {
    // Given

    // When
    const actual = StateStatusModel.ofPending();

    // Then
    expect(actual.isLoadingOrPending()).toBeTruthy();
  });

  it('should isLoadingOrPending return true when is loading', () => {
    // Given

    // When
    const actual = StateStatusModel.ofLoading();

    // Then
    expect(actual.isLoadingOrPending()).toBeTruthy();
  });

  it('should isNotLoadingOrPending return false when is loading', () => {
    // Given

    // When
    const actual = StateStatusModel.ofLoading();

    // Then
    expect(actual.isNotLoadingOrPending()).toBeFalsy();
  });

  it('should isNotLoadingOrPending return true when is success', () => {
    // Given

    // When
    const actual = StateStatusModel.ofSuccess();

    // Then
    expect(actual.isNotLoadingOrPending()).toBeTruthy();
  });
});
