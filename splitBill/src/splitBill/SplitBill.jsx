import Button from "../components/button";
export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>

      <label>💰Bill Value</label>
      <input type="text" />

      <label>😊your expense</label>
      <input type="text" />

      <label>👯‍♂️X'S expense</label>
      <input type="text" disabled />

      <label>🤑Who is paying the Bill</label>
      <select>

        <option value="User">You</option>
        
        <option value="Friends">X</option>

      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
