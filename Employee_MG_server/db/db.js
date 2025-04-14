import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB server');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1); 
    }
};
export default connectDB;


// const createAdminUser = async () => {
//     const adminEmail = process.env.ADMIN_EMAIL;
//     const adminPassword = process.env.ADMIN_PASSWORD;
  
//     const existingAdmin = await User.findOne({ email: adminEmail });
//     if (existingAdmin) {
//       console.log('✅ Admin user already exists');
//       return;
//     }
  
//     const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
//     const admin = new User({
//       email: adminEmail,
//       password: hashedPassword,
//       role: 'admin',
//     });
  
//     await admin.save();
//     console.log('🚀 Admin user created successfully');
//   };




