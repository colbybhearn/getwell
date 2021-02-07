import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function History() {

    const [data, setData] = useState([])
    useEffect(() => {
        console.log('did mount');
        // code to run on component mount
        setData([{ date: '2021.02.06', '6mp': true, ursodiol: true }]);
        //fetch data from the database
      },[])// essentially onComponentDidMount


    
    const columns = [
      {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
      {
        name: 'Ursodiol',
        selector: 'ursodiol',
        sortable: false,
        cell: row => <div >good</div>,
      },      
      {
        name: '6MP',
        selector: '6mp',
        sortable: false,
        cell: row => <div >good</div>,
      },
    ];    
    
    return (
        <div>
            <DataTable
                title="History"
                columns={columns}
                data={data}
            />
        </div>
    );
  }
  
  export default History;
  