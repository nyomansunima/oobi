import Application from "express";

const app = Application();

app.get("/", (req, res) => {
  return res.send("Hello from api");
});

app.listen(4000, () => {
  console.log(`Application running on port 4000`);
});
