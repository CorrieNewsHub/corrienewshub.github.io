document.addEventListener("DOMContentLoaded", () => {
    const sortedPosts = posts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    
    // Example: Render the latest post to the page (modify according to your needs)
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));
    const post = sortedPosts.find(p => p.id === postId);

    if (post) {
        document.getElementById("post-title-header").innerText = post.title;
        document.getElementById("post-date").innerText = new Date(post.publishDate).toLocaleString("en-NZ", {
            dateStyle: "long",
            timeStyle: "short"
        });
        document.getElementById("post-image").src = post.image;
        document.getElementById("post-content").innerHTML = post.content;

        // Update social preview meta tags
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("og-title").content = post.title;
        document.getElementById("og-description").content = "Stay up to date with the latest Coronation Street news! " + post.content.substring(0, 150) + "...";
        document.getElementById("og-image").content = post.image;
        document.getElementById("og-url").content = window.location.href;

        document.getElementById("twitter-title").content = post.title;
        document.getElementById("twitter-description").content = "Stay up to date with the latest Coronation Street news! " + post.content.substring(0, 150) + "...";
        document.getElementById("twitter-image").content = post.image;
    } else {
        document.getElementById("post-content").innerHTML = "<p>Post not found!</p>";
    }
});
