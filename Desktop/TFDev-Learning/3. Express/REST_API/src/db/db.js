import mongoose from 'mongoose';

const dbName = process.env.DB_NAME || 'mydb';
const mongoURI = process.env.MONGO_URI || `mongodb://localhost:27017/${dbName}`;

async function dbConnect(){
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected', dbName)
    })
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err)
    })
    // Connect to MongoDB
    await mongoose.connect(mongoURI,{
        dbName: dbName
    })
}
export default dbConnect