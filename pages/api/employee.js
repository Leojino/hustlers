let employeeData = [
    {
        name: 'Jino John',
        pic: '',
        doj: 'Jan-3rd-2022',
        position: 'Junior Developer',
        team: 'A',
        skills: ['MySQL', 'NodeJS', 'PHP'],
        // skillExperienceMonths: [3, 4, 5],
        areasOfInterest: [],
        hobbies: [],        
    },
    {
        name: 'Nathaly Reyes',
        doj: 'April-1st-2022',
        position: 'Front-End Developer',
        team: 'A',
        skills: ['MongoDB', 'NodeJS', 'Express'],
        areasOfInterest: [],        
    },
    {
        name: 'Agnes',
        doj: 'April-1st-2022',
        position: 'UI/UX Designer',
        team: 'B',
        skills: ['MongoDB', 'NodeJS', 'Express'],
    }
]


export { employeeData };

export default function handler(req, res) {
    res.status(200).json(employeeData);
}