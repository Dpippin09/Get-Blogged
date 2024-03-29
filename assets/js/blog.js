const backButton = document.getElementById('backButton');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
const blogContainer = document.getElementById('blogs')





function runBlogs() {
    for (const blogPost of blogPosts) {

        const div = document.createElement('div')
        const usernameElement = document.createElement('p');
        const blogTitleElement = document.createElement('h2');
        const contentElement = document.createElement('p');

        usernameElement.textContent = 'Username: ' + blogPost.username;
        blogTitleElement.textContent = 'Title' + blogPost.blogTitle;
        contentElement.textContent = blogPost.content;

        blogTitleElement.setAttribute("class", "blogComment")
        blogTitleElement.setAttribute('style', 'font-size: 25px;');

        div.append( blogTitleElement, contentElement, usernameElement)
        blogContainer.append(div)
    }
}



runBlogs()





