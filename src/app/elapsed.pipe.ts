import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let noTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value-noTime);
    const secondsInADay = 86400;
    var differenceSeconds = dateDifference*0.001;
    var differenceActual = differenceSeconds/secondsInADay;

    return differenceActual;
  }

}
