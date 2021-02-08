import faunadb from 'faunadb'
//import {Documents, Collection} from 'faunadb'

export default class fdb {


    static runFql(fql){
        let client = new faunadb.Client({
            secret: 'fnAEBb0_KBACAEsoLp3-p-MFbA_JYlXns2OKKnjy'
          })
        return client.query(fql);
    }

    static async getRecurrings(){
        const { Documents, Paginate, Collection, Lambda, Get, Var, Map} = faunadb.query
        const recurring = Map(
            Paginate(Documents(Collection('Recurring'))), 
            Lambda(['ref'], Get(Var('ref')))
            )
        return this.runFql(recurring);
    }
    

    static async getHistory(){        
        const { Documents, Paginate, Collection, Lambda, Get, Var, Map} = faunadb.query
        const history = Map(
            Paginate(Documents(Collection('History'))), 
            Lambda(['ref'], Get(Var('ref')))
            )
        return this.runFql(history);
    }
}