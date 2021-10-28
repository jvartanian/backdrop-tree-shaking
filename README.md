Test Ionic application to showcase tree-shaking issue with Popovers and their backdrop

## Steps to reproduce
1. `npm install`
2. `npm install -g serve`
3. `npm run build`
4. `serve -s build`
5. Click the button to open the Popover, notice that no backdrop appears, and that the popover cannot be closed by clicking outside of it.

When running the application using `npm run start`, everything works as expected. 

There is a `temp-fix` branch that contains one change: a `console.log(IonBackdrop)` statement, which prevents the backdrop 
component from being marked as dead code. On this branch, the popover works as expected.
