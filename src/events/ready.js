module.exports = (client) => {
  
  // Presence
  client.user.setPresence( 
    {
      status: "online", 
      game: { 
        name: `BOTITOJS:)`, 
        type: "WATCHING"
      }
    }
  );
 
  
};