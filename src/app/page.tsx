'use client';
import Image from 'next/image'

import { useState } from 'react'


function Header() {
  return (<div className='display-table mt-3 max-w-prose p-1'>
    <h1 className='mt-6 text-3xl font-medium text-black'>Task 6</h1>
    <table className="mt-3 regid w-full max-w-prose">
      <thead></thead>
      <tbody>
      <tr>
        <td>Registration number</td>
        <td>21BCE5841</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Srevin Saju</td>
      </tr>
      </tbody>
    </table>
    </div>)

}

function Portfolio() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Srevin Saju</h2>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div className="flex space-x-4">
            <button className="bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded shadow-lg transition duration-300">
              Go
            </button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded shadow-lg transition duration-300">
              Rust
            </button>
            <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded shadow-lg transition duration-300">
              Python
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <p>
            Pursuing a degree in Computer Science Engineering at Vellore Institute of Technology, Chennai.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="text-lg font-semibold mb-2">Togomak</h4>
              <p>
                A declarative pipeline orchestrator with HCL as a configuration language, inspired by Terraform's architecture.
              </p>
              <a href="https://github.com/srevinsaju/togomak" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mt-2">
                View Source Code
              </a>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="text-lg font-semibold mb-2">Go-cat</h4>
              <p>
                A Go command line tool for tracking infrastructure across multiple clouds in a single git repository.
              </p>
              <a href="https://github.com/sorcero/go-cat" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mt-2">
                View Source Code
              </a>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="text-lg font-semibold mb-2">Guiscrcpy</h4>
              <p>
                A multiplatform GUI layer for Android to PC screen mirroring, written in Python 3.
              </p>
              <a href="https://github.com/srevinsaju/guiscrcpy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mt-2">
                View Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="flex space-x-4">
            <a
              href="mailto:mern@srev.in"
              className="text-green-500 hover:underline"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/srevinsaju"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/srevinsaju"
              className="text-gray-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className='mt-10'></div>
    </section>
  );
}


export default function Home() {
  return (
    <main className="w-full h-screen">
      <Header />
      <div className='w-full max-w-prose mx-auto'>
        <Portfolio />
      </div>
    </main>
  );
}