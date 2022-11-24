import { useEffect, useState } from "react";
import styled from "styled-components";
import DataTable , {TableColumn} from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApexCharts from 'apexcharts'
import ButtonEdit from "./ButtonEdit";

type DataRow = {
  id: string;
  name: string;
  email: string;
  gender: string;
  phone:string;
  address:string;
};

function App() {

  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false);


  const toggle = () => setModal(!modal);

  useEffect(()=>{
    getUsers();
  },[])

  const getUsers= () => {
    fetch('http://localhost:3001/')
    .then((response) => response.json())
    .then((data) =>setUsers(data));
  }




  const columns: TableColumn<DataRow>[] = [
    {
      name: "Id",
      selector: (row) => row.id
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "Gender",
      selector: (row) => row.gender
    },
    {
      name: "Phone",
      selector: (row) => row.phone
    },
    {
      name: "Action",
      cell: (row) => (<ButtonEdit />)
    }
  ]


  return (
    <>
      <DataTable title="Data" columns={columns} data={users} pagination />
    </>
  );
}

export default App;
