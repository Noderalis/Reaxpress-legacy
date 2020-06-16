import supertest from 'supertest';
import { app } from '../endpoints';

const request = supertest(app);

describe('Jest and Supertest work flawlessly', () => {
  it('Gets the server and returns without open handles', async (done) => {
    const response = await request.get('/');

    expect(response.status).toBe(200);

    done();
  });
});
