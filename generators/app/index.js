const Generator = require("yeoman-generator");
const normalize = require("../../utils");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        name: "dirSource",
        type: String,
        required: true,
        message: "Where is your source directory?",
        default: "src",
        store: true
      },
      {
        name: "moduleName",
        type: String,
        required: true,
        message: "What module?",
        store: true
      },
      {
        name: "componentName",
        type: String,
        required: true,
        message: "What component?",
        store: true
      },
      {
        name: "withRedux",
        type: "confirm",
        required: false,
        message: "With Redux?",
        default: false
      }
    ]).then(answers => {
      this.answers = normalize(answers);
    });
  }

  default() {
    this.composeWith(require.resolve("../component"), {
      dirSource: this.answers.dirSource,
      moduleName: this.answers.moduleName,
      componentName: this.answers.componentName,
      withRedux: this.answers.withRedux
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/index.js`
      ),
      this.answers
    );
  }
};
