<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref } from 'vue'

defineProps({
})

function addTask(task, status, dateAdded) {
  const taskList = document.getElementById('task-list');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${task}</td>
    <td>${status}</td>
    <td>${dateAdded}</td>
  `;

  taskList.appendChild(newRow);
}

</script>

<template>
  <div>
<h1 class="text-center mt-5 ">
  Task Tracker
  </h1>
<button type="button" class="btn btn-danger" aria-label="Close" @click = "addTask('a','b','c')">Create Row</button>
    <div style="display: flex; justify-content: center; " class="mt-5 text-center" >
  <table class="centered-table">
    <thead>
      <tr style="background-color: gray;">
        <th>Task</th>
        <th>Status</th>
        <th>Date added</th>
      </tr>
    </thead>
    <tbody id="task-list">
    </tbody>
  </table>
  </div>
  </div>
</template>

<style>
  .centered-table {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2em;
  border-collapse: collapse;
  border: 2px solid #333;
}

.centered-table th,
.centered-table td {
  border: 1px solid #333; 
  padding: 8px;
}
tr:hover {
background-color: blue;}
</style>
