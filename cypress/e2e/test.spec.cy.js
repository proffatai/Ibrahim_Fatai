///<reference types="cypress"/>
import {Homepage} from '../e2e/Pages/homepage';
import {collectionPage} from '../e2e/Pages/collection';

describe('Van Gogh Museum Automation', () => {

  let mydata;
  const home =new Homepage()
  const collection =new collectionPage()

  //importing external data needed during automation
 before(()=>{
  cy.fixture("data.json").then(stored_data=>{
    mydata =stored_data
  })
 })

  it('Test 1 - User visit "Home Page" and visit the " Ontdek de collectie" Page', () => {

    home.visit_home(mydata.url) //load homepage from baseUrl
    home.click_collectie( mydata.link_name) //go to collection search
    collection.page_verification( mydata.collectie_url, mydata.page_title, mydata.label) //perform verification and assertion on the page
  })
  
  it('Test 2 - User searches for painting using its title', () => {

    collection.visit_collectie( mydata.collectie_url) //load collection
    collection.search_painting( mydata.paint_title) //search for collection
    collection.result_verification( mydata.result) //perform verification and assertion on the page

  })

  it('Test 3 - User selects a specific art', () => {
     
    collection.visit_collectie( mydata.collectie_url) //load collection
    collection.search_painting( mydata.paint_title) //search for collection
    collection.select_first() // click the first collection
    collection.image_verification() // verify that the expected first image is clicked

  })
})