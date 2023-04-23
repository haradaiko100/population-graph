import { TextProps } from '@/utils/types';

import styles from './Text.module.css';

export const PrimaryHeading = ({
  className,
  children,
  ...props
}: TextProps) => (
  <h2 className={`${styles.primary_heading} ${className}`} {...props}>
    {children}
  </h2>
);
