import { RadioButton } from '@/components/elements/Radiobutton/Radiobutton';
import { render, fireEvent } from '@testing-library/react';

describe('RadioButton component', () => {
  const defaultProps = {
    populationCategoryName: '総人口',
    onChange: jest.fn(),
    checked: false,
  };

  test('人口の種類が正しく描画される', () => {
    const { getByLabelText } = render(<RadioButton {...defaultProps} />);
    expect(getByLabelText('総人口')).toBeInTheDocument();
  });

  test('onChangeが呼び出される', () => {
    const { getByLabelText } = render(<RadioButton {...defaultProps} />);
    fireEvent.click(getByLabelText('総人口'));
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('checkedがtrueの時にチェックマークがつく', () => {
    const { getByLabelText } = render(
      <RadioButton {...defaultProps} checked={true} />,
    );
    expect(getByLabelText('総人口')).toBeChecked();
  });
});
