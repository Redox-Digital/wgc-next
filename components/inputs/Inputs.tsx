import css from './Inputs.module.scss';
import Image from 'next/image';

type TextInputType = {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  className?: string;
  dark?: boolean;
  width?: '50' | '33' | '66' | '50t';
  type: 'text' | 'number' | 'date' | 'textarea' | 'file' | 'password' | 'email';
};

function getInputWidth(width?: '50' | '33' | '66' | '50t') {
  if (!width) return '';

  switch (width) {
    case '50':
      return css.w50;

    case '50t':
      return css.wt50;

    case '33':
      return css.w33;

    case '66':
      return css.w66;

    default:
      return '';
  }
}

export function TextInput({
  id,
  label,
  placeholder,
  width,
  className,
  type,
  dark,
  value,
}: TextInputType) {
  if (type === 'textarea') {
    return (
      <label htmlFor={id} className={`${css.input} ${className}`}>
        <span>{label}</span>
        <textarea id={id} name={id} placeholder={placeholder} defaultChecked>
          {value}
        </textarea>
      </label>
    );
  }
  return (
    <label
      htmlFor={id}
      className={`${css.input} ${dark && css.dark} ${className} ${getInputWidth(width)}`}
    >
      <span>{label}</span>
      <input type={type} id={id} name={id} placeholder={placeholder} value={value}></input>
      {type === 'file' && <Image src="/pictograms/photo-dark.svg" alt="" width={20} height={20} />}
    </label>
  );
}

type SelectInputType = {
  id: string;
  label: string;
  value?: string;
  className?: string;
  width?: '50' | '33' | '66' | '50t';
  dark?: boolean;
  options: { value: string; label: string }[];
};

export function SelectInput({
  id,
  label,
  options,
  className,
  width,
  dark,
  value,
}: SelectInputType) {
  return (
    <label
      htmlFor={id}
      className={`${css.input} ${getInputWidth(width)} ${dark && css.dark} ${className}`}
    >
      <span>{label}</span>

      <select name={id} id={id}>
        {options.map((o) => (
          <option value={o.value} key={o.value} selected={o.value === value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

type CheckboxType = {
  id: string;
  checked?: boolean;
  className?: string;
  dark?: boolean;
  children?: string | React.ReactNode;
};

export function Checkbox({ id, checked, className, dark, children }: CheckboxType) {
  return (
    <label htmlFor={id} className={`${css.checkbox} ${className} ${dark ? css.dark : ''}`}>
      <input type="checkbox" id={id} name={id} checked={checked} />
      <span>{children}</span>
    </label>
  );
}
