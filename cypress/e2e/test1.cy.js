/// reference types = "Cypress"/>

// it('Google search', function() {

// })

it('google search', ()=> {
cy.visit('https://google.co.uk')
})


/*

* Create a main remote repository in the github 
* Add desctiption & create a repository
* move to terminal
* Set your local project as the current working directory
* Go to the project folder on terminal & initialise the git by `git init` & enter
* `git add .`
* `git status`
* `git commit -m "some message"`
* copy the github remote repositotry URL & to go terminal
* `git remote add origin  https://github.com/maggie-lagana.git` & enter
* `git push -u origin main`
* Enter user name and password
* go to github profile settings > developer settings > personal access tokens > Token classic  
  add the access options and create the token. 
  * copy the token and paste it in the terminal 

*/

// describe('empty spec', () => {
//     it('passes', () => {
//       cy.visit('https://example.cypress.io')
//     })
//   })