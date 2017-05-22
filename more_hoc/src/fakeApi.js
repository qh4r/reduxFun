const data = {
  users: [{
    name: "Rafał",
    nickname: "qh4r",
    age: 25
  }, {
    name: "Tomasz",
    nickname: "krzyż",
    age: 32
  }, {
    name: "Asia",
    nickname: "yoshiko",
    age: 16
  },{
    name: "Janusz",
    nickname: "jj",
    age: 45
  },{
    name: "Baśka",
    nickname: "duża",
    age: 34
  }]
};

export const fakeApi = {
  getUser() {
    return new Promise((res) => {
      setTimeout(() => res(data.users[0]), 1000);
    })
  },
  getUsersNow(){
    return [...data.users]
  }
}