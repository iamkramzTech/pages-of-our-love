   fetch('https://api.github.com/users/iamkramzTech') // Replace 'octocat' with the desired username
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const spanAuthor = document.getElementById('author');
    const displayName = data.name; // This is the "display name"
    const loginName = data.login; // This is the username/handle
    // console.log(`Display Name: ${displayName}`);
    // console.log(`Login Name: ${loginName}`);
    spanAuthor.innerHTML = displayName
    // You can then use 'displayName' to display it in your application
  })
  .catch(error => {
    console.error('Error fetching GitHub user data:', error);
  });
