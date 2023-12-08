import Button from "./button";
export default function Friend({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="red">
          you owe {friends.name} {Math.abs(friends.balance)}$
        </p>
      )}
      {friends.balance > 0 && (
        <p className="green">
          {friends.name} owes you {Math.abs(friends.balance)}$
        </p>
      )}
      {friends.balance === 0 && <p>you and {friends.name} are even</p>}
      <Button>select</Button>
    </li>
  );
}
