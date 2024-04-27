import express from "epress"
const router = express.Router()

router.route("/").get(app.get("/", (req, res) => {
  res.send("Hello, World!");
}))
export default router;