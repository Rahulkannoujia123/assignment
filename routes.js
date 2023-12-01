// const express = require("express");
// const router = express.Router();
// const controller = require("./controller");

// // Define the routes
// router.get("/getCatBreeds", async (req, res) => {
//   try {
//     const response = await controller.getAllBreeds();
//     // const totalPages = parseInt(response.headers["x-total-pages"]);
//     const allBreeds = await controller.getAllBreeds(totalPages);
//     const breedsByCountry = controller.groupByCountry(allBreeds);

//     res.status(200).json(breedsByCountry);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.post("/checkWordCount", (req, res) => {
//   const payload = req.body;
//   const wordCount = payload.str
//     .split(/\s+/)
//     .filter((word) => word.length > 0).length;

//   if (wordCount >= 8) {
//     res.status(200).send("200 OK");
//   } else {
//     res.status(406).send("Not Acceptable");
//   }
// });

// module.exports = router;
