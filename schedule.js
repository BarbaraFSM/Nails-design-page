import React, { useState } from "react";

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ name: "", date: "", time: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.date && form.time) {
      setAppointments([...appointments, form]);
      setForm({ name: "", date: "", time: "" });
    }
  };

  return (
    <section className="schedule">
      <h2>Agende seu Horário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <button type="submit">Agendar</button>
      </form>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.name} - {appointment.date} às {appointment.time}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Schedule;
