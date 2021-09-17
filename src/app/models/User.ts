export interface User {
   id: String,
   firstname: String ,
   lastname: String ,
   username: String ,
   password: String ,
   email:  String,
   role: Number,
   suspended: Boolean,
   notification: [
      {
        description: String,
        link: String,
      },
   ],
  }
