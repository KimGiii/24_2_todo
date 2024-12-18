document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const todoListEl = document.getElementById('todo-list');

  // Initialize FullCalendar with weekly view
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    initialDate: new Date(),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [], // Placeholder for events
  });

  calendar.render();

  // Add Todo Functionality
  const addTodoButton = document.getElementById('add-todo');
  addTodoButton.addEventListener('click', function () {
    const todoTitle = document.getElementById('todo-title').value;
    const todoStartTime = document.getElementById('todo-start-time').value;
    const todoEndTime = document.getElementById('todo-end-time').value;

    if (!todoTitle.trim()) {
      alert('할 일을 입력하세요.');
      return;
    }

    if (!todoStartTime || !todoEndTime) {
      alert('시작 시간과 종료 시간을 입력하세요.');
      return;
    }

    const startTime = new Date(todoStartTime);
    const endTime = new Date(todoEndTime);

    if (startTime >= endTime) {
      alert('종료 시간은 시작 시간보다 이후여야 합니다.');
      return;
    }

    // Add checkbox to todo list
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todoTitle}`;
    checkbox.name = 'todo';

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = `${todoTitle} (${startTime.toLocaleString()} - ${endTime.toLocaleString()})`;

    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    todoListEl.appendChild(checkboxDiv);

    // Add event to calendar
    calendar.addEvent({
      title: todoTitle,
      start: startTime,
      end: endTime,
      allDay: false,
    });

    // Clear input fields
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-start-time').value = '';
    document.getElementById('todo-end-time').value = '';
  });
});
