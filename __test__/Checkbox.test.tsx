import { Checkbox } from '@/components/elements/Checkbox/Checkbox';
import { render, fireEvent } from '@testing-library/react';

const mockPrefecture = {
  prefCode: 1,
  prefName: '北海道',
};

describe('Checkbox', () => {
  test('都道府県名が正しく描画される', () => {
    const { getByText } = render(
      <Checkbox prefecture={mockPrefecture} onChange={() => {}} />,
    );
    expect(getByText('北海道')).toBeInTheDocument();
  });

  test('onChangeが呼び出される', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Checkbox prefecture={mockPrefecture} onChange={handleChange} />,
    );

    fireEvent.click(getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalled();
  });
});
