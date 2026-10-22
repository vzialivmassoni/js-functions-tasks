const getGirlFriends = (users) => users
  .flatMap((user) => user.friends)
  .filter((friend) => friend.gender === 'female');

export default getGirlFriends;