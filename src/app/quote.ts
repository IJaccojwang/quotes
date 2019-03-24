export class Quote{
  public showDetails: boolean;
  constructor(public id:number, public saying: string, public author: string, public firstName: string,public lastName: string, public completeDate: Date, public votes: number, public up: number, public down: number) {
    this.showDetails = false
  }
}
