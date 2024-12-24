"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-12">
        <input
          type="text"
          placeholder="Full Name *"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className="w-full py-3 bg-transparent placeholder:text-black placeholder:opacity-100 border-b-2 border-[#393939] border-opacity-40 focus:outline-none"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          className="w-full py-3 bg-transparent placeholder:text-black placeholder:opacity-100 border-b-2 border-[#393939] border-opacity-40 focus:outline-none"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
          className="w-full py-3 bg-transparent placeholder:text-black placeholder:opacity-100 border-b-2 border-[#393939] border-opacity-40 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              subject: e.target.value,
            }))
          }
          className="w-full py-3 bg-transparent placeholder:text-black placeholder:opacity-100 border-b-2 border-[#393939] border-opacity-40 focus:outline-none"
          required
        />

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
          className="col-span-2 w-full py-3 bg-transparent placeholder:text-black placeholder:opacity-100 border-b-2 border-[#393939] border-opacity-40 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-button-bg text-white text-[14.77px] px-8 py-3 rounded-2xl mt-16"
      >
        Send Message
      </button>
    </form>
  );
}
