<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref } from 'vue'

const showModal = ref(false)
const task = ref('')
const status = ref('')
const tasks = ref([])

const statusOptions = ['Completed', 'In progress', 'To do']

function openModal() {
  showModal.value = true
  task.value = ''
  status.value = ''
}

function addTask() {
  if (task.value && status.value) {
    tasks.value.push({
      task: task.value,
      status: status.value,
      dateAdded: new Date().toLocaleDateString()
    })
    showModal.value = false
  }
}
</script>

<template>
  <div>
    <h1 class="text-center mt-5">Task Tracker</h1>
    <button type="button" class="btn btn-danger" @click="openModal">Create Row</button>
    <div style="display: flex; justify-content: center;" class="mt-5 text-center">
      <table class="centered-table">
        <thead>
          <tr style="background-color: gray;" id="table-header">
            <th>Task</th>
            <th>Status</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in tasks" :key="idx">
            <td>{{ row.task }}</td>
            <td>{{ row.status }}</td>
            <td>{{ row.dateAdded }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal" class="modal-backdrop" style="position: fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center;">
      <div class="bg-white p-4 rounded" style="min-width:300px;">
        <h5>Fill Task Details</h5>
        <div class="mb-2">
          <input v-model="task" class="form-control" placeholder="Task" />
        </div>
        <div class="mb-2">
          <select v-model="status" class="form-control">
            <option value="" disabled>Select status</option>
            <option v-for="option in statusOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
        <button class="btn btn-success me-2" @click="addTask">Add</button>
        <button class="btn btn-secondary" @click="showModal = false">Cancel</button>
      </div>
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
tr:not(#table-header):hover {
  background-color: rgb(227, 227, 227);
  color: black;
}
.modal-backdrop {
  z-index: 1050;
}
.bg-white {
  background: #fff !important;
  color: #000;
}
</style>
