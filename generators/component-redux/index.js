const Generator = require("yeoman-generator");
const normalize = require("../../utils");

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option("dirSource", {
      alias: "d",
      desc: "The source code directory",
      type: String,
      required: true,
      default: "src"
    });

    this.option("moduleName", {
      alias: "m",
      desc: "The module name",
      type: String,
      required: true
    });

    this.option("componentName", {
      alias: "c",
      desc: "The component name",
      type: String
    });
  }

  prompting() {
    if (this.hasRequiredInputs()) {
      this.answers = normalize({
        dirSource: this.options.dirSource,
        moduleName: this.options.moduleName,
        componentName: this.options.componentName
      });

      return Promise.resolve();
    }

    return this.prompt([
      {
        default: "src",
        message: "Where is your source directory?",
        name: "dirSource",
        required: true,
        store: true,
        type: String
      },
      {
        message: "What module?",
        name: "moduleName",
        required: true,
        store: true,
        type: String
      },
      {
        message: "What component?",
        name: "componentName",
        required: true,
        store: true,
        type: String
      }
    ]).then(answers => {
      this.answers = normalize(answers);

      return Promise.resolve();
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("actions/index.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/actions/index.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("constants/actionTypes.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/constants/actionTypes.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("reducers/__tests__/component-name-spec.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/reducers/__tests__/${this.answers.componentNameDasherized}-spec.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("reducers/componentName.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/reducers/${this.answers.componentName}.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("reducers/index.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/reducers/index.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("selectors/index.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/selectors/index.js`
      ),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath("selectors/__tests__/index-spec.js"),
      this.destinationPath(
        `${this.answers.dirSource}/modules/${
          this.answers.moduleNameDasherized
        }/selectors/__tests__/index-spec.js`
      ),
      this.answers
    );
  }

  hasRequiredInputs() {
    const { componentName, dirSource, moduleName } = this.options;

    return componentName && dirSource && moduleName;
  }
};
