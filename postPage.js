document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));
    const post = posts.find(p => p.id === postId);

    if (post) {
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-date").innerText = new Date(post.publishDate).toLocaleString("en-NZ", {
            dateStyle: "long",
            timeStyle: "short"
        });

        document.getElementById("post-image").src = post.image;
        document.getElementById("post-content").innerHTML = post.content;
    } else {
        document.getElementById("post-content").innerHTML = "<p>Post not found!</p>";
    }
});
