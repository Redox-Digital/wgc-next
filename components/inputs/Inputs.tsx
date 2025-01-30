import css from './Inputs.module.scss';

type TextInputType = {
  id: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  width?: 'half' | '1/3' | '2/3'; // DEV : TBC
  type: 'text' | 'number' | 'date' | 'textarea' | 'file';
};

export function TextInput({ id, label, placeholder, width, className, type }: TextInputType) {
  if (type === 'textarea') {
    return (
      <label htmlFor={id} className={`${css.input} ${className}`}>
        <span>{label}</span>
        <textarea id={id} name={id} placeholder={placeholder} defaultChecked></textarea>
      </label>
    );
  }
  return (
    <label htmlFor={id} className={`${css.input} ${className} ${width && css.half}`}>
      <span>{label}</span>
      <input type={type} id={id} name={id} placeholder={placeholder}></input>
    </label>
  );
}

type SelectInputType = {
  id: string;
  label: string;
  half?: boolean;
  small?: boolean;
  className?: string;
  options: { value: string; label: string }[];
};

export function SelectInput({ id, label, options, half, className, small }: SelectInputType) {
  return (
    <label htmlFor={id} className={`${css.input} ${half && css.half} ${className}`}>
      <span>{label}</span>

      <select name={id} id={id} className={`${small && css.small}`}>
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
