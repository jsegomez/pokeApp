import { SafeUrlImagePipe } from './safe-url-image.pipe';

describe('SafeUrlImagePipe', () => {
  it('create an instance', () => {
    const pipe = new SafeUrlImagePipe();
    expect(pipe).toBeTruthy();
  });
});
