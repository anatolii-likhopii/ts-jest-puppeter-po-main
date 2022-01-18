import loginPo from './pages/login.po';

describe('Login', () => {
  beforeEach(async () => {
    await loginPo.go();
  });

  it.each`
    username | password
    ${'wrong_username'}| ${'sandbox'}, 
    ${'admin'}| ${'wrong_password'},
  `('should display error message when username|password is "$username|$password"', async ({ username, password }) => {
    await loginPo.login(username, password);
    expect(await loginPo.checkErrorLogin()).toBeTruthy();
  });

  it('should go to welcome page when username and password are correct', async () => {
    await loginPo.login('admin', 'sandbox');
    expect(await loginPo.checkSuccessLogin()).toBeTruthy();
  });
});
