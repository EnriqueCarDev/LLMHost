export class StateStatusModel {
  private constructor(
    private statusType: 'pending' | 'loading' | 'success' | 'failure'
  ) {}

  static ofPending(): StateStatusModel {
    return new StateStatusModel('pending');
  }

  static ofLoading(): StateStatusModel {
    return new StateStatusModel('loading');
  }

  static ofSuccess(): StateStatusModel {
    return new StateStatusModel('success');
  }

  static ofFailure(): StateStatusModel {
    return new StateStatusModel('failure');
  }

  isPending(): boolean {
    return this.statusType === 'pending';
  }

  isLoading(): boolean {
    return this.statusType === 'loading';
  }

  isSuccess(): boolean {
    return this.statusType === 'success';
  }

  isFailure(): boolean {
    return this.statusType === 'failure';
  }

  isLoadingOrPending(): boolean {
    return this.isPending() || this.isLoading();
  }

  isNotLoadingOrPending(): boolean {
    return !this.isLoadingOrPending();
  }
}
