const submitButton = document.getElementById('submitButton');


function submitPressed() {
    console.log("submitted");
    const username = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#blogTitle').value;
    const content = document.querySelector('#content').value;
    console.log(username);

    if (
        username === "" &&
        blogTitle === "" &&
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

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    console.log(blogPosts);

    blogPosts.push(blogPostData);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = "./blog.html";


}


submitButton.addEventListener('click', submitPressed);



