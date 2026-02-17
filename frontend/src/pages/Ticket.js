import { useParams } from "react-router-dom";

export default function Ticket() {
  const { id } = useParams();

  return (
    <div>
      <h2>Ticket Page</h2>
      <p>Your Ticket ID:</p>
      <h3>{id}</h3>
    </div>
  );
}
