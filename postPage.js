document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));
    const post = posts.find(p => p.id === postId);

    if (post) {
        // Display post content
        document.getElementById("post-content").innerHTML = post.content;

        // Insert social preview meta tags
        if (post.socialPreview) {
            document.title = post.socialPreview.ogTitle;

            // Open Graph Tags
            addMetaTag("og:title", post.socialPreview.ogTitle);
            addMetaTag("og:description", post.socialPreview.ogDescription);
            addMetaTag("og:image", post.socialPreview.ogImage);
            addMetaTag("og:url", window.location.href);

            // Twitter Tags
            addMetaTag("twitter:title", post.socialPreview.twitterTitle);
            addMetaTag("twitter:description", post.socialPreview.twitterDescription);
            addMetaTag("twitter:image", post.socialPreview.twitterImage);
        }
    } else {
        document.getElementById("post-content").innerHTML = "<p>Post not found!</p>";
    }

    // Helper function to create and append meta tags
    function addMetaTag(property, content) {
        const meta = document.createElement("meta");
        if (property.startsWith("og:")) {
            meta.setAttribute("property", property);
        } else {
            meta.setAttribute("name", property);
        }
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
    }
});
