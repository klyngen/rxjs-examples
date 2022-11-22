import { HasChildNodesPipe } from './has-child-nodes.pipe';

describe('HasChildNodesPipe', () => {
  it('create an instance', () => {
    const pipe = new HasChildNodesPipe();
    expect(pipe).toBeTruthy();
  });
});
