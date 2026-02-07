
import { useEffect, useState } from 'react'
export default function RightSidebar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return (
    <aside className="w-72 h-screen bg-[#1e2b6d] text-white flex flex-col justify-between">
      <div className="p-6">
        <div className="text-right">
          <p className="text-3xl font-bold">
            {now.toLocaleTimeString()}
          </p>
          <p className="text-sm text-blue-200">
            PM Dhaka
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            {now.toLocaleDateString('en-US', { weekday: 'long' })}
          </p>
          <p className="text-6xl font-bold my-2">
            {now.getDate()}
          </p>
          <p className="text-blue-200 text-sm">
            {now.toLocaleDateString('en-US', { month: 'long' })}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-white text-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm font-semibold">Dhaka</p>
          <p className="text-4xl font-bold my-1">28°C</p>
          <p className="text-xs text-gray-500">
            Feels like: 31°C<br />Forecast: Haze
          </p>
        </div>
      </div>
      <div className="p-6 flex justify-center">
        <img src="/berrylabs.png" alt="berrylabs" className="h-8" />
      </div>
    </aside>
  )
}
