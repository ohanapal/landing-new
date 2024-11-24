'use client';

import { useState } from 'react';

export function AppDemo() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Logo and Greeting */}
      <header className="text-center pt-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.5 7.5C4.5 6.11929 5.61929 5 7 5s2.5 1.11929 2.5 2.5S8.38071 10 7 10s-2.5-1.11929-2.5-2.5ZM16.5 7.5c0-1.38071 1.11929-2.5 2.5-2.5s2.5 1.11929 2.5 2.5S20.3807 10 19 10s-2.5-1.11929-2.5-2.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14c-1.65685 0-3 1.34315-3 3v3h6v-3c0-1.65685-1.34315-3-3-3Z"
              />
            </svg>
          </div>
          <h1 className="mt-4 text-lg font-semibold">Ohana</h1>
        </div>
        <p className="mt-2 text-sm">How may I help you today?</p>
      </header>

      {/* Features */}
      <main className="px-6 mt-8">
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-cyan-600 p-4 rounded-lg text-center">
            <div className="text-sm font-medium">General Chat</div>
          </button>
          <button className="bg-cyan-600 p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Chat with PI</div>
          </button>
          <button className="bg-cyan-600 p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Scheduling</div>
          </button>
        </div>
      </main>

      {/* Hot Features */}
      <section className="px-6 mt-8">
        <h2 className="text-sm font-semibold">Hot Features</h2>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <p className="mt-2 text-xs">Smart Work</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7l4-4m0 0l4 4m-4-4v18"
                />
              </svg>
            </div>
            <p className="mt-2 text-xs">Automation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5v15m0-15c4.33333 1.33333 6.5 4.83333 6.5 9.5s-2.16667 8.16667-6.5 9.5m0-19c-4.33333 1.33333-6.5 4.83333-6.5 9.5s2.16667 8.16667 6.5 9.5"
                />
              </svg>
            </div>
            <p className="mt-2 text-xs">Creativity</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer className="flex justify-around bg-gray-900 py-4">
        <button className="flex flex-col items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h11M9 21V10m0 0L5 6m4 4l4-4"
            />
          </svg>
          <span className="mt-1 text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4M3 21h18M9 16h6"
            />
          </svg>
          <span className="mt-1 text-xs">Explore</span>
        </button>
        <button className="flex flex-col items-center text-cyan-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 9l-3-3-3 3m6 6l-3 3-3-3m3-12v18"
            />
          </svg>
          <span className="mt-1 text-xs">Settings</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 0L5 12h14l-7-7Z"
            />
          </svg>
          <span className="mt-1 text-xs">Profile</span>
        </button>
      </footer>
    </div>
  );
}
