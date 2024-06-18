

// Create a Redis client
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Generate a new OTP
    const userId = req.body.userId;
    const otp = await generateOTP(userId);
    res.status(200).json({ otp });
  } else if (req.method === 'PUT') {
    // Verify the entered OTP
    const userId = req.body.userId;
    const enteredOTP = req.body.otp;
    const verified = await verifyOTP(userId, enteredOTP);
    res.status(200).json({ verified });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Generate a new OTP
async function generateOTP(userId) {
  const secret = speakeasy.generateSecret({ length: 20 });
  const token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
  });

  // Store the OTP, secret, and metadata in Redis
  await storeOTPInfo(userId, token, secret.base32);

  return token;
}

// Verify the entered OTP
async function verifyOTP(userId, enteredOTP) {
  // Retrieve the stored OTP information from Redis
  const storedInfo = await getStoredOTPInfo(userId);

  if (!storedInfo) {
    return false;
  }

  // Verify the entered OTP
  const verified = speakeasy.totp.verify({
    secret: storedInfo.secret,
    encoding: 'base32',
    token: enteredOTP
  });

  // Remove the OTP information from Redis after successful verification
  if (verified) {
    await deleteOTPInfo(userId);
  }

  return verified;
}

// Helper functions to store and retrieve OTP information in Redis
async function storeOTPInfo(userId, otp, secret) {
  await redisClient.set(`otp:${userId}`, JSON.stringify({ token: otp, secret, timestamp: Date.now() }));
}

async function getStoredOTPInfo(userId) {
  const storedInfo = await redisClient.get(`otp:${userId}`);
  return storedInfo ? JSON.parse(storedInfo) : null;
}

async function deleteOTPInfo(userId) {
  await redisClient.del(`otp:${userId}`);
}
