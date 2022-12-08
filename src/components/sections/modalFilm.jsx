import React from "react";
import { motion } from "framer-motion";


export default function Modalfilm() {
    
    return (
        <>
            <div className="w-screen h-screen bg-purple-700 flex justify-center items-center">
        <form action="https://getform.io/f/edee7013-c254-414e-b8ce-099ab540918b" method="POST" enctype="multipart/form-data" className="p-10 bg-white rounded-lg drop-shadow-lg space-y-4">
          <h1 className="text-xl font-light">FILM</h1>
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required className="peer border border-slate-400" />
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter your name
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required className="peer border border-slate-400" />
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter a valid email address
            </p>
          </div>
          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={30} rows={3} required className="peer border border-slate-400" defaultValue={""} />
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              This field cannot be empty
            </p>
          </div>
          
          
          <button type="submit" className="px-5 py-1 bg-amber-500">Send</button>
        </form>
      </div>

        </>
    )
}