interface SettingsCheckbox {
  label: string;
  name: string;
  func(event: any): void;
  state: boolean;
}
function SettingsCheckbox({ label, name, func, state }: SettingsCheckbox) {
  return (
    <div className="px-2 text-neutral-300 mb-2">
      <input
        className="mr-2 accent-neutral-950 cursor-pointer"
        type="checkbox"
        id={name}
        checked={state}
        onChange={func}
        name={name}
      />
      <label htmlFor={name} className="select-none">
        {label}
      </label>
    </div>
  );
}
export default SettingsCheckbox;
