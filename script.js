document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskText = document.getElementById('new-task').value;
  if (taskText === '') return;

  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit');
  editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => taskItem.remove());

  const completeCheckbox = document.createElement('input');
  completeCheckbox.type = 'checkbox';
  completeCheckbox.addEventListener('change', () => {
    taskContent.classList.toggle('completed');
  });

  taskItem.appendChild(completeCheckbox);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);
  document.getElementById('new-task').value = '';
}

function editTask(taskItem, taskContent) {
  const newText = prompt('Edit task:', taskContent.textContent);
  if (newText !== null && newText.trim() !== '') {
    taskContent.textContent = newText;
  }
}
