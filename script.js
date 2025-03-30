document.addEventListener('DOMContentLoaded', function() {
    // Signup Form Validation
    let signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            alert("Account Created Successfully!");
        });
    }

   
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

// JavaScript to handle theme toggle
document.getElementById('theme-toggle').addEventListener('change', function() {
    const isChecked = this.checked;
    document.body.style.backgroundColor = isChecked ? '#f0f0f0' : '#0f0f17';
    document.body.style.color = isChecked ? '#000' : '#fff';
   });
   
   // Add functionality for delete account button
   document.querySelector('.delete-btn').addEventListener('click', function() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
     alert("Your account has been deleted.");
     // Add logic for account deletion here
    }
   });

   document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu functionality
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Notification and profile icons functionality
    const bellIcon = document.querySelector('.bell-icon');
    const profileIcon = document.querySelector('.profile-icon');
    
    if (bellIcon) {
        bellIcon.addEventListener('click', function() {
            alert('Notifications clicked!');
        });
    }
    
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            alert('Profile clicked!');
        });
    }

    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to log out?')) {
                alert('You have been logged out successfully.');
                // In a real app, you would redirect to login page
                // window.location.href = 'login.html';
            }
        });
    }

    // Checkbox functionality for profile photo
    const photoCheckbox = document.querySelector('input[type="checkbox"]');
    if (photoCheckbox) {
        photoCheckbox.addEventListener('change', function() {
            if (this.checked) {
                alert('Profile photo change initiated!');
                // In a real app, you would open a file picker here
            }
        });
    }
 });

document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Add click event for course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', function() {
            const courseTitle = this.querySelector('h3').textContent;
            alert(`You clicked on: ${courseTitle}`);
        });
    });
    
    // Add click event for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent;
            alert(`Showing courses for: ${category}`);
        });
    });
    
    // Notification bell functionality
    const bellIcon = document.querySelector('.bell-icon');
    if (bellIcon) {
        bellIcon.addEventListener('click', function() {
            alert('You have no new notifications');
        });
    }
    
    // Profile icon functionality
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            alert('Profile page will open here');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Initialize progress chart
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress',
                data: [20, 40, 60, 80],
                borderColor: '#00b4d8',
                backgroundColor: 'rgba(0, 180, 216, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
    
    // Notification bell functionality
    const bellIcon = document.querySelector('.bell-icon');
    if (bellIcon) {
        bellIcon.addEventListener('click', function() {
            alert('You have no new notifications');
        });
    }
    
    // Profile icon functionality
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            alert('Profile page will open here');
        });
    }
});