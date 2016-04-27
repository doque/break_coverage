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

I've forked [nyc](https://github.com/bcoe/nyc/issues/236) and introduced a fix that strips duplicate extensions.
You can see it working here:

```
git checkout fix_in_fork
npm run test:cov
```
