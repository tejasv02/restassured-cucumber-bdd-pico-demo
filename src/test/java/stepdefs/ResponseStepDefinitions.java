package stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.restassured.response.ValidatableResponse;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

import static org.hamcrest.Matchers.equalTo;

public class ResponseStepDefinitions {
    private final World world;
    private ValidatableResponse json;

    public ResponseStepDefinitions(World world) {
        this.world = world;
        json = world.response.then();
    }

    @Then("the status code is (\\d+)")
    public void verify_status_code(int statusCode) {
        json.statusCode(statusCode);
    }

    @And("response includes the following$")
    public void response_equals(Map<String, String> responseFields) {
        for (Map.Entry<String, String> field : responseFields.entrySet()) {
            if (StringUtils.isNumeric(field.getValue())) {
                json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
            } else {
                json.body(field.getKey(), equalTo(field.getValue()));
            }
        }
    }

    @And("^response includes username \"([^\"]*)\" and name \"([^\"]*)\" fields$")
    public void responseIncludesUsernameAndNameFields(String username, String name) {
        json = world.response.then()
                .statusCode(Integer.parseInt("200"));
        json.assertThat().body("username[0]", equalTo(username));
        json.assertThat().body("name[0]", equalTo(name));
    }

}
