Feature: Form action

    Locate the form element line textinput
    Background: I move to add member screens
        Given I locate member list in the home screens
        When I move add member list in memberlist


    @Form @FormElement
    Scenario: I locate form element in form
        # Given I locate member list in the home screens
        # When I move add member list in memberlist
        Then I check "<title>" title is found

        Examples:
            | title |
            | name  |