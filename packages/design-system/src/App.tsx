import CheckboxGroup from "./components/checkboxGroup/CheckboxGroup";
import RadioGroup from "./components/radioGroup/RadioGroup";

function App() {
  return (
    <>
      <p className="bg-primary text-white text-heading-1">
        좀 되었으면 좋겠네?
      </p>

      <RadioGroup.Root error="뿡" title="누구야" name="who" required>
        <RadioGroup.Item value="123" label="123" />
        <RadioGroup.Item value="456" label="456" />
      </RadioGroup.Root>

      <CheckboxGroup.Root title="누구냐" required>
        <CheckboxGroup.Item value="12345" label="123" name="www" disabled />
        <CheckboxGroup.Item value="23456" label="123" name="www" />
        <CheckboxGroup.Item value="34567" label="456" name="www" />
      </CheckboxGroup.Root>
    </>
  );
}

export default App;
