let employeeData = [
    {
        name: 'Christine Vera',
        profilePicture: '/public/images/profile/christineVera.png',
        dateOfJoining: 'Oct-10-2020',
        position: 'Software Engineer (I)',
        team: 'A',
        hobbies: ["Travelling","Dog mon","Yoga","self-taught coder"],
        areasOfExpertise: ["JavaScript","C++","HTML","CSS"],
        languagesSpoken: ["English","French"]
    },
    {
        name: 'Vienna Sharon',
        profilePicture: '/public/images/profile/viennaSharon.png',
        dateOfJoining: 'Jan-3-2015',
        position: 'Senior Software Engineer',
        team: 'A',
        hobbies: ["Hiking","Dog person","Baking"],
        areasOfExpertise: ["Database Design","Java","DevOps"],
        languagesSpoken: ["English","Italian"]
    },
    {
        name: 'MaryAnn Lizzi',
        profilePicture: '/public/images/profile/maryannLizzi.png',
        dateOfJoining: 'Aug-15-2016',
        position: 'Senior Software Engineer',
        team: 'B',
        hobbies: ["Salsa","Painting","Yoga"],
        areasOfExpertise: ["UX/UI","JavaScript","React"],
        languagesSpoken: ["English","Portuguese","French"]
    },
    {
        name: 'Andrea Rosen',
        profilePicture: '/public/images/profile/andreaRosen.png',
        dateOfJoining: 'Feb-05-2015',
        position: 'Senior Software Engineer',
        team: 'B',
        hobbies: ["Hiking","Dog person","Baking"],
        areasOfExpertise: ["Algorithms","Data Structures"],
        languagesSpoken: ["English","Spanish"]
    },
    {
        name: 'Joelle Margaret',
        profilePicture: '/public/images/profile/joelleMargaret.png',
        dateOfJoining: 'May-20-2017',
        position: 'Senior Software Engineer',
        team: 'C',
        hobbies: ["Salsa","Painting","Yoga"],
        areasOfExpertise: ["Nodejs","C#","PostgreSQL"],
        languagesSpoken: ["English"]
    },
    {
        name: 'Josie Rowen',
        profilePicture: '/public/images/profile/josieRowen.png',
        dateOfJoining: 'Mar-8-2018',
        position: 'Head Software Engineer',
        team: 'C',
        hobbies: ["Language Learning","Yoga"],
        areasOfExpertise: ["Software Design","Testing","C"],
        languagesSpoken: ["English","French"],
    }
]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default function handler(req, res) {

    let randomData = shuffle(employeeData);    
    let returnData = [];
    for(let i=0; i<2; i ++){
        returnData.push(randomData[i]);
    }
    // console.log(returnData)

    res.status(200).json({ returnData })
}