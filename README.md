## paginating and sorting



### example



```
  const handleChangeTable = (pageAction:{order: string; page: number; sort: string;}) =>{
    console.log(pageAction);
  }
```

```
  <Table dataTable={dataTable} onChange={handleChangeTable}/>
```


#### dataTable example
```
const data = {
  content: [
      {
          id: 1,
          name: "name1",
          address: {
              city: "ciudad",
              State: "ss",
              Country: "ddd"
          }
      },
      {
          id: 2,
          name: "name2",
          address: {
              city: "city2",
              State: "State2",
              Country: "Country2"
          }
      },
      {
          id: 3,
          name: "name3",
          address: {
              city: "city3",
              State: "State3",
              Country: "Country3"
          }
      },
      {
          id: 4,
          name: "name4",
          address: {
              city: "city4",
              State: "State4",
              Country: "Country4"
          }
      },
  ],
  totalPages: 43,
  totalElements: 422,
  number: 0,
  titles: [
      {
          title: "ID",
          sort: "id"
      },
      {
          title: "Name",
          sort: "name",
      },
      {
          title: "City",
          sort: "city",
          name:"address.city"
      },
      {
          title: "Address",
          sort: "address",
          name:["address.State","address.Country"]
      },

  ]
}
```