const assert = require('assert');
const fetch = require('node-fetch');

describe('azure login', () => {
    it('logs into azure and checks if application exists', () => {
        browser.url('https://login.microsoftonline.com/mlabgbtcoutlook.onmicrosoft.com/oauth2/authorize?response_type=id_token%20code&client_id=4ba11d24-2dee-4fa4-9734-07b934c9ccb0&redirect_uri=https%3A%2F%2Fgbtc-rmrewh.azurewebsites.net&state=04140fc2-4f07-46e4-ab19-c8cbb8602978&client-request-id=ae0ebae2-ce73-4e68-a2a6-98387cfa9b55&x-client-SKU=Js&x-client-Ver=1.0.17&nonce=45a1d76f-0acb-479f-ad55-14ccf44613c9');
       const username=$('input[name="loginfmt"]');
       const next=$('input[type="submit"]');
        username.setValue('mlab.gbtc@outlook.com');
        next.click();
        browser.pause(5000);
        browser.waitUntil(() => {
            return $('div[role="heading"]').getText() === 'Enter password'
          }, 6000, 'expected text to be different after 5s');
        browser.pause(5000);
        const password=$('input[name="passwd"]');
        password.setValue('Animesh@Ishaan@Tejvi1234');
        const signin=$('input[type="submit"]');
        signin.click();
        browser.waitUntil(() => {
            return $('.application-header').getText()
          }, 6000, 'expected text to be different after 5s');
          browser.pause(5000);
    })
});
//update function for scalability
describe('azure application', () => {
  it('opens Hello, Blockchain', () => {
    const appbutton = $('div.Tile[role="button"]');
    const applicationname = appbutton.$('.application-header');
    if(applicationname.getText() === 'Hello, Blockchain!'){
      appbutton.click();
      browser.pause(3000);
      browser.waitUntil(() => {
        return $('div[data-list-index="0"]');
      }, 6000, 'expected to exist');
      $('div[data-list-index="0"]').click();
      browser.waitUntil(() => {
        return $('di.card-footer');
      }, 6000, 'expected to exist');
      $('button=Take action').click();
     // $('button.card-footer').click();
      $('#Basicdrop1').click();
      $('#Basicdrop1-list0').click();
      browser.pause(3000);
      $$('button=Take action')[1].click();
      browser.waitUntil(() => {
        return $('input');
      }, 6000, 'expected text field to exist');
      $('input').setValue("Verified Vote"+process.argv[5]);
      $$('button=Take action')[1].click();
      browser.pause(5000);
    }
  })
});