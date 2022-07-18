import react from 'react';
import { toast } from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux'

function View() {
  const state = useSelector(s=>s)
  const dispatch = useDispatch();
  const Delete = (index) => {
  
    toast('deleting id:${index}');
    let temp = a.filter((x,1)=>!==index);
    dispatch({type:'delete',payload:temp})
  };
  const a =state.a
  return (
    <div>
      {' '}
      <h1>All students {a.length}</h1>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>password</th>
          <th>gender</th>
          <th>status</th>
        </tr>
        <tr>
          {a.map((item,index))=>         
          <td>{index}</td>
          <td>item.name</td>
          <td>item.email</td>
          <td>item.phone</td>
          <td>item.password</td>
          <td>item.gender</td>
          <td>item.status </td>
          <td>

            <button onClick={()=>del(index)}>Delete</button>
          </td>
        </tr>
      }
      </table>
    </div>
  );
}
export default View;
