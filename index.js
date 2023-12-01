const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
app.use(express.json());

const ITEMS_PER_PAGE = 25; // Adjust this based on your API's pagination settings

// Function to fetch cat breeds
const getAllBreeds = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://catfact.ninja/breeds?page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Express route to handle breed requests with pagination
app.get("/breeds", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;

    // Fetch cat breeds for the specified page
    const breedsData = await getAllBreeds(page);

    // Extract relevant pagination details
    const { current_page, last_page, total } = breedsData;

    // Calculate next and previous page numbers
    const nextPage = current_page < last_page ? current_page + 1 : null;
    const prevPage = current_page > 1 ? current_page - 1 : null;

    // Respond with the fetched data and pagination details
    res.json({
      breeds: breedsData.data,
      pagination: {
        current_page,
        total,
        per_page: ITEMS_PER_PAGE,
        next_page: nextPage,
        prev_page: prevPage,
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/wordcount", (req, res) => {
  try {
    const payload = req.body.str;

    // Log the received payload
    console.log("Received Payload:", payload);

    // Using regex to count words
    const wordCount = payload.match(/\S+/g)?.length || 0;

    if (wordCount >= 8) {
      res.status(200).send("200 OK - At least 8 words");
    } else {
      res.status(406).send("Not Acceptable - Less than 8 words");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
