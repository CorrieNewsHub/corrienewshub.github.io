document.addEventListener("DOMContentLoaded", () => {
    const postContent = document.getElementById("post-content");
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));

    const post = posts.find(p => p.id === postId);

    if (post) {
        const publishTime = new Date(post.publishDate);
        const currentNZTime = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

        if (new Date(currentNZTime) >= publishTime) {
            const formattedDate = publishTime.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            });

            postContent.innerHTML = `
                <h1>${post.title}</h1>
                <p><small>Published on ${formattedDate} by ${post.author}</small></p>
                <img src="${post.image}" class="img-fluid mb-4" alt="${post.title}">
                <div>${post.content}</div>
            `;

            document.getElementById("post-title").innerText = post.title;
            document.getElementById("post-description").content = post.content.substring(0, 150);
            document.getElementById("og-title").content = post.title;
            document.getElementById("og-description").content = post.content.substring(0, 150);
            document.getElementById("og-image").content = post.image;
            document.getElementById("og-url").content = window.location.href;

            document.getElementById("twitter-title").content = post.title;
            document.getElementById("twitter-description").content = post.content.substring(0, 150);
            document.getElementById("twitter-image").content = post.image;
        } else {
            postContent.innerHTML = "<p>This post is not yet published.</p>";
        }
    } else {
        postContent.innerHTML = "<p>Post not found!</p>";
    }
});
