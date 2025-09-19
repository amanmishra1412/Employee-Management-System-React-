const employees = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "a@a.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve issue where login form validation fails.",
        "date": "2025-09-14",
        "category": "Bug",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Update dashboard UI",
        "description": "Improve styling of employee dashboard.",
        "date": "2025-09-16",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false
      },
      {
        "title": "Write unit tests",
        "description": "Add unit tests for the task manager module.",
        "date": "2025-09-20",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "complete": 1, "failed": 0 }
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create API endpoints",
        "description": "Develop REST APIs for employee management.",
        "date": "2025-09-15",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Database optimization",
        "description": "Optimize queries for faster task retrieval.",
        "date": "2025-09-18",
        "category": "Database",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Fix logout issue",
        "description": "Logout button not working on mobile view.",
        "date": "2025-09-19",
        "category": "Bug",
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "complete": 1, "failed": 0 }
  },
  {
    "id": 3,
    "name": "Rahul Mehta",
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Add dark mode",
        "description": "Implement dark mode toggle in settings.",
        "date": "2025-09-21",
        "category": "Feature",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Write documentation",
        "description": "Document task manager setup and usage.",
        "date": "2025-09-22",
        "category": "Docs",
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true
      },
      {
        "title": "Fix profile update bug",
        "description": "Error when saving updated profile info.",
        "date": "2025-09-23",
        "category": "Bug",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "complete": 1, "failed": 1 }
  },
  {
    "id": 4,
    "name": "Neha Singh",
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Implement search",
        "description": "Add search functionality to task dashboard.",
        "date": "2025-09-17",
        "category": "Feature",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "UI bug fixes",
        "description": "Fix overlapping buttons on small screens.",
        "date": "2025-09-18",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Improve accessibility",
        "description": "Add ARIA labels for screen readers.",
        "date": "2025-09-25",
        "category": "Accessibility",
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "complete": 1, "failed": 0 }
  },
  {
    "id": 5,
    "name": "Karan Patel",
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Set up CI/CD",
        "description": "Configure GitHub Actions for deployment.",
        "date": "2025-09-19",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false
      },
      {
        "title": "Code review",
        "description": "Review pull requests from employee3.",
        "date": "2025-09-20",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false
      },
      {
        "title": "Refactor auth module",
        "description": "Clean up login and register components.",
        "date": "2025-09-22",
        "category": "Refactor",
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "complete": 1, "failed": 0 }
  }
];

const admin = [
    {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))

    return {employeeData, adminData}
    
}