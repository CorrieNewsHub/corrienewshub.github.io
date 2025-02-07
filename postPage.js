document.addEventListener("DOMContentLoaded", () => {
    const postContent = document.getElementById("post-content");
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));

    // Find the post by ID
    const post = posts.find(p => p.id === postId);

    if (post) {
        const formattedDate = new Date(post.publishDate).toLocaleDateString("en-NZ", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });

        // Display the post content
        postContent.innerHTML = `
            <h1>${post.title}</h1>
            <p><small>Published on ${formattedDate} by ${post.author}</small></p>
            <img src="${post.image}" class="img-fluid mb-4" alt="${post.title}">
            <div>${post.content}</div>
        `;

        // Update meta tags for SEO and social media previews
        document.title = post.title;
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-description").content = post.content.substring(0, 150);

        document.querySelector('meta[property="og:title"]').content = post.title;
        document.querySelector('meta[property="og:description"]').content = post.content.substring(0, 150);
        document.querySelector('meta[property="og:image"]').content = post.image;
        document.querySelector('meta[property="og:url"]').content = window.location.href;

        document.querySelector('meta[name="twitter:title"]').content = post.title;
        document.querySelector('meta[name="twitter:description"]').content = post.content.substring(0, 150);
        document.querySelector('meta[name="twitter:image"]').content = post.image;
    } else {
        postContent.innerHTML = "<p>Post not found!</p>";
        document.title = "Post Not Found";
    }
});
