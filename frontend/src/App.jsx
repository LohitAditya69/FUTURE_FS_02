import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [leads, setLeads] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Search Feature
  const [searchTerm, setSearchTerm] = useState("");

  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // ✅ Backend Base URL
  const API_URL = "https://mini-crm-backend-fpde.onrender.com/api/leads";

  // Fetch Leads
  const fetchLeads = async () => {
    const res = await axios.get(API_URL);
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add Lead
  const addLead = async (e) => {
    e.preventDefault();

    await axios.post(API_URL, formData);

    setFormData({ name: "", email: "", phone: "", notes: "" });
    fetchLeads();
  };

  // Delete Lead
  const deleteLead = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchLeads();
  };

  // Filter Leads by Search
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 🔐 Login Screen
  if (!isLoggedIn) {
    return (
      <div className="page">
        <div className="container">
          <h1>🔐 Admin Login</h1>

          <form
            className="lead-form"
            onSubmit={(e) => {
              e.preventDefault();

              const username = e.target.username.value;
              const password = e.target.password.value;

              if (username === "admin" && password === "1234") {
                setIsLoggedIn(true);
              } else {
                alert("Invalid Admin Credentials ❌");
              }
            }}
          >
            <input type="text" name="username" placeholder="Admin Username" />

            <input
              type="password"
              name="password"
              placeholder="Admin Password"
            />

            <button type="submit">Login</button>
          </form>

          <p className="login-hint">Default Login → admin / 1234</p>
        </div>
      </div>
    );
  }

  // ✅ Dashboard Screen
  return (
    <div className="page">
      <div className="container">
        <h1>📌 Mini CRM Dashboard</h1>

        {/* Logout Button */}
        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>

        <p className="lead-count">
          Total Leads: <b>{leads.length}</b>
        </p>

        {/* Search Bar */}
        <input
          className="search-bar"
          type="text"
          placeholder="Search leads by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Add Lead Form */}
        <form onSubmit={addLead} className="lead-form">
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Client Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="notes"
            placeholder="Follow-up Notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit">Add Lead</button>
        </form>

        {/* Leads Table */}
        <h2>All Leads</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>

                {/* Status Update */}
                <td>
                  <span className={`badge ${lead.status.toLowerCase()}`}>
                    {lead.status}
                  </span>

                  <select
                    value={lead.status}
                    onChange={async (e) => {
                      await axios.put(`${API_URL}/${lead._id}`, {
                        status: e.target.value,
                        notes: lead.notes,
                      });

                      fetchLeads();
                    }}
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Interested</option>
                    <option>Converted</option>
                  </select>
                </td>

                {/* Notes */}
                <td>{lead.notes}</td>

                {/* Timestamp */}
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>

                {/* Delete */}
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteLead(lead._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
