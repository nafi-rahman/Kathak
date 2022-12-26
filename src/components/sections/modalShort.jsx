import React from "react";
import { motion } from "framer-motion";


export default function Modalshort() {
    
    return (
      <>
      <div className="w-screen h-screen bg-neutral-50 flex justify-center items-center text-neutral-800 font-bold " >
  <form action="https://getform.io/f/18ea184d-b2c2-481f-8d0d-5efb90e1474a" method="POST" enctype="multipart/form-data" className="p-10 bg-[#27778c] rounded-lg drop-shadow-lg space-y-4 object-cover bg-no-repeat bg-right " >
    <h1 className="text-xl font-light">COMMERCIAL</h1>
    <input type="hidden" id="FORMId" name="FORMId" value="COMMERCIAL" />
    {/* Name */}
    <div className="flex flex-col">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required className="rounded-lg bg-neutral-50" />
      <p className="invisible peer-invalid:visible text-red-700 font-light">
        Please enter your name
      </p>
    </div>
    
    {/* Email */}
    <div className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required className="rounded-lg bg-neutral-50" />
      <p className="invisible peer-invalid:visible text-red-700 font-light">
        Please enter a valid email address
      </p>
    </div>
    {/* Budget */}
    <div className="flex flex-col">
      <label htmlFor="budget">Estimated Budget</label>
      <input type="number" name="budget" id="budget" required className="rounded-lg bg-neutral-50" />
      <p className="invisible peer-invalid:visible text-red-700 font-light">
        Please enter a budget
      </p>
    </div>
    {/* Message */}
    <div className="flex flex-col">
      <label htmlFor="message">Short Description</label>
      <textarea name="message" id="message" cols={30} rows={3} required className="rounded-lg bg-neutral-50" defaultValue={""} />
      <p className="invisible peer-invalid:visible text-red-700 font-light">
        This field cannot be empty
      </p>
    </div>
    
    
    <button type="submit" className="px-5 py-1 bg-amber-700 rounded-lg">Send</button>
  </form>
</div>

  </>
    )
}