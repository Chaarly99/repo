import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const UserSchema = new Schema({
  name:  String,
  email: String,
  passwd: String,
  accept_pol: Boolean
});

// Crear el modelo
const User = model('User', UserSchema);

export default User;