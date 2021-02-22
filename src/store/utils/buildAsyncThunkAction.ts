import { Action, Dispatch } from "redux";

/**
 * Useful module to help to create asynchronous thunks using Redux
 * @param handler The async method to handle data before update the state
 * @template P The handler's input parameters.
 * @template A The action props. Ex: type, payload, ...
 * 
 * Example:
 *  interface InputProps {
      userId: number;
    }

    export interface GetUserAction {
      type: typeof GET_USER;
      payload: {
        name: string;
        age: number;
      };
    }

    const getUser = buildThunkAction<InputProps, GetUserAction>(
      async ({ userId }, dispatch) => {
        // dispatch other action...
        dispatch(loadingStatus(true))

        // async call api to get data
        console.log(userId);

        const fakeDataFromServer = { name: "Julious", age: 30 };

        return {
          type: SIGN_IN,
          payload: fakeDataFromServer,
        };
      }
    );

    // then....
    dispatch(getUser({ userId: 1 });)
 */

function buildAsyncThunkAction<P, A extends Action>(
  /**
   * Action handler
   * @param input The handler's input parameters.
   * @param dispatch The Redux's thunk dispatch method
   */
  handler: (input: P, dispatch: Dispatch<A>) => Promise<A>
): (input: P) => (dispatch: Dispatch<A>) => Promise<A> {
  return (input: P) => {
    return async (dispatch: Dispatch<A>): Promise<A> => {
      const actionData = await handler(input, dispatch);
      return dispatch(actionData);
    };
  };
}

export default buildAsyncThunkAction;
