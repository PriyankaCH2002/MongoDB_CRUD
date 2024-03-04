const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodbProject')
  .then(() => console.log('Database connected successfully'))
  .catch((e) => console.log('Not connected', e));

const academicDetails = new mongoose.Schema({
  studentId: String,
  name: String,
  grades: String,
  subjects: { type: [String], default: [] }
});

const academicData = mongoose.model('academicData', academicDetails);

// Uncomment the next line if you want to clear existing data

const createDocument = async () => {
  try {
    const allData = await academicData.create([
      {
        studentId: 'BTech102',
        name: 'Shyam',
        grades: 'S',
        subjects: ['Data Structures', 'Operating System', 'Python Programming']
      },
      {
        studentId: 'BTech103',
        name: 'Ram',
        grades: 'B',
        subjects: ['Data Structures', 'Operating System', 'Python Programming']
      },
      {
        studentId: 'BTech104',
        name: 'Bob',
        grades: 'C',
        subjects: ['Data Structures', 'Operating System', 'Python Programming']
      }
    ]);
    console.log('Documents created successfully:', allData);
  } catch (e) {
    console.log('Error:', e);
  }
};

// Uncomment the next line if you want to create new documents
 createDocument();

const updateData = async () => {
  try {
    await academicData.updateOne({ studentId: 'BTech102' }, { $set: { name: 'John' } });
    console.log('Document updated successfully');
  } catch (e) {
    console.error('Error:', e);
  }
};

// Call the updateData function
// updateData();

const getData = async () => {
  try {
    const result = await academicData.find();
    console.log('All Documents:', result);
  } catch (e) {
    console.error('Error:', e);
  }
};

// Call the getData function
// getData();

const deleteDocument = async () => {
  try {
    const result = await academicData.deleteOne({ studentId: 'BTech104' });
    console.log('Document deleted successfully:', result);
  } catch (e) {
    console.error('Error:', e);
  }
};

// Call the deleteDocument function
//deleteDocument();




const coCurricularDetails = new mongoose.Schema({
    studentId: String,
    name: String,
    activityType: String,
    duration: String,
    achievements: { type: [String], default: [] }
  });
  
  const coCurricularData = mongoose.model('coCurricularData', coCurricularDetails);
  
  // Uncomment the next line if you want to clear existing co-curricular activity data
  // coCurricularData.deleteMany({});
  
  const createCoCurricularDocument = async () => {
    try {
      const allData = await coCurricularData.create([
        {
          studentId: 'BTech102',
          name: 'Shyam',
          activityType: 'Chess Club',
          duration: '2 years',
          achievements: ['Tournament Winner', 'Best Player Award']
        },
        {
          studentId: 'BTech103',
          name: 'Ram',
          activityType: 'Debating Society',
          duration: '3 years',
          achievements: ['Best Debater', 'Debate Championship']
        },
        {
          studentId: 'BTech104',
          name: 'Bob',
          activityType: 'Sports Club',
          duration: '4 years',
          achievements: ['Athlete of the Year', 'Gold Medalist']
        }
      ]);
      console.log('Co-Curricular Documents created successfully:', allData);
    } catch (e) {
      console.log('Error:', e);
    }
  };
  
  // Uncomment the next line if you want to create new co-curricular documents
   createCoCurricularDocument();
  
  const updateCoCurricularData = async () => {
    try {
      await coCurricularData.updateOne({ studentId: 'BTech102' }, { $set: { name: 'John' } });
      console.log('Co-Curricular Document updated successfully');
    } catch (e) {
      console.error('Error:', e);
    }
  };
  
  // Call the updateCoCurricularData function
  // updateCoCurricularData();
  
  const getCoCurricularData = async () => {
    try {
      const result = await coCurricularData.find();
      console.log('All Co-Curricular Documents:', result);
    } catch (e) {
      console.error('Error:', e);
    }
  };
  
  // Call the getCoCurricularData function
   getCoCurricularData();
  
  const deleteCoCurricularDocument = async () => {
    try {
      const result = await coCurricularData.deleteOne({ studentId: 'BTech104' });
      console.log('Co-Curricular Document deleted successfully:', result);
    } catch (e) {
      console.error('Error:', e);
    }
  };
