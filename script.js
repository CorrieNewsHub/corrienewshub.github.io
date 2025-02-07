document.addEventListener("DOMContentLoaded", () => {
    const postsList = document.getElementById("latest-posts-list");
    const searchInput = document.getElementById("search-input");

    const now = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });
    const currentNZTime = new Date(now);

    function displayPosts(postsToShow) {
        postsList.innerHTML = "";
        postsToShow.forEach(post => {
            const publishTime = new Date(post.publishDate);

            if (currentNZTime >= publishTime) {
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
            }
        });
    }

    displayPosts(posts);

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)
        );
        displayPosts(filteredPosts);
    });
});
