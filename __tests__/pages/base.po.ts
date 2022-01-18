export default abstract class BasePO {
  protected readonly BASE_URL = 'https://sandbox.moodledemo.net/';

  abstract go(): Promise<void>;

  async navigate(url: string) {
    await page.goto(`${this.BASE_URL}${url}`);
  }
}