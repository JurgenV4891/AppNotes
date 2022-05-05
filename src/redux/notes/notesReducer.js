import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  notes: [
    {
      title: "Forum CNRS",
      subtitle: "Comment signaler des objets trouvés",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: uuidv4(),
    },
    {
      title: "Néolithique",
      subtitle: "Période exacte ???",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: uuidv4(),
    },
    {
      title: "CNRS",
      subtitle: "Demande d'expertise",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      id: uuidv4(),
    },
  ],
};

export default function notesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDNOTE": {
      const newNotesArr = [...state.notes];
      newNotesArr.push(action.payload);
      return {
        notes: newNotesArr,
      };
    }

    case "UPDATENOTE": {
      const newNotesArr = [...state.notes];
      const newObj = action.payload;

      const index = newNotesArr.findIndex((obj) => obj.id === newObj.id);
      newNotesArr.splice(index, 1, newObj);

      return {
        notes: newNotesArr,
      };
    }

    case "DELETENOTE": {
      const newNotesArr = [...state.notes].filter(
        (note) => note.id !== action.payload
      );
      return {
        notes: newNotesArr,
      };
    }
  }

  return state;
}
