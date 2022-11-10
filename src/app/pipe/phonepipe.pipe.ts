import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonepipe'
})
export class PhonepipePipe implements PipeTransform {

  transform(rawNum: any): string {
    rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + "-";
    }

    return newStr + rawNum.substr(i * 2);
  }

}
