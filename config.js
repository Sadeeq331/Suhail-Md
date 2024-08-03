const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020000540";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_08_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFRaHRXdE5uVFY0UjJaN1B1Z2M5THJ5Rlh6MDJ6Wm9ZL1NlVzVZRlliT2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFsN1pocHM5UVNhRUpBZTEwWnlRdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQxMGZjMTEtNDQ4OS00N2ZiLWJhODEtZmI4MDg3Y2Y1ZjJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgNzcsXG4gICAgICAxMTMsXG4gICAgICAyNTEsXG4gICAgICAyMzgsXG4gICAgICAxMzIsXG4gICAgICA3NyxcbiAgICAgIDUwLFxuICAgICAgMTU3LFxuICAgICAgMTQxLFxuICAgICAgNTYsXG4gICAgICAzNixcbiAgICAgIDE1NixcbiAgICAgIDI5LFxuICAgICAgMTk2LFxuICAgICAgMzksXG4gICAgICAxNzMsXG4gICAgICA0NCxcbiAgICAgIDI0LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTkyLFxuICAgICAgMzQsXG4gICAgICAyMTAsXG4gICAgICAxNixcbiAgICAgIDEyNCxcbiAgICAgIDE4NixcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICAxMDAsXG4gICAgICAxNzIsXG4gICAgICAyMTksXG4gICAgICAxODAsXG4gICAgICAxOTYsXG4gICAgICAxMixcbiAgICAgIDE3OSxcbiAgICAgIDEsXG4gICAgICAxNyxcbiAgICAgIDE0MyxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZNVlXM1o2U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDAwMDU0MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FkZWVxIFNhbmkgRnRcIixcbiAgICBcImxpZFwiOiBcIjEwNzk3NTgxMzM5NDU5OTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B5RDVJTURFTE9jdXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODBqbVpCWWRtUDRZS3V6bTdEeVlCT3J0RjUxUWlUWnZmdzhIcU5Qb2Qycz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXYVNJNWEveUJmN2NsYnRlSVBrM3FXYXE5ZjJUNnA0MWpRQUdvS0lVVjVsSWpKS0YxSWFsKy82WmpqOGhmcWdtYzRSb1pwdmYxcGloTHZpd3pCckZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5bkg5K1kvZXN4ZW9qK3RQU09qTUdWenRoc05xRHp4SUhlSWNxeW8yZnYzeEtEVWtUbFJDZm4vc1dVUytMcVZyWGZnYjFIeXN4WFlIVElBbXRhNmJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwMDAwNTQwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzE1NzAzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
