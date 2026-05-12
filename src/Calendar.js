import { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const dayNames = ['日', '一', '二', '三', '四', '五', '六'];

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const previousMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isToday = (day) => {
    return day && today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={previousMonth}>◀</button>
        <div className="calendar-title">
          {year}年 {monthNames[month]}
        </div>
        <button className="calendar-nav-btn" onClick={nextMonth}>▶</button>
      </div>

      <div className="calendar-weekdays">
        {dayNames.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day ? 'active' : ''} ${isToday(day) ? 'today' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
