import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dl9Cz20D1oxsYC8784DYHB4NSA",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
