# imessage-lib
library for building an imessage bot

```
imessage.bot
- *name string
- shorthand int
- whitelist_chats []string
- blacklist_chats []string
- ban_accounts []string
- mod_accounts []string
- max_consecutive int
- *handler func(string, string string) string
  - IN: message, person, group_chat
  - OUT: message

- chats
  - groupchat_id 
    - last_message
    - last_person
    - consecutive_commands
    
* = required
```
