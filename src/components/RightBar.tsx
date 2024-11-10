import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const RightBar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const calendarDays = Array(firstDayOfMonth)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="max-w-md mx-auto bg-[#222] shadow-md rounded-lg p-6 mt-10">
      <div className="flex items-center justify-center   gap-6  mb-4">
        <button
          onClick={prevMonth}
          className=" bg-[#222] text-white  hover:bg-[#222]"
        >
          <FaChevronLeft />
        </button>
        <h2 className=" font-semibold w-[100px] text-sm text-center flex">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <button
          onClick={nextMonth}
          className=" bg-[#222] text-white  hover:bg-[#222]"
        >
          <FaChevronRight />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className="p-2 text-sm font-semibold text-gray-600">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(calendarDays.length / 7))].map(
            (_, weekIndex) => (
              <tr key={weekIndex}>
                {calendarDays
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((day, dayIndex) => (
                    <td key={dayIndex} className="p-2">
                      {day ? (
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                        ${
                          day === today.getDate() &&
                          currentMonth === today.getMonth() &&
                          currentYear === today.getFullYear()
                            ? "bg-stone-500 text-white"
                            : "text-white hover:bg-stone-500"
                        }`}
                        >
                          {day}
                        </div>
                      ) : (
                        <div className="w-10 h-10"></div>
                      )}
                    </td>
                  ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RightBar;
