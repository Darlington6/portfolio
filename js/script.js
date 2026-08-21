// Project data
const projects = [
    // Featured
    {
        name: 'ptrack-platform',
        language: 'typescript',
        url: 'https://github.com/Darlington6/ptrack-platform',
        description: 'TypeScript-based platform project'
    },
    {
        name: 'exam_prep',
        language: 'typescript',
        url: 'https://github.com/Darlington6/exam_prep',
        description: 'Web application to help students prepare for exams'
    },
    
    // Python Projects
    {
        name: 'safeboda',
        language: 'python',
        url: 'https://github.com/Darlington6/safeboda',
        description: 'Transportation system backend'
    },
    {
        name: 'alu-AirBnB_clone_v2',
        language: 'python',
        url: 'https://github.com/Darlington6/alu-AirBnB_clone_v2',
        description: 'Full-stack AirBnB clone'
    },
    {
        name: 'alu-AirBnB_clone',
        language: 'python',
        url: 'https://github.com/Darlington6/alu-AirBnB_clone',
        description: 'AirBnB clone implementation'
    },
    {
        name: 'alu-higher_level_programming',
        language: 'python',
        url: 'https://github.com/Darlington6/alu-higher_level_programming',
        description: 'Higher level programming concepts in Python'
    },
    {
        name: 'dsa',
        language: 'python',
        url: 'https://github.com/Darlington6/dsa',
        description: 'Data structures and algorithms'
    },
    {
        name: 'alu-web_back_end',
        language: 'python',
        url: 'https://github.com/Darlington6/alu-web_back_end',
        description: 'Backend web development'
    },
    {
        name: 'alu-back-end',
        language: 'python',
        url: 'https://github.com/Darlington6/alu-back-end',
        description: 'Backend development projects'
    },
    {
        name: 'GCS1',
        language: 'python',
        url: 'https://github.com/Darlington6/GCS1',
        description: 'Group coding session project'
    },
    {
        name: 'PLD_Project_NegPod27',
        language: 'python',
        url: 'https://github.com/Darlington6/PLD_Project_NegPod27',
        description: 'NegPod project implementation'
    },
    {
        name: 'python-cli-example',
        language: 'python',
        url: 'https://github.com/Darlington6/python-cli-example',
        description: 'Python CLI example'
    },
    {
        name: 'DevOps-j26',
        language: 'python',
        url: 'https://github.com/Darlington6/DevOps-j26',
        description: 'DevOps demo project'
    },

    // JavaScript Projects
    {
        name: 'alu-web_react',
        language: 'javascript',
        url: 'https://github.com/Darlington6/alu-web_react',
        description: 'React web projects'
    },
    {
        name: 'Africa_is_Talking_Hackathon',
        language: 'javascript',
        url: 'https://github.com/Darlington6/Africa_is_Talking_Hackathon',
        description: 'Hackathon project with Africa API'
    },
    {
        name: 'dlf-africa',
        language: 'javascript',
        url: 'https://github.com/Darlington6/dlf-africa',
        description: 'Digital literacy framework for Africa'
    },
    {
        name: 'easylunch',
        language: 'javascript',
        url: 'https://github.com/Darlington6/easylunch',
        description: 'Easy lunch platform'
    },
    {
        name: 'easylunch_web-app',
        language: 'javascript',
        url: 'https://github.com/Darlington6/easylunch_web-app',
        description: 'EasyLunch web application'
    },
    {
        name: 'agentpay',
        language: 'javascript',
        url: 'https://github.com/Darlington6/agentpay',
        description: 'Agent payment system'
    },

    // TypeScript Projects (additional)
    {
        name: 'formative-1-mini-blog-project-Darlington6',
        language: 'typescript',
        url: 'https://github.com/ALU-BSE/formative-1-mini-blog-project-Darlington6',
        description: 'Mini blog TypeScript project'
    },

    // Dart Projects
    {
        name: 'rovify',
        language: 'dart',
        url: 'https://github.com/Darlington6/rovify',
        description: 'Flutter application'
    },
    {
        name: 'time_tracking_application',
        language: 'dart',
        url: 'https://github.com/Darlington6/time_tracking_application',
        description: 'Time tracking app'
    },
    {
        name: 'note-taking_app',
        language: 'dart',
        url: 'https://github.com/Darlington6/note-taking_app',
        description: 'Note taking application'
    },
    {
        name: 'Edith-Desmond',
        language: 'dart',
        url: 'https://github.com/Darlington6/Edith-Desmond',
        description: 'Edith-Desmond Flutter app'
    },
    {
        name: 'tired',
        language: 'dart',
        url: 'https://github.com/Darlington6/tired',
        description: 'Dart application'
    },

    // C++ Projects
    {
        name: 'breakout1_animatedcontainer',
        language: 'other',
        url: 'https://github.com/Darlington6/breakout1_animatedcontainer',
        description: 'Animated container widget (C++)'
    },
    {
        name: 'temperature_converter_app',
        language: 'other',
        url: 'https://github.com/Darlington6/temperature_converter_app',
        description: 'Temperature converter (C++)'
    },
    {
        name: 'testing',
        language: 'other',
        url: 'https://github.com/Darlington6/testing',
        description: 'Testing project (C++)'
    },
    {
        name: 'layout-builder_widget',
        language: 'other',
        url: 'https://github.com/Darlington6/layout-builder_widget',
        description: 'Layout builder widget (C++)'
    },

    // Shell/HTML Projects
    {
        name: 'alu-shell',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-shell',
        description: 'Shell programming basics'
    },
    {
        name: 'alu-system_engineering-devops',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-system_engineering-devops',
        description: 'System engineering and DevOps'
    },
    {
        name: 'alu-web-development',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-web-development',
        description: 'Web development projects'
    },
    {
        name: 'alu-web_front_end',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-web_front_end',
        description: 'Frontend development'
    },
    {
        name: 'alu-headphones',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-headphones',
        description: 'Headphones project'
    },
    {
        name: 'alu-webstack',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-webstack',
        description: 'Web stack development'
    },
    {
        name: 'alu-scripting',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-scripting',
        description: 'Scripting projects'
    },
    {
        name: 'alu-interview',
        language: 'other',
        url: 'https://github.com/Darlington6/alu-interview',
        description: 'Interview preparation'
    },
    {
        name: 'summative-2_Negpod_27',
        language: 'other',
        url: 'https://github.com/Darlington6/summative-2_Negpod_27',
        description: 'Shell programming summative'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    setupFilterButtons();
    setupMobileMenu();
});

// Render projects
function renderProjects(projectsToRender) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-language', project.language);

        const languageBadges = {
            'python': { text: 'Python', color: 'python' },
            'javascript': { text: 'JavaScript', color: 'javascript' },
            'typescript': { text: 'TypeScript', color: 'typescript' },
            'dart': { text: 'Dart', color: 'dart' },
            'other': { text: 'Other', color: 'python' }
        };

        const badge = languageBadges[project.language] || languageBadges['other'];

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <span class="badge ${badge.color}">${badge.text}</span>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View Repository →</a>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            if (filter === 'all') {
                renderProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => project.language === filter);
                renderProjects(filteredProjects);
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
