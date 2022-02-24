
# Dynamic table with paging and sorting

## for interface paginatingAndSorting of Spring Boot or other aplication with same params.  **see dataTable example**
<br/>

## Parameters

- dataTable = ```{dataTableProperties}```
- onChange =  ```(resp: {order: string, page: number,sort: string}) => void```
    
<br/><br/>

# dataTable properties

| Name               | Type                        | Required  | Description                                                                |
| ------------------ | --------------------------- | --------- | -------------------------------------------------------------------------- |
| content            | `Array`<`{[key: string]: any}`> | Not    | JSONs array to populate the table.                                         |
| maxItemsShow       | `number`                    | Not        | Maximum amount of items (pages) to show in the pagination. Default ```3```.|
| number             | `number`                    | Yes        | Number of the current page                                                 |
| showLastedAndFirst | `boolean`                   | Not        | Allows to show or not the buttons to go back "«" and forward "»" the next `X` amount of pages. Default ```true``` |
| showPagination     | `boolean`                   | Not       | Allows to show or not show pagination. Default ```true```                  |
| titles             | `Array`<`TitleTableProps`>  | Yes       | Titles for table columns.                                                  |
| totalPages         | `number`                    | Yes       | Total pages.                                                               |


<br/><br/>

### dataTable example
<hr/>

```json
{
    "content":[
        {"id": 1,
        "name": "name1",
        "address": {
            "city": "ciudad1",
            "State": "State1",
            "Country": "Country1"
        }}...
    ],
    "number":0,
    "totalPages":10,
    "titles":[
        ...
    ]
}
```
<br/><br/>

# Titles properties (TitleTableProps)
| Name  | Type                      | Required                           | Description                     |
| ----- | ------------------------- | ----------------------------------- | ------------------------------- |
| sort  | `string`                  | Not                                  | Base text string to return when sorting a column, if not sent, the options in that column are hidden.   |
| name  | `string` or `Array`<`string`> | Yes, if you don't send  `sort` | Key to locate the value to show in the column. If it's a nested value, the keys are separated by a period. If you want to concatenate values in a column, the keys are sent in an array. |
| title | `any`                    | Yes                                 | Title to show Columns in the table.     |

<br/><br/>

### Titles example

<hr/>

```json
{"titles":[
    {
        "title":"ID",
        "sort":"id"
    },
    {
        "title":"Address",
        "sort":"city",
        "name":["address.city","address.state"]
    }
]}
```

<br/><br/>

# How to use

```
import { Table } from 'paginating-sorting'
```
```
const handleChangeTable = (pageAction) =>{
	console.log(pageAction);//order: string, page: number, sort: string
}
```
```
<Table dataTable={dataTable} onChange={handleChangeTable}/>
```
