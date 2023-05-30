const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

/////////////schema/////
const ChildrenSchema = new mongoose.Schema({
    image: String,
    name: String,
    age: Number
})
const ChildrenModel = new mongoose.model("Children", ChildrenSchema)


//////////////////////ALL
app.get("/api/childrens", async (req, res) => {
    const { name } = req.query
    const childrens = await ChildrenModel.find()
    if (!name) {
        res.status(200).send(childrens)
    }
    else{
        res.status(200).send(childrens.filter((x)=>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())))
    }
});
///////////////////ID
app.get("/api/childrens/:id", async (req, res) => {
    const { id } = req.params
    const children = await ChildrenModel.findById(id)
    if (children) {
        res.status(200).send(children)
    }
})
///////////////post
app.post("/api/childrens", async (req, res) => {
    const { image, name, age } = req.body
    const newChildren = new ChildrenModel({
        image: image,
        name: name,
        age: age
    })
    await newChildren.save()

    if (newChildren) {
        res.send({ message: "Posted" })
    }
})


////////////////////delete
app.delete("/api/childrens/:id", async (req, res) => {
    const { id } = req.params
    const deletedChildren = await ChildrenModel.findByIdAndDelete(id)
    if (deletedChildren) {
        res.send({ message: "Deleted" })
    } else {
        res.status(204).send({ message: "Not Found" })
    }
})


//////////////listen
PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`PORT running on ${PORT}`);
})
DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
    console.log("Mongo db connected successfully");
})