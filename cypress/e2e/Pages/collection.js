export class collectionPage{
  
 
    visit_collectie(collectie_url){
        cy.visit(collectie_url)
    }
    search_painting(paint){
        cy.get('.list-filters-form-left').type(paint) //searching for a specific paint
        cy.get('.search-field-search-button').click() // hitting the search icon
    }
    select_first(){
        cy.get('[aria-posinset="1"]').click() // clicking on the first result
    }
    result_verification(result){
        cy.get('.results').invoke('text').then(parseFloat).should('be.gt',result) //verify the result is greater than 700
    }
    page_verification(collectie_url,page_title,label){
        cy.url().should('be.equal',collectie_url) //verify that the correct url is visited
        cy.title().should('be.equal',page_title) // verify the title of the page is correct
        cy.contains(label).should('be.visible') //verify that the page contains the text "Collectie"
    }
    image_verification(){
        cy.get(':nth-child(1) > .accordion-item-button > button').click() //clicking on the image

        //checking F-nummer
        cy.get(':nth-child(1) > .definition-list-item-label').should('have.text','F-nummer')
        cy.get(':nth-child(1) > .definition-list-item-value').should('have.text','F0464')

        //checking JH-nummer
        cy.get(':nth-child(2) > .definition-list-item-label').should('have.text','JH-nummer')
        cy.get(':nth-child(2) > .definition-list-item-value').should('have.text','JH1589')

        //checking Inventarisnummer
        cy.get(':nth-child(3) > .definition-list-item-label').should('have.text','Inventarisnummer')
        cy.get(':nth-child(3) > .definition-list-item-value').should('have.text','s0032V1962')
    }
}
