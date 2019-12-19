const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU1NzEwNTUzNjcwNDE4NDMy.Xfbciw.Q0pzfWA0421fqkNGBxKYyAoQNbM';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Launching Hangout Discord Bot...');
    console.log('Starting up bot...');
    console.log('Connecting to discord...');
    console.log('Bot is now online.');
    console.log(' ');
    bot.user.setStatus('dnd')
})

bot.on('message', message=>{

    
  if(!message.content.startsWith(PREFIX)) return;

  let args = message.content.substring(PREFIX.length).split(" ")

  switch(args[0]){ 
      case 'dnd':
          if(!message.member.roles.find(r => r.name === "Manager")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        bot.user.setStatus('dnd')
        message.channel.send("<:greencheckmark:655943744947879966>I am now in do not disturb mode.")
  }})

  bot.on('message', message=>{
  
    if(!message.content.startsWith(PREFIX)) return;
  
    let args = message.content.substring(PREFIX.length).split(" ")
  
    switch(args[0]){ 
        case 'idle':
          if(!message.member.roles.find(r => r.name === "Manager")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
          bot.user.setStatus('idle')
          message.channel.send("<:greencheckmark:655943744947879966> I am now in idle mode.")
    }})

    bot.on('message', message=>{
  
      if(!message.content.startsWith(PREFIX)) return;
    
      let args = message.content.substring(PREFIX.length).split(" ")
    
      switch(args[0]){ 
          case 'online':
              if(!message.member.roles.find(r => r.name === "Manager")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
            bot.user.setStatus('online')
            message.channel.send("<:greencheckmark:655943744947879966> I am now in online mode.")
      }})

      bot.on('message', message=>{
  
        if(!message.content.startsWith(PREFIX)) return;
      
        let args = message.content.substring(PREFIX.length).split(" ")
      
        switch(args[0]){ 
            case 'offline':
                if(!message.member.roles.find(r => r.name === "Manager")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
              bot.user.setStatus('invisible')
              message.channel.send("<:greencheckmark:655943744947879966> I am now in offline mode.")
        }})

        bot.on('message', message=>{

          if (message.channel.id === '654879531232002069')
          if (message.channel.send)
          message.delete()

        })

        bot.on('message', message=>{

            if (message.channel.id === '654879568834068500')
            if (message.channel.send)
            message.delete()
        })

        bot.on('message', message=>{

          if (message.channel.id === '656677819346321428')
          if (message.channel.send)
          message.delete()

        })

bot.on('message', message=>{

    
    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){ 
        case 'clear':
          if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
            if(!args[1]) return message.channel.sendMessage('<:redxmark:655943777990475807> Sorry, I dont know how much to delete.')
            message.channel.bulkDelete(args[1]);
            break;
    }
});



bot.on('guildMemberAdd', member=>{

    const channel = member.guild.channels.find(channel => channel.name === "new-members");
    if(!channel) return;
    channel.send({embed: {
    color: 2985191,
    description: (`${member} has joined ${member.guild.name}!`)
}})});

bot.on('guildMemberRemove', member=>{

  const channel = member.guild.channels.find(channel => channel.name === "new-members");
  if(!channel) return;
  channel.send({embed: {
  color: 2985191,
  description: (`${member} has left ${member.guild.name}!`)
}})});

bot.on('message', message=>{

    
  if(!message.content.startsWith(PREFIX)) return;

  let args = message.content.substring(PREFIX.length).split(" ")

  switch(args[0]){
    case 'profile':
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')

        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor(2985191)
        .setThumbnail(message.author.avatarURL)
        .addField("Name:", message.author.username)
        .addField("ID:", message.author.id,)
        .addField("Highest Role:", message.member.highestRole,)
       
        message.channel.send({embed});
  }});

  bot.on('message', function(message){
    {
      if(message.content == '!verify')
      {
          message.member.send(`You have been verified on ${message.guild.name}!`)
          let memberRole = message.member.guild.roles.find("name", "Verified")
          message.member.addRole(memberRole)
      }
}});

bot.on('guildMemberAdd', function(member){
{
    member.send(`Welcome to ${member.guild.name}! Enjoy your time here.`)
}});

//remember to take away after 4 hours

bot.on('message', function(message){
  {
    if(message.content == 'codevip')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        message.member.send("Well, this code aint valid anymore, sorry.")
    }
}});

        bot.on('message', function(message){
          {
            if(message.content == '!addblue')
            {
                if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
                let memberRole = message.member.guild.roles.find("name", "Blue")
                message.member.addRole(memberRole)
            }
      }});

      bot.on('message', function(message){
        {
          if(message.content == '!removeblue')
          {
                if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')              
                let memberRole = message.member.guild.roles.find("name", "Blue")
              message.member.removeRole(memberRole)
          }
    }});

    bot.on('message', function(message){
      {
        if(message.content == '!addcyan')
        {
            if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
            let memberRole = message.member.guild.roles.find("name", "Cyan")
            message.member.addRole(memberRole)
        }
  }});

  bot.on('message', function(message){
    {
      if(message.content == '!removecyan')
      {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
          let memberRole = message.member.guild.roles.find("name", "Cyan")
          message.member.removeRole(memberRole)
      }
}});

bot.on('message', function(message){
  {
    if(message.content == '!addred')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Red")
        message.member.addRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!removered')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Red")
        message.member.removeRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!addgreen')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Green")
        message.member.addRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!removegreen')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Green")
        message.member.removeRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!addpurple')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Purple")
        message.member.addRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!removepurple')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Purple")
        message.member.removeRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!addpink')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Pink")
        message.member.addRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!removepink')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Pink")
        message.member.removeRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!addblack')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Black")
        message.member.addRole(memberRole)
    }
}});

bot.on('message', function(message){
  {
    if(message.content == '!removeblack')
    {
        if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
        let memberRole = message.member.guild.roles.find("name", "Black")
        message.member.removeRole(memberRole)
    }
}});

        bot.on('message', function(message){

    
          if(!message.content.startsWith(PREFIX)) return;
        
          let args = message.content.substring(PREFIX.length).split(" ")
        
          switch(args[0]){
            case 'help':
                if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:643335043523018789> You do not have permission to do that command.').catch(console.error)
                message.channel.send({embed: {
                  color: 2985191,
                  title: `Commands for ${message.guild.name}`,
                  author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL,
                  },
                  description: "```!help !clear !ban !kick\n!serverinfo !profile !warn\n!botversion !mute !status\n\n```",
                }})}});

    bot.on('message', message=>{

          if(!message.content.startsWith(PREFIX)) return;
        
          let args = message.content.substring(PREFIX.length).split(" ")
        
          switch(args[0]){
            case 'status':
                if(!message.member.roles.find(r => r.name === "Manager")) return message.channel.send('Sorry, you do not have permissions to do that command.')
              message.channel.send({embed: {
                color: 2985191,
                title: `Status for ${bot.user.username}`,
                author: {
                  name: bot.user.username,
                  icon_url: bot.user.avatarURL,
                },
                description: "**Find a status!**\n```!online = Status Online\n!dnd = Status Do Not Disturb\n!idle = Status Idle\n!offline = Status Offline```"
              }})}});

bot.on('message', async message => {
    let blacklisted = ['fuck', 'bitch', 'nigg', 'nigga', 'cock', 'c0ck', 'pussy', 'asshole', 'b1tch', 'b!tch', 'blowjob', 'fuk', 'cunt', 'cunt', 'dick', 'd1ck', 'd!ck', 'shit', 'bullshit', 'bullcrap', 'frick', 'sex', 'sax', 'f**k', 's h i t', 'f u c k', 'f u k', 'f r i c k', 'b i t c h', 'b*' ]
  
    let foundInText = false;
    for (var i in blacklisted){
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
  
      if (foundInText) {
        message.delete();
        message.member.send("Sorry, we can not allow bad words. Please check our rules.")
    }
  });

  bot.on('message', async message => {
    let blacklisted = ['!verify']
  
    let foundInText = false;
    for (var i in blacklisted){
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
  
      if (foundInText) {
        message.delete();
    }
  });

  bot.on('message', function(message){
      
    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){ 
        case 'kick':
            if(!message.member.roles.find(r => r.name === "Trainee")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')

          const user = message.mentions.users.first();
          if (user) {
              const member = message.guild.member(user);

          if (member) {
              member.kick('Sorry, you were kicked from the server.').then(() => {
                message.channel.send(`<:greencheckmark:655943744947879966> ${user.tag} has been kicked for ${args[1]}.`)
                console.log(`${user.tag} has been kicked for ${args[1]}.`)
                console.log(' ')
            }).catch(err =>{
              message.channel.send('<:redxmark:655943777990475807> Sorry, this person is a staff member.')
            });
          } else {
            message.channel.send('<:redxmark:655943777990475807> Sorry, a error occurred. Please try again.')
          }
        } else {
          message.channel.send('<:redxmark:655943777990475807> Sorry, could not find this user.')

        break;
  }}});

  bot.on('message', function(message){
  
    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){ 
        case 'ban':
            if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('<:redxmark:655943777990475807> Sorry, you do not have permissions to do that command.')

          const user = message.mentions.users.first();

          if (user) {
              const member = message.guild.member(user);

          if (member) {
              member.ban({reason: 'Commander Banned'}).then(() =>{
                message.channel.send(`<:greencheckmark:655943744947879966> ${user.tag} has been banned.`)
                console.log(`${user.tag} has been kicked.`)
                console.log(' ')
              }).catch(err =>{
                message.channel.send('<:redxmark:655943777990475807> Sorry, this person is a MOD/Admin.')
              })
          } else {
            message.channel.send('<:redxmark:655943777990475807> Sorry, Sorry, a error occurred. Please try again.')
          }
        } else {
          message.channel.send('<:redxmark:655943777990475807> Sorry, could not find this user.')
        }

        break;
  }});
      
      bot.on('message', message=>{

        if(!message.content.startsWith(PREFIX)) return;
    
        let args = message.content.substring(PREFIX.length).split(" ")

      switch(args[0]){
        case 'serverinfo':
            if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')    
            const embed = new Discord.RichEmbed()
            .setAuthor(bot.user.username, bot.user.avatarURL)
            .setColor(2985191)
            .setThumbnail(`${message.guild.iconURL}`)
            .addField("Server Name:", message.guild.name)
            .addField("Server Owner:", message.guild.owner, true)
            .addField("Server Created On:", "Sep 22, 2019")
            .addField("Server Members:", `${message.guild.memberCount}`, true)           
            message.channel.send({embed});

          }});

          bot.on('message', message=>{

    
            if(!message.content.startsWith(PREFIX)) return;
          
            let args = message.content.substring(PREFIX.length).split(" ")
          
            switch(args[0]){
              case 'warn':
                  if(!message.member.roles.find(r => r.name === "Trainee")) return message.channel.send('<:redxmark:655943777990475807> You do not have permission to do that command.')
                    const user = message.mentions.users.first();
        
                    if (user) {
                        const member = message.guild.member(user);

                    if (member) {
                      console.log(`${user.tag} has been warned.`)
                      console.log(' ')
                      message.channel.send(`<:greencheckmark:655943744947879966> ${user.tag} has been warned for ${args[2]}.`)
                    }
                } else {
                      message.channel.send('<:redxmark:655943777990475807> Sorry, could not find this user.')
              }}});

              bot.on('message', message=>{
                
    
            if(!message.content.startsWith(PREFIX)) return;
          
            let args = message.content.substring(PREFIX.length).split(" ")
          
            switch(args[0]){
              case 'botversion':
                  if(!message.member.roles.find(r => r.name === "Verified")) return message.channel.send('<:redxmark:643335043523018789> You do not have permission to do that command.')
                message.channel.send('Version 2.2')
            }});

bot.login(token);