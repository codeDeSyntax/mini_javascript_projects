// const baseurl = "https://bbfquestions.vercel.app/api";
// const METHODS = ["POST", "PUT"];

// const username = localStorage.getItem("username") || "anonymous";
// const scores = JSON.parse(localStorage.getItem("scores")) || [];

// async function updateDetailsToAPIOnReload() {
//   try {
//     const response = await fetch(`${baseurl}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, scores }),
//       mode: "cors",
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// updateDetailsToAPIOnReload();

// function updateDetailsToAPI() {
//   try {
//     const response = fetch(`${baseurl}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, scores }),
//       mode: "cors",
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// updateDetailsToAPI();

// //fire on windowclose
// window.addEventListener("beforeunload", updateDetailsToAPIOnReload);
