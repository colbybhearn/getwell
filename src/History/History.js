import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import fdb from '../fdb.js'
import './History.css';

function History() {

    const [data, setData] = useState([])
    const [columns, setColumns] = useState([ {
        name: 'Date',
        selector: 'date',
        sortable: true,
      }]);

    useEffect(async () => {
        
        //console.log('did mount');
        // code to run on component mount

        let cols = 
            [
                {
                  name: 'Date',
                  selector: 'date',
                  sortable: true,
                }
            ];

        let recurrings = fdb.getRecurrings();
        recurrings.then((resp)=>{
            
            //console.log(resp);
            resp.data.forEach((entry) => {
                //console.log("Entry:", entry);
                cols.push(
                    {
                        name: entry.data.name,
                        selector: entry.data.name,
                        sortable: false,
                        cell: (row,index,column) => <div className={row[column.selector]? 'complete':'incomplete'}>{row[column.selector]? 'yes':'no'} </div>
                    }
                )
            })

            setColumns(cols);

        });

        //fnAEBb0_KBACAEsoLp3-p-MFbA_JYlXns2OKKnjy
        let history = fdb.getHistory();
        history.then((resp)=>{
            let recs = [];
            resp.data.forEach((entry) => {
                //console.log("Entry:", entry);

                let newRec = {
                    date: entry.data.date                    
                }

                cols.forEach((col)=>{
                    //console.log('col: ',col)
                    if(col.selector === 'date')
                        return;
                    newRec[col.selector] = entry.data.recurrings.includes(col.selector)
                });

                //console.log(newRec);

                recs.push(
                    newRec
                )
            })
            //console.log(recs);
            setData(recs);
        })

       
        //fetch data from the database here and call setData
    
      },[])// essentially onComponentDidMount

    
    return (
        <div className="tableWrapper">
            <DataTable
                title="History"
                columns={columns}
                data={data}
            />
        </div>
    );
  }
  
  export default History;
  