# Angular JSON to CSV

By using `<json-to-csv>` you can achive the JSON list to CSV file export which is a very common requirement for any project or application.

## How to use the component

First download the `json-to-csv` component to your project directory in your local machine. While using the component in your local project do not forget to mention `JsonToCsvComponent` component class to your shared module or app module if you dont use shared module.

Just open your html template where you want to use the component and use the below tag,

        <json-to-csv [json]="jsonList" [csvHeaders]="csvHeaders" [expFileName]="'Company details'">
                <!-- Project your conent to display to the end user i.e Export link or button or icon -->
                <button>Export to CSV</button>
        </json-to-csv>

## Inputs to the json-to-csv component

Following are the inputs which we have to provide

  ### 1. json
   
   To the `json` input we have to provide the list which we want to export as a CSV file.
   
  ### 2. csvHeaders
  
  Always the CSV headers should be in a proper format so we can provide the value to the `csvHeaders` as an object,
  
        csvHeaders = {
            key: "Corresponding value",
            ...
            ...
            ...
        }
        
  Let say if key is `userName` and corresponding header value needs to be displayed as `User name`, then we have to provide below         object,
  
        csvHeaders = {
            userName: "User name"
        }
  
  Note that the `key` should be available in your JSON data.
  
  ### 3. expFileName
  
  For the input we have to provide the the CSV file name which is to be exported else the default value is `CSV file`.
  

## Demo

Please find the demo in `stackblitz` i.e `https://angular-y82yzj.stackblitz.io/`
