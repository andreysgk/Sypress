import loginActions from '../../actions/ui/login.actions';

describe('Login', () => {
  it('Verify login by UI', () => {
    cy.stepInfo('Login by UI and verify Dashboard opened');
    loginActions.login();
  });

  it('Invalid Login', () => {
    cy.stepInfo('type invalid login by UI and wait error');
    loginActions.unknownUser();
  });
});
