export class Quote{
  public showDetails: boolean;
  constructor(public id:number, public saying: string, public author: string, public firstName: string,public lastName: string, public completeDate: Date) {
    this.showDetails = false
  }
}
