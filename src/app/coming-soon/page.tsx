"use client";

import React, { useEffect, useMemo, useState } from "react";

type ComingSoonProps = {
  /** ISO date string or Date object for launch time. Defaults to 30 days from now. */
  launchDate?: string | Date;
};

export default function ComingSoon({ launchDate }: ComingSoonProps) {
  const target = useMemo(() => {
    if (!launchDate) return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    return typeof launchDate === "string" ? new Date(launchDate) : launchDate;
  }, [launchDate]);

  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(
    0,
    Math.floor((target.getTime() - now.getTime()) / 1000)
  );
  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = diff % 60;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Coming Soon</h1>
      <div className="grid grid-cols-4 gap-4 text-center text-3xl font-bold">
        <div className="p-6 rounded-lg bg-white shadow">
          {String(days).padStart(2, "0")}
          <div className="text-sm text-gray-500">Days</div>
        </div>
        <div className="p-6 rounded-lg bg-white shadow">
          {String(hours).padStart(2, "0")}
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="p-6 rounded-lg bg-white shadow">
          {String(minutes).padStart(2, "0")}
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="p-6 rounded-lg bg-white shadow">
          {String(seconds).padStart(2, "0")}
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>
    </main>
  );
}
