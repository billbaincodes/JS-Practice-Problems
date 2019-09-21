import os

os.chdir('./problems')
os.mkdir('XX_problem')
os.chdir('./XX_problem')

prompt = open('prompt.md', 'w+')
prompt.write("# Title")
prompt.write("\n")
prompt.write("\n")
prompt.write("## Input / Output")
prompt.write("\n")
prompt.close

chaiTest = open('test.js', 'w+')
chaiTest.write("const chai = require('chai');\n")
chaiTest.write("const problem = require('./problem.js');\n")
chaiTest.write("\n")
chaiTest.write("describe('problem name', () => {\n")
chaiTest.write("  it('should pass', () => {\n")
chaiTest.write("    let result = problem();\n")
chaiTest.write("    chai.expect(result).to\n")
chaiTest.write("  });\n")
chaiTest.write("});\n")
chaiTest.write("\n")
chaiTest.close

problem = open('problem.js', 'w+')
problem.write("\n")
problem.write('const problem = () => {\n')
problem.write('  // Your code here\n')
problem.write('\n')
problem.write('}\n')
problem.write('\n')
problem.write('module.exports = problem;\n')
problem.close
