function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "mynav") {
      x.className += " responsive";
    } else {
      x.className = "mynav";
    }
  }

// Function to handle like button
function toggleLike(postId) {
    fetch(`/post/${postId}/like/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCsrfToken(),
        },
        credentials: 'same-origin', // important for session authentication
    })
    .then(response => response.json())
    .then(data => {
        updateLikeCount(postId, data.likes);
    })
    .catch(error => console.error('Error liking post:', error));
}

// Function to get CSRF token
function getCsrfToken() {
    const cookieValue = document.cookie.match('(^|;)\s*csrftoken\s*=\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

// Function to update like count in the DOM
function updateLikeCount(postId, likeCount) {
    const likeCountElem = document.getElementById(`like-count-${postId}`);
    if (likeCountElem) {
        likeCountElem.textContent = likeCount;
    }
}

// Event listener for like buttons
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const postId = this.dataset.postId;
        toggleLike(postId);
    });
});