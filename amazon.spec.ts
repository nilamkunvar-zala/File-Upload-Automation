import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
});*/
test('Add to Cart Amazon',async({page,context})=>{
    await page.goto('https://www.amazon.in/'); 

    await page.getByPlaceholder('Search Amazon.in').fill('Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera');

    await page.getByRole('button',{name:'Go'}).click();

    /*const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[target="_blank"]') // Opens a new tab
      ])*/

      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[6]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span').click() // Opens a new tab
      ])
      await newPage.getByTitle('Add to Shopping Cart').click();
      await newPage.waitForLoadState();

      console.log(await page.title());
})

test('Search Product',async({page,context})=>{
    await page.goto('https://www.amazon.in/'); 

    await page.getByPlaceholder('Search Amazon.in').fill('Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera');

    await page.getByRole('button',{name:'Go'}).click();

      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[6]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span').click() // Opens a new tab
      ])
      await newPage.locator("//*[@id='quantity']//ancestor::select[1]").selectOption('4');
      await newPage.waitForLoadState();

      console.log(await page.title());
})