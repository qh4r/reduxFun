export default function ({dispatch}) {
  return next =>
    action => {
      console.log(`Registered action: ${action.type}`);
      next(action);
    }
}