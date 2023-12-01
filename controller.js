// const https = require("https");

// async function getAllBreeds(totalPages) {
//   try {
//     let allBreeds = [];

//     for (let page = 1; page <= totalPages; page++) {
//       const response = await makeRequest(
//         `https://catfact.ninja/breeds?page=${page}`
//       );

//       console.log("Response:", response); // Log the entire response for debugging

//       if (
//         response &&
//         response.data &&
//         Array.isArray(response.data) &&
//         response.headers &&
//         response.headers["x-total-pages"]
//       ) {
//         allBreeds = allBreeds.concat(response.data);
//       } else {
//         console.error("Invalid response format or missing data/headers.");
//         // Handle the error as needed, for example, by returning an empty array
//         return [];
//       }
//     }

//     return allBreeds;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     // Handle the error as needed, for example, by returning an empty array
//     return [];
//   }
// }

// function groupByCountry(breeds) {
//   const breedsByCountry = {};
//   breeds.forEach((breed) => {
//     if (!breedsByCountry[breed.origin]) {
//       breedsByCountry[breed.origin] = [];
//     }
//     breedsByCountry[breed.origin].push({
//       breed: breed.breed,
//       origin: breed.origin,
//       coat: breed.coat,
//       pattern: breed.pattern,
//     });
//   });
//   return breedsByCountry;
// }

// async function makeRequest(url) {
//   return new Promise((resolve, reject) => {
//     https
//       .get(url, (response) => {
//         let data = "";

//         // A chunk of data has been received.
//         response.on("data", (chunk) => {
//           data += chunk;
//         });

//         // The whole response has been received.
//         response.on("end", () => {
//           try {
//             resolve({
//               data: JSON.parse(data),
//               headers: response.headers,
//             });
//           } catch (error) {
//             reject(new Error("Invalid JSON in response"));
//           }
//         });
//       })
//       .on("error", (error) => {
//         reject(error);
//       });
//   });
// }

// // Example usage

// // Example usage
// const totalPages = 5; // Set the desired value for totalPages
// getAllBreeds(totalPages)
//   .then((breeds) => {
//     const breedsByCountry = groupByCountry(breeds);
//     console.log("Breeds grouped by country:", breedsByCountry);
//   })
//   .catch((error) => console.error("Error:", error));
