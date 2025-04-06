// static/js/likeFeature.js

// Function to send AJAX request for liking a post
function likePost(postId) {
    fetch(`/like-post/${postId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken(),  // Make sure to include the CSRF token for security
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            updateLikeCount(postId, data.new_like_count);
        } else {
            console.error('Error:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Function to update the like count visible in the DOM
function updateLikeCount(postId, newLikeCount) {
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    if (likeCountElement) {
        likeCountElement.textContent = newLikeCount;
    }
}

// Helper function to obtain CSRF token from cookies
function getCSRFToken() {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, 10) === 'csrftoken=') {
                cookieValue = decodeURIComponent(cookie.substring(10));
                break;
            }
        }
    }
    return cookieValue;
}

// Event listener to bind like buttons when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.dataset.postId;
            likePost(postId);
        });
    });
});
