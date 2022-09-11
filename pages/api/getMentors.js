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
        pic: '',
        doj: 'April-1st-2022',
        position: 'Front-End Developer',
        team: 'A',
        skills: ['MongoDB', 'NodeJS', 'MySQL'],
        areasOfInterest: [],
    },
    {
        name: 'Agnes',
        pic: '',
        doj: 'April-1st-2022',
        position: 'UI/UX Designer',
        team: 'B',
        skills: ['MongoDB', 'NodeJS', 'Express'],
    }
]

export default function handler(req, res) {
    // console.log(req);
    let data;
    for(let  i=0; i< employeeData.length; i++){
        data = employeeData[0];
    }


    //const _skillsRequired = req.skills;
    
    // for (const mentor in employeeData) {
    //     console.log(`${property}: ${object[property]}`);
    // }

    res.status(200).json({ data })
}