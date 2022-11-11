import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilterService {


  /**
   * To sort the items in a list, sorting between 2 dates
   * */
  public filterListDateRange(
    list: any[],
    field: string,
    from: Date,
    to: Date
  ) {
    let listTemp = list;
    if (!from || !to) {
      return list;
    }
    if (listTemp && from && to) {
      return listTemp.filter(item => {
        let check
        if (item[field] instanceof Date) {
          check = item[field];
        } else {
          let dateCheck = item[field];
          let c = dateCheck.split("/");
          check = new Date(c[2], parseInt(c[1])-1, c[0]);
        }
        return (check >= from && check <= to);
      });
    }
    return [];
  }

  filterListIncludes(
    filter: string,
    list: any[],
    firstField: string,
    secondField?: string
  ) {
    let listTemp = list;
    if (listTemp) {
      if (filter == undefined) {
        return listTemp;
      }
      return listTemp.filter(item => {
        return (
          item[firstField].toLowerCase().includes(filter.toLowerCase()) ||
          (secondField
            ? item[secondField].toLowerCase().includes(filter.toLowerCase())
            : false)
        );
      });
    }
    return [];
  }

}
