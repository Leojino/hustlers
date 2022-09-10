let employeeData = [
    {
        name: 'Jino John',
        doj: 'Jan-3rd-2022',
        position: 'Junior Developer',
        team: 'A',        
    },
    {
        name: 'Nathaly Reyes',
        doj: 'April-1st-2022',
        position: 'Front-End Developer',
        team: 'A'
    }
]


export default function handler(req, res) {
    res.status(200).json(employeeData);
}