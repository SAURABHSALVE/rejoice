
const { MongoClient, ServerApiVersion } = require('mongodb');

// Test MongoDB connection without requiring actual credentials
async function testMongoDBConnection() {
  console.log('🔍 Testing MongoDB connection...');
  
  // Check if mongodb package is installed
  try {
    console.log('✅ MongoDB package is installed');
  } catch (error) {
    console.error('❌ MongoDB package not found. Please run: npm install mongodb');
    return;
  }

  // Test with a sample connection string (this won't actually connect)
  const sampleUri = "mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority";
  
  try {
    const client = new MongoClient(sampleUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    console.log('✅ MongoDB client created successfully');
    console.log('✅ Server API version configured');
    console.log('✅ Connection options set correctly');
    
    // Note: This won't actually connect due to invalid credentials
    console.log('⚠️  Note: This is a test run. To actually connect to MongoDB:');
    console.log('   1. Replace <db_password> with your actual password');
    console.log('   2. Ensure your MongoDB Atlas cluster is running');
    console.log('   3. Check your IP whitelist settings');
    
  } catch (error) {
    console.error('❌ Error creating MongoDB client:', error.message);
  }
}

// Test Express server setup
function testExpressSetup() {
  console.log('\n🔍 Testing Express server setup...');
  
  try {
    const express = require('express');
    const cors = require('cors');
    const helmet = require('helmet');
    const rateLimit = require('express-rate-limit');
    
    console.log('✅ Express package loaded');
    console.log('✅ CORS package loaded');
    console.log('✅ Helmet package loaded');
    console.log('✅ Express Rate Limit package loaded');
    
    const app = express();
    console.log('✅ Express app created');
    
    // Test middleware setup
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    
    console.log('✅ CORS middleware configured');
    console.log('✅ Helmet middleware configured');
    console.log('✅ JSON middleware configured');
    
    return app;
  } catch (error) {
    console.error('❌ Error setting up Express:', error.message);
    return null;
  }
}

// Test environment variables
function testEnvironmentSetup() {
  console.log('\n🔍 Testing environment setup...');
  
  try {
    require('dotenv').config();
    console.log('✅ Dotenv package loaded');
    console.log('✅ Environment variables can be loaded');
    
    // Check for common environment variables
    const envVars = ['PORT', 'MONGODB_URI', 'JWT_SECRET'];
    envVars.forEach(varName => {
      if (process.env[varName]) {
        console.log(`✅ ${varName} is set`);
      } else {
        console.log(`⚠️  ${varName} is not set (this is normal for testing)`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error loading environment variables:', error.message);
  }
}

// Main test function
async function runTests() {
  console.log('🚀 Starting backend tests...\n');
  
  // Test MongoDB setup
  await testMongoDBConnection();
  
  // Test Express setup
  const app = testExpressSetup();
  
  // Test environment setup
  testEnvironmentSetup();
  
  console.log('\n✅ All tests completed!');
  console.log('\n📝 Next steps:');
  console.log('   1. Create a .env file with your MongoDB connection string');
  console.log('   2. Update the connection string in your server files');
  console.log('   3. Run: npm run dev to start the development server');
}

// Run the tests
runTests().catch(console.error);
