const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
 let banlogkanal = message.mentions.channels.first()
if (!banlogkanal) return message.channel.send('Lütfen Banlog Kanalını Etiketlermisin?')
   
  db.set(`banlog_${message.guild.id}`, banlogkanal.id)

 
  message.channel.send(`Banlog Kanalı Başarıyla Ayarlandı; **${banlogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'banlog-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'banlog-kanal <#kanal>'
};