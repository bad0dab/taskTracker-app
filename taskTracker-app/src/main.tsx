import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

// row page abilita la pagina di creazione, a sua volta abilita la creazione di una riga nella tabella passando nome status e ora
function CreateRowPage() {
  const createPage = () => {
    console.log("Create Row Page");
    <div className='bg-light'>
      <h2>Create Row Page</h2> 
    </div>
  }
  return (
    <button type="button" className="btn" onClick={createPage}>Base class</button>
  );
}

function TaskTable(taskNumber: number, taskName: string, taskStatus: string, taskTimeAdded: string) {
  /*  let taskNumber = 0; 
    let taskName = "Placeholder Task 1";
    let taskStatus = "Pending";
    let taskTimeAdded = "09:00 AM";*/

  const createTableRow = () => {
    const tableBody = document.getElementById('makeRows');
    if (tableBody) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${taskNumber}</td>
        <td>${taskName}</td>
        <td>${taskStatus}</td>
        <td>${taskTimeAdded}</td>
      `;
      tableBody.appendChild(newRow);
    }
  }

  return (

    <table className="table custom-table">
      <thead>
        <button type="button" className="btn" onClick={createTableRow}>Crea task</button>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
          <th>Time Added</th>
        </tr>


      </thead>
      <tbody id='makeRows'>

      </tbody>
    </table>

  );

}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CreateRowPage />
  </StrictMode>,
)

