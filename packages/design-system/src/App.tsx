import { Container, Modal } from "./components";
import CheckboxGroup from "./components/checkboxGroup/CheckboxGroup";
import RadioGroup from "./components/radioGroup/RadioGroup";

function App() {
  return (
    <>
      <p className="bg-primary text-heading-1 text-white">
        좀 되었으면 좋겠네?
      </p>
      <h3 className="text-2xl text-blue-400 text-red-500">
        이거 스타일 안먹으면 tailwindcss 안되는거임
      </h3>

      <Container>
        <Modal.Root>
          <Modal.Trigger>회원가입</Modal.Trigger>
          <Modal.Portal>
            <Modal.Overlay />
            <Modal.Content>
              <Modal.Close>닫기</Modal.Close>
            </Modal.Content>
          </Modal.Portal>
        </Modal.Root>
      </Container>

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
