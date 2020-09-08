const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordHash: String,
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
});

UserSchema.pre('save', async function () {
  if (this.password) this.passwordHash = await bcrypt.hash(this.password, 10);
  this.password = undefined;
});

mongoose.model('User', UserSchema);
