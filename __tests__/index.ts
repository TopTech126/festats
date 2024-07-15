import StatsReport, { SITE } from '../src';

test('should report data', () => {
  let xhrMock = {
    open: jest.fn(),
    setRequestHeader: jest.fn(),
    onreadystatechange: jest.fn(),
    send: jest.fn(),
    readyState: 4,
    responseText: '',
    status: 200
  };
  (window as any).XMLHttpRequest = jest.fn(() => xhrMock)
  const stats = new StatsReport(SITE.lux);
  stats.report('testStats', {
    value: 1,
    data: 'test',
    bool: true,
  });
  expect(xhrMock.open).toBeCalledWith('GET', 'https://festats.debank.com/lux/testStats?value=1&data=test&bool=true');
});
