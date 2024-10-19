const db = require('../db');

// Create a new registration
exports.createRegistration = (req, res) => {
  const { Name, Email, DateOfBirth } = req.body;
  if (!Name || !Email || !DateOfBirth) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const query = 'INSERT INTO Registration (Name, Email, DateOfBirth) VALUES (?, ?, ?)';
  db.query(query, [Name, Email, DateOfBirth], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Registration created successfully.', id: result.insertId });
  });
};

// Read all registrations
exports.getAllRegistrations = (req, res) => {
  db.query('SELECT * FROM Registration', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Update a registration
exports.updateRegistration = (req, res) => {
  const { ID } = req.params;
  const { Name, Email, DateOfBirth } = req.body;
  const query = 'UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ? WHERE ID = ?';
  db.query(query, [Name, Email, DateOfBirth, ID], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Registration updated successfully.' });
  });
};

// Delete a registration
exports.deleteRegistration = (req, res) => {
  const { ID } = req.params;
  const query = 'DELETE FROM Registration WHERE ID = ?';
  db.query(query, [ID], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Registration deleted successfully.' });
  });
};