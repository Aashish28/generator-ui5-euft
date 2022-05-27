'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require("path");
const glob = require("glob");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the unreal ${chalk.red('generator-ui5-euft')} generator!'
      )
    );



    return this.prompt([
      {
        type: 'input',
        name: 'projectname',
        message: 'Extension project name?',
        default: 'myextension'
      },
      {  
      type: "input",
      name: "namespaceUI5",
      message: "Which namespace do you want to use?",
      validate: (s) => {
          if (/^[a-zA-Z0-9_\.]*$/g.test(s)) {
              return true;
          }
          return "Please use alpha numeric characters and dots only for the namespace.";
      },
      default: "com.myorg"
      },
      {
        type: 'input',
        name: 'appid',
        message: 'Enter standard app id',
        default: 'fin.gl.journalentry.upload'
      },
      {
        type: 'input',
        name: 'apppath',
        message: 'Extension project name?',
        default: '/sap/bc/ui5_ui5/sap/FIN_GLJE_UPLD'
      }
    ]).then((answers) => {
      this.destinationRoot(`${answers.namespaceUI5}.${answers.projectname}`);
      this.config.set(answers);
      this.config.set("namespaceURI", answers.namespaceUI5.split(".").join("/"));
    });
  }

  default() {
    /*mkdirp(this.config.projectname);
    mkdirp(this.config.projectname + "/uimodule/");
    mkdirp(this.config.projectname + "/uimodule/webapp/");
    this.destinationRoot(this.destinationPath(this.oneTimeConfig.projectname));*/
  }

  writing() {
    const oConfig = this.config.getAll();

    this.sourceRoot(path.join(__dirname, "templates"));

    glob.sync("**", {
        cwd: this.sourceRoot(),
        nodir: true
    }).forEach((file) => {
        const sOrigin = this.templatePath(file);
        const sTarget = this.destinationPath(file.replace(/^_/, "").replace(/\/_/, "/"));

        this.fs.copyTpl(sOrigin, sTarget, oConfig);
    });


    /*this.fs.copyTpl(
      this.templatePath(__dirname + '/templates/uimodule/webapp/component.js'),
      this.destinationPath('component.js'),
      this.oneTimeConfig
    );*/
  }

  /*install() {
    this.installDependencies();
  }*/
};
