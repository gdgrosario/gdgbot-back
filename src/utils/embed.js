const { MessageEmbed } = require('discord.js');

const basicEmbed = (color, title, author, description , image, gif) =>{ 

	
    embed =  new MessageEmbed()
	.setColor(color)
	.setTitle(title)
	.setAuthor(author)
	.setDescription(description)
	.setThumbnail(gif)
	.setImage(image)
	.setTimestamp()

    return embed;
    }
    exports.basicEmbed = basicEmbed