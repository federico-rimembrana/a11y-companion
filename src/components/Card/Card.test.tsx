import { virtual } from '@guidepup/virtual-screen-reader';
import { render } from '@testing-library/react';
import Card from '.';

test('should navigate to the input and announce the placeholder', async () => {
  const cardComponent = render(<Card>foo</Card>);

  virtual.start({ container: cardComponent.container });
  await virtual.next();

  expect(await virtual.lastSpokenPhrase()).toEqual('foo');
});
