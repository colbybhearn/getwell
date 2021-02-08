import faunadb from 'faunadb'
//import {Documents, Collection} from 'faunadb'

export default class fdb {
    static async getHistory(){
        this.client = new faunadb.Client({
            secret: 'fnAEBb0_KBACAEsoLp3-p-MFbA_JYlXns2OKKnjy'
          })

        const q = faunadb.query
        const { Documents, Paginate, Collection, Lambda, Get, Var, Map} = q

        
        
        //let resp = await this.client.query(query);
        //let fin = new Map(q.Paginate(resp,{size:100}),q.Lambda("x",q.Get(q.Var("x"))))
        /*
        this.client.query(
            Paginate(Documents(Collection('History'))),
            Lambda(x => Get(x))
        ).then( (resp) => {
            let refs = [];
            resp.data.forEach( (d)=>{                
                //console.log();
            })
        } )
*/
        let allHistory = Paginate(Documents(Collection('History')));
        const history = Map(allHistory, 
            Lambda(['ref'], Get(Var('ref')))
            )
        this.client.query(history).then((resp)=>{
            console.log(resp);
        });

            /*
        this.client.query(
            ,
            Lambda(x => Get(x))
        ).then( (resp) => {
            let refs = [];
            resp.data.forEach( (d)=>{                
                //console.log();
            })
        } )
*/

/*
        this.client.query(
            q.Paginate(q.Match(q.Index('history_by_user'), '    '))
          )
          .then((ret) => console.log(ret))
          .catch((err) => console.error('Error: %s', err))
          */

        return null; 
    }
}