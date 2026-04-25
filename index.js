const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

const FrontendProject = [
    {
        name: 'Buy-Back',
        img: `/imgs/buyBack.png`,
        description: 'Built with React and Tailwind CSS, the buy-back website offers a smooth product purchase flow. It combines clean design with smart logic for easy shopping and checkout.',
        ProjectDeployed: 'https://reactwind-ecomsite.netlify.app/',
        github: 'https://github.com/illsuive/dummy-ecom'
    },
    {
        name: 'Canteen Management',
        img: 'imgs/canteen.png',
        description: 'Built with React and Tailwind CSS, the canteen management system streamlines food ordering and inventory tracking. main focuse is on Redux part for state management.',
        ProjectDeployed: 'https://canteen-ordering-kappa.vercel.app/',
        github: 'https://github.com/illsuive/canteenOrdering'
    },
    {
        name: 'upSkillSite',
        img: 'imgs/courseSite.png',
        description: 'A Course - buy platform simulation built with React, Tailwind CSS, Lucide Icons, and Redux Toolkit. Features a responsive UI and efficient state management for a seamless user experience.',
        ProjectDeployed: 'https://buy-course-sigma.vercel.app',
        github: 'https://github.com/illsuive/buyCourse'
    },
    {
        name: 'Rapid-ride',
        img: 'imgs/rapidride.png',
        description: 'A ride-booking platform simulation built with React, Tailwind CSS, Lucide Icons, and Redux Toolkit. Features a responsive UI and efficient state management for a seamless user experience.',
        ProjectDeployed: 'https://rapidridee.netlify.app',
        github: 'https://github.com/illsuive/react-rapido'
    },
    {
        name: 'ExpenseTracker-site',
        img: 'imgs/splitwise.png',
        description: 'A web-based expense sharing platform that allows users to split bills, track expenses, and manage group payments efficiently. Built using Zustand for state management, Lucide React for icons, and Tailwind CSS for styling.',
        ProjectDeployed: 'https://splittrackerr.netlify.app',
        github: 'https://github.com/illsuive/ExpenseTracker'
    },
    {
        name: 'Canvas-site',
        img: 'imgs/canvas.png',
        description: 'An interactive HTML5 Canvas drawing application with customizable brush sizes, color palette, undo/redo, clear canvas, and PNG export functionality for creative sketching.',
        ProjectDeployed: 'https://canvasprojectt.netlify.app/',
        github: 'https://github.com/illsuive/canvasProject'
    },
    {
        name: 'CRUD-TaskManager-site',
        img: 'imgs/taskManager.png',
        description: 'A full-featured task management application with create, read, update, and delete operations. Includes task categorization, priority levels, due dates, and browser notifications for deadline reminders.',
        ProjectDeployed: 'https://taskmanageeer.netlify.app/',
        github: 'https://github.com/illsuive/crudJstaskMannager'
    },
    {
        name: 'Canvas Shop',
        img: 'imgs/canvas.png',
        description: 'Canvas photo shop is a web-based photo editing application that allows users to upload images, apply filters, adjust brightness and contrast, and download edited photos.',
        ProjectDeployed: 'https://canvasphotoshop.netlify.app/',
        github: 'https://github.com/illsuive/canvasPhotoShop'
    },
    {
        name: 'QuickSlot-site',
        img: 'imgs/quickslot.png',
        description: 'A quick slot booking platform designed for seamless reservations and efficient scheduling management.',
        ProjectDeployed: 'https://slot-booksite.netlify.app',
        github: 'https://github.com/illsuive/book-site'
    },
    {
        name: 'Drag-Drop-Todo-Site',
        img: 'imgs/dragDrop.png',
        description: 'A todo management application allowing users to organize todos via drag and drop functionality.',
        ProjectDeployed: 'https://dragdroptodo-site.netlify.app',
        github: 'https://github.com/illsuive/dragDropTodo'
    },
    {
        name: 'Tour-planner',
        img: 'imgs/tourPlanner.png',
        description: 'A comprehensive tour planning application for organizing trips, itineraries, and travel experiences efficiently.',
        ProjectDeployed: 'https://tourplan-ner.netlify.app',
        github: 'https://github.com/illsuive/TourPlanner'
    },
    {
        name: 'Quiz-site',
        img: 'imgs/react-quiz.png',
        description: 'An interactive quiz application built with React.js for engaging assessments and knowledge testing.',
        ProjectDeployed: 'https://quizesiit.netlify.app',
        github: 'https://github.com/illsuive/Quiz_site'
    },
    {
        name: 'React-Navigation',
        img: 'imgs/generated-image.png',
        description: 'A demonstration of advanced React navigation patterns and routing techniques for smooth user experiences.',
        ProjectDeployed: 'https://practise-link-react.netlify.app',
        github: 'https://github.com/illsuive/task-manger-react'
    },
    {
        name: 'Calculator',
        img: 'imgs/react-calculator.png',
        description: 'A calculator application built with React.js for performing basic arithmetic operations.',
        ProjectDeployed: 'https://peppy-haupia-447ad7.netlify.app',
        github: 'https://github.com/illsuive/calculator'
    },
    {
        name: 'Todo-list-React',
        img: 'imgs/react-todo.png',
        description: 'A dynamic and interactive to-do list application built using React.js for task management.',
        ProjectDeployed: 'https://todo-vitereact.netlify.app',
        github: 'https://github.com/illsuive/todo-react'
    },
    {
        name: 'Smart Resource Manager',
        img: 'imgs/allocation.png',
        description: 'A dynamic and interactive application for managing and allocating resources efficiently. (Html , css , bootrap , js , Graph)',
        ProjectDeployed: 'https://smart-resource-manager-rho.vercel.app',
        github: 'https://github.com/illsuive/Smart-Resource-Manager'
    },
    {
        name: 'Career Board Pro (Bootstrap Based)',
        img: 'imgs/carrearboard.png',
        description: 'Is is kind of job based web site where user can find jobs and apply for them.(Html , css , bootrap , js )',
        ProjectDeployed: 'https://career-board-pro-bootstrap-based.vercel.app',
        github: 'https://github.com/illsuive/--Career-Board-Pro-Bootstrap-Based-'
    }
];

const BackendProject = [];

const FullStackProject = [
    {
        name: 'E-commerce-site',
        img: null, // No specific image found in source for this project
        description: 'A full-stack e-commerce application built with React.js and Node.js for a complete online shopping experience.',
        ProjectDeployed: 'https://e-com-frontend-navy-six.vercel.app/',
        github: 'https://github.com/illsuive/eComBackend',

    },
    {
        name: 'Social-Media-Clone',
        img: null, // No specific image found in source for this project
        description: 'A social media clone application built with React.js for sharing updates and connecting with others.',
        ProjectDeployed: 'https://socail-media-frontend-beta.vercel.app/',
        github: 'https://github.com/illsuive/socailMediaBackend',

    },
    {
        name: 'Ai-chatBox',
        img: 'imgs/ai-chatbox.png',
        description: 'An intelligent chat application powered by AI to generate smart and contextual responses for seamless conversations.',
        ProjectDeployed: 'https://ai-chatbox-review.netlify.app',
        github: 'https://github.com/illsuive/ai-chatbox-front',
    },
    {
        name: 'Chat-site',
        img: 'imgs/chat-app.png',
        description: 'A real-time chat application built with Socket.io for global, anonymous connections and instant messaging.',
        ProjectDeployed: 'https://chat-app-xzvf.onrender.com',
        github: 'https://github.com/illsuive/chat-app'
    }
];

// ... (Your project arrays stay here)

function renderProjects(projectList, containerId) {
    const container = document.getElementById(containerId);
    if (!container || projectList.length === 0) return;

    if (container.parentElement.id === 'backend-container') {
        container.parentElement.style.display = 'block';
    }

    container.innerHTML = projectList.map(project => `
        <div class="project-card">
            <div class="project-image-container">
                <img src="${project.image || 'imgs/default-project.png'}" 
                     alt="Screenshot of ${project.name}" 
                     class="project-img" 
                     onerror="this.src='https://placehold.co/600x400?text=Project+Preview'">
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.ProjectDeployed}" target="_blank" class="btn btn-primary">See Project</a>
                    <a href="${project.github}" target="_blank" class="btn btn-secondary">Source Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Run the renderers
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(FullStackProject, 'fullstack-grid');
    renderProjects(FrontendProject, 'frontend-grid');
    renderProjects(BackendProject, 'backend-grid');
});
