# break_coverage

Breaks code coverage reports.

Run

```
npm install

npm test          # will run successfully

npm run test:cov  # will fail, due to duplicate '.js' extension


git checkout working_coverage_reports

npm run test:cov  # will successfully report coverage
```
