document.addEventListener("DOMContentLoaded", () => {
    const latestPostsList = document.getElementById("latest-posts-list");
    const allPostsList = document.getElementById("all-posts-list");
    const paginationContainer = document.getElementById("pagination-container");
    const postsPerPage = 10;
    let currentPage = 1;

    function formatDateTime(dateString) {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-NZ", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
        const formattedTime = date.toLocaleTimeString("en-NZ", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        return `${formattedDate} at ${formattedTime}`;
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
                        <p><small>Published on ${formatDateTime(post.publishDate)}</small></p>
                        <a href="post.html?id=${post.id}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;

            container.appendChild(postCard);
        });
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = "";

        const paginationNav = document.createElement("nav");
        paginationNav.className = "d-flex justify-content-center";

        const paginationList = document.createElement("ul");
        paginationList.className = "pagination";

        // Previous button
        const prevItem = document.createElement("li");
        prevItem.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
        prevItem.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        prevItem.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePosts(totalPages);
            }
        });
        paginationList.appendChild(prevItem);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("li");
            pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;

            pageItem.addEventListener("click", (e) => {
                e.preventDefault();
                currentPage = i;
                updatePosts(totalPages);
            });

            paginationList.appendChild(pageItem);
        }

        // Next button
        const nextItem = document.createElement("li");
        nextItem.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
        nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextItem.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePosts(totalPages);
            }
        });
        paginationList.appendChild(nextItem);

        paginationNav.appendChild(paginationList);
        paginationContainer.appendChild(paginationNav);
    }

    function updatePosts(totalPages) {
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        displayPosts(posts.slice(startIndex, endIndex), allPostsList);

        // Render pagination after updating posts
        renderPagination(totalPages);
    }

    // Show latest 4 posts on the homepage
    if (latestPostsList) {
        displayPosts(posts.slice(0, 4), latestPostsList);
    }

    // Setup pagination on the news page
    if (allPostsList) {
        const totalPages = Math.ceil(posts.length / postsPerPage);
        updatePosts(totalPages);
    }
});
