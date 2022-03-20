import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Alura:123@cluster0.iyowk.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;