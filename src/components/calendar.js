import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)); // January 2025
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleMonthChange = (event) => {
    setCurrentDate(new Date(currentDate.getFullYear(), parseInt(event.target.value), 1));
    setActiveDropdown(null);
  };

  const handleYearChange = (event) => {
    setCurrentDate(new Date(parseInt(event.target.value), currentDate.getMonth(), 1));
    setActiveDropdown(null);
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const today = new Date();
    const isToday = (day) => {
      return (
        today.getFullYear() === currentDate.getFullYear() &&
        today.getMonth() === currentDate.getMonth() &&
        today.getDate() === day
      );
    };

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-2 border rounded"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`text-center p-2 border rounded ${isToday(i) ? 'bg-gray-700 text-white font-bold' : ''}`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white p-4 rounded mt-4 shadow-md h-96 relative font-nunito">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-700 hover:text-gray-900">
          <FaArrowLeft />
        </button>
        <div className="flex items-center space-x-2">
          <div className="relative" ref={dropdownRef}>
            <select
              className="text-xl font-bold bg-transparent cursor-pointer text-gray-900 appearance-none focus:outline-none"
              value={currentDate.getMonth()}
              onChange={handleMonthChange}
              onClick={() => setActiveDropdown(activeDropdown === 'month' ? null : 'month')}
            >
              {months.map((month, index) => (
                <option key={month} value={index} className="bg-gray-700 text-white hover:bg-gray-900">
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="relative" ref={dropdownRef}>
            <select
              className="text-xl font-bold bg-transparent cursor-pointer text-gray-900 appearance-none focus:outline-none"
              value={currentDate.getFullYear()}
              onChange={handleYearChange}
              onClick={() => setActiveDropdown(activeDropdown === 'year' ? null : 'year')}
            >
              {Array.from({ length: 21 }, (_, i) => 2020 + i).map((year) => (
                <option key={year} value={year} className="bg-gray-700 text-white hover:bg-gray-900">
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleNextMonth} className="text-gray-700 hover:text-gray-900">
          <FaArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-bold text-gray-900">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}
