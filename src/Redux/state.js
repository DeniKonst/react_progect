let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How are you?", likeCount: 0 },
      { id: 2, message: "It is my first post", likeCount: 22 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Denis" },
      { id: 2, name: "Dima" },
      { id: 3, name: "Max" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" },
      { id: 3, message: "Yo" },
    ],
  },
};
export default state;
