// Authentication protection script
// Add this to any page you want to protect

(function() {
    // Check if user is authenticated
    function checkAuth() {
        const currentUser = localStorage.getItem('currentUser');
        const isAdmin = localStorage.getItem('isAdmin');
        
        if (!currentUser && !isAdmin) {
            // Redirect to login page
            window.location.href = 'auth.html';
            return false;
        }
        return true;
    }
    
    // Add logout functionality if logout button exists
    function initLogout() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAdmin');
                window.location.href = 'auth.html';
            });
        }
    }
    
    // Initialize authentication check
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (checkAuth()) {
                initLogout();
            }
        });
    } else {
        if (checkAuth()) {
            initLogout();
        }
    }
})();
