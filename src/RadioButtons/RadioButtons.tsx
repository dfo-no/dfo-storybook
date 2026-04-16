import './RadioButtons.scss';

interface Button {
  label: string,
  value: string,
  defaultChecked?: boolean,
}

interface RadioButtonsProps {
  name: string,
  options: Button[],
}

export default function RadioButtons({ 
  name, 
  options = [],
}: RadioButtonsProps) {
  return (
    <div className="dfo-radio-buttons">
      {options.map(({ label, value, defaultChecked, ...rest }) => {
        const key = `${name}-${value}`;
        return (
          <label key={key} htmlFor={key}>
            <input name={name} id={key} type="radio" value={value} defaultChecked={defaultChecked} {...rest} />
            {label}
          </label>
        );
      })}
    </div>
  );
}
