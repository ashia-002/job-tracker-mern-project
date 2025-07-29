// chrome.cookies.get({ url: "http://localhost:3000", name: "token" }, function(cookie) {
//   if (cookie) {
//       console.log("Cookie retrieved:", cookie.value);
//   } else {
//       console.log("Cookie not found");
//   }
// });


// // Function to extract a specific cookie by name
// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
//   return null; // Return null if the cookie is not found
// }

// chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
//   if (response.error) {
//     alert("Error retrieving user ID: " + response.error);
//     return;
//   }

//   const userId = response.userId;

//   // Scrape job data
//   const jobTitle = document.querySelector("h2.p1N2lc")?.innerText || "N/A";
//   const company = document.querySelector(".company")?.innerText || "N/A";
//   const location = document.querySelector("span.r0wTof")?.innerText || "N/A";
//   const jobLink = window.location.href;

//   const jobData = {
//     jobTitle,
//     company,
//     location,
//     jobLink,
//     userId, // Include the userId in the payload
//   };

//   console.log(jobData);

//   // Send job data to backend
//   fetch("http://localhost:3000/api/explore/", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(jobData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert("Job saved successfully!");
//     })
//     .catch((error) => {
//       alert("Error saving job: " + error.message);
//     });

//   console.log("Job data extracted and sent:", jobData);
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scrapeJob") {
      // Check if the sender has provided additional tab or document data
      const tabData = sender.tab || {};
      const tabTitle = tabData.title || "N/A"; // Tab title from the browser console
      const tabURL = tabData.url || "N/A"; // Tab URL from the browser console

      // Scrape data from the DOM
      const jobTitle = document.querySelector("h2.p1N2lc")?.innerText || tabTitle; // Use tabTitle as a fallback
      const company = document.querySelector(".company")?.innerText || "N/A";
      const location = document.querySelector("span.r0wTof")?.innerText || "N/A";
      const jobLink = tabURL; // Use tabURL instead of window.location.href if available

      // Consolidate job data
      const jobData = {
          jobTitle,
          company,
          location,
          jobLink,
      };

      // Log the extracted job data for debugging
        console.log("Job data extracted:", jobData);
      // Extract the token from cookies
        //const token = getCookie("token");
        // const token = cookie.value;
        // if (!token) {
        //     console.error("Token not found in cookies!");
        //     return;
        // }
        // console.log("Extracted token:", token);
      

      // Optionally respond to the sender
      sendResponse({ success: true, jobData });

      //Uncomment this section if you want to send data to an API
      fetch("http://localhost:3000/api/explore/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jobData),
          credentials: "include",
      })
          .then((response) => response.json())
          .then((data) => {
              console.log("Job saved successfully:", data);
          })
          .catch((error) => {
              console.error("Error saving job:", error.message);
          });
  }
});



//   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "scrapeJob") {
//         // Define a function to extract job details
//         function extractJobDetails() {
//             let jobTitle = "N/A";
//             let company = "N/A";
//             let location = "N/A";
//             let jobLink = window.location.href;

//             // Check the current website's hostname (domain) to apply the correct selectors
//             if (window.location.hostname.includes("website1.com")) {
//                 // For website1, use these selectors
//                 jobTitle = document.querySelector(".job-title-header")?.innerText || "N/A";
//                 company = document.querySelector(".company-name-span")?.innerText || "N/A";
//                 location = document.querySelector(".location-info")?.innerText || "N/A";
//             } else if (window.location.hostname.includes("website2.com")) {
//                 // For website2, use different selectors
//                 jobTitle = document.querySelector(".job-title")?.innerText || "N/A";
//                 company = document.querySelector(".company-name")?.innerText || "N/A";
//                 location = document.querySelector(".job-location")?.innerText || "N/A";
//             } else if (window.location.hostname.includes("website3.com")) {
//                 // For website3, use another set of selectors
//                 jobTitle = document.querySelector(".listing-title")?.innerText || "N/A";
//                 company = document.querySelector(".company-info")?.innerText || "N/A";
//                 location = document.querySelector(".location")?.innerText || "N/A";
//             }

//             return { jobTitle, company, location, jobLink };
//         }

//         // Call the function to extract job details
//         const jobData = extractJobDetails();

//         // Send the data to your API
//         fetch("https://your-api-url.com/api/jobs", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(jobData),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Job saved successfully:", data);
//             sendResponse({ success: true, message: "Job saved successfully!" });
//         })
//         .catch((error) => {
//             console.error("Error saving job:", error);
//             sendResponse({ success: false, message: `Error saving job: ${error.message}` });
//         });

//         // Keep the message channel open for sendResponse to work asynchronously
//         return true;
//     }
// });

  