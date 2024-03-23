function submitPressed() {
    console.log("submitted");
    const username = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#blogTitle').value;
    const content = document.querySelector('#content').value;
    console.log(username);

    if (
        username === "" ||
        blogTitle === "" ||
        content === "" 
    ) {
        alert('Pleas fill out the blog post sections');
        return;
    }




    const blogPostData = {
        username: username,
        blogTitle: blogTitle,
        content: content.trim(),
    };

    var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    console.log(blogPosts);

    if (blogPosts === null) {
        const emptyArray = [];
        localStorage.setItem('blogPosts', JSON.stringify(emptyArray));
        blogPosts = emptyArray;
    }

    blogPosts.push(blogPostData);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = "./blog.html";


}

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', submitPressed); 



