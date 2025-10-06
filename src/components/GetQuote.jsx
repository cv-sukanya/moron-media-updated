import { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", service: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-4 p-6 bg-white shadow rounded">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">Select Service</option>
        <option value="Video Production">Video Production</option>
        <option value="Photography">Photography</option>
        <option value="Content Packaging">Content Packaging</option>
      </select>
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Send
      </button>
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
};

export default GetQuote;
