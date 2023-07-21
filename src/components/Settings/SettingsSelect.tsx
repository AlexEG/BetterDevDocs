interface SettingsSelect {
  label: string;
  name: string;
  func(event: any): void;
  state: string;
  options: string[];
}

function SettingsSelect({ label, name, state, func, options }: SettingsSelect) {
  const allOptions = options.map((option) => (
    <option key={option} value={option} className="even:bg-neutral-500">
      {option}
    </option>
  ));
  return (
    <div className="px-2">
      <select
        id={name}
        value={state}
        onChange={func}
        name={name}
        className=" bg-neutral-400 text-neutral-950 font-medium text-sm "
      >
        {allOptions}
      </select>

      <label htmlFor={name} className="select-none ml-2 text-neutral-300">
        {label}
      </label>
    </div>
  );
}
export default SettingsSelect;
