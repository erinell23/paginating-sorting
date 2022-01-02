import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Table } from '../.';

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

const App = () => {
  const [dataTable, setdataTable] =React.useState(data);
  const handleChangeTable = (pageAction:{order: string; page: number; sort: string;}) =>{
    console.log(pageAction);
    setdataTable({...data, number:pageAction.page});
  }
  return (
    <div>
      <Table dataTable={dataTable} onChange={handleChangeTable}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
