const express = require("express");
const appRoutes = require("./routes");

// Express Server
const app = express();
const port = process.env.PORT || 5000;

// Body parser
app.use(express.json());
// App routes
app.use("/api", appRoutes);

app.listen(port, () => console.log(`App running on port ${port}`));
