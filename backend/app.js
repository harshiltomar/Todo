const express = require("express");
const app = express();
const cors = require("cors");
require("./connection/connection");
("use strict");
const nodemailer = require("nodemailer");

//routes
const auth = require("./routes/auth.route");
const list = require("./routes/list.route");
const history = require("./routes/history.route");
const image = require("./routes/image.route");
const sendMail = require("./controllers/sendMail");

// to receive and send data in json format
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

//make a post on sendemail
app.post("/sendemail", async (req, res) => {
  // try {
  //   await sendMail(req.body.email);
  //   res.status(200).send("Email sent successfuly!");
  // } catch (error) {
  //   console.error("Error sending email", error);
  //   res.status(500).send("Error sending email.");
  // }
  try {
    const { email } = req.body;
    const transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "raymundo.altenwerth@ethereal.email",
        pass: "UgjbSZYGvkpnK6tGbE",
      },
    });

    const mailOptions = {
      from: "raymundo.altenwerth@ethereal.email",
      to: email,
      subject: "Welcome to Team Todoist!",
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #333;">Welcome on board to Team Todoist!</h1>
                <p style="font-size: 16px; line-height: 1.5; color: #666;">Hope you accomplish tons of stuff with us!!</p>
                <p style="font-size: 16px; line-height: 1.5; color: #666;">Todoist is a powerful task organizing and to-do list platform designed to help you stay organized, focused, and productive.</p>
                <h2 style="color: #333;">Here are a few tips to get started:</h2>
                <ul style="font-size: 16px; line-height: 1.5; color: #666;">
                    <li>Create your first project and add tasks to it.</li>
                    <li>Organize your tasks using labels, priorities, due dates, and projects.</li>
                    <li>Explore the different views like Today, Upcoming, and Inbox to manage your tasks efficiently.</li>
                    <li>Install Todoist's mobile app and browser extensions to stay productive on the go.</li>
                </ul>
                <p style="font-size: 16px; line-height: 1.5; color: #666;">If you have any questions or need assistance, don't hesitate to reach out to our support team or visit our Help Center for comprehensive guides and tutorials.</p>
                <p style="font-size: 16px; line-height: 1.5; color: #666;">Happy organizing!</p>
                <p style="font-size: 16px; line-height: 1.5; color: #666;">Team Todoist</p>
            </div>
        `,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.use("/api/v1", auth);
app.use("/api/v2", list);
app.use("/api/v3", history);
app.use("/api/v4", image);

app.listen(3000, () => {
  console.log("Server started");
});
