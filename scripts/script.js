// Ejemplo de datos de asignaciones y calificaciones
const assignments = [
    { id: 1, title: "Asignación 1", dueDate: "2024-01-15" },
    { id: 2, title: "Asignación 2", dueDate: "2024-01-22" }
];

const grades = [
    { id: 1, assignmentId: 1, grade: 85 },
    { id: 2, assignmentId: 2, grade: 90 }
];

// Función para mostrar asignaciones
function displayAssignments() {
    const assignmentsSection = document.getElementById('assignments');
    assignments.forEach(assignment => {
        const assignmentElement = document.createElement('div');
        assignmentElement.textContent = `${assignment.title} - Fecha de entrega: ${assignment.dueDate}`;
        assignmentsSection.appendChild(assignmentElement);
    });
}

// Función para mostrar calificaciones
function displayGrades() {
    const gradesSection = document.getElementById('grades');
    grades.forEach(grade => {
        const gradeElement = document.createElement('div');
        const assignment = assignments.find(a => a.id === grade.assignmentId);
        gradeElement.textContent = `${assignment.title}: ${grade.grade}`;
        gradesSection.appendChild(gradeElement);
    });
}

// Inicializar la página mostrando asignaciones y calificaciones
document.addEventListener('DOMContentLoaded', () => {
    displayAssignments();
    displayGrades();
});
