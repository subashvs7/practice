import Friend from "./Friend";
export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friends) => (
        <Friend friends={friends} key={friends.id} />
      ))}
    </ul>
  );
}
