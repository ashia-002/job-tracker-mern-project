// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "getCookies") {
//     chrome.cookies.get({ url: "http://localhost:3000", name: "userId" }, (cookie) => {
//       if (cookie) {
//         sendResponse({ userId: cookie.value });
//       } else {
//         sendResponse({ error: "No cookie found" });
//       }
//     });
//     return true; // Keep the message channel open for async response
//   }
// });
