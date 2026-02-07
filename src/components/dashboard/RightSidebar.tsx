import React, { useState, useEffect } from 'react';

export default function RightSidebar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;
    return {
      time: `${hours < 10 ? '0' + hours : hours}:${minutesStr}:${secondsStr}`,
      period: ampm
    };
  };

  const getDayName = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const getMonthName = (date: Date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  };

  const timeObj = formatTime(currentTime);
  const dayName = getDayName(currentTime);
  const monthName = getMonthName(currentTime);
  const day = currentTime.getDate();

  return (
    <div className="w-48 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 flex flex-col h-screen">
      {/* Time Section */}
      <div className="bg-gradient-to-b from-gray-400 to-gray-500 px-4 py-3">
        <div className="text-white text-2xl font-bold leading-tight">
          {timeObj.time}
        </div>
        <div className="text-white text-base font-semibold">
          {timeObj.period} Dhaka
        </div>
      </div>

      {/* Date Section */}
      <div className="bg-white px-4 py-3">
        <div className="text-blue-600 text-sm font-semibold">
          {dayName} <span className="text-gray-800">{monthName}</span>
        </div>
        <div className="text-blue-900 text-5xl font-bold leading-none mt-1">
          {day < 10 ? '0' + day : day}
        </div>
      </div>

      {/* Map/Image Section */}
      <div className="flex-1 bg-blue-900 relative">
        {/* You can add a map image or component here */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder for map - replace with actual map component */}
          <div className="w-full h-full bg-gradient-to-b from-blue-800 to-blue-950"></div>
        </div>
      </div>

      {/* Weather Section */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 px-4 py-3 border-t border-blue-700">
        <div className="text-white text-xs font-medium mb-1">Dhaka</div>
        <div className="text-white text-3xl font-bold">28°C</div>
        <div className="text-blue-200 text-[10px] mt-1">Feels like 31°C</div>
        <div className="text-blue-300 text-[10px]">Forecast Haze</div>
      </div>

      {/* Logo Section */}
      <div className="bg-gray-400 px-4 py-4 flex items-center justify-center">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">b</span>
          </div>
          <span className="text-blue-900 text-sm font-bold">berrylabs</span>
        </div>
      </div>
    </div>
  );
}