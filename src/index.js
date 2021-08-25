import { Methods } from './checkbox';
import {
  updateCheckBoxStatus, deleteTask, editTask, clearFinishedTasks,
} from './crud';
import './style.css';

const buttonAddTask = document.getElementById('button-add-task');

window.onload = function windowReady() {
  buttonAddTask.onclick = function add() { Methods.addTask(); };
  Methods.showTasks();

  updateCheckBoxStatus();
  deleteTask();
  editTask();
  clearFinishedTasks();
};