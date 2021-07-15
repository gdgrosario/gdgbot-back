module.exports = (client) => {
  // Presence
  client.user.setPresence({
    activity: {
      name: "BotitoJS is here!",
      type: "PLAYING",
    },
    status: "online",
  });
};
