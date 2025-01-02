import RadioGroup from "./components/radioGroup/RadioGroup";

function App() {
  return (
    <>
      <p className="bg-primary text-white text-heading-1">
        좀 되었으면 좋겠네?
      </p>

      <RadioGroup error="뿡" title="누구야" name="who" required>
        <RadioGroup.Item value="123" label="123" />
        <RadioGroup.Item value="456" label="456" />
      </RadioGroup>
    </>
  );
}

export default App;
