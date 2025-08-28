import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import cookieParser from "cookie-parser";

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



const port = process.env.PORT || 2500;

app.get('/aishwary', (req, res) => {
  res.send('Hello World jii! its aishwary')
})
app.get('/arul', (req, res) => {
    res.send('NOw Bye World!')
})
app.get('/', (req, res) => {
  res.send('Entering Hello World!')
})
app.get('/vartika', (req, res) => {
  res.send('Hello World jii! its vartika singh signing in')
})
//connect to db
db();

//user routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
