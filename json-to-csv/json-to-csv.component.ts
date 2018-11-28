import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.css']
})
export class JsonToCsvComponent implements OnInit {

  @Input()
  csvHeaders: any;
  @Input()
  json: any;
  @Input()
  expFileName: string = 'CSV file';

  constructor() { }

  ngOnInit() {
  }

  public cnvJsonToCsv(headers: any, _json: any): string{
    let arrayList: any[] = typeof _json !== 'object' ? JSON.parse(_json) : _json;
    let csvStr: string = '';

    for(let ind = 0; ind < arrayList.length;ind++){
        let csvStrLine: string = '';
        for(let csvFldInd in headers){
            if(csvStrLine !== '')
                csvStrLine += ',';

            if(typeof arrayList[ind][csvFldInd] === 'string' && arrayList[ind][csvFldInd].indexOf('{') > -1){
                console.log('CSV', arrayList[ind][csvFldInd]);
                //csvStrLine += `"${JSON.stringify(arrayList[ind][csvFldInd])}"`;
                csvStrLine += '"' + arrayList[ind][csvFldInd].replace(/"/g,'""') + '"';
            }else{
                csvStrLine += arrayList[ind][csvFldInd];
            }
        }
        csvStr += csvStrLine + '\r\n';
    }

    return csvStr;
  }

  public expJsonToCsv(headers: any, _json: any[], expCsvFileNm: string){
    if(headers){
        _json.unshift(headers);
    }

    let jsonStr: string = JSON.stringify(_json);
    let _csv: string = this.cnvJsonToCsv(headers, jsonStr);
    let expCsvFile: string = expCsvFileNm + '.csv' || 'export.csv';

    let _blob: Blob = new Blob([_csv], {type: 'text/csv;charset=utf-8'});
    
    if(navigator.msSaveBlob){
        navigator.msSaveBlob(_blob, expCsvFile);
    }else{
        let _link: any = document.createElement('a');
        if(_link.download !== undefined){
            let _url: any = URL.createObjectURL(_blob);
            _link.setAttribute('href', _url);
            _link.setAttribute('download', expCsvFile);
            _link.style.visibility = 'hidden';
            document.body.appendChild(_link);
            _link.click();
            document.body.removeChild(_link);
        }
    }
  }

}
