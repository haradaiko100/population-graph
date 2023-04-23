import { PopulationGraph } from '@/components/elements/Graph/Graph';
import { render, waitFor, screen } from '@testing-library/react';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
  }));

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height={500}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('PopulationGraph', () => {
  const mockData = [
    { year: 2020, 北海道: 1000, 東京都: 2000 },
    { year: 2021, 北海道: 1100, 東京都: 2100 },
    { year: 2022, 北海道: 1200, 東京都: 2200 },
  ];
  const mockListDatakey = ['北海道', '東京都'];

  it('グラフを正しく描画する', async () => {
    const { getByText } = render(
      <PopulationGraph data={mockData} ListDatakey={mockListDatakey} />,
    );

    await waitFor(() => {
      expect(getByText('年度')).toBeInTheDocument();
      expect(getByText('人口数')).toBeInTheDocument();

      mockListDatakey.forEach((dataKey) => {
        expect(getByText(dataKey)).toBeInTheDocument();
      });
    });
  });
});
