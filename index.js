const puppeteer = require('puppeteer');
console.log('Bem vindo eu sou um Robô de busca');

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const url = 'https://unsplash.com/';
    await page.goto(url);

    await page.click('a[href="/login"]');

    await page.type('[name="user[email]"]', 'username');
    await page.type('[name="user[password]"]', 'password');
    await page.click('[type="submit"]');

    // Esperar a página carregar tudo
    await page.waitForNavigation();

    await page.goto('https://unsplash.com/quandoestiverlogado');


    // Para clicar em um botão
    // await page.click('')

    // await browser.close();
}

robo()