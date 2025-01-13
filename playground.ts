import { db } from "./src/server/db";

await db.user.create({
    data:{
        emailAddress: "test@gmail.com",
        firstName: "Ohm",
        lastName: "Saran",
    }
})

console.log("success")