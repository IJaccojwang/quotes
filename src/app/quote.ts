export class Quote{
  public showDetails: boolean;
  public inUnwanted: boolean;
  constructor(public id:number, public saying: string, public author: string, public submitter: string, public completeDate: Date) {
    this.showDetails = false
    this.isUnwanted = false
  }
}
