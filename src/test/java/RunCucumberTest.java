import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json"},
        features = {"src/test/features"},
        glue = "stepdefs",
        tags = "@test")
public class RunCucumberTest extends AbstractTestNGCucumberTests {
}
