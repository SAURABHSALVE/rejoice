import mongoose from "mongoose";
import dotenv from "dotenv";
import Service from "../models/Service.js";

dotenv.config();

const services = [
  { title: "Facial Glow", description: "Luxurious facials for radiant skin.", img: "", price: "₹999", slug: "facial-glow" },
  { title: "Laser Hair Removal", description: "Smooth, hair-free skin.", img: "", price: "₹2999", slug: "laser-hair-removal" },
  { title: "Hair Fall Treatment", description: "Solutions for healthy hair.", img: "", price: "₹1999", slug: "hair-fall-treatment" },
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log("Seeded services");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
