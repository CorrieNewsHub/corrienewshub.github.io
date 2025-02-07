document.addEventListener("DOMContentLoaded", () => {
    const latestPostsList = document.getElementById("latest-posts-list");
    const allPostsList = document.getElementById("all-posts-list");
    const postsPerPage = 10;

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-NZ", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    }

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
                        <p class="card-text">${post.content.substring(0, 100)}...</p>
                        <p><small>Published on ${formatDate(post.publishDate)}</small></p>
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

    // Pagination for the news page
    if (allPostsList) {
        let currentPage = 1;

        function renderPagination() {
            const totalPages = Math.ceil(posts.length / postsPerPage);
            const paginationNav = document.createElement("nav");
            paginationNav.className = "mt-4";

            const paginationList = document.createElement("ul");
            paginationList.className = "pagination justify-content-center";

            for (let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement("li");
                pageItem.className = "page-item" + (i === currentPage ? " active" : "");
                pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;

                pageItem.addEventListener("click", (e) => {
                    e.preventDefault();
                    currentPage = i;
                    updatePosts();
                });

                paginationList.appendChild(pageItem);
            }

            paginationNav.appendChild(paginationList);
            allPostsList.after(paginationNav);
        }

        function updatePosts() {
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            displayPosts(posts.slice(startIndex, endIndex), allPostsList);
        }

        updatePosts();
        renderPagination();
    }
});
