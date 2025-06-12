import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function CreateTaskTable() {
  // placeholders
  let taskNumber = 1; 
  let taskName = "Placeholder Task 1";
  let taskStatus = "Pending";
  let taskTimeAdded = "09:00 AM";

  ///////////////////////
  return (
    <table className="table custom-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
          <th>Time Added</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{taskNumber}</td>
          <td>{taskName}</td>
          <td>{taskStatus}</td>
          <td>{taskTimeAdded}</td>
        </tr>
      </tbody>
    </table>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CreateTaskTable />
  </StrictMode>,
)
