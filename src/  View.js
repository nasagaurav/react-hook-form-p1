import react from 'react';
import { toast } from 'react-toastify';
function View() {
  const Delete = (id) => {
    toast('deleted successfully');
  };
  return <div> <h1>All students?</h1>
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
    <td>?</td>
    <td>item.name</td>
    <td>item.email</td>
    <td>item.phone</td>
    <td>item.password</td>
    <td>item.gender</td>
    <td>item.status </td>
  </tr>
</table>
</div>;
}
export default View;
