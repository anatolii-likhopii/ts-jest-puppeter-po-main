import { ElementHandle } from 'puppeteer';
import BasePO from './base.po';

class LoginPO extends BasePO {
  private readonly $usernameInput = '#username';
  private readonly $passwordInput = '#password';
  private readonly $loginButton = '#loginbtn';
  private readonly $errorMessageContainer = '#loginerrormessage';
  private readonly $successMessageContainer = '#frontpage-available-course-list';
  async go() {
    await this.navigate('/login/index.php');
  }

  async login(username: string, password: string) {
    await page.type(this.$usernameInput, username);
    await page.type(this.$passwordInput, password);
    await page.click(this.$loginButton);
  }
  async checkSuccessLogin() {
     return await page.waitForSelector(this.$successMessageContainer, { timeout: 1000 });
  }
  async checkErrorLogin(){
    return await page.waitForSelector(this.$errorMessageContainer, { timeout: 1000 });
  }
}

export default new LoginPO();
