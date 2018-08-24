const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;  
    const xxx = fs.readFileSync("./xxx.txt", "utf8");
    const extra = fs.readFileSync("./extra.txt", "utf8");
    message.channel.send({  
      embed : {         
        title: " ",
        footer: {
          icon_url:"https://cdn.discordapp.com/attachments/446712012320276492/452048433612849152/image3.png",
          text: "© Warrior cats the unnamed server"
        },
        description:(xxx),
        color: 4886754,
        fields: [ 
            {
          name:"If you want to read the books click here:",
          value:"[Drive](https://drive.google.com/drive/folders/0BwSIgRsWbcBGU2NNaW1icXZpNzQ)",
          inline:true

            },
            {
              name:"RolePlay and More Doc:",
              value:"[Drive]( https://docs.google.com/document/d/1HqtWglKmWv0hHng1J1HJaROVahrfM825rYfQLyKp8C4/edit?usp=sharing)",
              inline:true
    
                },
                {
                  name:"Character Applications:",
                  value:"[Drive]( https://goo.gl/forms/q7BpKWgKYPkQSpkZ2)",
                  inline:true
        
                    },
                    {
                      name:"Medicine Cat Applications:",
                      value:"[Drive]( https://goo.gl/forms/CtLUuYXtEY8jqh8k2)",
                      inline:true
                        },    
                        {
                          "name": "If you want to become a staff member click the link :",
                          value: "[Link](https://goo.gl/forms/2i17Br4RvLSxcNJO2)",
                          inline: true
                        },           
        {
         name:"Atention!",
         value:(extra),
         inline:false
                }
]
}
})

message.delete();
}  
  module.exports.help = {
    name: "rape"
  }
