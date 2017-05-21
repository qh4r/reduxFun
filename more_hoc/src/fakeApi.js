const data = {
  user: {
    name: "Rafał",
    nickname: "qh4r",
    age: 25
  }
};

export const fakeApi = {
  getUser() {
    return new Promise((res) => {
      setTimeout(() => res(data.user), 1000);
    })
  }
}