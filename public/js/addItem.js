// const blogpostFormSubmit = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#content').value.trim();

//     if (title && content) {
//         const response = await fetch('/', {
//             method: 'POST',
//             body: JSON.stringify({ title, content }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/pantry');
//         } else {
//             alert('alert');
//         }
//     }
// };

// // Listen for the blogpost form submission
// document
//     .querySelector('.post-form')
//     .addEventListener('submit', blogpostFormSubmit);