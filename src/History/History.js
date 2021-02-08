import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import fdb from '../fdb.js'

function History() {

    const [data, setData] = useState([])
    const [columns, setColumns] = useState([ {
        name: 'Date',
        selector: 'date',
        sortable: true,
      }]);

    useEffect(async () => {
        console.log('did mount');
        // code to run on component mount

        //fnAEBb0_KBACAEsoLp3-p-MFbA_JYlXns2OKKnjy
        let history = fdb.getHistory();

        setData([
            { date: '2021.02.06', '6mp': true, ursodiol: true }
        ]);
        //fetch data from the database here and call setData

        setColumns([
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
            ])
    
      },[])// essentially onComponentDidMount

    
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
  