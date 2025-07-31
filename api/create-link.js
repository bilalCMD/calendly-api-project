const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const { name, email, eventType } = req.body;

    const response = await fetch("https://api.calendly.com/scheduling_links", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: eventType,
        max_event_count: 1,
        invitee_email: email,
      }),
    });

    const data = await response.json();
    res.status(200).json(data.resource || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
