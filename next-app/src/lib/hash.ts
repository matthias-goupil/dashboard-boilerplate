import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

export async function checkPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
