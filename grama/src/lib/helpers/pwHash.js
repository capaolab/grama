import bcrypt from 'bcryptjs'

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

export function saltAndHashPassword(password) {
  return bcrypt.hashSync(password, salt);;
}

export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
