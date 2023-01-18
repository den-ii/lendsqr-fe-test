type usersArg = {
  lastActiveDate: string;
};

export const handleUsersNum = (users: usersArg[]) => {
  return users.length;
};
export const handleActiveUsers = (users: usersArg[]) => {
  return users.filter(
    (user) =>
      parseInt(user.lastActiveDate.slice(0, 4)) > 2023 &&
      parseInt(user.lastActiveDate.slice(0, 4)) < 2030
  ).length;
};
