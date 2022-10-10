export class Homepage{

    visit_home(url){
        cy.visit(url)
    }
    click_collectie(link_name){
        cy.contains(link_name).click()
    }
 
}