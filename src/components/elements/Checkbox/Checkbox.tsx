import { Prefecture } from '@/utils/types';

import styles from './Checkbox.module.css';

type CheckboxProps = {
  prefecture: Prefecture;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ prefecture, onChange }: CheckboxProps) => {
  return (
    <div className={styles.checkbox_container}>
      <input
        type='checkbox'
        name={prefecture.prefName}
        value={prefecture.prefCode}
        onChange={onChange}
      />
      <label htmlFor={`${prefecture.prefName} ${prefecture.prefCode}`}>
        {prefecture.prefName}
      </label>
    </div>
  );
};
