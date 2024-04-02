Feature: Navigation matchers
    Locate navigation element
    Background: I navigate to the Counters section option
        Given I locate MemberList by id
    # @navigations @nav
    # Scenario:I locate navigaton element by id
    #     When I locate MemberList title by id
    #     And I locate MemberList header add memebr button by id
    #     And I tap the Member navigtion section by label
    #     Then I locate MemberList header add memebr button by id

    @naviagtion @tab
    Scenario: I locate tab bar element by label
        When I locate cities tab bar