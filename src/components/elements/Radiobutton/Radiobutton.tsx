import styles from './Radiobutton.module.css';

type RadioButtonProps = {
  populationCategoryName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export const RadioButton = ({
  populationCategoryName,
  onChange,
  checked,
}: RadioButtonProps) => {
  return (
    <div className={styles.radiobutton_container}>
      <input
        type='radio'
        id={populationCategoryName}
        name='population category name'
        value={populationCategoryName}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={populationCategoryName}>{populationCategoryName}</label>
    </div>
  );
};
