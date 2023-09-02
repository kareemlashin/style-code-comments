// Task management application

// Task class
class Task {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
// Task Manager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }
  // Add a new task
  addTask(title, description) {
    const task = new Task(this.currentId, title, description, false);
    this.tasks.push(task);
    this.currentId++;
  }
  // Get a task by its ID
  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }
  // Update a task
  updateTask(taskId, title, description, completed) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.title = title;
      task.description = description;
      task.completed = completed;
    }
  }
  // Delete a task
  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
  // Get all tasks
  getAllTasks() {
    return this.tasks;
  }
  // Mark a task as completed
  markTaskAsCompleted(taskId) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.completed = true;
    }
  }
}
// Sample usage
// Create a new task manager
const taskManager = new TaskManager();
// Add tasks
taskManager.addTask('Task 1', 'Description 1');
taskManager.addTask('Task 2', 'Description 2');
taskManager.addTask('Task 3', 'Description 3');
// Update a task
taskManager.updateTask(2, 'Updated Task 2', 'Updated Description 2', true);
// Delete a task
taskManager.deleteTask(1);
// Mark a task as completed
taskManager.markTaskAsCompleted(3);
// Get all tasks
const allTasks = taskManager.getAllTasks();
console.log(allTasks);
//
// ─── SECTION COMMENT ─────────────────────────────────────────────────────────
//


//
// ───────────────────────────────────────────────── REVERSE SECTION COMMENT ───
//


//
// ─── IDENT LEVEL TWO ─────────────────────────────────────────────────────
//

//
// ─── IDENT LEVEL THREE ───────────────────────────────────────────────
//

//
// IDENT LEVEL FOUR
//

// •••••

// ─────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────

// ! ||--------------------------------------------------------------------------------||
// ! ||                                      Event                                     ||
// ! ||--------------------------------------------------------------------------------||

// ! ||--------------------------------------------------------------------------------||
// ! ||                                     comment                                    ||
// ! ||--------------------------------------------------------------------------------||