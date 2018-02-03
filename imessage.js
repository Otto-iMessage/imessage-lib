#!/usr/bin/env node


function Bot(name, shorthand = false, whitelist_chats = [], blacklist_chats = [], ban_accounts = [], mod_accounts = [], max_consecutive = -1, handler) {
    this.name = name; 
    this.shorthand = shorthand; 
    this.whitelist_chats = whitelist_chats; 
    this.blacklist_chats = blacklist_chats; 
    this.banned_accounts = banned_accounts; 
    this.mod_accounts = mod_accounts; 
    this.max_consecutive = max_consecutive; 
    this.handler = handler; 
    this.data
}
function Handler(message, bots, error_message = "Sorry, that is not a command.") {
  for bot in bots {
      
      if message["text"].startswith(bot.name) || message.startswith("!") && 
          (group_chat not in blacklist_chats ||  blacklist_chats == []) and (group_chat in whitelist_chats || whitelist_chats == []) &&
          (from not in banned_accounts) && handler[message] != null {
         return handler[message](message, group_chat, from, message["date"])
    }
  }
  return error_message
}
console.log("Error check passed.");


