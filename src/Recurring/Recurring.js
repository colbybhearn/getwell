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
            <tbody>
            <tr>
                <td>Before</td>
                <td></td>
                <td>After</td>
            </tr>
            <tr>
                <td></td>
                <td>Waking Up</td>
                <td><input type='checkbox' /></td>
            </tr>
            <tr>
                <td><input type='checkbox' /></td>
                <td>Breakfast</td>
                <td><input type='checkbox' /></td>
            </tr>
            <tr>
            <td><input type='checkbox' /></td>
                <td>Lunch</td>
                <td><input type='checkbox' /></td>
            </tr>
            <tr>
            <td><input type='checkbox' /></td>
                <td>Dinner</td>
                <td><input type='checkbox' /></td>
            </tr>
            <tr>
                <td><input type='checkbox' /></td>
                <td>Bedtime</td>
                <td></td>
            </tr>
            </tbody>
        </table>

        <button >Add</button>
    </div>
  );
}

export default Recurring;

