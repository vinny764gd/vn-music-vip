const discord = require('discord.js'), credenciais = require('./database/credentials.json'), config = require('./database/config.json'), fs = require('fs');
const client = new discord.Client({ messageCacheMaxSize: 200, messageCacheLifetime: 604800, messageSweepInterval: 604800, disableEveryone: true });

client.on('ready', () => {
    console.log("Estou on!")
})

require('./moduleloader.js')(client, discord, config, credenciais, fs)
client.commands = new discord.Collection(), client.aliases = new discord.Collection()

client.on("ready", () => {
  let activities = [
      `Fui desenvolvido por: Vinny.dev#6353`,
      `Torna-se vip para poder me usar!`,
      `So os membros vip's podem me usar!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 5000); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Atividades setada!")
});

client.login(credenciais.token)

