document.addEventListener("DOMContentLoaded", () => {
    const postsList = document.getElementById("latest-posts-list");

    function displayPosts(postsToShow) {
        postsList.innerHTML = "";
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
            postsList.appendChild(postCard);
        });
    }

    displayPosts(posts);
});
    