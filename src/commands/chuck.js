const axios = require('axios').default;
const embed = require("../utils/embed")

module.exports = async (client, message, args) => {
    const color = "#F60909"; 
    const title = "Frase de Chuck Norris";
    const author = "Autor: gdgbotito.js";
    const image = "https://navarra.elespanol.com/media/navarra/images/2017/08/25/2017082516275187082.jpg";
    const gif = "https://66.media.tumblr.com/6541b015b8ff3ebd76bff4aae1a0cc5c/tumblr_p979la5euQ1qc5dpuo1_500.gif";
    const frase = await axios.get("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
        const description = response.data.value
    message.channel.send(embed.basicEmbed(color, title, author, description , image , gif));
  })
};
