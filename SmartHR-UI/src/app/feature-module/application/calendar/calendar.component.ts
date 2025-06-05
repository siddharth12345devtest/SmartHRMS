import {  Component, ViewEncapsulation ,OnInit, AfterViewInit} from '@angular/core';
import {
  EventClickArg,
} from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CalendarComponent implements OnInit, AfterViewInit {
  routes = routes
  showEventDetailsModal = false;
  eventDetails = { title: '' };
  date: Date[] | undefined;
  dropdownOpen = false;
  selectedTime: Date = new Date();
  addtime2: Date | undefined;
  addtime: Date | undefined;
  bsInlineValue = new Date()
  constructor() {}

  ngOnInit(): void {}
    // Open the dropdown
    openDropdown() {
      this.dropdownOpen = true;
    }

    // Close the dropdown
    closeDropdown() {
      this.dropdownOpen = false;
    }

    // Update displayed time when selection changes
    onTimeChange() {
      this.closeDropdown(); // Close dropdown after time selection
    }
  ngAfterViewInit(): void {
    // Initialize external draggable events
    const containerEl = document.getElementById('external-events');
    new Draggable(containerEl!, {
      itemSelector: '.fc-event',
      eventData: (eventEl:any) => {
        const className = eventEl.getAttribute('data-event-classname'); // Get the class name
        return {
          title: eventEl.innerText.trim(),
          classNames: [className], // Pass dynamic class name
        };
      },
    });

    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl!, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      droppable: true, // Enable drag and drop
      events: [
        {
          title: 'Meeting with Team Dev',
          className: 'badge badge-pink-transparent',
          backgroundColor: '#FFEDF6',
          textColor: '#FD3995',
          start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
        },
        {
          title: 'UI/UX Team...',
          className: 'badge badge-secondary-transparent',
          backgroundColor: '#EDF2F4',
          textColor: '#0C4B5E',
          start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
        },
        {
          title: 'Data Update...',
          className: 'badge badge-purple-transparent',
          backgroundColor: '#F7EEF9',
          textColor: '#AB47BC',
          start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
        },
        {
          title: 'Design System',
          className: 'badge badge-danger-transparent',
          backgroundColor: '#FAE7E7',
          textColor: '#E70D0D',
          start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
        },
      ],
      headerToolbar: {
        start: 'today prev,next',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      eventClick: this.handleEventClick.bind(this),
      drop: (info) => {
        console.log('Event dropped:', info.draggedEl.innerText.trim());
      },
      eventReceive: (info) => {
        console.log('Event added:', info.event.title);
      },
    });

    calendar.render();
  }
  handleEventClick(info: EventClickArg) {
    this.eventDetails = {
      title: info.event.title
    };
    this.showEventDetailsModal = true;
  }
  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
}
