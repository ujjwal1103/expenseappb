import {createConnection} from 'mysql2'


// export const db = mysql.createConnection({
//     host:"localhost",
//     user:"g2jehr4d2hrahewu4jes",
//     password:"pscale_pw_6dtBxTVHftwAcSndvWjx1L1CY03zkGkQFBT10NXN7Sg",
//     database:"expenseapp"
// })
const DATABASE_URL='mysql://2sy1zmyzyqhm2rm6ytzw:pscale_pw_H9AsYPdAbayZHWYqpzaesiKxMVHtEtt6JbDcrXobx4U@us-east.connect.psdb.cloud/expenseapp?ssl={"rejectUnauthorized":true}'


export const db = createConnection(DATABASE_URL)