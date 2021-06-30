
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const req = supergoose(app);


describe('Api server', () => {
  test('handles invalid req', async () => {
    const res = await req.get('/anything');
    expect(res.status).toEqual(404);
  });

  it('handles error req', async () => {
    const res = await req.get('/bad');
    expect(res.status).toEqual(500);
  });

  test('handles correct req', async () => {
    const res = await req.get('/');
    expect(res.status).toEqual(200);
  });


});



describe('Food path', () => {
  it('can create a new food', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodObj);
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.type).toBe(foodObj.type);
  });
  it('can get a food after creation', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get('/api/v1/food');
    expect(res.body.gettingFood[0].name).toBe(foodObj.name);
    expect(res.body.gettingFood[0].type).toBe(foodObj.type);
    expect(res.body.gettingFood.length).toBe(1);
  });

  test("delete by id", async () => {

    const res = await req.delete(`/food${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })

  test("put by id ", async () => {

    const res = await req.put(`/food${id}`).send({ name: 'apple' })
    expect(res.status).toEqual(200)

    expect(response.body._id).toBe(id)
    expect(response.body.name).toBe('apple')

  })
});


describe('clothes path', () => {
  it('can create a new closhes', async () => {
    let personObj = { name: 'test', color: 'test' };
    const res = await mockRequest.post('/api/v1/person').send(personObj);
    expect(res.body.name).toBe(personObj.name);
    expect(res.body.color).toBe(personObj.color);
  });
  it('can get a clothes after creation', async () => {
    let personObj = { name: 'test', color: 'test' };
    const res = await mockRequest.get('/api/v1/person');
    expect(res.body.gettingClothes[0].name).toBe(personObj.name);
    expect(res.body.gettingClothes[0].color).toBe(personObj.color);
    expect(res.body.gettingClothes.length).toBe(1);
  });

  test("delete by id", async () => {

    const res = await req.delete(`/clothes${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })
  test("put by id ", async () => {

    const res = await req.put(`/clothes${id}`).send({ color: 'red' })
    expect(res.status).toEqual(200)

    expect(response.body._id).toBe(id)
    expect(response.body.color).toBe('red')

  })
});