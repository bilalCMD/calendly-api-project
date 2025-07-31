module.exports = async (req, res) => {
  res.status(200).json({
    message: "Calendly API Integration is live.",
    endpoints: {
      createLink: "/api/create-link",
      availability: "/api/availability"
    },
    status: "✅ Ready to receive requests"
  });
};
