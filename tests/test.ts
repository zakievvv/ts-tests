import { Selector } from 'testcafe';

fixture `Allergan - Login`
    .page `https://demo.alle.com/`;

test('testLogin', async t => {
    await t
.click(Selector('h5').withText('LOG IN'))
        .typeText(Selector('#login-phone-number'), '5128176082')
        .pressKey('tab')
        .pressKey('shift')
        .typeText(Selector('#login-password'), 'SMTHeasy77')
        .pressKey('enter')
        .click(Selector('[data-testid=\"open-menu-button\"]'))
        .click(Selector('h3').withText('My Profile'))
        .expect(Selector('h4').withText('Eugene Zakiev').textContent).eql("Eugene Zakiev");
});

test('testLoginNegative', async t => {
    await t
        .click(Selector('h5').withText('LOG IN'))
        .typeText(Selector('#login-phone-number'), '5128176082')
        .pressKey('tab')
        .typeText(Selector('#login-password'), 'WRONGpass44')
        .click(Selector('span').withText('LOG IN'))
        .expect(Selector('p').withText('Incorrect login. Try your password again.').innerText).eql("Incorrect login. Try your password again.");
});
