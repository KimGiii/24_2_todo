document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const todoListEl = document.getElementById('todo-list');

  // Initialize FullCalendar
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridDay',
    initialDate: new Date(),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [], // Placeholder for events
    height: 'auto',
  });

  calendar.render();

  // Add Todo Functionality
  const addTodoButton = document.getElementById('add-todo');
  addTodoButton.addEventListener('click', function () {
    const todoTitle = document.getElementById('todo-title').value;
    const todoTime = document.getElementById('todo-time').value;

    if (!todoTitle.trim()) {
      alert('할 일을 입력하세요.');
      return;
    }

    if (!todoTime) {
      alert('시간을 입력하세요.');
      return;
    }

    const eventTime = new Date(todoTime);

    // Add checkbox to todo list
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todoTitle}`;
    checkbox.name = 'todo';

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = `${todoTitle} (${eventTime.toLocaleString()})`;

    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    todoListEl.appendChild(checkboxDiv);

    // Add event to calendar
    calendar.addEvent({
      title: todoTitle,
      start: eventTime,
      allDay: false,
    });

    // Clear input fields
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-time').value = '';
  });
});
