export class Quote{
  public showDetails: boolean;
  constructor(public id:number, public saying: string, public author: string, public submitter: string) {
    this.showDetails = false
  }
}
