//import logo from '../logo.svg';
//import './App.css';


function Recurring() {
  return (
    <div style={{width:300+'px', border: 1+'px solid black'}}>
        
      Name <input type='text'/><br />
    
      Type: <br />
        Liquid<br />
            <input type='number'/>ml<br />
        Solid
            <input type='radio' />tablet
            <input type='radio' />capsulte<br/>
            <input type='number'/>mg per tablet or capsule<br />
            <input type='number'/>tablets/capsultes
            
<br />
      Schedule <br />

        <table>
            <tr>
                <td><input type='checkbox' />Before</td>
                <td>Breakfast</td>
                <td><input type='checkbox' />After</td>
            </tr>
            <tr>
            <td><input type='checkbox' />Before</td>
                <td>Lunch</td>
                <td><input type='checkbox' />After</td>
            </tr>
            <tr>
            <td><input type='checkbox' />Before</td>
                <td>Dinner</td>
                <td><input type='checkbox' />After</td>
            </tr>
        </table>

        <button >Add</button>
    </div>
  );
}

export default Recurring;

