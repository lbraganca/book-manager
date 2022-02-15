import { v1 } from "uuid";

export default function bookReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_BOOK":
      return [...state, { ...payload, id: v1() }];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== payload);
    default:
      throw new Error(`Action '${type}' not recognized.`);
  }
}
