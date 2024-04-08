Feature: Expect element to be visible

    Visibility check of an element
    # Background: Default selection of cities
    #  Given I locate "citiesnavigationid" bar by tabid
    
    # @expectation @Visibility
    # Scenario: I check visibility of the element
    #   When I verify that the first element is visible
    #   Then I verify that the last element is not visible


      Scenario: I can expect element to have a specific text, label or id
        Given I tap on the memberlist selection for expection
        When I expect the memberlist header text yo be memberList
        And I expect the add member button to have addMemberLabel as label
