document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.dataset.section;

        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        button.parentElement.classList.add('active');
    });
});

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map(project => `
        <a href="${project.link}" target="_blank" class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </a>
    `).join('');
}

fetch('projects.json')
    .then(response => response.json())
    .then(projects => renderProjects(projects));
