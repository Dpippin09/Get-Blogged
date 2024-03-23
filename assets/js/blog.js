function backPressed() {
    window.location.href = "./index.html";
}


const backButton = document.getElementById('backButton');

backButton.addEventListener('click', backPressed); 

var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
console.log(blogPosts);


for (const blogPost of blogPosts) {
    const usernameElement = document.createElement('p');
    usernameElement.textContent = blogPost.username;
    document.body.appendChild(usernameElement);

    const blogTitleElement = document.createElement('p');
    blogTitleElement.setAttribute('style','font-size: 25px;');
    blogTitleElement.textContent = blogPost.blogTitle;
    document.body.appendChild(blogTitleElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = blogPost.content;
    document.body.appendChild(contentElement);
}