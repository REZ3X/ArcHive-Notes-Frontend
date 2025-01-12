/**
 * Function to generate dummy notes data.
 * @returns {Array} Array of note objects.
 */
const notesData = () => [
    {
        id: 1,
        title: "First Note",
        content: "This is the first note.",
        projects: null,
    },
    {
        id: 2,
        title: "How to make react app",
        content: "This is how to make react app.",
        projects: "React",
    },
    {
        id: 3,
        title: "How to use react router",
        content: "This is how to use react router.",
        projects: "React",
    }
];

export default notesData;