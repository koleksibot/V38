const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
let tk = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: 'ftext ?(.*)', desc: Lang.FRANCY, fromMe: tk }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('๐ *Text Converting* ๐ ')

await axios
      .get(`https:///api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `**โโโโโFancy Textโโโโท* \n             *Public-BOtยฎ๏ธ* * \n              \n\n ${result} \n\n                 *โโโโโโโโโโโPublic-BOtยฎ๏ธโโโโโโโโโบ*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
	
	Neotro.addCommand({ pattern: 'ftext ?(.*)', dontAddCommandList: true, fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('๐ *Text Converting* ๐ ')

await axios
      .get(`https://.herokuapp.com/api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*โโโโโFancy Textโโโโท* \n             *Public-BOtยฎ๏ธ* \n\n ${result} \n\n                \n*โโโโโโโโโโโPublic-BOtยฎ๏ธโโโโโโโโโบ*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
