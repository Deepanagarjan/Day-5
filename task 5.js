// create your own resume data in JSON format

// {
//   "name": "N.Deepa",
//   "title": "Software Engineer",
//   "contact": {
//     "email": "deepanagarajan1208@gmail.com",
//     "phone": "8870820844",
//     "location": "SALEM, India"
//   },
//   "summary": "Software engineer with a passion for creating efficient and scalable solutions. Experienced in full-stack development with expertise in backend technologies. Strong problem-solving skills and a quick learner.",
//   "skills": [
//     "Java",
//     "JavaScript",
//     "Node.js",
//     "React",
//     "Angular",
//     "NoSQL",
//     "MongoDB",
//     "HTML",
//     "CSS",
//     "Agile Methodologies"
//   ],
  
//   "education": {
//     "degree": "Master of Enginering in Structural",
//     "institution": "Excel Engineering college",
//     "location": "Nammakkal, India",
//     "dates": "2012 - 2019"
//   }
// }


iterate in for loop
// const resumeData = {
    
//   "name": "N.Deepa",
//   "title": "Software Engineer",
//   "contact": {
//     "email": "deepanagarajan1208@gmail.com",
//     "phone": "8870820844",
//     "location": "SALEM, India"
//   },
//   "summary": "Software engineer with a passion for creating efficient and scalable solutions. Experienced in full-stack development with expertise in backend technologies. Strong problem-solving skills and a quick learner.",
//   "skills": [
//     "Java",
//     "JavaScript",
//     "Node.js",
//     "React",
//     "Angular",
//     "NoSQL",
//     "MongoDB",
//     "HTML",
//     "CSS",
//     "Agile Methodologies"
//   ],
  
//   "education": {
//     "degree": "Master of Enginering in Structural",
//     "institution": "Excel Engineering college",
//     "location": "Nammakkal, India",
//     "dates": "2012 - 2019"
//   }
// }
  

// Iterating over the resume data
// for (const key in resumeData) {
//   if (resumeData.hasOwnProperty(key)) {
//     const value = resumeData[key];
//     if (typeof value === 'object') {
//       console.log(`${key}:`);
//       for (const nestedKey in value) {
//         if (value.hasOwnProperty(nestedKey)) {
//           const nestedValue = value[nestedKey];
//           console.log(`  ${nestedKey}: ${nestedValue}`);
//         }
//       }
//     } else if (Array.isArray(value)) {
//       console.log(`${key}:`);
//       value.forEach(item => {
//         console.log(`  - ${item}`);
//       });
//     } else {
//       console.log(`${key}: ${value}`);
//     }
//   }
// }

