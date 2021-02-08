import faunadb from 'faunadb'
//import {Documents, Collection} from 'faunadb'

export default class fdb {


    

    static async getHistory(){
        let client = new faunadb.Client({
            secret: 'fnAEBb0_KBACAEsoLp3-p-MFbA_JYlXns2OKKnjy'
          })

        const q = faunadb.query
        const { Documents, Paginate, Collection, Lambda, Get, Var, Map} = q
        let allHistory = Paginate(Documents(Collection('History')));
        const history = Map(allHistory, 
            Lambda(['ref'], Get(Var('ref')))
            )
        /*
            client.query(history).then((resp)=>{
            console.log(resp);
        });*/

        return client.query(history); 
    }
}