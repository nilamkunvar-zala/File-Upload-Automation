import { test, expect } from '@playwright/test';

test('Login Speechify',async({page})=>{
    await page.goto('https://app.speechify.com/login');

    await page.locator('//*[@name="email"]').fill('test241013@gmail.com');
    await page.locator('//*[@name="password"]').fill('24102023');
    await page.getByRole('button').and(page.getByLabel('Sign In')).click();
    await page.pause();
});

test('File Upload My Files',async({page})=>{

    await page.goto('https://app.speechify.com/login');

    await page.locator('//*[@name="email"]').fill('test241013@gmail.com');
    await page.locator('//*[@name="password"]').fill('24102023');
    await page.locator('button:has-text("Sign in")').click();
    await page.waitForLoadState();

    await page.locator('button:has-text("New")').click();
    await page.locator('//*[@id="headlessui-menu-item-13"]').click();
    await page.locator('button:has-text("My Device")').click();
    //await page.click('file://C://Users//lenovo-Nilam//Downloads//A_Study_Of_Cyber_Security_Challenges_And_Its_Emerg.pdf');
    await page.setInputFiles("input[type='file']", 'C://Users//lenovo-Nilam//Downloads//A_Study_Of_Cyber_Security_Challenges_And_Its_Emerg.pdf');

    await page.pause();
});

test('File Upload Weblink',async({page})=>{

    await page.goto('https://app.speechify.com/login');

    await page.locator('//*[@name="email"]').fill('test241013@gmail.com');
    await page.locator('//*[@name="password"]').fill('24102023');
    await page.locator('button:has-text("Sign in")').click();

    await page.waitForLoadState();
    await page.locator('span:has-text("Snooze tips")').click();
    await page.locator('button:has-text("New")').click();
    await page.locator('button:has-text("Web Link")').click();
    await page.locator('button:has-text("Skip")').click();
    
    //await page.getByRole('textbox',{name:"url"}).fill('https://playwright.dev/docs/api/class-filechooser');
    await page.locator('//*[@name="url"]').fill('https://playwright.dev/docs/api/class-filechooser');
    await page.pause();

    await page.locator('button:has-text("Submit")').click();

    await page.pause();
});