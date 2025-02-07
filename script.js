document.addEventListener("DOMContentLoaded", () => {
    const latestPostsList = document.getElementById("latest-posts-list");
    const allPostsList = document.getElementById("all-posts-list");

    function displayPosts(postsToShow, container) {
        container.innerHTML = "";
        postsToShow.forEach(post => {
            const postCard = document.createElement("div");
            postCard.className = "col-md-6 mb-4";

            postCard.innerHTML = `
                <div class="card">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p>${post.content.substring(0, 100)}...</p>
                        <a href="post.html?id=${post.id}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;

            container.appendChild(postCard);
        });
    }

    // Show 4 latest posts on the homepage
    if (latestPostsList) {
        displayPosts(posts.slice(0, 4), latestPostsList);
    }

    // Show all posts on the news page
    if (allPostsList) {
        displayPosts(posts, allPostsList);
    }
});
